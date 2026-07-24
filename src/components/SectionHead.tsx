import Link from "next/link";
import Icon from "./Icon";

// Judul section + tautan "Selengkapnya" (pindah ke halaman ruang).
export default function SectionHead({
  eyebrow, title, desc, href, moreLabel = "Selengkapnya"
}: { eyebrow: string; title: string; desc?: string; href?: string; moreLabel?: string }) {
  return (
    <div className="tc-sec-head">
      <div className="tc-titles">
        <span className="tc-eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        {desc && <p>{desc}</p>}
      </div>
      {href && (
        <Link href={href} className="tc-see-more">
          {moreLabel} <Icon name="arrow-right" size={16} />
        </Link>
      )}
    </div>
  );
}
