"use client";
import { useState } from "react";
import Link from "next/link";
import Shell from "@/components/Shell";
import Icon from "@/components/Icon";
import { supabaseBrowser } from "@/lib/supabase/client";

export default function RegisterPage() {
  const [peran, setPeran] = useState<"bintang" | "pejuang">("pejuang");
  const [msg, setMsg] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    try {
      const sb = supabaseBrowser();
      const { error } = await sb.auth.signUp({
        email: String(f.get("email")),
        password: String(f.get("password")),
        options: { data: { nama: String(f.get("nama")), peran } }
      });
      setMsg(error ? error.message : "Cek emailmu untuk verifikasi akun.");
    } catch {
      setMsg("Supabase belum dikonfigurasi (isi .env).");
    }
  };

  return (
    <Shell>
      <section className="tc-auth">
        <div className="tc-auth-card">
          <h1>Gabung TechCareIDN</h1>
          <p className="tc-auth-sub">Pilih peranmu. Semua akun bisa upload di Marketplace setelah mendaftar.</p>

          <div className="tc-toggle tc-toggle-lg">
            <button type="button" className={peran === "pejuang" ? "active" : ""} onClick={() => setPeran("pejuang")}>
              <Icon name="user" size={18} /> Pejuang
            </button>
            <button type="button" className={peran === "bintang" ? "active" : ""} onClick={() => setPeran("bintang")}>
              <Icon name="star" size={18} /> Bintang
            </button>
          </div>
          <p className="tc-role-hint">
            {peran === "pejuang"
              ? "Pejuang: sisi yang bertransaksi — mengajukan pinjam perangkat untuk mengejar mimpi."
              : "Bintang: pemilik perangkat — menyumbang atau menyewakan perangkat ke Marketplace."}
          </p>

          <form onSubmit={onSubmit} className="tc-auth-form">
            <input name="nama" placeholder="Nama lengkap" required />
            <input name="email" type="email" placeholder="Email" required />
            <input name="password" type="password" placeholder="Kata sandi" required />
            <button className="tc-btn tc-btn-gold tc-btn-block">Daftar sebagai {peran === "pejuang" ? "Pejuang" : "Bintang"}</button>
          </form>
          {msg && <div className="tc-form-note">{msg}</div>}
          <p className="tc-auth-alt">Sudah punya akun? <Link href="/login">Masuk</Link></p>
        </div>
      </section>
    </Shell>
  );
}
