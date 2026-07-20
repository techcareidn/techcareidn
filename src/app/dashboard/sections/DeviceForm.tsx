"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { UploadToCloudinary } from "@/components/UploadToCloudinary";
import { supabaseBrowser } from "@/lib/supabase/client";

export function DeviceForm({ userId }: { userId: string }) {
  const router = useRouter();
  const supabase = supabaseBrowser();
  const [form, setForm] = useState({ nama: "", kategori: "Laptop", foto: "", spesifikasi: "", minus: "", status: "tersedia", harga: 0, gratis: true, lokasi: "" });

  async function save(e: React.FormEvent) {
    e.preventDefault();
    const { error } = await supabase.from("devices").insert({ ...form, owner: userId, harga: Number(form.harga) });
    if (error) return alert(error.message);
    setForm({ nama: "", kategori: "Laptop", foto: "", spesifikasi: "", minus: "", status: "tersedia", harga: 0, gratis: true, lokasi: "" });
    router.refresh();
  }

  return <form className="form" onSubmit={save}><label>Nama perangkat<input className="input" value={form.nama} onChange={e=>setForm({...form,nama:e.target.value})} required/></label><label>Kategori<input className="input" value={form.kategori} onChange={e=>setForm({...form,kategori:e.target.value})}/></label><UploadToCloudinary onUploaded={(url)=>setForm({...form,foto:url})}/><label>Spesifikasi<textarea className="textarea" value={form.spesifikasi} onChange={e=>setForm({...form,spesifikasi:e.target.value})}/></label><label>Minus<textarea className="textarea" value={form.minus} onChange={e=>setForm({...form,minus:e.target.value})}/></label><label>Status<select className="select" value={form.status} onChange={e=>setForm({...form,status:e.target.value})}><option value="tersedia">tersedia</option><option value="dipinjam">dipinjam</option><option value="maintenance">maintenance</option></select></label><label>Harga<input className="input" type="number" value={form.harga} onChange={e=>setForm({...form,harga:Number(e.target.value)})}/></label><label><input type="checkbox" checked={form.gratis} onChange={e=>setForm({...form,gratis:e.target.checked})}/> Gratis</label><label>Lokasi<input className="input" value={form.lokasi} onChange={e=>setForm({...form,lokasi:e.target.value})}/></label><button className="btn">Tambah Perangkat</button></form>;
}
