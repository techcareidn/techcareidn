import Link from "next/link";
import Icon from "../Icon";
import { views } from "@/lib/format";
import type { Story } from "@/lib/types";

export default function StoryCard({ s }: { s: Story }) {
  return (
    <Link href={`/wall-of-dreams/${s.id}`} className="tc-story-card">
      <div className="tc-story-top">
        <span className="tc-story-av">{s.nama.charAt(0)}</span>
        <span>
          <b>{s.nama}</b>
          <span>{s.peran}</span>
        </span>
        <span className={`tc-status-chip ${s.status}`}>{s.statusLabel}</span>
      </div>
      <q>{s.kutipan}</q>
      <div className="tc-story-foot">
        <span>Wall of Dreams</span>
        <span className="views"><Icon name="eye" size={14} /> {views(s.views)}</span>
      </div>
    </Link>
  );
}
