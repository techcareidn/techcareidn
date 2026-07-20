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

  /** Set true supaya tulisan brand + tagline tampil rapi di samping logo */
  showBrandText: true,

  /** Ukuran logo di header. Jangan terlalu besar supaya tidak nabrak menu. */
  logoWidth: 78,
  logoHeight: 78
};
