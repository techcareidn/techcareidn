// ---------------------------------------------------------------------------
// Konfigurasi brand — dipakai Nav & Footer
// logoMode: "mark" (SVG bawaan) | "image" | "emoji" | "text"
// ---------------------------------------------------------------------------
export const siteBrand = {
  name: "TechCareIDN",
  tagline: "Second Chance Technology",
  logoMode: "mark" as "mark" | "image" | "emoji" | "text",
  logoImageUrl: "",
  logoWidth: 44,
  logoHeight: 44,
  logoEmoji: "\uD83D\uDEE1\uFE0F",
  showBrandText: true
};

export type SiteBrand = typeof siteBrand;
