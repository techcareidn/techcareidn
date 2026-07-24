import Link from "next/link";
import { siteBrand } from "@/config/siteBrand";

const PHOTOS = [
  { src: "/img/moment-1.jpg", rot: -6, cap: "Rangga terima laptop" },
  { src: "/img/moment-2.jpg", rot: 5, cap: "Dewi & tablet desain" },
  { src: "/img/moment-3.jpg", rot: -4, cap: "Gadget selesai dibenerin" },
  { src: "/img/moment-4.jpg", rot: 7, cap: "HP Yoga normal lagi" }
];

/**
 * Split-screen auth (kiri: foto momen penerima/servis gadget, kanan: form).
 * Foto ada di public/img/ — ganti dengan foto asli kapan saja.
 */
export default function AuthShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="tc-page">
      <div className="tc-auth2">
        <aside className="tc-auth2-left">
          <Link href="/" className="tc-auth2-brand">
            {siteBrand.logoMode === "image" ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={siteBrand.logoImageUrl} width={40} height={40} alt={siteBrand.name} />
            ) : null}
            <span>{siteBrand.name}</span>
          </Link>

          <div className="tc-auth2-photos">
            {PHOTOS.map((p, i) => (
              <figure key={i} className={`tc-photo p${i + 1}`} style={{ ['--rot' as string]: `${p.rot}deg` }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.src} alt={p.cap} />
                <figcaption>{p.cap}</figcaption>
              </figure>
            ))}
            <span className="tc-spark s-a">✦</span>
            <span className="tc-spark s-b">✦</span>
          </div>

          <div className="tc-auth2-copy">
            <h2>Teknologi punya kesempatan kedua.</h2>
            <p>Ribuan Bintang meminjamkan perangkat, ribuan Pejuang mewujudkan mimpi. Kamu yang mana?</p>
          </div>
        </aside>

        <main className="tc-auth2-right">
          <div className="tc-auth2-inner">{children}</div>
        </main>
      </div>
    </div>
  );
}
