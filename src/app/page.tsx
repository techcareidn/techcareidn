import Link from "next/link";
import { Nav } from "@/components/Nav";
import { supabaseServer } from "@/lib/supabase/server";

export default async function HomePage() {
  const supabase = await supabaseServer();
  const { data: devices } = await supabase.from("devices").select("*").limit(3).order("created_at", { ascending: false });
  const { data: stories } = await supabase.from("stories").select("*").limit(3).order("created_at", { ascending: false });

  return (
    <>
      <Nav />
      <main>
        <section className="hero">
          <div className="container heroGrid">
            <div>
              <span className="eyebrow">Teknologi yang memberi kesempatan kedua</span>
              <h1>Pinjam perangkat. Kejar mimpi. Tumbuh bersama.</h1>
              <p className="lead">TechCareIDN menghubungkan Bintang yang punya perangkat layak pakai dengan Pejuang yang sedang mengejar pendidikan, karya, dan masa depan.</p>
              <div className="heroActions">
                <Link className="btn yellow" href="/register">Daftar sekarang</Link>
                <Link className="btn ghost" href="/#devices">Lihat perangkat</Link>
              </div>
            </div>
            <div className="heroCard">
              <div className="devicePreview">
                <div className="deviceIcon">💻</div>
                <h3>Laptop belajar tersedia</h3>
                <p className="muted">Status: <span className="status ok">tersedia</span></p>
                <p className="muted">Cocok untuk kuliah, desain ringan, dan kelas online.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="cara-kerja">
          <div className="container">
            <div className="sectionHead"><div><h2>Cara kerjanya sederhana</h2><p>Murah untuk dibangun, mudah dipakai, dan bisa berkembang pelan-pelan.</p></div></div>
            <div className="grid3">
              <div className="card"><div className="iconBubble">🪪</div><h3>Daftar & verifikasi</h3><p>Pejuang upload foto/KTM via Supabase Storage. Bintang bisa melengkapi profil dan lokasi.</p></div>
              <div className="card"><div className="iconBubble">📦</div><h3>Upload perangkat</h3><p>Foto perangkat masuk Cloudinary agar katalog cepat. Data perangkat tersimpan di Supabase.</p></div>
              <div className="card"><div className="iconBubble">🌟</div><h3>Bangun mimpi</h3><p>Setiap Pejuang punya tabel dreams dan stories untuk Wall of Dreams.</p></div>
            </div>
          </div>
        </section>

        <section className="section soft" id="devices">
          <div className="container">
            <div className="sectionHead"><div><h2>Perangkat terbaru</h2><p>Katalog bisa langsung membaca database Supabase.</p></div><Link href="/dashboard" className="btn">Tambah perangkat</Link></div>
            <div className="grid3">
              {(devices ?? []).map((d: any) => <div className="card" key={d.id}><div className="thumb">{d.foto ? "🖼️" : "💻"}</div><h3>{d.nama}</h3><p>{d.spesifikasi || "Belum ada spesifikasi."}</p><span className={`status ${d.status === "tersedia" ? "ok" : "warn"}`}>{d.status}</span></div>)}
              {(!devices || devices.length === 0) && <div className="card"><h3>Belum ada perangkat</h3><p>Masuk ke dashboard untuk menambahkan perangkat pertama.</p></div>}
            </div>
          </div>
        </section>

        <section className="section" id="dreams">
          <div className="container">
            <div className="sectionHead"><div><h2>Wall of Dreams</h2><p>Cerita perjuangan, pencapaian, dan mimpi yang sedang bertumbuh.</p></div></div>
            <div className="grid3">
              {(stories ?? []).map((s: any) => <div className="card" key={s.id}><div className="iconBubble">✨</div><h3>{s.judul}</h3><p>{s.cerita}</p><strong>{s.achievement}</strong></div>)}
              {(!stories || stories.length === 0) && <div className="card"><h3>Belum ada cerita</h3><p>Story pertama akan muncul di sini setelah dibuat.</p></div>}
            </div>
          </div>
        </section>
      </main>
      <footer className="footer"><div className="container">© TechCareIDN — dibangun dengan Next.js, Supabase, Cloudinary, Vercel.</div></footer>
    </>
  );
}
