// POST /api/register — daftar akun TechCareIDN (double opt-in ala knj-web).
// Body: { nama, universitas, email, password, peran }.
// - Bila Supabase + Gmail dikonfigurasi: simpan profil 'unverified' + token,
//   lalu kirim email verifikasi. Pengguna klik link → /api/verify.
// - Bila belum (mode dev/mock): kembalikan verifyUrl agar alur tetap bisa dicoba.
import { NextResponse } from "next/server";
import { randomBytes } from "node:crypto";
import { supabaseAdmin } from "@/lib/supabase/admin";
import { isGmailConfigured, sendEmail } from "@/lib/gmail";
import { buildVerifyEmail } from "@/lib/mail/templates";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function siteUrl(): string {
  return (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Body tidak valid." }, { status: 400 });
  }

  const nama = String(body.nama || "").trim();
  const universitas = String(body.universitas || "").trim();
  const email = String(body.email || "").trim().toLowerCase();
  const password = String(body.password || "");
  const peran = body.peran === "bintang" ? "bintang" : "pejuang";

  if (!nama || !universitas) return NextResponse.json({ error: "Nama & universitas wajib diisi." }, { status: 400 });
  if (!isValidEmail(email)) return NextResponse.json({ error: "Alamat email tidak valid." }, { status: 400 });
  if (password.length < 8) return NextResponse.json({ error: "Kata sandi minimal 8 karakter." }, { status: 400 });

  const token = randomBytes(24).toString("hex");
  const params = new URLSearchParams({ token, peran, nama });
  const verifyUrl = `${siteUrl()}/api/verify?${params.toString()}`;

  const sb = supabaseAdmin();
  const gmailReady = isGmailConfigured();

  // Mode dev/mock — backend belum lengkap: balikan verifyUrl untuk simulasi.
  if (!sb || !gmailReady) {
    return NextResponse.json({ success: true, dev: true, verifyUrl, peran });
  }

  try {
    // Simpan/mutakhirkan profil dengan status 'unverified' + token 24 jam.
    const expires = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();
    const { error } = await sb.from("profiles").upsert(
      { email, nama, universitas, peran, status: "unverified", token, token_expires_at: expires },
      { onConflict: "email" }
    );
    if (error) throw error;
    // Buat akun auth Supabase (opsional; abaikan bila sudah ada).
    await sb.auth.admin.createUser({ email, password, email_confirm: false }).catch(() => {});
    await sendEmail(email, "Konfirmasi akun TechCareIDN", buildVerifyEmail({ nama, verifyUrl, peran }));
    return NextResponse.json({ success: true, dev: false, peran });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Gagal mendaftar.";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
