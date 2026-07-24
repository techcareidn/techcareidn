import Link from "next/link";
import Icon from "../Icon";
import { rupiah } from "@/lib/format";
import type { Article } from "@/lib/types";

// Kartu jasa servis yang ditonjolkan di ruang Dokter Gadget.
export default function ServiceCard({ a }: { a: Article }) {
  return (
    <div className="tc-svc-card">
      <div className="tc-svc-ic"><Icon name="repair" size={28} /></div>
      <h4>{a.title}</h4>
      <p>{a.excerpt}</p>
      {a.hargaMulai != null && (
        <div className="tc-price-row">
          <b>{rupiah(a.hargaMulai)}</b>
          {a.hargaCoret != null && <s>{rupiah(a.hargaCoret)}</s>}
          <span style={{ fontSize: 12, opacity: 0.8 }}>/ perbaikan</span>
        </div>
      )}
      <Link href="/dokter-gadget/jasa-servis-gadget" className="tc-btn tc-btn-gold">
        Pesan Servis <Icon name="arrow-right" size={16} />
      </Link>
    </div>
  );
}
