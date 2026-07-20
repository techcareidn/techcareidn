import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TechCareIDN",
  description: "Platform pinjam dan berbagi perangkat untuk mendukung mimpi pendidikan."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
