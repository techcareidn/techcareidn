"use client";
import { useState } from "react";
import Link from "next/link";
import Shell from "@/components/Shell";
import { supabaseBrowser } from "@/lib/supabase/client";

export default function LoginPage() {
  const [msg, setMsg] = useState("");
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    try {
      const sb = supabaseBrowser();
      const { error } = await sb.auth.signInWithPassword({
        email: String(f.get("email")),
        password: String(f.get("password"))
      });
      setMsg(error ? error.message : "Berhasil masuk!");
    } catch {
      setMsg("Supabase belum dikonfigurasi (isi .env).");
    }
  };
  return (
    <Shell>
      <section className="tc-auth">
        <div className="tc-auth-card">
          <h1>Masuk</h1>
          <p className="tc-auth-sub">Selamat datang kembali di TechCareIDN.</p>
          <form onSubmit={onSubmit} className="tc-auth-form">
            <input name="email" type="email" placeholder="Email" required />
            <input name="password" type="password" placeholder="Kata sandi" required />
            <button className="tc-btn tc-btn-primary tc-btn-block">Masuk</button>
          </form>
          {msg && <div className="tc-form-note">{msg}</div>}
          <p className="tc-auth-alt">Belum punya akun? <Link href="/register">Gabung gratis</Link></p>
        </div>
      </section>
    </Shell>
  );
}
