"use client";

import { useState } from "react";
import Link from "next/link";
import { siteBrand } from "@/config/siteBrand";

const slides = [
  {
    tag: "Second Chance",
    title: "Teknologi yang memberi kesempatan kedua untuk Pejuang Mimpi",
    excerpt: "TechCareIDN menghubungkan perangkat layak pakai dari para Bintang dengan Pejuang yang membutuhkan laptop, tablet, atau gadget untuk belajar dan berkarya.",
    author: "Tim TechCareIDN",
    date: "20 Jul 2026",
    read: "4 menit baca",
    initial: "T",
    thumb: "t1"
  },
  {
    tag: "Marketplace",
    title: "Katalog perangkat murah, gratis, dan siap dipinjam komunitas",
    excerpt: "Setiap perangkat punya status, lokasi, spesifikasi, minus, dan cerita penggunaan agar proses pinjam lebih transparan.",
    author: "Ruang Perangkat",
    date: "20 Jul 2026",
    read: "5 menit baca",
    initial: "M",
    thumb: "t2"
  },
  {
    tag: "Wall of Dreams",
    title: "Mimpi Pejuang menjadi pusat cerita, bukan sekadar transaksi",
    excerpt: "Tabel dreams dan stories membantu mencatat target, proses bertumbuh, pencapaian, serta dampak nyata dari perangkat yang dipinjamkan.",
    author: "Wall of Dreams",
    date: "20 Jul 2026",
    read: "6 menit baca",
    initial: "W",
    thumb: "t3"
  }
];

const recentItems = [
  ["Dokter Gadget", "Cek kondisi laptop sebelum dipinjamkan", "Panduan ringan untuk Bintang agar perangkat aman dipakai Pejuang.", "t1"],
  ["Marketplace", "Cara membuat listing perangkat yang dipercaya", "Isi spesifikasi, minus, lokasi, dan status dengan jelas.", "t2"],
  ["Second Chance", "Perangkat lama bisa jadi awal mimpi baru", "Laptop yang tidak terpakai dapat membantu kelas online dan tugas kuliah.", "t3"],
  ["Wall of Dreams", "Menulis cerita pencapaian setelah mendapat bantuan", "Cerita dampak membuat komunitas lebih percaya dan ikut bergerak.", "t4"]
];

function BrandMark() {
  if (siteBrand.logoMode === "image") {
    return <img className="tc-logo-image" src={siteBrand.logoImageUrl} alt={`${siteBrand.name} logo`} />;
  }

  if (siteBrand.logoMode === "emoji") {
    return <span className="tc-logo-emoji" aria-hidden="true">{siteBrand.logoEmoji}</span>;
  }

  if (siteBrand.logoMode === "text") return null;

  return (
    <svg className="tc-logo-mark" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="38" height="34" rx="13" fill="#FBF0DB" />
      <path d="M22 4 L37 10 V21 C37 30.5 30.5 37.5 22 40 C13.5 37.5 7 30.5 7 21 V10 Z" fill="#0D2745" stroke="#C69A3E" strokeWidth="1.6" />
      <path d="M22 9 L32 13 V21 C32 28 27.5 33 22 35.2 C16.5 33 12 28 12 21 V13 Z" fill="#1F4E8C" />
      <rect x="13.5" y="16" width="17" height="10" rx="2" fill="#F7F9FC" />
      <path d="M14.5 28.5h15" stroke="#F7F9FC" strokeWidth="2.3" strokeLinecap="round" />
    </svg>
  );
}


function SoftIcon({ type, className = "" }: { type: "repair" | "laptop" | "sprout" | "dream" | "bolt" | "pin" | "id" | "bell"; className?: string }) {
  const common = { width: 28, height: 28, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

  const paths = {
    repair: <><path d="M14.7 6.3a4 4 0 0 0-5 5L4 17v3h3l5.7-5.7a4 4 0 0 0 5-5l-2.4 2.4-2.9-2.9 2.3-2.5Z"/><path d="M7 17l-1 1"/></>,
    laptop: <><rect x="5" y="5" width="14" height="10" rx="2"/><path d="M3.5 18.5h17"/><path d="M8.5 15h7"/></>,
    sprout: <><path d="M12 20V10"/><path d="M12 10C9 6.5 6.4 6.1 4.5 6.2c.2 2.9 1.7 5.2 7.5 3.8Z"/><path d="M12 11c3.1-4.1 5.9-4.5 7.7-4.3-.2 3-1.7 5.5-7.7 4.3Z"/></>,
    dream: <><path d="M12 3l1.8 4.6L18.8 8l-3.8 3.1 1.2 4.8L12 13.2 7.8 16l1.2-4.8L5.2 8l5-.4L12 3Z"/><path d="M5 20h14"/></>,
    bolt: <><path d="M13 2 4.5 13h6L9.8 22 19.5 10h-6L13 2Z"/></>,
    pin: <><path d="M12 21s6-5.4 6-11a6 6 0 1 0-12 0c0 5.6 6 11 6 11Z"/><circle cx="12" cy="10" r="2"/></>,
    id: <><rect x="4" y="5" width="16" height="14" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M7 15c.9-1.2 3.1-1.2 4 0"/><path d="M14 10h3"/><path d="M14 14h3"/></>,
    bell: <><path d="M18 16H6c1.2-1.3 1.5-3 1.5-5a4.5 4.5 0 0 1 9 0c0 2 .3 3.7 1.5 5Z"/><path d="M10 18a2 2 0 0 0 4 0"/><path d="M12 4V2.8"/></>
  };

  return <svg className={`tc-line-icon ${className}`} {...common}>{paths[type]}</svg>;
}

function BrandLogo() {
  return (
    <Link href="/" className="tc-brand" aria-label={siteBrand.name}>
      <BrandMark />
      <span className="tc-brand-copy">
        <span className="tc-brand-name">{siteBrand.name}</span>
        <span className="tc-brand-tagline">{siteBrand.tagline}</span>
      </span>
    </Link>
  );
}

export default function HomePage() {
  const [current, setCurrent] = useState(0);
  const slide = slides[current];
  const changeSlide = (dir: number) => setCurrent((prev) => (prev + dir + slides.length) % slides.length);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500&family=Inter:wght@400;500;600;700;800&display=swap');

        :root{
          --tc-navy:#0D2745; --tc-navy-deep:#081A30; --tc-blue:#1F4E8C; --tc-blue-soft:#2E63AA;
          --tc-sky-pale:#EAF2FA; --tc-mint-pale:#E3F5EE; --tc-mint:#3F8F6B;
          --tc-gold:#C69A3E; --tc-gold-pale:#FBF0DB; --tc-lilac-pale:#EFEAFB;
          --tc-paper:#F7F9FC; --tc-white:#FFFFFF; --tc-ink:#16233A; --tc-ink-soft:#5A6B82; --tc-line:#E7EDF4;
        }

        .tc-page, .tc-page *{box-sizing:border-box;}
        .tc-page{font-family:'Inter',sans-serif; color:var(--tc-ink); background:var(--tc-paper); line-height:1.55; overflow-x:hidden;}
        .tc-page a{color:inherit; text-decoration:none;}
        .tc-page svg,.tc-page img{display:block; max-width:100%;}
        .tc-wrap{max-width:1180px; margin:0 auto; padding:0 32px;}
        .tc-page h1,.tc-page h2,.tc-page h3,.tc-page h4{font-family:'Fraunces',serif; font-weight:600; color:var(--tc-navy); line-height:1.15; margin:0;}
        .tc-eyebrow{font-weight:800; font-size:12.5px; letter-spacing:.12em; text-transform:uppercase; color:var(--tc-gold); display:flex; align-items:center; gap:9px;}
        .tc-eyebrow::before{content:""; width:20px; height:2px; background:var(--tc-gold);}
        .tc-btn{display:inline-flex; align-items:center; justify-content:center; gap:8px; padding:13px 26px; border-radius:999px; font-weight:700; font-size:14.5px; cursor:pointer; border:1.5px solid transparent; transition:all .2s ease; white-space:nowrap;}
        .tc-btn-primary{background:var(--tc-navy); color:#fff;}
        .tc-btn-primary:hover{background:var(--tc-blue); transform:translateY(-1px);}
        .tc-btn-outline{border-color:var(--tc-line); color:var(--tc-navy); background:#fff;}
        .tc-btn-outline:hover{border-color:var(--tc-navy);}

        /* FIX: semua class header diberi prefix tc- supaya tidak bentrok dengan globals.css lama */
        .tc-topbar{position:sticky; top:0; z-index:70; background:#fff; box-shadow:0 1px 0 rgba(13,39,69,.02);}
        .tc-header{background:#fff; position:relative; z-index:2; border-bottom:1px solid var(--tc-line);}
        .tc-nav-inner{display:flex; align-items:center; justify-content:space-between; min-height:82px; gap:24px;}
        .tc-brand{display:flex; align-items:center; gap:12px; flex:0 0 auto; min-width:0; max-width:330px;}
        .tc-logo-mark{width:44px; height:44px; flex:0 0 44px;}
        .tc-logo-image{width:44px; height:44px; flex:0 0 44px; object-fit:contain; border-radius:12px;}
        .tc-logo-emoji{width:44px; height:44px; flex:0 0 44px; display:flex; align-items:center; justify-content:center; border-radius:14px; background:var(--tc-gold-pale); font-size:24px;}
        .tc-line-icon{display:block; width:28px; height:28px; stroke:currentColor;}
        .tc-brand-copy{display:block; min-width:0; line-height:1;}
        .tc-brand-name{display:block; font-family:'Fraunces',serif; font-size:26px; font-weight:700; color:var(--tc-navy); letter-spacing:-.02em; white-space:nowrap;}
        .tc-brand-tagline{display:block; margin-top:5px; font-size:11px; font-weight:800; letter-spacing:.13em; color:var(--tc-ink-soft); text-transform:uppercase; white-space:nowrap;}
        .tc-main-nav{display:flex; align-items:center; justify-content:center; gap:clamp(18px,2.4vw,30px); flex:1 1 auto; min-width:0; overflow:hidden;}
        .tc-main-nav a{color:var(--tc-ink); font-size:15px; font-weight:700; transition:color .2s; white-space:nowrap;}
        .tc-main-nav a:hover,.tc-main-nav a.active{color:var(--tc-blue);}
        .tc-nav-right{display:flex; align-items:center; justify-content:flex-end; gap:12px; flex:0 0 auto;}
        .tc-search-box{display:flex; align-items:center; gap:8px; background:var(--tc-paper); border:1px solid var(--tc-line); border-radius:999px; padding:9px 14px; font-size:13px; color:var(--tc-ink-soft); width:168px; white-space:nowrap;}
        .tc-icon-btn{width:38px; height:38px; border-radius:50%; display:flex; align-items:center; justify-content:center; color:var(--tc-navy); position:relative; background:var(--tc-paper); flex:0 0 38px;}
        .tc-cart-count{position:absolute; top:-3px; right:-3px; background:var(--tc-gold); color:var(--tc-navy-deep); font-size:10px; font-weight:800; width:16px; height:16px; border-radius:50%; display:flex; align-items:center; justify-content:center;}

        .tc-ticker-bar{position:relative; z-index:1; background:var(--tc-navy); color:#fff; display:flex; align-items:center; height:42px; overflow:hidden; isolation:isolate;}
        .tc-ticker-tag{background:var(--tc-gold); color:var(--tc-navy-deep); font-size:11.5px; font-weight:800; letter-spacing:.06em; padding:0 18px; height:100%; display:flex; align-items:center; flex-shrink:0; position:relative; z-index:2; box-shadow:12px 0 18px rgba(13,39,69,.28);}
        .tc-ticker-track{position:absolute; left:88px; right:0; top:0; height:100%; min-width:max-content; display:flex; align-items:center; gap:56px; white-space:nowrap; animation:tc-scroll-left 32s linear infinite; padding-left:24px; font-size:13px; color:rgba(255,255,255,.85);}
        .tc-ticker-track span{display:flex; align-items:center; gap:10px; flex-shrink:0;}
        .tc-ticker-track span::before{content:"•"; color:var(--tc-gold);}
        @keyframes tc-scroll-left{0%{transform:translateX(0);}100%{transform:translateX(-50%);}}

        .tc-hero{padding:44px 0 0; background:#fff;}
        .tc-hero-row{display:flex; align-items:center; gap:8px;}
        .tc-hero-nav-btn{width:40px; height:40px; border-radius:50%; border:1.5px solid var(--tc-line); background:#fff; display:flex; align-items:center; justify-content:center; color:var(--tc-navy); cursor:pointer; flex-shrink:0; transition:all .2s;}
        .tc-hero-nav-btn:hover{border-color:var(--tc-navy); background:var(--tc-navy); color:#fff;}
        .tc-hero-main{display:grid; grid-template-columns:1.12fr .88fr; gap:52px; align-items:center; flex:1; min-width:0;}
        .tc-hero-label{display:flex; align-items:center; gap:12px; margin-bottom:18px;}
        .tc-hero-label .bar{width:26px; height:3px; background:var(--tc-gold);}
        .tc-hero-label b{font-size:12.5px; font-weight:800; letter-spacing:.1em; color:var(--tc-gold); text-transform:uppercase;}
        .tc-hero-label .count{font-size:12.5px; color:var(--tc-ink-soft); font-weight:700;}
        .tc-hero-text h1{font-size:clamp(34px,4.2vw,58px); letter-spacing:-.02em; margin-bottom:18px;}
        .tc-hero-text p{color:var(--tc-ink-soft); font-size:15.5px; max-width:520px; margin:0 0 24px;}
        .tc-hero-byline{display:flex; align-items:center; gap:12px;}
        .tc-avatar-sm{width:34px; height:34px; border-radius:50%; background:var(--tc-sky-pale); display:flex; align-items:center; justify-content:center; font-family:'Fraunces',serif; font-weight:700; color:var(--tc-blue); font-size:13px;}
        .tc-meta{font-size:13px; color:var(--tc-ink-soft);}
        .tc-meta b{color:var(--tc-navy); font-weight:700;}
        .tc-hero-image{position:relative; border-radius:16px; overflow:hidden; aspect-ratio:4/3.1; background-size:cover; background-position:center;}
        .tc-hero-image.t1{background:linear-gradient(135deg, rgba(13,39,69,.10), rgba(198,154,62,.14)), radial-gradient(circle at 30% 25%, #EAF2FA, transparent 32%), linear-gradient(135deg,#F7F9FC,#D7E7F7);}
        .tc-hero-image.t2{background:linear-gradient(135deg, rgba(31,78,140,.14), rgba(63,143,107,.12)), radial-gradient(circle at 75% 30%, #FBF0DB, transparent 30%), linear-gradient(135deg,#EAF2FA,#FFFFFF);}
        .tc-hero-image.t3{background:linear-gradient(135deg, rgba(198,154,62,.22), rgba(124,99,201,.12)), radial-gradient(circle at 35% 70%, #EFEAFB, transparent 34%), linear-gradient(135deg,#FFFFFF,#FBF0DB);}
        .tc-hero-visual-device{position:absolute; inset:18% 15%; border-radius:30px; background:rgba(255,255,255,.84); border:1px solid rgba(231,237,244,.9); box-shadow:0 22px 45px rgba(13,39,69,.16); display:flex; align-items:center; justify-content:center; color:var(--tc-blue);}
        .tc-hero-visual-device .tc-line-icon{width:96px; height:96px; stroke-width:1.25;}
        .tc-cat-tag{position:absolute; top:16px; left:16px; background:rgba(13,39,69,.85); color:#fff; font-size:11px; font-weight:800; letter-spacing:.05em; text-transform:uppercase; padding:6px 13px; border-radius:999px;}
        .tc-cap{position:absolute; bottom:0; left:0; right:0; padding:40px 20px 18px; background:linear-gradient(0deg, rgba(8,26,48,.88), transparent); color:#fff; font-family:'Fraunces',serif; font-size:16.5px; font-weight:600; line-height:1.35;}
        .tc-hero-dots{display:flex; justify-content:center; gap:7px; margin:26px 0 14px;}
        .tc-dot{width:7px; height:7px; border-radius:50%; background:var(--tc-line); cursor:pointer; transition:all .25s; border:none; padding:0;}
        .tc-dot.active{width:22px; border-radius:4px; background:var(--tc-gold);}
        .tc-cat-tabs{display:flex; gap:30px; border-top:1px solid var(--tc-line); border-bottom:1px solid var(--tc-line); padding:16px 0; overflow-x:auto;}
        .tc-cat-tabs a{font-size:13.5px; font-weight:700; color:var(--tc-ink-soft); white-space:nowrap; padding-bottom:4px; border-bottom:2px solid transparent; transition:all .2s;}
        .tc-cat-tabs a:hover{color:var(--tc-navy);}.tc-cat-tabs a.active{color:var(--tc-gold); border-color:var(--tc-gold);}

        .tc-section-head{max-width:640px; margin-bottom:36px;}.tc-section-head h2{font-size:29px; margin-top:12px;}.tc-section-head p{color:var(--tc-ink-soft); margin-top:12px; font-size:15px;}
        .tc-app-grid-section{padding:76px 0 10px;}.tc-app-grid{display:grid; grid-template-columns:repeat(4,1fr); gap:20px;}.tc-app-card{background:#fff; border:1px solid var(--tc-line); border-radius:18px; padding:30px 24px; transition:transform .2s ease, box-shadow .2s ease;}.tc-app-card:hover{transform:translateY(-4px); box-shadow:0 18px 34px -20px rgba(13,39,69,.25);}.tc-app-badge{width:98px; height:98px; border-radius:24px; display:flex; align-items:center; justify-content:center; margin-bottom:32px; color:var(--tc-blue); box-shadow:inset 0 0 0 1px rgba(255,255,255,.45);}
        .tc-app-badge .tc-line-icon{width:36px; height:36px; stroke-width:1.55;}
        .tc-app-card:nth-child(2) .tc-app-badge{color:var(--tc-gold);}
        .tc-app-card:nth-child(3) .tc-app-badge{color:var(--tc-mint);}
        .tc-app-card:nth-child(4) .tc-app-badge{color:#7C63C9;}.tc-app-card h4{font-size:20px; margin-bottom:8px;}.tc-app-card span{font-size:14px; color:var(--tc-ink-soft); display:block;}
        .tc-cta-banner-wrap{padding:56px 0 12px;}.tc-cta-banner{background:linear-gradient(135deg,var(--tc-navy),var(--tc-blue)); color:#fff; border-radius:24px; padding:28px 32px; display:flex; align-items:center; gap:20px; box-shadow:0 22px 45px -28px rgba(13,39,69,.65);}.tc-cta-icon{width:64px; height:64px; border-radius:20px; background:rgba(255,255,255,.14); display:flex; align-items:center; justify-content:center; flex-shrink:0; color:#fff;}.tc-cta-icon .tc-line-icon{width:30px;height:30px;}.tc-cta-banner h4{color:#fff; font-size:22px; margin-bottom:5px;}.tc-cta-banner p{color:rgba(255,255,255,.76); font-size:14.5px; max-width:720px; margin:0;}.tc-cta-arrow{margin-left:auto; width:38px; height:38px; border-radius:50%; background:var(--tc-gold); display:flex; align-items:center; justify-content:center; flex-shrink:0;}
        .tc-recent-section{padding:66px 0;}.tc-recent-head{display:flex; align-items:center; justify-content:space-between; margin-bottom:22px; gap:18px;}.tc-recent-head h3{font-size:27px;}.tc-recent-grid{display:grid; grid-template-columns:repeat(4,1fr); gap:20px;}.tc-recent-card{background:#fff; border:1px solid var(--tc-line); border-radius:18px; overflow:hidden; transition:transform .2s, box-shadow .2s;}.tc-recent-card:hover{transform:translateY(-3px); box-shadow:0 18px 34px -24px rgba(13,39,69,.38);}.tc-recent-thumb{height:150px; position:relative;}.tc-recent-thumb.t1{background:linear-gradient(135deg,#EAF2FA,#BFD8F0);}.tc-recent-thumb.t2{background:linear-gradient(135deg,#FBF0DB,#E4C878);}.tc-recent-thumb.t3{background:linear-gradient(135deg,#E3F5EE,#B7E3D0);}.tc-recent-thumb.t4{background:linear-gradient(135deg,#EFEAFB,#D6C8F6);}.tc-recent-thumb .tag{position:absolute; top:12px; left:12px; background:#fff; color:var(--tc-navy); border-radius:999px; padding:5px 11px; font-size:11px; font-weight:800;}.tc-recent-body{padding:18px;}.tc-recent-body h4{font-size:17px; line-height:1.28; margin-bottom:12px;}.tc-recent-body p{font-size:13.5px; color:var(--tc-ink-soft); margin:0 0 13px;}.tc-recent-meta{display:flex; gap:8px; align-items:center; color:var(--tc-ink-soft); font-size:12.5px;}
        .tc-signs{padding:72px 0; background:#fff;}.tc-signs-grid{display:grid; grid-template-columns:repeat(4,1fr); gap:18px;}.tc-sign-card{border:1px solid var(--tc-line); border-radius:18px; padding:24px; background:linear-gradient(180deg,#fff,var(--tc-paper));}.tc-sign-num{font-family:'Fraunces',serif; font-size:28px; color:var(--tc-gold); margin-bottom:18px;}.tc-sign-card h4{font-size:18px; margin-bottom:10px;}.tc-sign-card p{color:var(--tc-ink-soft); font-size:14px; margin:0;}
        .tc-product-section{padding:72px 0;}.tc-product-grid{display:grid; grid-template-columns:1.1fr .9fr; gap:22px; align-items:stretch;}.tc-feature-card{background:#fff; border:1px solid var(--tc-line); border-radius:24px; padding:34px; display:grid; grid-template-columns:1fr .8fr; gap:28px; align-items:center;}.tc-feature-card h3{font-size:32px; margin:12px 0 14px;}.tc-feature-card p{color:var(--tc-ink-soft); margin:0 0 22px;}.tc-feature-visual{min-height:250px; border-radius:20px; background:linear-gradient(135deg,var(--tc-sky-pale),var(--tc-gold-pale)); position:relative; overflow:hidden; display:flex; align-items:center; justify-content:center;}.tc-feature-device-card{width:132px;height:132px;border-radius:32px;background:rgba(255,255,255,.78);border:1px solid rgba(231,237,244,.88);box-shadow:0 24px 40px rgba(13,39,69,.16);display:flex;align-items:center;justify-content:center;color:var(--tc-blue);}.tc-feature-device-card .tc-line-icon{width:66px;height:66px;stroke-width:1.35;}.tc-mini-list{display:grid; gap:16px;}.tc-mini-card{background:#fff; border:1px solid var(--tc-line); border-radius:20px; padding:22px; display:flex; gap:14px; align-items:flex-start;}.tc-mini-icon{width:70px; height:70px; flex:none; border-radius:20px; display:flex; align-items:center; justify-content:center; background:var(--tc-gold-pale); color:var(--tc-navy);}.tc-mini-icon .tc-line-icon{width:30px; height:30px; stroke-width:1.55;}.tc-mini-card:nth-child(1) .tc-mini-icon{background:var(--tc-sky-pale);color:var(--tc-blue);}.tc-mini-card:nth-child(2) .tc-mini-icon{background:var(--tc-gold-pale);color:var(--tc-gold);}.tc-mini-card:nth-child(3) .tc-mini-icon{background:var(--tc-mint-pale);color:var(--tc-mint);}.tc-mini-card h4{font-size:18px; margin-bottom:5px;}.tc-mini-card p{font-size:13.5px; color:var(--tc-ink-soft); margin:0;}
        .tc-testi{padding:72px 0; background:#fff;}.tc-testi-grid{display:grid; grid-template-columns:repeat(3,1fr); gap:20px;}.tc-testi-card{background:var(--tc-paper); border:1px solid var(--tc-line); border-radius:20px; padding:26px;}.tc-testi-quote{color:var(--tc-ink); font-family:'Fraunces',serif; font-size:18px; line-height:1.45; margin:0 0 22px;}.tc-testi-person{display:flex; gap:12px; align-items:center;}.tc-testi-avatar{width:38px; height:38px; border-radius:50%; background:var(--tc-navy); color:#fff; display:flex; align-items:center; justify-content:center; font-weight:800;}.tc-testi-person b{display:block; font-size:14px;}.tc-testi-person span{display:block; font-size:12.5px; color:var(--tc-ink-soft);}
        .tc-news-cta{padding:72px 0;}.tc-news-cta-box{background:var(--tc-navy); border-radius:26px; padding:38px; display:flex; align-items:center; justify-content:space-between; gap:28px; color:#fff;}.tc-news-cta h3{color:#fff; font-size:30px; margin-bottom:8px;}.tc-news-cta p{color:rgba(255,255,255,.72); max-width:560px; margin:0;}.tc-news-form{display:flex; gap:10px; background:#fff; padding:8px; border-radius:999px; min-width:390px;}.tc-news-form input{border:none; outline:none; flex:1; padding:0 16px; font-size:14px; color:var(--tc-ink);}.tc-news-form .tc-btn{background:var(--tc-gold); color:var(--tc-navy-deep); padding:11px 20px;}
        .tc-footer{background:var(--tc-navy-deep); color:rgba(255,255,255,.68); padding:58px 0 26px;}.tc-footer-grid{display:grid; grid-template-columns:1.4fr .7fr .7fr .7fr; gap:34px;}.tc-footer-logo{display:flex; align-items:center; gap:10px; color:#fff; font-family:'Fraunces',serif; font-size:20px; font-weight:700; margin-bottom:14px;}.tc-footer p{font-size:14px; max-width:430px; margin:0;}.tc-emergency-box{margin-top:20px; background:rgba(255,255,255,.06); border:1px solid rgba(255,255,255,.1); border-radius:16px; padding:16px; display:grid; gap:5px;}.tc-emergency-box b{color:#fff;}.tc-emergency-box span{font-size:13px;}.tc-footer-col h5{color:#fff; font-size:13px; text-transform:uppercase; letter-spacing:.08em; margin-bottom:14px;}.tc-footer-col li{margin-bottom:9px;}.tc-footer-col a:hover{color:#fff;}.tc-footer-bottom{border-top:1px solid rgba(255,255,255,.1); margin-top:34px; padding-top:20px; display:flex; justify-content:space-between; gap:18px; font-size:12.5px;}

        @media(max-width:1180px){.tc-search-box{display:none;}.tc-brand{max-width:280px;}.tc-brand-name{font-size:23px;}.tc-main-nav{gap:18px;}.tc-main-nav a{font-size:14px;}}
        @media(max-width:980px){.tc-main-nav{display:none;}.tc-nav-inner{min-height:74px;}.tc-hero-main,.tc-product-grid,.tc-feature-card{grid-template-columns:1fr; gap:26px;}.tc-app-grid,.tc-recent-grid,.tc-signs-grid{grid-template-columns:repeat(2,1fr);}.tc-testi-grid,.tc-footer-grid{grid-template-columns:1fr;}.tc-news-cta-box{display:block;}.tc-news-form{min-width:0; margin-top:22px;}.tc-brand{max-width:unset;}}
        @media(max-width:640px){.tc-wrap{padding:0 20px;}.tc-nav-inner{padding:14px 0; align-items:center;}.tc-nav-right .tc-btn{display:none;}.tc-brand-name{font-size:22px;}.tc-brand-tagline{font-size:9.5px; letter-spacing:.1em;}.tc-hero{padding-top:30px;}.tc-hero-nav-btn{display:none;}.tc-hero-text h1{font-size:31px;}.tc-app-grid,.tc-recent-grid,.tc-signs-grid{grid-template-columns:1fr;}.tc-cta-banner{align-items:flex-start; padding:24px;}.tc-cta-arrow{display:none;}.tc-news-form{border-radius:22px; display:grid;}.tc-news-form input{min-height:42px;}.tc-footer-bottom{display:grid;}}
      `}</style>

      <div className="tc-page">
        <div className="tc-topbar">
          <header className="tc-header">
            <div className="tc-wrap tc-nav-inner">
              <BrandLogo />
              <nav className="tc-main-nav">
                <a href="#beranda" className="active">Beranda</a><a href="#layanan">Layanan</a><a href="#perangkat">Perangkat</a><a href="#wall-of-dreams">Wall of Dreams</a><a href="#komunitas">Komunitas</a>
              </nav>
              <div className="tc-nav-right">
                <div className="tc-search-box"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>Cari perangkat…</div>
                <Link className="tc-icon-btn" href="/dashboard" aria-label="Dashboard"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z"/></svg><span className="tc-cart-count">3</span></Link>
                <Link href="/login" className="tc-btn tc-btn-outline" style={{padding:"10px 18px", fontSize:"13.5px"}}>Masuk</Link><Link href="/register" className="tc-btn tc-btn-primary" style={{padding:"10px 22px", fontSize:"13.5px"}}>Gabung</Link>
              </div>
            </div>
          </header>
          <div className="tc-ticker-bar"><div className="tc-ticker-tag">TERKINI</div><div className="tc-ticker-track"><span>Program Second Chance membuka daftar Pejuang Mimpi batch pertama</span><span>Upload perangkat kini mendukung foto cepat via Cloudinary</span><span>Wall of Dreams menampilkan cerita bertumbuh dan berhasil</span><span>Program Second Chance membuka daftar Pejuang Mimpi batch pertama</span><span>Upload perangkat kini mendukung foto cepat via Cloudinary</span><span>Wall of Dreams menampilkan cerita bertumbuh dan berhasil</span></div></div>
        </div>

        <section className="tc-hero" id="beranda"><div className="tc-wrap"><div className="tc-hero-row"><button className="tc-hero-nav-btn" onClick={() => changeSlide(-1)} aria-label="Slide sebelumnya"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M15 18l-6-6 6-6"/></svg></button><div className="tc-hero-main"><div className="tc-hero-text"><div className="tc-hero-label"><span className="bar"/><b>Laporan Utama</b><span className="count">0{current + 1} / 03</span></div><h1>{slide.title}</h1><p>{slide.excerpt}</p><div className="tc-hero-byline"><div className="tc-avatar-sm">{slide.initial}</div><div className="tc-meta"><b>{slide.author}</b> · <span>{slide.date}</span> · <span>{slide.read}</span></div></div></div><div className={`tc-hero-image ${slide.thumb}`}><div className="tc-cat-tag">{slide.tag}</div><div className="tc-hero-visual-device"><SoftIcon type="laptop" /></div><div className="tc-cap">{slide.title.split(":")[0]}</div></div></div><button className="tc-hero-nav-btn" onClick={() => changeSlide(1)} aria-label="Slide berikutnya"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M9 18l6-6-6-6"/></svg></button></div><div className="tc-hero-dots">{slides.map((_, i) => <button key={i} className={`tc-dot ${i === current ? "active" : ""}`} onClick={() => setCurrent(i)} aria-label={`Slide ${i + 1}`} />)}</div><div className="tc-cat-tabs"><a href="#" className="active">Untuk Kamu</a><a href="#layanan">Layanan</a><a href="#perangkat">Perangkat</a><a href="#wall-of-dreams">Wall of Dreams</a><a href="#komunitas">Komunitas</a><a href="/dashboard">Dashboard</a><a href="/register">Daftar Pejuang</a></div></div></section>

        <section className="tc-app-grid-section" id="layanan"><div className="tc-wrap"><div className="tc-section-head"><div className="tc-eyebrow">Mulai dari sini</div><h2>Empat ruang, satu tujuan</h2></div><div className="tc-app-grid"><Link className="tc-app-card" href="/dashboard"><div className="tc-app-badge" style={{background:"var(--tc-sky-pale)"}}><SoftIcon type="repair" /></div><h4>Dokter Gadget</h4><span>Cek, rawat, dan catat kondisi perangkat</span></Link><Link className="tc-app-card" href="/dashboard"><div className="tc-app-badge" style={{background:"var(--tc-gold-pale)"}}><SoftIcon type="laptop" /></div><h4>Marketplace</h4><span>Katalog pinjam perangkat murah atau gratis</span></Link><Link className="tc-app-card" href="/register"><div className="tc-app-badge" style={{background:"var(--tc-mint-pale)"}}><SoftIcon type="sprout" /></div><h4>Second Chance</h4><span>Alur bantuan untuk Pejuang Mimpi</span></Link><a className="tc-app-card" href="#wall-of-dreams"><div className="tc-app-badge" style={{background:"var(--tc-lilac-pale)"}}><SoftIcon type="dream" /></div><h4>Wall of Dreams</h4><span>Cerita target, proses, dan pencapaian</span></a></div></div></section>
        <section className="tc-cta-banner-wrap"><div className="tc-wrap"><Link className="tc-cta-banner" href="/register"><div className="tc-cta-icon"><SoftIcon type="bolt" /></div><div><h4>Ubah perangkat tidak terpakai jadi kesempatan baru</h4><p>Gabung sebagai Bintang untuk mengunggah perangkat, atau sebagai Pejuang untuk menulis mimpi dan mengajukan peminjaman.</p></div><div className="tc-cta-arrow"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg></div></Link></div></section>
        <section className="tc-recent-section" id="perangkat"><div className="tc-wrap"><div className="tc-recent-head"><h3>Ruang perangkat & cerita terbaru</h3><Link className="tc-btn tc-btn-outline" href="/dashboard">Buka dashboard</Link></div><div className="tc-recent-grid">{recentItems.map(([tag, title, desc, thumb]) => (<a className="tc-recent-card" href="#" key={title}><div className={`tc-recent-thumb ${thumb}`}><span className="tag">{tag}</span></div><div className="tc-recent-body"><h4>{title}</h4><p>{desc}</p><div className="tc-recent-meta"><span>TechCareIDN</span><span>·</span><span>Terbaru</span></div></div></a>))}</div></div></section>
        <section className="tc-signs" id="wall-of-dreams"><div className="tc-wrap"><div className="tc-section-head"><div className="tc-eyebrow">Wall of Dreams</div><h2>Status mimpi yang mudah dipahami</h2><p>Struktur data dreams tetap menjadi pusat: Pejuang menulis judul mimpi, deskripsi, target, lalu statusnya bergerak dari sedang berjuang sampai berhasil.</p></div><div className="tc-signs-grid"><div className="tc-sign-card"><div className="tc-sign-num">01</div><h4>Sedang berjuang</h4><p>Pejuang baru menuliskan target, kebutuhan perangkat, dan rencana belajar.</p></div><div className="tc-sign-card"><div className="tc-sign-num">02</div><h4>Bertumbuh</h4><p>Perangkat mulai membantu kelas, tugas, karya, atau proses mencari kerja.</p></div><div className="tc-sign-card"><div className="tc-sign-num">03</div><h4>Berhasil</h4><p>Ada pencapaian yang bisa dibagikan kembali ke komunitas.</p></div><div className="tc-sign-card"><div className="tc-sign-num">04</div><h4>Achievement</h4><p>Cerita masuk ke Wall of Dreams agar Bintang melihat dampaknya.</p></div></div></div></section>
        <section className="tc-product-section"><div className="tc-wrap tc-product-grid"><div className="tc-feature-card"><div><div className="tc-eyebrow">Marketplace</div><h3>Listing perangkat dengan rasa media komunitas</h3><p>Tampilan mengikuti struktur Pelita Anak: editorial, bersih, kredibel, dan mudah dibaca. Cocok untuk membangun rasa percaya sebelum user mengajukan peminjaman.</p><Link className="tc-btn tc-btn-primary" href="/dashboard">Tambah perangkat</Link></div><div className="tc-feature-visual"><div className="tc-feature-device-card"><SoftIcon type="laptop" /></div></div></div><div className="tc-mini-list"><div className="tc-mini-card"><div className="tc-mini-icon"><SoftIcon type="pin" /></div><div><h4>Lokasi jelas</h4><p>Simpan lokasi sebagai alamat atau koordinat untuk pencarian terdekat.</p></div></div><div className="tc-mini-card"><div className="tc-mini-icon"><SoftIcon type="id" /></div><div><h4>Profil & KTM</h4><p>Upload foto profil dan KTM via Supabase Storage untuk proses verifikasi.</p></div></div><div className="tc-mini-card"><div className="tc-mini-icon"><SoftIcon type="bell" /></div><div><h4>Notifikasi</h4><p>Route WhatsApp sudah disiapkan untuk update status pengajuan.</p></div></div></div></div></section>
        <section className="tc-testi" id="komunitas"><div className="tc-wrap"><div className="tc-section-head"><div className="tc-eyebrow">Suara komunitas</div><h2>Dibuat untuk Bintang, Pejuang, dan pendamping pendidikan</h2><p>Contoh narasi yang bisa dipakai untuk membangun kredibilitas awal platform.</p></div><div className="tc-testi-grid"><div className="tc-testi-card"><p className="tc-testi-quote">"Laptop lama saya ternyata bisa jadi alat belajar untuk orang lain. Proses upload-nya jelas dan sederhana."</p><div className="tc-testi-person"><div className="tc-testi-avatar">B</div><div><b>Bintang</b><span>Pemilik perangkat</span></div></div></div><div className="tc-testi-card"><p className="tc-testi-quote">"Saya bisa menulis mimpi, target, dan kebutuhan perangkat tanpa terasa seperti formulir bantuan yang kaku."</p><div className="tc-testi-person"><div className="tc-testi-avatar">P</div><div><b>Pejuang</b><span>Mahasiswa penerima dukungan</span></div></div></div><div className="tc-testi-card"><p className="tc-testi-quote">"Wall of Dreams membantu komunitas melihat dampak, bukan hanya angka donasi atau jumlah perangkat."</p><div className="tc-testi-person"><div className="tc-testi-avatar">K</div><div><b>Komunitas</b><span>Pendamping program</span></div></div></div></div></div></section>
        <section className="tc-news-cta"><div className="tc-wrap"><div className="tc-news-cta-box"><div><h3>Siap mulai TechCareIDN?</h3><p>Masuk untuk mengelola perangkat, menulis dreams, dan menyiapkan aplikasi peminjaman pertama.</p></div><form className="tc-news-form" onSubmit={(e) => e.preventDefault()}><input type="email" placeholder="Alamat email komunitas" aria-label="Email" /><Link className="tc-btn" href="/register">Gabung</Link></form></div></div></section>
        <footer className="tc-footer"><div className="tc-wrap"><div className="tc-footer-grid"><div><div className="tc-footer-logo"><span>{siteBrand.name}</span></div><p>Platform teknologi komunitas untuk memberi perangkat kesempatan kedua dan membantu Pejuang mengejar mimpi pendidikan.</p><div className="tc-emergency-box"><b>Stack murah & siap tumbuh</b><span>Next.js, Vercel, Supabase, Cloudinary, Google Maps, Midtrans, dan WhatsApp API.</span></div></div><div className="tc-footer-col"><h5>Jelajahi</h5><ul><li><a href="#layanan">Layanan</a></li><li><a href="#perangkat">Perangkat</a></li><li><a href="#wall-of-dreams">Wall of Dreams</a></li></ul></div><div className="tc-footer-col"><h5>Akun</h5><ul><li><Link href="/login">Masuk</Link></li><li><Link href="/register">Daftar</Link></li><li><Link href="/dashboard">Dashboard</Link></li></ul></div><div className="tc-footer-col"><h5>Program</h5><ul><li><a href="#">Bintang Mimpi</a></li><li><a href="#">Pejuang Mimpi</a></li><li><a href="#">Second Chance</a></li></ul></div></div><div className="tc-footer-bottom"><span>© 2026 {siteBrand.name}. Seluruh hak cipta dilindungi.</span><span>Kebijakan Privasi · Syarat & Ketentuan</span></div></div></footer>
      </div>
    </>
  );
}
