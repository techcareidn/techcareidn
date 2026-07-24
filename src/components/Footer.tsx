import Link from "next/link";
import { siteBrand } from "@/config/siteBrand";

export default function Footer() {
  return (
    <footer className="tc-footer">
      <div className="tc-wrap">
        <div className="tc-footer-grid">
          <div>
            <div className="tc-footer-logo">
              <svg width="34" height="34" viewBox="0 0 44 44" fill="none" aria-hidden>
                <rect width="44" height="44" rx="12" fill="#C69A3E" />
                <path d="M18 21.5l3 3 6-6" stroke="#0D2745" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {siteBrand.name}
            </div>
            <p>Empat ruang untuk merawat, meminjam, dan mewujudkan mimpi lewat teknologi. Menghubungkan Bintang (pemilik perangkat) dengan Pejuang (yang membutuhkan).</p>
          </div>
          <div className="tc-footer-col">
            <h5>Ruang</h5>
            <ul>
              <li><Link href="/dokter-gadget">Dokter Gadget</Link></li>
              <li><Link href="/marketplace">Marketplace</Link></li>
              <li><Link href="/wall-of-dreams">Wall of Dreams</Link></li>
              <li><Link href="/second-chance">Second Chance</Link></li>
            </ul>
          </div>
          <div className="tc-footer-col">
            <h5>Komunitas</h5>
            <ul>
              <li><Link href="/register">Jadi Bintang</Link></li>
              <li><Link href="/register">Jadi Pejuang</Link></li>
              <li><Link href="/dashboard">Upload Perangkat</Link></li>
              <li><Link href="/dokter-gadget">Jasa Servis</Link></li>
            </ul>
          </div>
          <div className="tc-footer-col">
            <h5>Bantuan</h5>
            <ul>
              <li><Link href="#">Cara Kerja</Link></li>
              <li><Link href="#">FAQ</Link></li>
              <li><Link href="#">Kontak</Link></li>
              <li><Link href="#">Kebijakan Privasi</Link></li>
            </ul>
          </div>
        </div>
        <div className="tc-footer-bottom">
          <span>© {new Date().getFullYear()} {siteBrand.name}. {siteBrand.tagline}.</span>
          <span>Dibuat dengan ❤ untuk para Pejuang Mimpi.</span>
        </div>
      </div>
    </footer>
  );
}
