import Link from "next/link";
import Shell from "@/components/Shell";
import RoomHeader from "@/components/RoomHeader";
import Icon from "@/components/Icon";

export const metadata = { title: "Second Chance — TechCareIDN" };

const STEPS = [
  { t: "Daftar & ceritakan kebutuhanmu", d: "Buat akun Pejuang, jelaskan mimpi dan perangkat yang kamu butuhkan." },
  { t: "Ajukan perangkat dari Marketplace", d: "Pilih perangkat yang tersedia dari para Bintang, lalu ajukan pinjam." },
  { t: "Rawat lewat Dokter Gadget", d: "Jika perangkat bermasalah, gunakan artikel atau jasa servis untuk merawatnya." },
  { t: "Bagikan progres di Wall of Dreams", d: "Catat target, proses, dan pencapaianmu supaya menginspirasi yang lain." }
];

export default function SecondChancePage() {
  return (
    <Shell>
      <RoomHeader
        eyebrow="Ruang 4 · Second Chance"
        title="Kesempatan kedua lewat teknologi"
        desc="Alur bantuan yang menghubungkan keempat ruang menjadi satu perjalanan untuk Pejuang Mimpi."
        icon="sprout" theme="s2"
      />

      <section className="tc-section">
        <div className="tc-wrap">
          <div className="tc-steps">
            {STEPS.map((s, i) => (
              <div key={i} className="tc-step">
                <div className="tc-step-no">{i + 1}</div>
                <h4>{s.t}</h4>
                <p>{s.d}</p>
              </div>
            ))}
          </div>

          <div className="tc-news-box" style={{ marginTop: 36 }}>
            <div>
              <h3>Siap memulai kesempatan keduamu?</h3>
              <p>Bergabung gratis sebagai Pejuang, atau jadi Bintang untuk berbagi perangkat.</p>
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <Link href="/register" className="tc-btn tc-btn-gold">Jadi Pejuang</Link>
              <Link href="/register" className="tc-btn tc-btn-outline">Jadi Bintang <Icon name="arrow-right" size={15} /></Link>
            </div>
          </div>
        </div>
      </section>
    </Shell>
  );
}
