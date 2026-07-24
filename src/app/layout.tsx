import type { Metadata } from "next";
import { Lora, Plus_Jakarta_Sans } from "next/font/google";
import { siteBrand } from "@/config/siteBrand";
import "./globals.css";

// Font sesuai permintaan: Lora (judul) + Plus Jakarta Sans (teks)
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap"
});
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap"
});

export const metadata: Metadata = {
  title: `${siteBrand.name} — ${siteBrand.tagline}`,
  description:
    "Empat ruang untuk merawat, meminjam, dan mewujudkan mimpi lewat teknologi: Dokter Gadget, Marketplace, Wall of Dreams, dan Second Chance."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${lora.variable} ${jakarta.variable}`}>
      <body>{children}</body>
    </html>
  );
}
