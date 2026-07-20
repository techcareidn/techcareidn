export type Role = "Bintang" | "Pejuang";
export type DeviceStatus = "tersedia" | "dipinjam" | "maintenance";
export type DreamStatus = "sedang_berjuang" | "bertumbuh" | "berhasil";
export type ApplicationStatus = "pending" | "approved" | "rejected";

export type Device = {
  id: string;
  owner: string | null;
  nama: string;
  kategori: string | null;
  foto: string | null;
  spesifikasi: string | null;
  minus: string | null;
  status: DeviceStatus;
  harga: number;
  gratis: boolean;
  lokasi: string | null;
};

export type Dream = {
  id: string;
  user_id: string;
  judul_mimpi: string;
  deskripsi: string | null;
  target: string | null;
  status: DreamStatus;
};
