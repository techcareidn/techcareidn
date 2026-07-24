import Link from "next/link";
import Shell from "@/components/Shell";
import HeroSlider from "@/components/HeroSlider";
import Rail from "@/components/Rail";
import SectionHead from "@/components/SectionHead";
import Icon from "@/components/Icon";
import ArticleCard from "@/components/cards/ArticleCard";
import ServiceCard from "@/components/cards/ServiceCard";
import DeviceCard from "@/components/cards/DeviceCard";
import StoryCard from "@/components/cards/StoryCard";
import SeeMoreCard from "@/components/cards/SeeMoreCard";
import { ROOMS, MAX_ITEMS } from "@/lib/constants";
import {
  getLatestSlides, getPopularArticles, getPopularDevices, getPopularStories
} from "@/lib/data/queries";

export default async function HomePage() {
  const [slides, articles, devices, stories] = await Promise.all([
    getLatestSlides(),
    getPopularArticles(),
    getPopularDevices(),
    getPopularStories()
  ]);

  const service = articles.find((a) => a.isService);
  const popularArticles = articles.filter((a) => !a.isService).slice(0, MAX_ITEMS);

  return (
    <Shell>
      {/* ===== HERO: slider postingan terbaru + 2 promo ===== */}
      <section className="tc-hero">
        <div className="tc-wrap tc-hero-grid">
          <HeroSlider slides={slides} />
          <div className="tc-hero-side">
            <Link href="/marketplace" className="tc-promo-card gold">
              <span className="tc-promo-tag">Marketplace</span>
              <h3>Pinjam perangkat, gratis atau murah</h3>
              <p>Daftar sebagai Pejuang untuk mulai mengajukan.</p>
              <span className="tc-promo-link">Lihat katalog <Icon name="arrow-right" size={15} /></span>
            </Link>
            <Link href="/dokter-gadget/jasa-servis-gadget" className="tc-promo-card sky">
              <span className="tc-promo-tag">Dokter Gadget</span>
              <h3>Jasa servis gadget terpercaya</h3>
              <p>Diagnosa gratis, garansi 30 hari.</p>
              <span className="tc-promo-link">Pesan servis <Icon name="arrow-right" size={15} /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== EMPAT RUANG ===== */}
      <section className="tc-section">
        <div className="tc-wrap">
          <SectionHead eyebrow="Empat Ruang" title="Tiap ruang punya bagiannya sendiri"
            desc="Jelajahi keempat ruang TechCareIDN. Klik ruang untuk membuka halaman lengkapnya." />
          <div className="tc-rooms">
            {ROOMS.map((r) => (
              <Link key={r.key} href={`/${r.key}`} className="tc-room-card">
                <div className="tc-room-badge"><Icon name={r.icon as any} size={34} /></div>
                <h4>{r.label}</h4>
                <span>{r.desc}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DOKTER GADGET (rail, jasa servis di depan) ===== */}
      <section className="tc-section tc-bg-white">
        <div className="tc-wrap">
          <SectionHead eyebrow="Dokter Gadget" title="Cek, rawat, dan catat kondisi perangkat"
            desc="Diawali jasa servis, lalu 10 artikel yang paling sering dibaca."
            href="/dokter-gadget" />
          <Rail>
            {service && <ServiceCard a={service} />}
            {popularArticles.map((a, i) => <ArticleCard key={a.id} a={a} rank={i + 1} />)}
            <SeeMoreCard href="/dokter-gadget" label="artikel & servis" />
          </Rail>
        </div>
      </section>

      {/* ===== MARKETPLACE (rail) ===== */}
      <section className="tc-section">
        <div className="tc-wrap">
          <SectionHead eyebrow="Marketplace" title="Katalog pinjam perangkat murah atau gratis"
            desc="10 perangkat paling sering dilihat dari para Bintang. Daftar dulu untuk meminjam."
            href="/marketplace" />
          <Rail>
            {devices.map((d) => <DeviceCard key={d.id} d={d} />)}
            <SeeMoreCard href="/marketplace" label="perangkat" />
          </Rail>
        </div>
      </section>

      {/* ===== PERAN: Bintang vs Pejuang ===== */}
      <section className="tc-section tc-bg-white">
        <div className="tc-wrap">
          <SectionHead eyebrow="Marketplace · Supabase" title="Dua peran di Marketplace"
            desc="Semua orang bisa upload setelah mendaftar akun." />
          <div className="tc-roles">
            <div className="tc-role-card bintang">
              <div className="tc-role-ic"><Icon name="star" size={28} /></div>
              <h4>Bintang — Pemilik Perangkat</h4>
              <p>Menyumbang atau menyewakan perangkat. Cukup daftar, lalu upload barang ke katalog.</p>
              <ul className="tc-role-list">
                <li><Icon name="check" size={18} /> Upload perangkat (foto, spesifikasi, lokasi)</li>
                <li><Icon name="check" size={18} /> Pilih gratis atau sewa murah</li>
                <li><Icon name="check" size={18} /> Kelola status: tersedia / dipinjam / perawatan</li>
              </ul>
              <Link href="/register" className="tc-btn tc-btn-gold">Jadi Bintang</Link>
            </div>
            <div className="tc-role-card pejuang">
              <div className="tc-role-ic"><Icon name="user" size={28} /></div>
              <h4>Pejuang — Sisi yang Bertransaksi</h4>
              <p>Mengajukan pinjam perangkat untuk belajar, bekerja, dan mengejar mimpi.</p>
              <ul className="tc-role-list">
                <li><Icon name="check" size={18} /> Ajukan pinjam perangkat yang tersedia</li>
                <li><Icon name="check" size={18} /> Ceritakan progres di Wall of Dreams</li>
                <li><Icon name="check" size={18} /> Akses jalur bantuan Second Chance</li>
              </ul>
              <Link href="/register" className="tc-btn tc-btn-primary">Jadi Pejuang</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WALL OF DREAMS (rail) ===== */}
      <section className="tc-section">
        <div className="tc-wrap">
          <SectionHead eyebrow="Wall of Dreams" title="Cerita target, proses, dan pencapaian"
            desc="10 cerita paling sering dibaca dari para Pejuang dan Bintang."
            href="/wall-of-dreams" />
          <Rail>
            {stories.map((s) => <StoryCard key={s.id} s={s} />)}
            <SeeMoreCard href="/wall-of-dreams" label="cerita" />
          </Rail>
        </div>
      </section>

      {/* ===== SUMBER DATA ===== */}
      <section className="tc-section tc-bg-white">
        <div className="tc-wrap">
          <SectionHead eyebrow="Di balik layar" title="Dari mana datanya?" />
          <div className="tc-ds-note">
            <div className="tc-ds-card">
              <div className="tc-ds-ic supa">SB</div>
              <h4>Marketplace → Supabase</h4>
              <p>Semua orang bisa upload perangkat setelah mendaftar. Bintang mengunggah, Pejuang bertransaksi.</p>
            </div>
            <div className="tc-ds-card">
              <div className="tc-ds-ic notion">N</div>
              <h4>Dokter Gadget → Notion DB</h4>
              <p>Artikel perawatan perangkat, dengan jasa servis gadget yang ditonjolkan.</p>
            </div>
            <div className="tc-ds-card">
              <div className="tc-ds-ic notion">N</div>
              <h4>Wall of Dreams → Notion DB</h4>
              <p>Kumpulan cerita: target, proses, dan pencapaian para Pejuang.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <section className="tc-news">
        <div className="tc-wrap">
          <div className="tc-news-box">
            <div>
              <h3>Jadi bagian dari Second Chance</h3>
              <p>Dapat kabar perangkat baru, cerita inspiratif, dan tips servis langsung ke emailmu.</p>
            </div>
            <form className="tc-news-form">
              <input type="email" placeholder="Alamat email kamu" />
              <button type="submit" className="tc-btn tc-btn-primary">Langganan</button>
            </form>
          </div>
        </div>
      </section>
    </Shell>
  );
}
