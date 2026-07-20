"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { UploadToSupabase } from "@/components/UploadToSupabase";
import { supabaseBrowser } from "@/lib/supabase/client";

export function ProfileForm({ userId, profile }: { userId: string; profile: any }) {
  const router = useRouter();
  const supabase = supabaseBrowser();
  const [form, setForm] = useState({
    nama: profile?.nama ?? "",
    role: profile?.role ?? "Pejuang",
    universitas: profile?.universitas ?? "",
    lokasi: profile?.lokasi ?? "",
    foto: profile?.foto ?? "",
    ktm: profile?.ktm ?? ""
  });

  async function save(e: React.FormEvent) {
    e.preventDefault();
    const { error } = await supabase.from("profiles").update(form).eq("id", userId);
    if (error) return alert(error.message);
    router.refresh();
  }

  return <form className="form" onSubmit={save}><label>Nama<input className="input" value={form.nama} onChange={e=>setForm({...form,nama:e.target.value})}/></label><label>Role<select className="select" value={form.role} onChange={e=>setForm({...form,role:e.target.value})}><option>Pejuang</option><option>Bintang</option></select></label><label>Universitas<input className="input" value={form.universitas} onChange={e=>setForm({...form,universitas:e.target.value})}/></label><label>Lokasi<input className="input" placeholder="Contoh: Jakarta / -6.2,106.8" value={form.lokasi} onChange={e=>setForm({...form,lokasi:e.target.value})}/></label><UploadToSupabase bucket="user-photos" label="Upload foto profil" onUploaded={(url)=>setForm({...form,foto:url})}/><UploadToSupabase bucket="user-ktm" label="Upload KTM" onUploaded={(url)=>setForm({...form,ktm:url})}/><button className="btn">Simpan Profil</button></form>;
}
