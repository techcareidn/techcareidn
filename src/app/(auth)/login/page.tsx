"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { supabaseBrowser } from "@/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();
  const supabase = supabaseBrowser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) return alert(error.message);
    router.push("/dashboard");
  }

  return <main className="authShell"><form className="authCard form" onSubmit={onSubmit}><h1 style={{fontSize:34,margin:0}}>Masuk</h1><p className="muted">Lanjutkan mengelola perangkat dan mimpi.</p><label>Email<input className="input" type="email" value={email} onChange={e=>setEmail(e.target.value)} required /></label><label>Password<input className="input" type="password" value={password} onChange={e=>setPassword(e.target.value)} required /></label><button className="btn" disabled={loading}>{loading ? "Masuk..." : "Masuk"}</button><p className="muted">Belum punya akun? <Link href="/register">Daftar</Link></p></form></main>;
}
