// ---------------------------------------------------------------------------
// Konfigurasi brand — dipakai Nav & Footer
// logoMode: "mark" (SVG bawaan) | "image" | "emoji" | "text"
// Logo asli ada di public/logo.svg → diakses sebagai "/logo.svg"
// ---------------------------------------------------------------------------
export const siteBrand = {
  name: "TechCareIDN",
  tagline: "Second Chance Technology",
  logoMode: "image" as "mark" | "image" | "emoji" | "text",
  logoImageUrl: "/logo.svg",
  logoWidth: 44,
  logoHeight: 44,
  logoEmoji: "\uD83D\uDEE1\uFE0F",
  showBrandText: true
};

export type SiteBrand = typeof siteBrand;
