import type { Device, Article, Story, Slide } from "@/lib/types";

// ---------------------------------------------------------------------------
// DATA CONTOH (mock). Dipakai saat NEXT_PUBLIC_USE_MOCK=true atau backend kosong.
// Ganti dengan hasil query Supabase / Notion di src/lib/data/queries.ts
// ---------------------------------------------------------------------------

const NAMA = ["Rangga", "Dewi", "Fajar", "Sinta", "Bagus", "Nadia", "Yoga", "Putri", "Iqbal", "Maya", "Dias", "Rani"];
const KOTA = ["Yogyakarta", "Bandung", "Surabaya", "Jakarta", "Semarang", "Malang", "Solo", "Depok", "Bekasi", "Medan"];

// --- Marketplace (Supabase) ---
const KAT = ["Laptop", "Smartphone", "Tablet", "Monitor", "Printer", "Kamera", "Router", "Proyektor", "Keyboard", "Hardisk"];
export const mockDevices: Device[] = Array.from({ length: 14 }).map((_, i) => {
  const gratis = i % 3 === 0;
  const status = (i % 7 === 0 ? "dipinjam" : i % 11 === 0 ? "maintenance" : "tersedia") as Device["status"];
  return {
    id: `dev-${i + 1}`,
    nama: `${KAT[i % KAT.length]} ${["Belajar", "Kerja", "Ngoding", "Desain", "Kuliah"][i % 5]} #${i + 1}`,
    kategori: KAT[i % KAT.length],
    foto: "",
    spesifikasi: ["Core i5 / 8GB / SSD 256", "Snapdragon 8 / 8GB", "10 inci / 4GB", "24\" IPS 75Hz", "Inktank warna"][i % 5],
    minus: ["Baret halus", "Baterai 80%", "Tanpa charger ori", "Mulus", "Engsel agak seret"][i % 5],
    status,
    harga: gratis ? 0 : 25000 + (i % 6) * 15000,
    gratis,
    lokasi: KOTA[i % KOTA.length],
    owner: `user-${i + 1}`,
    ownerNama: NAMA[i % NAMA.length],
    views: 4200 - i * 220
  };
});

// --- Dokter Gadget (Notion) ---
export const mockArticles: Article[] = [
  { id: "svc", slug: "jasa-servis-gadget", title: "Jasa Servis Gadget", excerpt: "Serahkan ke teknisi terverifikasi TechCareIDN. Diagnosa gratis, garansi 30 hari.", cover: "a2", views: 9800, isService: true, hargaMulai: 35000, hargaCoret: 60000 },
  { id: "a1", slug: "laptop-lemot", title: "5 Sebab Laptop Lemot & Cara Membenarkannya", excerpt: "Dari startup menumpuk sampai thermal paste kering — urut dari yang paling sering.", cover: "a1", views: 7400 },
  { id: "a2", slug: "baterai-hp-boros", title: "Baterai HP Boros? Cek 7 Hal Ini Dulu", excerpt: "Sebelum ganti baterai, kalibrasi & audit aplikasi background dulu.", cover: "a3", views: 6600 },
  { id: "a3", slug: "layar-bergaris", title: "Layar Laptop Bergaris: Kabel Fleksibel atau Panel?", excerpt: "Cara membedakan kerusakan kabel dan panel tanpa bongkar total.", cover: "a4", views: 5900 },
  { id: "a4", slug: "keyboard-mati", title: "Beberapa Tombol Keyboard Mati, Ini Solusinya", excerpt: "Bersihkan, remap, atau ganti — pilih sesuai tingkat kerusakan.", cover: "a1", views: 5200 },
  { id: "a5", slug: "hp-cepat-panas", title: "HP Cepat Panas Saat Dipakai? Begini Menanganinya", excerpt: "Kenali beda panas normal dan panas gejala kerusakan.", cover: "a3", views: 4800 },
  { id: "a6", slug: "data-recovery", title: "Hardisk Tiba-tiba Tak Terbaca: Selamatkan Datamu", excerpt: "Langkah aman sebelum data hilang permanen.", cover: "a4", views: 4300 },
  { id: "a7", slug: "charger-rusak", title: "Charger Rusak atau Port yang Bermasalah?", excerpt: "Tes cepat pakai charger lain & bersihkan port.", cover: "a2", views: 3900 },
  { id: "a8", slug: "ssd-vs-hdd", title: "Upgrade SSD: Napas Baru untuk Laptop Lama", excerpt: "Panduan kloning sistem tanpa install ulang.", cover: "a1", views: 3500 },
  { id: "a9", slug: "speaker-pecah", title: "Suara Speaker HP Pecah? Cek Ini Dulu", excerpt: "Kadang cuma debu, kadang perlu ganti modul.", cover: "a3", views: 3100 },
  { id: "a10", slug: "wifi-lemot", title: "WiFi Sering Putus: Perangkat atau Jaringan?", excerpt: "Diagnosa dari sisi driver sampai router.", cover: "a4", views: 2800 },
  { id: "a11", slug: "restart-sendiri", title: "Laptop Restart Sendiri, Apa Penyebabnya?", excerpt: "Overheating, RAM, atau PSU — begini urutan ceknya.", cover: "a1", views: 2500 }
];

// --- Wall of Dreams (Notion) ---
export const mockStories: Story[] = [
  { id: "s1", nama: "Rangga", peran: "Pejuang · SMK TKJ", kutipan: "Dulu tugas coding numpang warnet. Sekarang punya laptop pinjaman, aku sudah magang di startup lokal.", status: "win", statusLabel: "Tercapai", views: 8200 },
  { id: "s2", nama: "Dewi", peran: "Pejuang · Mahasiswa DKV", kutipan: "Target: bisa desain dari rumah. Prosesnya berat, tapi tablet dari Bintang bikin portofolioku hidup.", status: "grow", statusLabel: "Bertumbuh", views: 7100 },
  { id: "s3", nama: "Fajar", peran: "Pejuang · Freelancer", kutipan: "Masih nabung buat perangkat sendiri, tapi tiap order kecil aku catat sebagai satu langkah maju.", status: "fight", statusLabel: "Berjuang", views: 6400 },
  { id: "s4", nama: "Sinta", peran: "Bintang · Donatur", kutipan: "Laptop lamaku nganggur di lemari. Ternyata buat orang lain itu awal dari mimpi besar.", status: "win", statusLabel: "Tercapai", views: 5800 },
  { id: "s5", nama: "Bagus", peran: "Pejuang · Santri", kutipan: "Belajar jadi admin media pesantren pakai HP pinjaman. Sekarang kelola 3 akun.", status: "grow", statusLabel: "Bertumbuh", views: 5200 },
  { id: "s6", nama: "Nadia", peran: "Pejuang · Ibu Rumah Tangga", kutipan: "Buka toko online dari nol. Perangkat pinjaman jadi modal pertamaku.", status: "grow", statusLabel: "Bertumbuh", views: 4700 },
  { id: "s7", nama: "Yoga", peran: "Pejuang · Anak Rantau", kutipan: "Sempat mau berhenti kuliah karena tak punya laptop. Wall of Dreams bikin aku bertahan.", status: "fight", statusLabel: "Berjuang", views: 4200 },
  { id: "s8", nama: "Putri", peran: "Pejuang · Pelajar", kutipan: "Ikut lomba coding pertama kali. Belum menang, tapi aku sudah berani ikut.", status: "fight", statusLabel: "Berjuang", views: 3800 },
  { id: "s9", nama: "Iqbal", peran: "Bintang · Teknisi", kutipan: "Aku benerin, mereka pakai untuk bermimpi. Rasanya seperti dua kali menang.", status: "win", statusLabel: "Tercapai", views: 3400 },
  { id: "s10", nama: "Maya", peran: "Pejuang · Guru Honorer", kutipan: "Bikin materi ajar interaktif dari tablet pinjaman. Murid-muridku lebih semangat.", status: "grow", statusLabel: "Bertumbuh", views: 3000 },
  { id: "s11", nama: "Dias", peran: "Pejuang · Difabel", kutipan: "Perangkat yang sesuai kebutuhanku susah dicari. Di sini aku akhirnya nemu.", status: "fight", statusLabel: "Berjuang", views: 2600 }
];

// --- Hero slider (postingan terbaru) ---
export const mockSlides: Slide[] = [
  { room: "Dokter Gadget", title: "Laptop Mati Total Setelah Kena Air? Ini Langkah Daruratnya", excerpt: "Panduan terbaru dari teknisi kami — tindakan 10 menit pertama yang menyelamatkan perangkat.", author: "Tim Dokter Gadget", date: "Baru saja", read: "6 mnt baca", icon: "repair", theme: "s1", href: "/dokter-gadget" },
  { room: "Wall of Dreams", title: "Dari Warnet ke Startup: Cerita Rangga yang Baru Tayang", excerpt: "Kisah terbaru minggu ini di Wall of Dreams — proses, jatuh bangun, dan pencapaiannya.", author: "Rangga", date: "2 jam lalu", read: "4 mnt baca", icon: "dream", theme: "s2", href: "/wall-of-dreams" },
  { room: "Marketplace", title: "5 Laptop Gratis Baru Ditambahkan Para Bintang Hari Ini", excerpt: "Perangkat terbaru siap dipinjam. Daftar dulu sebagai Pejuang untuk mengajukan.", author: "Marketplace", date: "Hari ini", read: "Lihat katalog", icon: "laptop", theme: "s3", href: "/marketplace" }
];
