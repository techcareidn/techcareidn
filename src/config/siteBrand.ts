export const siteBrand = {
  /** Nama brand yang tampil di header dan footer */
  name: "TechCare",

  /** Teks kecil di bawah nama brand */
  tagline: "Rebulild Your Trust, Remember TechCare",

  /**
   * Pilihan logo:
   * - "mark"  = logo bawaan
   * - "image" = pakai file gambar dari folder public
   * - "emoji" = pakai emoji/icon teks
   * - "text"  = tanpa gambar, hanya teks
   */
  logoMode: "image" as "mark" | "image" | "emoji" | "text",

  /** File logo kamu ada di: public/logo.svg */
  logoImageUrl: "/logo.svg",

  /** Kalau logoMode = "emoji" */
  logoEmoji: "⚡",

  /**
   * Set true supaya tulisan brand + tagline tampil di samping logo.
   * Set false kalau file logo kamu sudah berisi tulisan lengkap.
   */
  showBrandText: true,

  /**
   * Ukuran logo di header.
   * Karena teks brand ditampilkan lagi, logo dibuat sebagai ikon/mark saja.
   */
  logoWidth: 86,
  logoHeight: 86
};
