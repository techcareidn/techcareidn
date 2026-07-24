import Shell from "@/components/Shell";
import RoomHeader from "@/components/RoomHeader";
import ServiceCard from "@/components/cards/ServiceCard";
import ArticleCard from "@/components/cards/ArticleCard";
import { getArticles } from "@/lib/data/queries";

export const metadata = { title: "Dokter Gadget — TechCareIDN" };

export default async function DokterGadgetPage() {
  const articles = await getArticles(); // semua artikel
  const service = articles.find((a) => a.isService);
  const rest = articles.filter((a) => !a.isService);

  return (
    <Shell>
      <RoomHeader
        eyebrow="Ruang 1 · Dokter Gadget"
        title="Cek, rawat, dan catat kondisi perangkat"
        desc="Artikel perawatan dari teknisi, plus jasa servis gadget terpercaya untuk perangkatmu."
        icon="repair" theme="s1"
      />

      <section className="tc-section">
        <div className="tc-wrap">
          {service && (
            <div className="tc-svc-banner">
              <ServiceCard a={service} />
              <div className="tc-svc-banner-copy">
                <span className="tc-eyebrow">Layanan Unggulan</span>
                <h2>Serahkan perbaikan ke ahlinya</h2>
                <p>Teknisi terverifikasi TechCareIDN siap membenarkan gadgetmu: laptop, HP, tablet, hingga printer. Diagnosa gratis, estimasi transparan, dan garansi 30 hari untuk setiap perbaikan.</p>
                <ul className="tc-role-list">
                  <li>Ambil-antar untuk area tertentu</li>
                  <li>Sparepart original & bergaransi</li>
                  <li>Update progres perbaikan real-time</li>
                </ul>
              </div>
            </div>
          )}

          <h2 className="tc-block-title">Artikel perawatan</h2>
          <div className="tc-grid">
            {rest.map((a, i) => <ArticleCard key={a.id} a={a} rank={i + 1} />)}
          </div>
        </div>
      </section>
    </Shell>
  );
}
