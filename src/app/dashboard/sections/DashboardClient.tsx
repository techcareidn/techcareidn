"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { Peran } from "@/lib/types";
import PejuangCatalog from "./PejuangCatalog";
import BintangUpload from "./BintangUpload";

export default function DashboardClient() {
  const params = useSearchParams();
  const [peran, setPeran] = useState<Peran>("pejuang");
  const verified = params.get("verified") === "1";

  useEffect(() => {
    const q = params.get("peran");
    if (q === "bintang" || q === "pejuang") { setPeran(q); return; }
    try {
      const saved = localStorage.getItem("tc_peran");
      if (saved === "bintang" || saved === "pejuang") setPeran(saved);
    } catch {}
  }, [params]);

  const choose = (p: Peran) => {
    setPeran(p);
    try { localStorage.setItem("tc_peran", p); } catch {}
  };

  return (
    <section className="tc-section">
      <div className="tc-wrap">
        {verified && (
          <div className="tc-verify-ok">✓ Email terverifikasi — akunmu aktif. Selamat datang di dashboard!</div>
        )}

        <div className="tc-dash-top">
          <div>
            <span className="tc-eyebrow">Dashboard {peran === "bintang" ? "Bintang" : "Pejuang"}</span>
            <h1 className="tc-dash-title">{peran === "bintang" ? "Kelola & unggah perangkatmu" : "Pilih perangkat untuk dipinjam"}</h1>
          </div>
          <div className="tc-role-switch tc-role-switch-sm">
            <button className={peran === "pejuang" ? "active" : ""} onClick={() => choose("pejuang")}><b>Pejuang</b><span>Pinjam</span></button>
            <button className={peran === "bintang" ? "active" : ""} onClick={() => choose("bintang")}><b>Bintang</b><span>Upload</span></button>
          </div>
        </div>

        {peran === "pejuang" ? <PejuangCatalog /> : <BintangUpload />}
      </div>
    </section>
  );
}
