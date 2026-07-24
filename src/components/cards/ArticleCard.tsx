import Link from "next/link";
import Icon from "../Icon";
import { views } from "@/lib/format";
import type { Article } from "@/lib/types";

export default function ArticleCard({ a, rank }: { a: Article; rank?: number }) {
  return (
    <Link href={`/dokter-gadget/${a.slug}`} className="tc-art-card">
      <div className={`tc-art-thumb ${a.cover}`}>
        {typeof rank === "number" && <span className="tc-pill">#{rank} Populer</span>}
        <Icon name="repair" size={46} />
      </div>
      <div className="tc-art-body">
        <h4>{a.title}</h4>
        <p>{a.excerpt}</p>
        <div className="tc-art-meta">
          <span>Dokter Gadget</span>
          <span className="views"><Icon name="eye" size={14} /> {views(a.views)}</span>
        </div>
      </div>
    </Link>
  );
}
