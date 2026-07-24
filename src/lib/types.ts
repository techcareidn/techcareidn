// ---------------------------------------------------------------------------
// Tipe data bersama
// ---------------------------------------------------------------------------
export type DeviceStatus = "tersedia" | "dipinjam" | "maintenance";

export type RoomKey = "dokter-gadget" | "marketplace" | "wall-of-dreams" | "second-chance";

// Peran akun: Bintang = pemilik perangkat (upload), Pejuang = peminjam (transaksi)
export type Peran = "pejuang" | "bintang";

// Marketplace → Supabase (tabel: devices)
export type Device = {
  id: string;
  nama: string;
  kategori: string;
  foto: string;
  spesifikasi: string;
  minus: string;
  status: DeviceStatus;
  harga: number;
  gratis: boolean;
  lokasi: string;
  owner: string;      // user id Bintang
  ownerNama: string;  // nama Bintang (join profiles)
  views: number;      // untuk urutan "paling sering dilihat"
};

// Item keranjang pinjam (dashboard Pejuang, ala POS Kans Resto)
export type CartItem = {
  device: Device;
  qty: number;
};

// Akun (tabel Supabase: profiles) — dibuat saat daftar, aktif setelah verifikasi email
export type Profile = {
  id: string;
  nama: string;
  universitas: string;
  email: string;
  peran: Peran;
  status: "unverified" | "verified";
};

// Dokter Gadget → Notion DB (artikel + jasa servis)
export type Article = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  cover: "a1" | "a2" | "a3" | "a4";
  views: number;
  isService?: boolean; // true = kartu jasa servis yang ditonjolkan
  hargaMulai?: number;
  hargaCoret?: number;
};

// Wall of Dreams → Notion DB (dreams/stories)
export type DreamStatus = "fight" | "grow" | "win";
export type Story = {
  id: string;
  nama: string;
  peran: string;
  kutipan: string;
  status: DreamStatus;
  statusLabel: string;
  views: number;
};

// Hero slider (postingan terbaru)
export type Slide = {
  room: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  read: string;
  icon: "laptop" | "repair" | "dream";
  theme: "s1" | "s2" | "s3";
  href: string;
};
