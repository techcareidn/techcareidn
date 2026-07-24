// Kumpulan ikon SVG (stroke) yang dipakai di seluruh situs.
import type { CSSProperties } from "react";

export type IconName =
  | "search" | "cart" | "heart" | "user" | "chevron-left" | "chevron-right"
  | "arrow-right" | "laptop" | "repair" | "dream" | "sprout" | "star"
  | "map-pin" | "eye" | "check" | "shield" | "upload" | "send" | "clock";

const P: Record<IconName, string> = {
  search: "M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.3-4.3",
  cart: "M2.5 3h2l2.4 12.4a2 2 0 002 1.6h8.7a2 2 0 002-1.6L21.5 8H6",
  heart: "M12 21s-7.5-4.6-10-9.3C.4 8.3 2 5 5.2 5c2 0 3.3 1.1 4.1 2.4C10.1 6.1 11.4 5 13.4 5 16.6 5 18.2 8.3 16.6 11.7 14.1 16.4 12 21 12 21z",
  user: "M12 12a4 4 0 100-8 4 4 0 000 8zM4 21c0-4 3.6-6 8-6s8 2 8 6",
  "chevron-left": "M15 6l-6 6 6 6",
  "chevron-right": "M9 6l6 6-6 6",
  "arrow-right": "M5 12h14M13 6l6 6-6 6",
  laptop: "M4 5h16v10H4zM2 19h20M9 15h6",
  repair: "M14.7 6.3a4 4 0 00-5.2 5.2L3 18l3 3 6.5-6.5a4 4 0 005.2-5.2l-2.6 2.6-2.1-.5-.5-2.1z",
  dream: "M12 3l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5z",
  sprout: "M12 22V11M12 11C12 7 9 5 4 5c0 5 3 6 8 6zM12 11c0-3 2.5-5 7-5 0 4-2.5 5-7 5z",
  star: "M12 3l2.9 6 6.1.9-4.5 4.3 1.1 6.1L12 17.8 6.4 20.3l1.1-6.1L3 9.9 9.1 9z",
  "map-pin": "M12 21s-7-6-7-11a7 7 0 1114 0c0 5-7 11-7 11zM12 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",
  eye: "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7zM12 15a3 3 0 100-6 3 3 0 000 6z",
  check: "M20 6L9 17l-5-5",
  shield: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z",
  upload: "M12 16V4M6 10l6-6 6 6M4 20h16",
  send: "M22 2L11 13M22 2l-7 20-4-9-9-4z",
  clock: "M12 21a9 9 0 100-18 9 9 0 000 18zM12 7v5l3 2"
};

export default function Icon({
  name, size = 20, style, className
}: { name: IconName; size?: number; style?: CSSProperties; className?: string }) {
  return (
    <svg
      width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={1.7} strokeLinecap="round"
      strokeLinejoin="round" style={style} className={className} aria-hidden
    >
      <path d={P[name]} />
    </svg>
  );
}
