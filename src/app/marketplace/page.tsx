import Link from "next/link";
import Shell from "@/components/Shell";
import RoomHeader from "@/components/RoomHeader";
import DeviceCard from "@/components/cards/DeviceCard";
import Icon from "@/components/Icon";
import { getDevices } from "@/lib/data/queries";

export const metadata = { title: "Marketplace — TechCareIDN" };

export default async function MarketplacePage() {
  const devices = await getDevices(); // semua perangkat

  return (
    <Shell>
      <RoomHeader
        eyebrow="Ruang 2 · Marketplace"
        title="Katalog pinjam perangkat murah atau gratis"
        desc="Perangkat dari para Bintang. Daftar sebagai Pejuang untuk mulai mengajukan pinjam."
        icon="laptop" theme="s3"
      />

      <section className="tc-section">
        <div className="tc-wrap">
          <div className="tc-market-bar">
            <div className="tc-chips">
              <span className="tc-chip active">Semua</span>
              <span className="tc-chip">Gratis</span>
              <span className="tc-chip">Sewa</span>
              <span className="tc-chip">Laptop</span>
              <span className="tc-chip">Smartphone</span>
              <span className="tc-chip">Tablet</span>
            </div>
            <Link href="/dashboard" className="tc-btn tc-btn-gold">
              <Icon name="upload" size={16} /> Upload perangkat
            </Link>
          </div>

          <div className="tc-grid">
            {devices.map((d) => <DeviceCard key={d.id} d={d} />)}
          </div>
        </div>
      </section>
    </Shell>
  );
}
