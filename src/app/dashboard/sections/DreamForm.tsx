"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { supabaseBrowser } from "@/lib/supabase/client";

export function DreamForm({ userId }: { userId: string }) {
  const router = useRouter();
  const supabase = supabaseBrowser();
  const [form, setForm] = useState({ judul_mimpi: "", deskripsi: "", target: "", status: "sedang_berjuang" });

  async function save(e: React.FormEvent) {
    e.preventDefault();
    const { error } = await supabase.from("dreams").insert({ ...form, user_id: userId, target: form.target || null });
    if (error) return alert(error.message);
    setForm({ judul_mimpi: "", deskripsi: "", target: "", status: "sedang_berjuang" });
    router.refresh();
  }

  return <form className="form" onSubmit={save}><label>Judul mimpi<input className="input" value={form.judul_mimpi} onChange={e=>setForm({...form,judul_mimpi:e.target.value})} required/></label><label>Deskripsi<textarea className="textarea" value={form.deskripsi} onChange={e=>setForm({...form,deskripsi:e.target.value})}/></label><label>Target<input className="input" type="date" value={form.target} onChange={e=>setForm({...form,target:e.target.value})}/></label><label>Status<select className="select" value={form.status} onChange={e=>setForm({...form,status:e.target.value})}><option value="sedang_berjuang">sedang berjuang</option><option value="bertumbuh">bertumbuh</option><option value="berhasil">berhasil</option></select></label><button className="btn">Tambah Dream</button></form>;
}
