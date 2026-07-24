"use client";
import { useMemo, useState } from "react";
import { mockDevices } from "@/lib/data/mock";
import { rupiah } from "@/lib/format";
import Icon from "@/components/Icon";
import type { CartItem, Device } from "@/lib/types";

const CHIPS = ["Semua", "Gratis", "Sewa", "Laptop", "Tablet", "Smartphone", "Monitor", "Printer"];

export default function PejuangCatalog() {
  const [chip, setChip] = useState("Semua");
  const [q, setQ] = useState("");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [durasi, setDurasi] = useState(7);
  const [done, setDone] = useState(false);

  const devices = useMemo(() => {
    return mockDevices.filter((d) => {
      if (d.status !== "tersedia") return false;
      if (chip === "Gratis" && !d.gratis) return false;
      if (chip === "Sewa" && d.gratis) return false;
      if (["Laptop", "Tablet", "Smartphone", "Monitor", "Printer"].includes(chip) && d.kategori !== chip) return false;
      if (q && !(`${d.nama} ${d.spesifikasi} ${d.ownerNama}`.toLowerCase().includes(q.toLowerCase()))) return false;
      return true;
    });
  }, [chip, q]);

  const add = (d: Device) => {
    setDone(false);
    setCart((c) => {
      const i = c.findIndex((x) => x.device.id === d.id);
      if (i >= 0) { const n = [...c]; n[i] = { ...n[i], qty: n[i].qty + 1 }; return n; }
      return [...c, { device: d, qty: 1 }];
    });
  };
  const setQty = (id: string, delta: number) =>
    setCart((c) => c.map((x) => x.device.id === id ? { ...x, qty: Math.max(0, x.qty + delta) } : x).filter((x) => x.qty > 0));
  const remove = (id: string) => setCart((c) => c.filter((x) => x.device.id !== id));

  const totalSewa = cart.reduce((s, x) => s + (x.device.gratis ? 0 : x.device.harga * x.qty * durasi), 0);
  const totalUnit = cart.reduce((s, x) => s + x.qty, 0);

  return (
    <div className="tc-pos">
      {/* KATALOG */}
      <div className="tc-pos-main">
        <div className="tc-pos-head">
          <label className="tc-pos-search">
            <Icon name="search" size={17} />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari perangkat, spesifikasi, atau Bintang…" />
          </label>
        </div>
        <div className="tc-chips tc-pos-chips">
          {CHIPS.map((c) => (
            <button key={c} className={`tc-chip ${chip === c ? "active" : ""}`} onClick={() => setChip(c)}>{c}</button>
          ))}
        </div>

        <div className="tc-pos-grid">
          {devices.map((d) => (
            <div key={d.id} className="tc-pos-card">
              <div className="tc-pos-thumb">
                <Icon name="laptop" size={46} />
                {d.gratis ? <span className="tc-badge-free">GRATIS</span> : <span className="tc-badge-paid">SEWA</span>}
              </div>
              <div className="tc-pos-body">
                <div className="tc-dev-owner"><span className="tc-star-chip"><Icon name="star" size={11} />Bintang</span>{d.ownerNama}</div>
                <h4>{d.nama}</h4>
                <p className="tc-dev-spec">{d.spesifikasi}</p>
                <div className="tc-pos-foot">
                  <div><div className={`tc-dev-price ${d.gratis ? "free" : ""}`}>{d.gratis ? "Gratis" : rupiah(d.harga) + "/hari"}</div><div className="tc-dev-loc"><Icon name="map-pin" size={12} />{d.lokasi}</div></div>
                  <button className="tc-pos-add" onClick={() => add(d)} aria-label="Tambah ke keranjang">+</button>
                </div>
              </div>
            </div>
          ))}
          {devices.length === 0 && <div className="tc-pos-empty">Tidak ada perangkat yang cocok dengan filter ini.</div>}
        </div>
      </div>

      {/* KERANJANG PINJAM */}
      <aside className="tc-cart">
        <div className="tc-cart-head">
          <h3><Icon name="cart" size={18} /> Keranjang Pinjam</h3>
          <span className="tc-cart-count">{totalUnit} unit</span>
        </div>

        {cart.length === 0 ? (
          <div className="tc-cart-empty">
            <Icon name="cart" size={34} />
            <p>Keranjang masih kosong. Tambahkan perangkat dari katalog di sebelah kiri.</p>
          </div>
        ) : (
          <>
            <div className="tc-cart-list">
              {cart.map((x) => (
                <div key={x.device.id} className="tc-cart-item">
                  <div className="tc-cart-ic"><Icon name="laptop" size={20} /></div>
                  <div className="tc-cart-info">
                    <b>{x.device.nama}</b>
                    <span>{x.device.gratis ? "Gratis (donasi)" : rupiah(x.device.harga) + "/hari"}</span>
                  </div>
                  <div className="tc-stepper">
                    <button onClick={() => setQty(x.device.id, -1)}>−</button>
                    <span>{x.qty}</span>
                    <button onClick={() => setQty(x.device.id, 1)}>+</button>
                  </div>
                  <button className="tc-cart-x" onClick={() => remove(x.device.id)} aria-label="Hapus">×</button>
                </div>
              ))}
            </div>

            <div className="tc-cart-durasi">
              <label>Durasi pinjam</label>
              <div className="tc-stepper wide">
                <button onClick={() => setDurasi((d) => Math.max(1, d - 1))}>−</button>
                <span>{durasi} hari</span>
                <button onClick={() => setDurasi((d) => d + 1)}>+</button>
              </div>
            </div>

            <div className="tc-cart-summary">
              <div className="row"><span>Unit</span><b>{totalUnit}</b></div>
              <div className="row"><span>Estimasi sewa ({durasi} hari)</span><b>{rupiah(totalSewa)}</b></div>
              <div className="row total"><span>Total</span><b>{rupiah(totalSewa)}</b></div>
            </div>

            {done ? (
              <div className="tc-cart-done"><Icon name="check" size={18} /> Pengajuan terkirim ke para Bintang!</div>
            ) : (
              <button className="tc-btn tc-btn-primary tc-btn-block" onClick={() => { setDone(true); setCart([]); }}>Ajukan Pinjam</button>
            )}
            <p className="tc-cart-note">Bintang pemilik akan meninjau pengajuanmu. Yang gratis tidak dikenakan biaya.</p>
          </>
        )}
      </aside>
    </div>
  );
}
