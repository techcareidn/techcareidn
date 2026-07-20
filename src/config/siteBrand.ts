export const siteBrand = {
  /** Nama brand, dipakai untuk alt text dan footer */
  name: "TechCareIDN",

  /** Teks kecil di bawah nama brand */
  tagline: "Second Chance Tech Platform",

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
   * Kalau file logo SVG/PNG kamu sudah berisi tulisan brand,
   * set false supaya teks TechCareIDN tidak dobel di sebelah logo.
   */
  showBrandText: false,

  /** Ukuran logo gambar di header */
  logoWidth: 220,
  logoHeight: 82
};
