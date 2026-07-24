// GET /api/verify?token=...&peran=...&nama=... — konfirmasi akun, lalu balik ke dashboard.
// Meniru alur verifikasi knj-web: set status 'verified', hapus token, redirect.
import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function siteUrl(): string {
  return (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");
}

export async function GET(req: NextRequest) {
  const base = siteUrl();
  const token = req.nextUrl.searchParams.get("token");
  const peran = req.nextUrl.searchParams.get("peran") === "bintang" ? "bintang" : "pejuang";
  if (!token) return NextResponse.redirect(`${base}/login?verify=invalid`);

  const sb = supabaseAdmin();

  // Mode dev/mock: langsung anggap terverifikasi → masuk dashboard.
  if (!sb) {
    return NextResponse.redirect(`${base}/dashboard?verified=1&peran=${peran}`);
  }

  const { data, error } = await sb
    .from("profiles")
    .update({ status: "verified", token: null, token_expires_at: null, verified_at: new Date().toISOString() })
    .eq("token", token)
    .eq("status", "unverified")
    .gt("token_expires_at", new Date().toISOString())
    .select()
    .single();

  if (error || !data) return NextResponse.redirect(`${base}/login?verify=invalid`);
  const finalPeran = (data as { peran?: string }).peran === "bintang" ? "bintang" : "pejuang";
  return NextResponse.redirect(`${base}/dashboard?verified=1&peran=${finalPeran}`);
}
