"use client";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Icon from "./Icon";
import type { Slide } from "@/lib/types";

export default function HeroSlider({ slides }: { slides: Slide[] }) {
  const [i, setI] = useState(0);
  const n = slides.length;
  const go = useCallback((idx: number) => setI((idx + n) % n), [n]);

  useEffect(() => {
    if (n <= 1) return;
    const t = setInterval(() => setI((p) => (p + 1) % n), 6000);
    return () => clearInterval(t);
  }, [n]);

  return (
    <div className="tc-slider">
      {slides.map((s, idx) => (
        <Link href={s.href} key={idx} className={`tc-slide ${s.theme} ${idx === i ? "active" : ""}`}>
          <div className="tc-slide-body">
            <span className="tc-slide-badge">{s.room} · Postingan terbaru</span>
            <h2>{s.title}</h2>
            <p>{s.excerpt}</p>
            <div className="tc-slide-meta">
              <span className="tc-slide-avatar">{s.author.charAt(0)}</span>
              {s.author} · {s.date} · {s.read}
            </div>
            <span className="tc-btn tc-btn-gold">Baca selengkapnya <Icon name="arrow-right" size={16} /></span>
          </div>
          <div className="tc-slide-visual"><Icon name={s.icon} size={104} /></div>
        </Link>
      ))}

      <button className="tc-slider-arrow prev" onClick={() => go(i - 1)} aria-label="Sebelumnya"><Icon name="chevron-left" /></button>
      <button className="tc-slider-arrow next" onClick={() => go(i + 1)} aria-label="Berikutnya"><Icon name="chevron-right" /></button>
      <div className="tc-slider-dots">
        {slides.map((_, idx) => (
          <button key={idx} className={`tc-dot ${idx === i ? "active" : ""}`} onClick={() => go(idx)} aria-label={`Slide ${idx + 1}`} />
        ))}
      </div>
    </div>
  );
}
