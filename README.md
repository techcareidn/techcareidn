# TechCareIDN — Second Chance Technology

Platform "Empat Ruang" untuk merawat, meminjam, dan mewujudkan mimpi lewat teknologi.
Dibangun dengan **Next.js (App Router) + TypeScript**, data dari **Supabase** (Marketplace)
dan **Notion** (Dokter Gadget & Wall of Dreams). Font **Lora** (judul) + **Plus Jakarta Sans** (teks).

## Empat ruang (tiap ruang punya halaman sendiri)

| Ruang | Halaman | Deskripsi | Sumber data |
|---|---|---|---|
| **Dokter Gadget** | `/dokter-gadget` | Cek, rawat, dan catat kondisi perangkat — **jasa servis ditonjolkan** | Notion DB |
| **Marketplace** | `/marketplace` | Katalog pinjam perangkat murah atau gratis | Supabase |
| **Wall of Dreams** | `/wall-of-dreams` | Cerita target, proses, dan pencapaian | Notion DB |
| **Second Chance** | `/second-chance` | Alur bantuan untuk Pejuang Mimpi | — |

Di **beranda** (`/`), tiap ruang tampil sebagai rail horizontal (geser ke kanan) berisi
**maksimal 10 item** yang paling sering dilihat/diklik, lalu kartu **"Selengkapnya"** yang
langsung membuka halaman ruang tersebut. Batas diatur di `src/lib/constants.ts` (`MAX_ITEMS`).

## Peran di Marketplace (Supabase)

- **Bintang** — pemilik perangkat. Setelah daftar, bisa upload barang (donasi gratis / sewa murah).
- **Pejuang** — sisi yang bertransaksi. Mengajukan pinjam perangkat untuk mengejar mimpi.

Semua orang bisa upload asalkan sudah mendaftar akun.

## Struktur folder

```
src/
  app/
    layout.tsx                 # font Lora + Jakarta Sans (next/font), metadata
    globals.css                # seluruh style (palet, komponen, responsif)
    page.tsx                   # BERANDA — hero slider + 4 rail + peran + sumber data
    dokter-gadget/page.tsx     # ruang 1 (jasa servis + semua artikel)
    marketplace/page.tsx       # ruang 2 (katalog + filter + upload)
    wall-of-dreams/page.tsx    # ruang 3 (semua cerita)
    second-chance/page.tsx     # ruang 4 (alur bantuan)
    dashboard/
      page.tsx                 # dashboard Bintang
      sections/DeviceForm.tsx  # form upload perangkat → Supabase + Cloudinary + Maps
    register/page.tsx          # daftar (pilih peran Bintang/Pejuang)
    login/page.tsx             # masuk
  components/
    Shell.tsx Nav.tsx Footer.tsx SectionHead.tsx RoomHeader.tsx
    HeroSlider.tsx Rail.tsx Icon.tsx
    UploadToCloudinary.tsx MapPicker.tsx
    cards/ ArticleCard ServiceCard DeviceCard StoryCard SeeMoreCard
  config/siteBrand.ts          # nama, tagline, logo
  lib/
    types.ts constants.ts format.ts
    supabase/{client,server}.ts
    notion/client.ts
    data/{mock,queries}.ts     # SEMUA data mengalir lewat queries.ts
```

## Menjalankan

```bash
npm install
cp .env.example .env.local   # isi kredensial
npm run dev
```

Default memakai **data mock** (`NEXT_PUBLIC_USE_MOCK=true`) supaya bisa langsung jalan
tanpa backend. Situs tetap tampil penuh dengan data contoh.

## Menyambung ke data asli

Semua data melewati `src/lib/data/queries.ts`. Cukup ganti isi tiap fungsi:

- **`getDevices()` → Supabase**
  ```ts
  const sb = supabaseServer();
  const { data } = await sb.from("devices")
    .select("*, profiles(nama)")
    .order("views", { ascending: false });
  return data ?? [];
  ```
- **`getArticles()` & `getStories()` → Notion** (pakai helper `notion.query` di `src/lib/notion/client.ts`).

Urutan "paling sering dilihat" memakai kolom `views` (Supabase) / properti `Views` (Notion).
Setel `NEXT_PUBLIC_USE_MOCK=false` setelah query asli siap.

## Skema Supabase (disarankan)

```sql
create table devices (
  id uuid primary key default gen_random_uuid(),
  nama text, kategori text, foto text, spesifikasi text, minus text,
  status text default 'tersedia',      -- tersedia | dipinjam | maintenance
  harga int default 0, gratis bool default true,
  lokasi text, lat float8, lng float8,
  owner uuid references auth.users, views int default 0,
  created_at timestamptz default now()
);
alter table devices enable row level security;
create policy "baca semua" on devices for select using (true);
create policy "upload jika login" on devices for insert with check (auth.uid() = owner);
```

## Catatan

- Halaman detail (`/marketplace/[id]`, `/dokter-gadget/[slug]`, dst.) belum dibuat —
  tautannya sudah disiapkan, tinggal ditambahkan route dinamisnya.
- `preview.html` (di root zip) = render statis beranda untuk pratinjau cepat tanpa install.
