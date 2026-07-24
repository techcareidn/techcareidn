import Link from "next/link";
import Icon from "../Icon";
import { rupiah } from "@/lib/format";
import type { Device } from "@/lib/types";

const STATUS_LABEL: Record<Device["status"], string> = {
  tersedia: "Tersedia",
  dipinjam: "Dipinjam",
  maintenance: "Perawatan"
};

export default function DeviceCard({ d }: { d: Device }) {
  const bisaPinjam = d.status === "tersedia";
  return (
    <div className="tc-dev-card">
      <div className="tc-dev-thumb">
        <span className={d.gratis ? "tc-badge-free" : "tc-badge-paid"}>{d.gratis ? "GRATIS" : "SEWA"}</span>
        <span className="tc-badge-status">{STATUS_LABEL[d.status]}</span>
        <Icon name="laptop" size={64} />
      </div>
      <div className="tc-dev-body">
        <div className="tc-dev-owner">
          <span className="tc-star-chip"><Icon name="star" size={12} /> Bintang</span>
          {d.ownerNama}
        </div>
        <h4>{d.nama}</h4>
        <p className="tc-dev-spec">{d.spesifikasi} · {d.minus}</p>
        <div className="tc-dev-foot">
          <div>
            <div className={`tc-dev-price ${d.gratis ? "free" : ""}`}>{rupiah(d.harga)}</div>
            <div className="tc-dev-loc"><Icon name="map-pin" size={12} /> {d.lokasi}</div>
          </div>
          <Link href={`/marketplace/${d.id}`} className="tc-btn-pinjam" aria-disabled={!bisaPinjam}>
            {bisaPinjam ? "Pinjam" : "Lihat"}
          </Link>
        </div>
      </div>
    </div>
  );
}
