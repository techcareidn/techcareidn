"use client";
import { useState } from "react";
import Link from "next/link";
import AuthShell from "@/components/auth/AuthShell";
import type { Peran } from "@/lib/types";

export default function RegisterPage() {
  const [peran, setPeran] = useState<Peran>("pejuang");
  const [status, setStatus] = useState<"idle" | "loading" | "sent">("idle");
  const [error, setError] = useState("");
  const [devUrl, setDevUrl] = useState<string>("");
  const [email, setEmail] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(""); setStatus("loading");
    const f = new FormData(e.currentTarget);
    const payload = {
      nama: String(f.get("nama") || ""),
      universitas: String(f.get("universitas") || ""),
      email: String(f.get("email") || ""),
      password: String(f.get("password") || ""),
      peran
    };
    setEmail(payload.email);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        setError(data.error || "Gagal mendaftar, coba lagi.");
        setStatus("idle");
        return;
      }
      try { localStorage.setItem("tc_peran", payload.peran); } catch {}
      if (data.dev && data.verifyUrl) setDevUrl(data.verifyUrl);
      setStatus("sent");
    } catch {
      setError("Tidak dapat terhubung ke server.");
      setStatus("idle");
    }
  };

  if (status === "sent") {
    return (
      <AuthShell>
        <div className="tc-auth2-head">
          <span className="tc-verify-badge">✉ Verifikasi terkirim</span>
          <h1>Cek email kamu</h1>
          <p className="tc-auth2-sub">Kami mengirim tautan konfirmasi ke <b>{email || "emailmu"}</b>. Klik tautannya untuk mengaktifkan akun dan langsung masuk ke dashboard.</p>
        </div>
        {devUrl ? (
          <div className="tc-verify-dev">
            <p>Mode demo (Gmail/Supabase belum dihubungkan). Klik untuk simulasikan verifikasi:</p>
            <a className="tc-btn tc-btn-gold tc-btn-block" href={devUrl}>Simulasikan verifikasi &amp; masuk dashboard</a>
          </div>
        ) : (
          <p className="tc-auth2-alt">Belum menerima email? Cek folder spam, atau <button className="tc-linkbtn" onClick={() => setStatus("idle")}>daftar ulang</button>.</p>
        )}
      </AuthShell>
    );
  }

  return (
    <AuthShell>
      <div className="tc-auth2-head">
        <h1>Gabung TechCareIDN</h1>
        <p className="tc-auth2-sub">Tempat merawat, meminjam, dan mewujudkan mimpi lewat teknologi.</p>
      </div>

      <div className="tc-role-switch">
        <button type="button" className={peran === "pejuang" ? "active" : ""} onClick={() => setPeran("pejuang")}>
          <b>Pejuang</b><span>Meminjam perangkat</span>
        </button>
        <button type="button" className={peran === "bintang" ? "active" : ""} onClick={() => setPeran("bintang")}>
          <b>Bintang</b><span>Meminjamkan perangkat</span>
        </button>
      </div>

      <form className="tc-auth2-form" onSubmit={onSubmit}>
        <div className="tc-field"><label>Nama lengkap</label><input name="nama" required placeholder="cth: Rangga Saputra" /></div>
        <div className="tc-field"><label>Universitas / sekolah</label><input name="universitas" required placeholder="cth: SMK Negeri 2 Yogyakarta" /></div>
        <div className="tc-field"><label>Email</label><input name="email" type="email" required placeholder="nama@email.com" /></div>
        <div className="tc-field"><label>Kata sandi</label><input name="password" type="password" required minLength={8} placeholder="Minimal 8 karakter" /></div>
        {error && <div className="tc-form-error">{error}</div>}
        <button className="tc-btn tc-btn-gold tc-btn-block" disabled={status === "loading"}>
          {status === "loading" ? "Memproses…" : `Daftar sebagai ${peran === "bintang" ? "Bintang" : "Pejuang"}`}
        </button>
        <p className="tc-verify-note">Setelah daftar, kami kirim email verifikasi lewat Gmail. Konfirmasi dulu, lalu kamu diarahkan ke dashboard.</p>
      </form>

      <p className="tc-auth2-alt">Sudah punya akun? <Link href="/login">Masuk di sini</Link></p>
    </AuthShell>
  );
}
