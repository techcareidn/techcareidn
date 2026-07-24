"use client";
import { useRef, type ReactNode } from "react";
import Icon from "./Icon";

// Rail horizontal "geser ke kanan" dengan tombol panah kiri/kanan.
export default function Rail({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => {
    const el = ref.current;
    if (el) el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.8, 640), behavior: "smooth" });
  };
  return (
    <div className="tc-rail-wrap">
      <button className="tc-rail-btn prev" onClick={() => scroll(-1)} aria-label="Geser kiri"><Icon name="chevron-left" /></button>
      <div className="tc-rail" ref={ref}>{children}</div>
      <button className="tc-rail-btn next" onClick={() => scroll(1)} aria-label="Geser kanan"><Icon name="chevron-right" /></button>
    </div>
  );
}
