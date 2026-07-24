"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AuthShell from "@/components/auth/AuthShell";
import { supabaseBrowser } from "@/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(""); setLoading(true);
    const f = new FormData(e.currentTarget);
    const email = String(f.get("email") || "");
    const password = String(f.get("password") || "");
    const useMock = process.env.NEXT_PUBLIC_USE_MOCK !== "false";
    try {
      if (!useMock) {
        const sb = supabaseBrowser();
        const { error } = await sb.auth.signInWithPassword({ email, password });
        if (error) throw error;
      }
      let peran = "pejuang";
      try { peran = localStorage.getItem("tc_peran") || "pejuang"; } catch {}
      router.push(`/dashboard?peran=${peran}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Email atau kata sandi salah.");
      setLoading(false);
    }
  };

  return (
    <AuthShell>
      <div className="tc-auth2-head">
        <h1>Masuk</h1>
        <p className="tc-auth2-sub">Lanjutkan mengelola perangkat dan mimpimu.</p>
      </div>
      <form className="tc-auth2-form" onSubmit={onSubmit}>
        <div className="tc-field"><label>Email</label><input name="email" type="email" required placeholder="nama@email.com" /></div>
        <div className="tc-field"><label>Kata sandi</label><input name="password" type="password" required placeholder="Kata sandi" /></div>
        {error && <div className="tc-form-error">{error}</div>}
        <button className="tc-btn tc-btn-gold tc-btn-block" disabled={loading}>{loading ? "Memproses…" : "Masuk"}</button>
      </form>
      <p className="tc-auth2-alt">Belum punya akun? <Link href="/register">Daftar</Link></p>
    </AuthShell>
  );
}
