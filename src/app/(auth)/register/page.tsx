"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { supabaseBrowser } from "@/lib/supabase/client";

export default function RegisterPage() {
  const router = useRouter();
  const supabase = supabaseBrowser();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ email: "", password: "", nama: "", role: "Pejuang", universitas: "" });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({ email: form.email, password: form.password });
    if (error) { setLoading(false); return alert(error.message); }

    if (data.user?.id) {
      const { error: profileError } = await supabase.from("profiles").insert({
        id: data.user.id,
        email: form.email,
        nama: form.nama,
        role: form.role,
        universitas: form.universitas,
        status: "active"
      });
      if (profileError) alert(profileError.message);
    }

    setLoading(false);
    router.push("/dashboard");
  }

  return <main className="authShell"><form className="authCard form" onSubmit={onSubmit}><h1 style={{fontSize:34,margin:0}}>Daftar TechCareIDN</h1><p className="muted">Buat akun Bintang atau Pejuang.</p><label>Nama<input className="input" value={form.nama} onChange={e=>setForm({...form,nama:e.target.value})} required /></label><label>Email<input className="input" type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required /></label><label>Password<input className="input" type="password" minLength={6} value={form.password} onChange={e=>setForm({...form,password:e.target.value})} required /></label><label>Role<select className="select" value={form.role} onChange={e=>setForm({...form,role:e.target.value})}><option>Pejuang</option><option>Bintang</option></select></label><label>Universitas<input className="input" value={form.universitas} onChange={e=>setForm({...form,universitas:e.target.value})} /></label><button className="btn" disabled={loading}>{loading ? "Mendaftarkan..." : "Daftar"}</button><p className="muted">Sudah punya akun? <Link href="/login">Masuk</Link></p></form></main>;
}
