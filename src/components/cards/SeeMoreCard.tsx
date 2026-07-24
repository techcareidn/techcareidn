import Link from "next/link";
import Icon from "../Icon";

// Kartu "Selengkapnya" di akhir rail → pindah ke halaman ruang.
export default function SeeMoreCard({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="tc-see-more-card" style={{ width: 220 }}>
      <div style={{ textAlign: "center", padding: 20 }}>
        <div style={{ marginBottom: 10, display: "flex", justifyContent: "center" }}>
          <Icon name="arrow-right" size={30} />
        </div>
        Selengkapnya
        <div className="sub">Lihat semua {label}</div>
      </div>
    </Link>
  );
}
