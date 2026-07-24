// ---------------------------------------------------------------------------
// Notion — sumber data untuk Dokter Gadget (artikel + jasa servis) & Wall of Dreams
// Pakai REST API langsung supaya tidak menambah dependency.
// ---------------------------------------------------------------------------
const NOTION_VERSION = "2022-06-28";
const NOTION_BASE = "https://api.notion.com/v1";

async function notionQuery(databaseId: string, body: Record<string, unknown> = {}) {
  const res = await fetch(`${NOTION_BASE}/databases/${databaseId}/query`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
      "Notion-Version": NOTION_VERSION,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body),
    // revalidate tiap 5 menit
    next: { revalidate: 300 }
  });
  if (!res.ok) throw new Error(`Notion query gagal: ${res.status}`);
  return res.json();
}

// Ambil nilai teks dari sebuah property Notion
export function plain(prop: any): string {
  if (!prop) return "";
  const arr = prop.title || prop.rich_text;
  if (Array.isArray(arr)) return arr.map((t: any) => t.plain_text).join("");
  if (prop.select) return prop.select.name;
  if (typeof prop.number === "number") return String(prop.number);
  if (typeof prop.checkbox === "boolean") return prop.checkbox ? "true" : "false";
  return "";
}

export const notion = { query: notionQuery };
