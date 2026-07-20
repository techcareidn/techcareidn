import Link from "next/link";
import { redirect } from "next/navigation";
import { supabaseServer } from "@/lib/supabase/server";
import { DeviceForm } from "./sections/DeviceForm";
import { DreamForm } from "./sections/DreamForm";
import { ProfileForm } from "./sections/ProfileForm";

export default async function DashboardPage() {
  const supabase = await supabaseServer();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) redirect("/login");

  const [{ data: profile }, { data: devices }, { data: dreams }, { data: applications }] = await Promise.all([
    supabase.from("profiles").select("*").eq("id", auth.user.id).single(),
    supabase.from("devices").select("*").eq("owner", auth.user.id).order("created_at", { ascending: false }),
    supabase.from("dreams").select("*").eq("user_id", auth.user.id).order("created_at", { ascending: false }),
    supabase.from("applications").select("*").eq("borrower", auth.user.id)
  ]);

  return (
    <main className="dashboard">
      <div className="dashGrid">
        <aside className="side"><Link href="/" className="brand"><span className="logo">⚡</span>TechCareIDN</Link><br/><a href="#profil">Profil</a><a href="#perangkat">Perangkat</a><a href="#mimpi">Dreams</a><a href="/">Landing page</a></aside>
        <section className="main">
          <div className="sectionHead"><div><h2>Halo, {profile?.nama ?? auth.user.email}</h2><p>Dashboard MVP untuk mengelola data utama TechCareIDN.</p></div></div>
          <div className="stats"><div className="stat"><strong>{devices?.length ?? 0}</strong><p>Perangkat</p></div><div className="stat"><strong>{dreams?.length ?? 0}</strong><p>Dreams</p></div><div className="stat"><strong>{applications?.length ?? 0}</strong><p>Pengajuan</p></div><div className="stat"><strong>{profile?.role ?? "-"}</strong><p>Role</p></div></div>
          <div id="profil" className="card"><h3>Lengkapi Profil</h3><ProfileForm userId={auth.user.id} profile={profile} /></div>
          <div id="perangkat" className="card"><h3>Tambah Perangkat</h3><DeviceForm userId={auth.user.id} /></div>
          <div className="card"><h3>Perangkat Saya</h3><div className="list">{(devices ?? []).map((d:any)=><div className="deviceRow" key={d.id}><div className="thumb">{d.foto ? "🖼️" : "💻"}</div><div><strong>{d.nama}</strong><p className="muted">{d.kategori} • {d.status} • {d.gratis ? "Gratis" : `Rp${d.harga}`}</p></div></div>)}</div></div>
          <div id="mimpi" className="card"><h3>Tambah Dream</h3><DreamForm userId={auth.user.id} /></div>
          <div className="card"><h3>Dreams Saya</h3><div className="list">{(dreams ?? []).map((d:any)=><div className="deviceRow" key={d.id}><div className="thumb">🌟</div><div><strong>{d.judul_mimpi}</strong><p className="muted">{d.status} • Target: {d.target ?? "belum diisi"}</p></div></div>)}</div></div>
        </section>
      </div>
    </main>
  );
}
