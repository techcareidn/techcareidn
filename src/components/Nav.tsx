"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteBrand } from "@/config/siteBrand";
import Icon from "./Icon";

const MENU = [
  { href: "/", label: "Beranda" },
  { href: "/dokter-gadget", label: "Dokter Gadget" },
  { href: "/marketplace", label: "Marketplace" },
  { href: "/wall-of-dreams", label: "Wall of Dreams" },
  { href: "/second-chance", label: "Second Chance" }
];

const TICKER = [
  "5 laptop gratis baru ditambahkan Bintang hari ini",
  "Cerita Rangga: dari warnet ke startup — baru tayang",
  "Diagnosa gratis untuk 100 Pejuang pertama bulan ini",
  "Tips: cek 7 hal sebelum ganti baterai HP"
];

function Logo() {
  if (siteBrand.logoMode === "image" && siteBrand.logoImageUrl) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={siteBrand.logoImageUrl} width={siteBrand.logoWidth} height={siteBrand.logoHeight} alt={siteBrand.name} className="tc-logo-mark" />;
  }
  if (siteBrand.logoMode === "emoji") {
    return <span className="tc-logo-mark" style={{ fontSize: 34, display: "grid", placeItems: "center" }}>{siteBrand.logoEmoji}</span>;
  }
  return (
    <svg className="tc-logo-mark" viewBox="0 0 44 44" fill="none" aria-hidden>
      <rect width="44" height="44" rx="12" fill="#0D2745" />
      <path d="M22 9l10 3.6v7.2C32 26 27.6 30 22 31.6 16.4 30 12 26 12 19.8v-7.2L22 9z" fill="#C69A3E" opacity=".9" />
      <path d="M18 21.5l3 3 6-6" stroke="#0D2745" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Nav() {
  const path = usePathname();
  return (
    <div className="tc-topbar">
      <header className="tc-header">
        <div className="tc-wrap tc-nav-inner">
          <Link href="/" className="tc-brand">
            <Logo />
            {siteBrand.showBrandText && (
              <span className="tc-brand-copy">
                <span className="tc-brand-name">{siteBrand.name}</span>
                <span className="tc-brand-tag">{siteBrand.tagline}</span>
              </span>
            )}
          </Link>

          <label className="tc-search-box">
            <Icon name="search" size={18} />
            <input placeholder="Cari perangkat, artikel servis, atau cerita…" />
          </label>

          <div className="tc-nav-right">
            <Link href="/login" className="tc-btn tc-btn-outline">Masuk</Link>
            <Link href="/register" className="tc-btn tc-btn-gold">Gabung Gratis</Link>
          </div>
        </div>
      </header>

      <div className="tc-menu-bar">
        <nav className="tc-wrap tc-main-nav">
          {MENU.map((m) => (
            <Link key={m.href} href={m.href} className={path === m.href ? "active" : ""}>{m.label}</Link>
          ))}
        </nav>
      </div>

      <div className="tc-ticker-bar">
        <span className="tc-ticker-tag">TERKINI</span>
        <div className="tc-ticker-track">
          {[...TICKER, ...TICKER].map((t, i) => <span key={i}>{t}</span>)}
        </div>
      </div>
    </div>
  );
}
