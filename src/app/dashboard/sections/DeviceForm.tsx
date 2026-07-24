"use client";
import { useState } from "react";
import { supabaseBrowser } from "@/lib/supabase/client";
import UploadToCloudinary from "@/components/UploadToCloudinary";
import MapPicker, { type LatLng } from "@/components/MapPicker";
import Icon from "@/components/Icon";
import type { DeviceStatus } from "@/lib/types";

const KATEGORI = ["Laptop", "Smartphone", "Tablet", "Monitor", "Printer", "Kamera", "Router", "Proyektor", "Lainnya"];

export default function DeviceForm() {
  const [foto, setFoto] = useState("");
  const [gratis, setGratis] = useState(true);
  const [pos, setPos] = useState<LatLng>();
  const [status, setStatus] = useState<DeviceStatus>("tersedia");
  const [saving, setSaving] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSaving(true); setError("");
    const f = new FormData(e.currentTarget);
    const payload = {
      nama: String(f.get("nama") || ""),
      kategori: String(f.get("kategori") || ""),
      spesifikasi: String(f.get("spesifikasi") || ""),
      minus: String(f.get("minus") || ""),
      lokasi: String(f.get("lokasi") || ""),
      harga: gratis ? 0 : Number(f.get("harga") || 0),
      gratis,
      status,
      foto,
      lat: pos?.lat ?? null,
      lng: pos?.lng ?? null
    };
    try {
      const sb = supabaseBrowser();
      const { error } = await sb.from("devices").insert(payload);
      if (error) throw error;
      setDone(true);
    } catch (err: any) {
      setError(err?.message || "Gagal menyimpan. Cek koneksi Supabase.");
    } finally {
      setSaving(false);
    }
  };

  if (done) {
    return (
      <div className="tc-form-card tc-form-done">
        <Icon name="check" size={40} />
        <h3>Perangkat berhasil diunggah!</h3>
        <p>Perangkatmu kini tampil di Marketplace dan bisa diajukan oleh para Pejuang.</p>
        <button className="tc-btn tc-btn-primary" onClick={() => setDone(false)}>Upload lagi</button>
      </div>
    );
  }

  return (
    <form className="tc-form-card" onSubmit={onSubmit}>
      <div className="tc-field">
        <label>Foto perangkat</label>
        <UploadToCloudinary onUploaded={setFoto} label="Unggah foto perangkat" />
      </div>

      <div className="tc-field-row">
        <div className="tc-field">
          <label>Nama perangkat</label>
          <input name="nama" required placeholder="cth: Laptop Lenovo ThinkPad" />
        </div>
        <div className="tc-field">
          <label>Kategori</label>
          <select name="kategori">{KATEGORI.map((k) => <option key={k}>{k}</option>)}</select>
        </div>
      </div>

      <div className="tc-field">
        <label>Spesifikasi</label>
        <input name="spesifikasi" placeholder="cth: Core i5, RAM 8GB, SSD 256GB" />
      </div>

      <div className="tc-field">
        <label>Kekurangan / minus (jujur ya)</label>
        <input name="minus" placeholder="cth: baterai 80%, ada baret halus" />
      </div>

      <div className="tc-field-row">
        <div className="tc-field">
          <label>Skema</label>
          <div className="tc-toggle">
            <button type="button" className={gratis ? "active" : ""} onClick={() => setGratis(true)}>Gratis (donasi)</button>
            <button type="button" className={!gratis ? "active" : ""} onClick={() => setGratis(false)}>Sewa murah</button>
          </div>
        </div>
        <div className="tc-field">
          <label>Harga sewa {gratis && <span className="tc-muted">(nonaktif untuk donasi)</span>}</label>
          <input name="harga" type="number" min={0} disabled={gratis} placeholder="cth: 40000" />
        </div>
      </div>

      <div className="tc-field-row">
        <div className="tc-field">
          <label>Status</label>
          <select value={status} onChange={(e) => setStatus(e.target.value as DeviceStatus)}>
            <option value="tersedia">Tersedia</option>
            <option value="dipinjam">Dipinjam</option>
            <option value="maintenance">Perawatan</option>
          </select>
        </div>
        <div className="tc-field">
          <label>Kota</label>
          <input name="lokasi" placeholder="cth: Yogyakarta" />
        </div>
      </div>

      <div className="tc-field">
        <label>Titik lokasi (klik di peta)</label>
        <MapPicker value={pos} onChange={setPos} />
      </div>

      {error && <div className="tc-form-error">{error}</div>}

      <button className="tc-btn tc-btn-primary tc-btn-block" disabled={saving}>
        {saving ? "Menyimpan…" : "Publikasikan ke Marketplace"}
      </button>
    </form>
  );
}
