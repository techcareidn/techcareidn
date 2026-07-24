"use client";
import { mockDevices } from "@/lib/data/mock";
import { rupiah } from "@/lib/format";
import Icon from "@/components/Icon";
import DeviceForm from "./DeviceForm";

// Dashboard Bintang: form pengisian perangkat (foto, spesifikasi, harga, alamat + maps)
// plus ringkasan perangkat milik sendiri.
export default function BintangUpload() {
  const mine = mockDevices.slice(0, 4);
  const dipinjam = mockDevices.filter((d) => d.status === "dipinjam").length;

  return (
    <div className="tc-bintang">
      <div className="tc-bintang-form">
        <div className="tc-form-lead">
          <span className="tc-eyebrow">Isi data perangkat</span>
          <p>Lengkapi foto, spesifikasi, skema (gratis/sewa), harga, dan titik lokasi lewat peta. Perangkat langsung tampil di Marketplace dan bisa diajukan Pejuang.</p>
        </div>
        <DeviceForm />
      </div>

      <aside className="tc-bintang-side">
        <div className="tc-stat-row">
          <div className="tc-stat"><b>{mine.length}</b><span>Perangkat</span></div>
          <div className="tc-stat"><b>{dipinjam}</b><span>Dipinjam</span></div>
          <div className="tc-stat"><b>4.9</b><span>Rating</span></div>
        </div>
        <h3 className="tc-side-title">Perangkat saya</h3>
        <div className="tc-mine-list">
          {mine.map((d) => (
            <div key={d.id} className="tc-mine-item">
              <div className="tc-mine-ic"><Icon name="laptop" size={20} /></div>
              <div className="tc-mine-info">
                <b>{d.nama}</b>
                <span>{d.gratis ? "Gratis" : rupiah(d.harga) + "/hari"} · {d.lokasi}</span>
              </div>
              <span className={`tc-mine-status ${d.status}`}>{d.status === "tersedia" ? "Tersedia" : d.status === "dipinjam" ? "Dipinjam" : "Perawatan"}</span>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}
