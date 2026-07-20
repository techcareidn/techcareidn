"use client";

import { useState } from "react";
import Link from "next/link";

const slides = [
  {
    tag: "Second Chance",
    title: "Teknologi yang memberi kesempatan kedua untuk Pejuang Mimpi",
    excerpt:
      "TechCareIDN menghubungkan perangkat layak pakai dari para Bintang dengan Pejuang yang membutuhkan laptop, tablet, atau gadget untuk belajar dan berkarya.",
    author: "Tim TechCareIDN",
    date: "20 Jul 2026",
    read: "4 menit baca",
    initial: "T",
    thumb: "t1"
  },
  {
    tag: "Marketplace",
    title: "Katalog perangkat murah, gratis, dan siap dipinjam komunitas",
    excerpt:
      "Setiap perangkat punya status, lokasi, spesifikasi, minus, dan cerita penggunaan agar proses pinjam lebih transparan.",
    author: "Ruang Perangkat",
    date: "20 Jul 2026",
    read: "5 menit baca",
    initial: "M",
    thumb: "t2"
  },
  {
    tag: "Wall of Dreams",
    title: "Mimpi Pejuang menjadi pusat cerita, bukan sekadar transaksi",
    excerpt:
      "Tabel dreams dan stories membantu mencatat target, proses bertumbuh, pencapaian, serta dampak nyata dari perangkat yang dipinjamkan.",
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

export default function HomePage() {
  const [current, setCurrent] = useState(0);
  const slide = slides[current];

  function changeSlide(dir: number) {
    setCurrent((prev) => (prev + dir + slides.length) % slides.length);
  }

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500&family=Inter:wght@400;500;600;700;800&display=swap');

        :root{
          --navy:#0D2745;
          --navy-deep:#081A30;
          --blue:#1F4E8C;
          --blue-soft:#2E63AA;
          --sky:#6FA3D6;
          --sky-pale:#EAF2FA;
          --mint-pale:#E3F5EE;
          --mint:#3F8F6B;
          --gold:#C69A3E;
          --gold-soft:#E4C878;
          --gold-pale:#FBF0DB;
          --lilac-pale:#EFEAFB;
          --lilac:#7C63C9;
          --paper:#F7F9FC;
          --white:#FFFFFF;
          --ink:#16233A;
          --ink-soft:#5A6B82;
          --line:#E7EDF4;
        }
        *{box-sizing:border-box; margin:0; padding:0;}
        html{scroll-behavior:smooth; overflow-x:hidden;}
        body{overflow-x:hidden; font-family:'Inter',sans-serif; color:var(--ink); background:var(--paper); line-height:1.55; -webkit-font-smoothing:antialiased;}
        img,svg{display:block; max-width:100%;}
        a{color:inherit; text-decoration:none;}
        ul{list-style:none;}
        .wrap{max-width:1180px; margin:0 auto; padding:0 32px;}
        h1,h2,h3,h4{font-family:'Fraunces',serif; font-weight:600; color:var(--navy); line-height:1.15;}
        .eyebrow{font-family:'Inter',sans-serif; font-weight:700; font-size:12.5px; letter-spacing:.12em; text-transform:uppercase; color:var(--gold); display:flex; align-items:center; gap:9px;}
        .eyebrow::before{content:""; width:20px; height:2px; background:var(--gold);}
        .btn{display:inline-flex; align-items:center; justify-content:center; gap:8px; padding:13px 26px; border-radius:999px; font-weight:700; font-size:14.5px; cursor:pointer; border:1.5px solid transparent; transition:all .2s ease;}
        .btn-primary{background:var(--navy); color:#fff;}
        .btn-primary:hover{background:var(--blue); transform:translateY(-1px);}
        .btn-outline-navy{border-color:var(--line); color:var(--navy); background:#fff;}
        .btn-outline-navy:hover{border-color:var(--navy);}

        .site-topbar{position:sticky; top:0; z-index:70; background:#fff; box-shadow:0 1px 0 rgba(13,39,69,.02);}
        header{background:#fff; position:relative; z-index:2; border-bottom:1px solid var(--line);}
        .nav-inner{display:flex; align-items:center; justify-content:space-between; height:74px;}
        .logo{display:flex; align-items:center; gap:11px;}
        .logo-mark{width:36px; height:36px;}
        .logo-text{font-family:'Fraunces',serif; font-size:19.5px; font-weight:700; color:var(--navy);}
        .logo-text span{display:block; font-family:'Inter',sans-serif; font-size:10px; font-weight:800; letter-spacing:.1em; color:var(--ink-soft); text-transform:uppercase; margin-top:1px;}
        nav.main-nav{display:flex; gap:28px;}
        nav.main-nav a{color:var(--ink); font-size:14.5px; font-weight:600; transition:color .2s;}
        nav.main-nav a:hover, nav.main-nav a.active{color:var(--blue); font-weight:700;}
        .nav-right{display:flex; align-items:center; gap:14px;}
        .search-box{display:flex; align-items:center; gap:8px; background:var(--paper); border:1px solid var(--line); border-radius:999px; padding:9px 16px; font-size:13.5px; color:var(--ink-soft); width:190px;}
        .icon-btn{width:38px; height:38px; border-radius:50%; display:flex; align-items:center; justify-content:center; color:var(--navy); cursor:pointer; transition:background .2s; position:relative; background:var(--paper);}
        .icon-btn:hover{background:var(--sky-pale);}
        .cart-count{position:absolute; top:-3px; right:-3px; background:var(--gold); color:var(--navy-deep); font-size:10px; font-weight:800; width:16px; height:16px; border-radius:50%; display:flex; align-items:center; justify-content:center;}

        .ticker-bar{position:relative; z-index:1; background:var(--navy); color:#fff; display:flex; align-items:center; height:42px; overflow:hidden; max-width:100vw; isolation:isolate;}
        .ticker-tag{background:var(--gold); color:var(--navy-deep); font-size:11.5px; font-weight:800; letter-spacing:.06em; padding:0 18px; height:100%; display:flex; align-items:center; flex-shrink:0; position:relative; z-index:2; box-shadow:12px 0 18px rgba(13,39,69,.28);}
        .ticker-track{position:absolute; left:88px; right:0; top:0; height:100%; min-width:max-content; display:flex; align-items:center; gap:56px; white-space:nowrap; animation:scroll-left 32s linear infinite; padding-left:24px; font-size:13px; color:rgba(255,255,255,.85); will-change:transform;}
        .ticker-track span{display:flex; align-items:center; gap:10px; flex-shrink:0;}
        .ticker-track span::before{content:"•"; color:var(--gold);}
        @keyframes scroll-left{0%{transform:translateX(0);}100%{transform:translateX(-50%);}}

        .hero{padding:44px 0 0; background:#fff;}
        .hero-row{display:flex; align-items:center; gap:8px;}
        .hero-nav-btn{width:40px; height:40px; border-radius:50%; border:1.5px solid var(--line); background:#fff; display:flex; align-items:center; justify-content:center; color:var(--navy); cursor:pointer; flex-shrink:0; transition:all .2s;}
        .hero-nav-btn:hover{border-color:var(--navy); background:var(--navy); color:#fff;}
        .hero-main{display:grid; grid-template-columns:1.15fr .85fr; gap:52px; align-items:center; flex:1;}
        .hero-label{display:flex; align-items:center; gap:12px; margin-bottom:18px;}
        .hero-label .bar{width:26px; height:3px; background:var(--gold);}
        .hero-label b{font-size:12.5px; font-weight:800; letter-spacing:.1em; color:var(--gold); text-transform:uppercase;}
        .hero-label .count{font-size:12.5px; color:var(--ink-soft); font-weight:600;}
        .hero-text h1{font-size:38px; letter-spacing:-.01em; margin-bottom:18px;}
        .hero-text p{color:var(--ink-soft); font-size:15.5px; max-width:510px; margin-bottom:24px;}
        .hero-byline{display:flex; align-items:center; gap:12px;}
        .avatar-sm{width:34px; height:34px; border-radius:50%; background:var(--sky-pale); display:flex; align-items:center; justify-content:center; font-family:'Fraunces',serif; font-weight:700; color:var(--blue); font-size:13px;}
        .hero-byline .meta{font-size:13px; color:var(--ink-soft);}
        .hero-byline .meta b{color:var(--navy); font-weight:700;}
        .hero-image{position:relative; border-radius:16px; overflow:hidden; aspect-ratio:4/3.1; background-size:cover; background-position:center;}
        .hero-image.t1{background:linear-gradient(135deg, rgba(13,39,69,.10), rgba(198,154,62,.14)), radial-gradient(circle at 30% 25%, #EAF2FA, transparent 32%), linear-gradient(135deg,#F7F9FC,#D7E7F7);}
        .hero-image.t2{background:linear-gradient(135deg, rgba(31,78,140,.14), rgba(63,143,107,.12)), radial-gradient(circle at 75% 30%, #FBF0DB, transparent 30%), linear-gradient(135deg,#EAF2FA,#FFFFFF);}
        .hero-image.t3{background:linear-gradient(135deg, rgba(198,154,62,.22), rgba(124,99,201,.12)), radial-gradient(circle at 35% 70%, #EFEAFB, transparent 34%), linear-gradient(135deg,#FFFFFF,#FBF0DB);}
        .hero-visual-device{position:absolute; inset:18% 15%; border-radius:22px; background:rgba(255,255,255,.82); border:1px solid rgba(255,255,255,.72); box-shadow:0 22px 45px rgba(13,39,69,.16); display:flex; align-items:center; justify-content:center; font-size:68px;}
        .hero-image .cat-tag{position:absolute; top:16px; left:16px; background:rgba(13,39,69,.85); color:#fff; font-size:11px; font-weight:800; letter-spacing:.05em; text-transform:uppercase; padding:6px 13px; border-radius:999px;}
        .hero-image .cap{position:absolute; bottom:0; left:0; right:0; padding:40px 20px 18px; background:linear-gradient(0deg, rgba(8,26,48,.88), transparent); color:#fff; font-family:'Fraunces',serif; font-size:16.5px; font-weight:600; line-height:1.35;}
        .hero-dots{display:flex; justify-content:center; gap:7px; margin:26px 0 14px;}
        .hero-dots .dot{width:7px; height:7px; border-radius:50%; background:var(--line); cursor:pointer; transition:all .25s; border:none;}
        .hero-dots .dot.active{width:22px; border-radius:4px; background:var(--gold);}
        .cat-tabs{display:flex; gap:30px; border-top:1px solid var(--line); border-bottom:1px solid var(--line); padding:16px 0; overflow-x:auto;}
        .cat-tabs a{font-size:13.5px; font-weight:700; color:var(--ink-soft); white-space:nowrap; padding-bottom:4px; border-bottom:2px solid transparent; transition:all .2s;}
        .cat-tabs a:hover{color:var(--navy);}
        .cat-tabs a.active{color:var(--gold); border-color:var(--gold);}

        .section-head{max-width:640px; margin-bottom:36px;}
        .section-head h2{font-size:29px; margin-top:12px;}
        .section-head p{color:var(--ink-soft); margin-top:12px; font-size:15px;}
        .app-grid-section{padding:76px 0 10px;}
        .app-grid{display:grid; grid-template-columns:repeat(4,1fr); gap:20px;}
        .app-card{background:#fff; border:1px solid var(--line); border-radius:18px; padding:30px 24px; text-align:left; transition:transform .2s ease, box-shadow .2s ease; cursor:pointer;}
        .app-card:hover{transform:translateY(-4px); box-shadow:0 18px 34px -20px rgba(13,39,69,.25);}
        .app-badge{width:52px; height:52px; border-radius:16px; display:flex; align-items:center; justify-content:center; margin-bottom:24px;}
        .app-card h4{font-size:20px; margin-bottom:8px;}
        .app-card span{font-size:14px; color:var(--ink-soft); display:block;}

        .cta-banner-wrap{padding:56px 0 12px;}
        .cta-banner{background:linear-gradient(135deg,var(--navy),var(--blue)); color:#fff; border-radius:24px; padding:28px 32px; display:flex; align-items:center; gap:20px; box-shadow:0 22px 45px -28px rgba(13,39,69,.65);}
        .cta-icon{width:52px; height:52px; border-radius:16px; background:rgba(255,255,255,.14); display:flex; align-items:center; justify-content:center; flex-shrink:0;}
        .cta-banner h4{color:#fff; font-size:22px; margin-bottom:5px;}
        .cta-banner p{color:rgba(255,255,255,.76); font-size:14.5px; max-width:720px;}
        .cta-arrow{margin-left:auto; width:38px; height:38px; border-radius:50%; background:var(--gold); display:flex; align-items:center; justify-content:center; flex-shrink:0;}

        .recent-section{padding:66px 0;}
        .recent-head{display:flex; align-items:center; justify-content:space-between; margin-bottom:22px;}
        .recent-head h3{font-size:27px;}
        .recent-grid{display:grid; grid-template-columns:repeat(4,1fr); gap:20px;}
        .recent-card{background:#fff; border:1px solid var(--line); border-radius:18px; overflow:hidden; transition:transform .2s, box-shadow .2s;}
        .recent-card:hover{transform:translateY(-3px); box-shadow:0 18px 34px -24px rgba(13,39,69,.38);}
        .recent-thumb{height:150px; position:relative; background-size:cover; background-position:center;}
        .recent-thumb.t1{background:linear-gradient(135deg,#EAF2FA,#BFD8F0);}
        .recent-thumb.t2{background:linear-gradient(135deg,#FBF0DB,#E4C878);}
        .recent-thumb.t3{background:linear-gradient(135deg,#E3F5EE,#B7E3D0);}
        .recent-thumb.t4{background:linear-gradient(135deg,#EFEAFB,#D6C8F6);}
        .recent-thumb .tag{position:absolute; top:12px; left:12px; background:#fff; color:var(--navy); border-radius:999px; padding:5px 11px; font-size:11px; font-weight:800;}
        .recent-body{padding:18px;}
        .recent-body h4{font-size:17px; line-height:1.28; margin-bottom:12px;}
        .recent-body p{font-size:13.5px; color:var(--ink-soft); margin-bottom:13px;}
        .recent-meta{display:flex; gap:8px; align-items:center; color:var(--ink-soft); font-size:12.5px;}

        .signs{padding:72px 0; background:#fff;}
        .signs-grid{display:grid; grid-template-columns:repeat(4,1fr); gap:18px;}
        .sign-card{border:1px solid var(--line); border-radius:18px; padding:24px; background:linear-gradient(180deg,#fff,var(--paper));}
        .sign-num{font-family:'Fraunces',serif; font-size:28px; color:var(--gold); margin-bottom:18px;}
        .sign-card h4{font-size:18px; margin-bottom:10px;}
        .sign-card p{color:var(--ink-soft); font-size:14px;}

        .product-section{padding:72px 0;}
        .product-grid{display:grid; grid-template-columns:1.1fr .9fr; gap:22px; align-items:stretch;}
        .feature-card{background:#fff; border:1px solid var(--line); border-radius:24px; padding:34px; display:grid; grid-template-columns:1fr .8fr; gap:28px; align-items:center;}
        .feature-card h3{font-size:32px; margin-bottom:14px;}
        .feature-card p{color:var(--ink-soft); margin-bottom:22px;}
        .feature-visual{min-height:250px; border-radius:20px; background:linear-gradient(135deg,var(--sky-pale),var(--gold-pale)); position:relative; overflow:hidden;}
        .feature-visual::after{content:'💻'; position:absolute; inset:0; display:flex; align-items:center; justify-content:center; font-size:92px; filter:drop-shadow(0 20px 25px rgba(13,39,69,.18));}
        .mini-list{display:grid; gap:16px;}
        .mini-card{background:#fff; border:1px solid var(--line); border-radius:20px; padding:22px; display:flex; gap:14px; align-items:flex-start;}
        .mini-icon{width:44px; height:44px; flex:none; border-radius:14px; display:flex; align-items:center; justify-content:center; background:var(--gold-pale); color:var(--navy); font-size:22px;}
        .mini-card h4{font-size:18px; margin-bottom:5px;}
        .mini-card p{font-size:13.5px; color:var(--ink-soft);}

        .testi{padding:72px 0; background:#fff;}
        .testi-grid{display:grid; grid-template-columns:repeat(3,1fr); gap:20px;}
        .testi-card{background:var(--paper); border:1px solid var(--line); border-radius:20px; padding:26px;}
        .testi-quote{color:var(--ink); font-family:'Fraunces',serif; font-size:18px; line-height:1.45; margin-bottom:22px;}
        .testi-person{display:flex; gap:12px; align-items:center;}
        .testi-avatar{width:38px; height:38px; border-radius:50%; background:var(--navy); color:#fff; display:flex; align-items:center; justify-content:center; font-weight:800;}
        .testi-person b{display:block; font-size:14px;}
        .testi-person span{display:block; font-size:12.5px; color:var(--ink-soft);}

        .news-cta{padding:72px 0;}
        .news-cta-box{background:var(--navy); border-radius:26px; padding:38px; display:flex; align-items:center; justify-content:space-between; gap:28px; color:#fff;}
        .news-cta h3{color:#fff; font-size:30px; margin-bottom:8px;}
        .news-cta p{color:rgba(255,255,255,.72); max-width:560px;}
        .news-form{display:flex; gap:10px; background:#fff; padding:8px; border-radius:999px; min-width:390px;}
        .news-form input{border:none; outline:none; flex:1; padding:0 16px; font-size:14px; color:var(--ink);}
        .news-form .btn{background:var(--gold); color:var(--navy-deep); padding:11px 20px;}

        footer{background:var(--navy-deep); color:rgba(255,255,255,.68); padding:58px 0 26px;}
        .footer-grid{display:grid; grid-template-columns:1.4fr .7fr .7fr .7fr; gap:34px;}
        .footer-logo{display:flex; align-items:center; gap:10px; color:#fff; font-family:'Fraunces',serif; font-size:20px; font-weight:700; margin-bottom:14px;}
        footer p{font-size:14px; max-width:430px;}
        .emergency-box{margin-top:20px; background:rgba(255,255,255,.06); border:1px solid rgba(255,255,255,.1); border-radius:16px; padding:16px; display:grid; gap:5px;}
        .emergency-box b{color:#fff;}
        .emergency-box span{font-size:13px;}
        .footer-col h5{color:#fff; font-size:13px; text-transform:uppercase; letter-spacing:.08em; margin-bottom:14px;}
        .footer-col li{margin-bottom:9px;}
        .footer-col a:hover{color:#fff;}
        .footer-bottom{border-top:1px solid rgba(255,255,255,.1); margin-top:34px; padding-top:20px; display:flex; justify-content:space-between; gap:18px; font-size:12.5px;}

        @media(max-width:980px){
          nav.main-nav,.search-box{display:none;}
          .hero-main,.product-grid,.feature-card{grid-template-columns:1fr; gap:26px;}
          .app-grid,.recent-grid,.signs-grid{grid-template-columns:repeat(2,1fr);}
          .testi-grid,.footer-grid{grid-template-columns:1fr;}
          .news-cta-box{display:block;}
          .news-form{min-width:0; margin-top:22px;}
        }
        @media(max-width:640px){
          .wrap{padding:0 20px;}
          .nav-inner{height:auto; padding:14px 20px; align-items:flex-start; gap:14px;}
          .nav-right .btn{display:none;}
          .hero{padding-top:30px;}
          .hero-row{align-items:flex-start;}
          .hero-nav-btn{display:none;}
          .hero-text h1{font-size:31px;}
          .app-grid,.recent-grid,.signs-grid{grid-template-columns:1fr;}
          .cta-banner{align-items:flex-start; padding:24px;}
          .cta-arrow{display:none;}
          .news-form{border-radius:22px; display:grid;}
          .news-form input{min-height:42px;}
          .footer-bottom{display:grid;}
        }
      `}</style>

      <div className="site-topbar">
        <header>
          <div className="wrap nav-inner">
            <Link href="/" className="logo">
              <svg className="logo-mark" viewBox="0 0 44 44" fill="none" aria-hidden="true">
                <path d="M22 3 L38 9 V21 C38 31 31 38.5 22 41 C13 38.5 6 31 6 21 V9 Z" fill="#0D2745" stroke="#C69A3E" strokeWidth="1.6"/>
                <path d="M22 8 L33 12.3 V21 C33 28.5 28 34 22 36.2 C16 34 11 28.5 11 21 V12.3 Z" fill="#1F4E8C"/>
                <path d="M14 25h16" stroke="#F5F8FB" strokeWidth="2.2" strokeLinecap="round"/>
                <rect x="14" y="15" width="16" height="10" rx="2" fill="#F5F8FB"/>
              </svg>
              <div className="logo-text">TechCareIDN<span>Second Chance Tech Platform</span></div>
            </Link>
            <nav className="main-nav">
              <a href="#beranda" className="active">Beranda</a>
              <a href="#layanan">Layanan</a>
              <a href="#perangkat">Perangkat</a>
              <a href="#wall-of-dreams">Wall of Dreams</a>
              <a href="#komunitas">Komunitas</a>
            </nav>
            <div className="nav-right">
              <div className="search-box">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
                Cari perangkat…
              </div>
              <Link className="icon-btn" href="/dashboard" aria-label="Dashboard">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z"/></svg>
                <span className="cart-count">3</span>
              </Link>
              <Link href="/login" className="btn btn-outline-navy" style={{padding:"10px 18px", fontSize:"13.5px"}}>Masuk</Link>
              <Link href="/register" className="btn btn-primary" style={{padding:"10px 22px", fontSize:"13.5px"}}>Gabung</Link>
            </div>
          </div>
        </header>
        <div className="ticker-bar">
          <div className="ticker-tag">TERKINI</div>
          <div className="ticker-track">
            <span>Program Second Chance membuka daftar Pejuang Mimpi batch pertama</span>
            <span>Upload perangkat kini mendukung foto cepat via Cloudinary</span>
            <span>Wall of Dreams menampilkan cerita bertumbuh dan berhasil</span>
            <span>Program Second Chance membuka daftar Pejuang Mimpi batch pertama</span>
            <span>Upload perangkat kini mendukung foto cepat via Cloudinary</span>
            <span>Wall of Dreams menampilkan cerita bertumbuh dan berhasil</span>
          </div>
        </div>
      </div>

      <section className="hero" id="beranda">
        <div className="wrap">
          <div className="hero-row">
            <button className="hero-nav-btn" onClick={() => changeSlide(-1)} aria-label="Slide sebelumnya">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <div className="hero-main">
              <div className="hero-text">
                <div className="hero-label"><span className="bar"/><b>Laporan Utama</b><span className="count">0{current + 1} / 03</span></div>
                <h1>{slide.title}</h1>
                <p>{slide.excerpt}</p>
                <div className="hero-byline">
                  <div className="avatar-sm">{slide.initial}</div>
                  <div className="meta"><b>{slide.author}</b> · <span>{slide.date}</span> · <span>{slide.read}</span></div>
                </div>
              </div>
              <div className={`hero-image ${slide.thumb}`}>
                <div className="cat-tag">{slide.tag}</div>
                <div className="hero-visual-device">💻</div>
                <div className="cap">{slide.title.split(":")[0]}</div>
              </div>
            </div>
            <button className="hero-nav-btn" onClick={() => changeSlide(1)} aria-label="Slide berikutnya">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
          <div className="hero-dots">
            {slides.map((_, i) => <button key={i} className={`dot ${i === current ? "active" : ""}`} onClick={() => setCurrent(i)} aria-label={`Slide ${i + 1}`} />)}
          </div>
          <div className="cat-tabs">
            <a href="#" className="active">Untuk Kamu</a>
            <a href="#layanan">Layanan</a>
            <a href="#perangkat">Perangkat</a>
            <a href="#wall-of-dreams">Wall of Dreams</a>
            <a href="#komunitas">Komunitas</a>
            <a href="/dashboard">Dashboard</a>
            <a href="/register">Daftar Pejuang</a>
          </div>
        </div>
      </section>

      <section className="app-grid-section" id="layanan">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Mulai dari sini</div>
            <h2>Empat ruang, satu tujuan</h2>
          </div>
          <div className="app-grid">
            <Link className="app-card" href="/dashboard">
              <div className="app-badge" style={{background:"var(--sky-pale)"}}>🛠️</div>
              <h4>Dokter Gadget</h4><span>Cek, rawat, dan catat kondisi perangkat</span>
            </Link>
            <Link className="app-card" href="/dashboard">
              <div className="app-badge" style={{background:"var(--gold-pale)"}}>💻</div>
              <h4>Marketplace</h4><span>Katalog pinjam perangkat murah atau gratis</span>
            </Link>
            <Link className="app-card" href="/register">
              <div className="app-badge" style={{background:"var(--mint-pale)"}}>🌱</div>
              <h4>Second Chance</h4><span>Alur bantuan untuk Pejuang Mimpi</span>
            </Link>
            <a className="app-card" href="#wall-of-dreams">
              <div className="app-badge" style={{background:"var(--lilac-pale)"}}>✨</div>
              <h4>Wall of Dreams</h4><span>Cerita target, proses, dan pencapaian</span>
            </a>
          </div>
        </div>
      </section>

      <section className="cta-banner-wrap">
        <div className="wrap">
          <Link className="cta-banner" href="/register">
            <div className="cta-icon">⚡</div>
            <div>
              <h4>Ubah perangkat tidak terpakai jadi kesempatan baru</h4>
              <p>Gabung sebagai Bintang untuk mengunggah perangkat, atau sebagai Pejuang untuk menulis mimpi dan mengajukan peminjaman.</p>
            </div>
            <div className="cta-arrow"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg></div>
          </Link>
        </div>
      </section>

      <section className="recent-section" id="perangkat">
        <div className="wrap">
          <div className="recent-head"><h3>Ruang perangkat & cerita terbaru</h3><Link className="btn btn-outline-navy" href="/dashboard">Buka dashboard</Link></div>
          <div className="recent-grid">
            {recentItems.map(([tag, title, desc, thumb]) => (
              <a className="recent-card" href="#" key={title}>
                <div className={`recent-thumb ${thumb}`}><span className="tag">{tag}</span></div>
                <div className="recent-body"><h4>{title}</h4><p>{desc}</p><div className="recent-meta"><span>TechCareIDN</span><span>·</span><span>Terbaru</span></div></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="signs" id="wall-of-dreams">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Wall of Dreams</div>
            <h2>Status mimpi yang mudah dipahami</h2>
            <p>Struktur data dreams tetap menjadi pusat: Pejuang menulis judul mimpi, deskripsi, target, lalu statusnya bergerak dari sedang berjuang sampai berhasil.</p>
          </div>
          <div className="signs-grid">
            <div className="sign-card"><div className="sign-num">01</div><h4>Sedang berjuang</h4><p>Pejuang baru menuliskan target, kebutuhan perangkat, dan rencana belajar.</p></div>
            <div className="sign-card"><div className="sign-num">02</div><h4>Bertumbuh</h4><p>Perangkat mulai membantu kelas, tugas, karya, atau proses mencari kerja.</p></div>
            <div className="sign-card"><div className="sign-num">03</div><h4>Berhasil</h4><p>Ada pencapaian yang bisa dibagikan kembali ke komunitas.</p></div>
            <div className="sign-card"><div className="sign-num">04</div><h4>Achievement</h4><p>Cerita masuk ke Wall of Dreams agar Bintang melihat dampaknya.</p></div>
          </div>
        </div>
      </section>

      <section className="product-section">
        <div className="wrap product-grid">
          <div className="feature-card">
            <div><div className="eyebrow">Marketplace</div><h3>Listing perangkat dengan rasa media komunitas</h3><p>Tampilan mengikuti struktur Pelita Anak: editorial, bersih, kredibel, dan mudah dibaca. Cocok untuk membangun rasa percaya sebelum user mengajukan peminjaman.</p><Link className="btn btn-primary" href="/dashboard">Tambah perangkat</Link></div>
            <div className="feature-visual" />
          </div>
          <div className="mini-list">
            <div className="mini-card"><div className="mini-icon">📍</div><div><h4>Lokasi jelas</h4><p>Simpan lokasi sebagai alamat atau koordinat untuk pencarian terdekat.</p></div></div>
            <div className="mini-card"><div className="mini-icon">🪪</div><div><h4>Profil & KTM</h4><p>Upload foto profil dan KTM via Supabase Storage untuk proses verifikasi.</p></div></div>
            <div className="mini-card"><div className="mini-icon">🔔</div><div><h4>Notifikasi</h4><p>Route WhatsApp sudah disiapkan untuk update status pengajuan.</p></div></div>
          </div>
        </div>
      </section>

      <section className="testi" id="komunitas">
        <div className="wrap">
          <div className="section-head"><div className="eyebrow">Suara komunitas</div><h2>Dibuat untuk Bintang, Pejuang, dan pendamping pendidikan</h2><p>Contoh narasi yang bisa dipakai untuk membangun kredibilitas awal platform.</p></div>
          <div className="testi-grid">
            <div className="testi-card"><p className="testi-quote">"Laptop lama saya ternyata bisa jadi alat belajar untuk orang lain. Proses upload-nya jelas dan sederhana."</p><div className="testi-person"><div className="testi-avatar">B</div><div><b>Bintang</b><span>Pemilik perangkat</span></div></div></div>
            <div className="testi-card"><p className="testi-quote">"Saya bisa menulis mimpi, target, dan kebutuhan perangkat tanpa terasa seperti formulir bantuan yang kaku."</p><div className="testi-person"><div className="testi-avatar">P</div><div><b>Pejuang</b><span>Mahasiswa penerima dukungan</span></div></div></div>
            <div className="testi-card"><p className="testi-quote">"Wall of Dreams membantu komunitas melihat dampak, bukan hanya angka donasi atau jumlah perangkat."</p><div className="testi-person"><div className="testi-avatar">K</div><div><b>Komunitas</b><span>Pendamping program</span></div></div></div>
          </div>
        </div>
      </section>

      <section className="news-cta">
        <div className="wrap">
          <div className="news-cta-box">
            <div><h3>Siap mulai TechCareIDN?</h3><p>Masuk untuk mengelola perangkat, menulis dreams, dan menyiapkan aplikasi peminjaman pertama.</p></div>
            <form className="news-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Alamat email komunitas" aria-label="Email" />
              <Link className="btn" href="/register">Gabung</Link>
            </form>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <div className="footer-logo"><svg width="28" height="28" viewBox="0 0 44 44" fill="none"><path d="M22 3 L38 9 V21 C38 31 31 38.5 22 41 C13 38.5 6 31 6 21 V9 Z" fill="#0D2745" stroke="#C69A3E" strokeWidth="1.6"/><path d="M22 8 L33 12.3 V21 C33 28.5 28 34 22 36.2 C16 34 11 28.5 11 21 V12.3 Z" fill="#1F4E8C"/></svg><span>TechCareIDN</span></div>
              <p>Platform teknologi komunitas untuk memberi perangkat kesempatan kedua dan membantu Pejuang mengejar mimpi pendidikan.</p>
              <div className="emergency-box"><b>Stack murah & siap tumbuh</b><span>Next.js, Vercel, Supabase, Cloudinary, Google Maps, Midtrans, dan WhatsApp API.</span></div>
            </div>
            <div className="footer-col"><h5>Jelajahi</h5><ul><li><a href="#layanan">Layanan</a></li><li><a href="#perangkat">Perangkat</a></li><li><a href="#wall-of-dreams">Wall of Dreams</a></li></ul></div>
            <div className="footer-col"><h5>Akun</h5><ul><li><Link href="/login">Masuk</Link></li><li><Link href="/register">Daftar</Link></li><li><Link href="/dashboard">Dashboard</Link></li></ul></div>
            <div className="footer-col"><h5>Program</h5><ul><li><a href="#">Bintang Mimpi</a></li><li><a href="#">Pejuang Mimpi</a></li><li><a href="#">Second Chance</a></li></ul></div>
          </div>
          <div className="footer-bottom"><span>© 2026 TechCareIDN. Seluruh hak cipta dilindungi.</span><span>Kebijakan Privasi · Syarat & Ketentuan</span></div>
        </div>
      </footer>
    </>
  );
}
