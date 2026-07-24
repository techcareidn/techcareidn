import type { Device, Article, Story, Slide } from "@/lib/types";
import { MAX_ITEMS } from "@/lib/constants";
import { mockDevices, mockArticles, mockStories, mockSlides } from "./mock";

// ---------------------------------------------------------------------------
// Lapisan data. Default memakai mock; ganti isi tiap fungsi dengan query asli.
// Semua fungsi async supaya gampang disambung ke Supabase / Notion.
// ---------------------------------------------------------------------------
const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK !== "false";
const byViews = <T extends { views: number }>(a: T, b: T) => b.views - a.views;

// === MARKETPLACE (Supabase) ================================================
// Contoh query asli:
//   const sb = supabaseServer();
//   const { data } = await sb.from("devices")
//     .select("*, profiles(nama)").order("views", { ascending: false });
export async function getDevices(limit?: number): Promise<Device[]> {
  const rows = USE_MOCK ? [...mockDevices] : [...mockDevices]; // TODO: Supabase
  rows.sort(byViews);
  return typeof limit === "number" ? rows.slice(0, limit) : rows;
}
export const getPopularDevices = () => getDevices(MAX_ITEMS);

// === DOKTER GADGET (Notion) ================================================
// Jasa servis selalu di depan, lalu artikel diurut dari yang paling sering dilihat.
export async function getArticles(limit?: number): Promise<Article[]> {
  const rows = USE_MOCK ? [...mockArticles] : [...mockArticles]; // TODO: Notion
  const service = rows.filter((a) => a.isService);
  const rest = rows.filter((a) => !a.isService).sort(byViews);
  const ordered = [...service, ...rest];
  return typeof limit === "number" ? ordered.slice(0, limit) : ordered;
}
// +1 supaya kartu jasa servis tidak memakan slot 10 artikel populer
export const getPopularArticles = () => getArticles(MAX_ITEMS + 1);

// === WALL OF DREAMS (Notion) ===============================================
export async function getStories(limit?: number): Promise<Story[]> {
  const rows = USE_MOCK ? [...mockStories] : [...mockStories]; // TODO: Notion
  rows.sort(byViews);
  return typeof limit === "number" ? rows.slice(0, limit) : rows;
}
export const getPopularStories = () => getStories(MAX_ITEMS);

// === HERO SLIDER (postingan terbaru lintas ruang) ==========================
export async function getLatestSlides(): Promise<Slide[]> {
  return mockSlides;
}
