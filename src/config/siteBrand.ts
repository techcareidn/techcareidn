export const siteBrand = {
  /** Nama brand yang tampil di header dan footer */
  name: "TechCareIDN",

  /** Teks kecil di bawah nama brand */
  tagline: "Second Chance Tech Platform",

  /**
   * Pilihan logo:
   * - "mark"  = logo bawaan berbentuk badge/shield
   * - "image" = pakai file gambar sendiri dari public/logo.png atau URL
   * - "emoji" = pakai emoji/icon teks
   * - "text"  = tanpa gambar, hanya nama brand
   */
  logoMode: "mark" as "mark" | "image" | "emoji" | "text",

  /** Kalau logoMode = "image", taruh file di public/logo.png lalu isi "/logo.png" */
  logoImageUrl: "/logo.png",

  /** Kalau logoMode = "emoji", ganti emoji di sini */
  logoEmoji: "⚡"
};
