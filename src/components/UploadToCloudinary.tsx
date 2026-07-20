"use client";

import { useState } from "react";

type Props = {
  onUploaded: (url: string) => void;
};

export function UploadToCloudinary({ onUploaded }: Props) {
  const [loading, setLoading] = useState(false);

  async function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    try {
      const signRes = await fetch("/api/cloudinary/sign", { method: "POST" });
      const sign = await signRes.json();

      const form = new FormData();
      form.append("file", file);
      form.append("api_key", sign.apiKey);
      form.append("timestamp", sign.timestamp);
      form.append("folder", sign.folder);
      form.append("signature", sign.signature);

      const uploadRes = await fetch(`https://api.cloudinary.com/v1_1/${sign.cloudName}/image/upload`, {
        method: "POST",
        body: form
      });

      const data = await uploadRes.json();
      if (!uploadRes.ok) throw new Error(data.error?.message || "Upload Cloudinary gagal");
      onUploaded(data.secure_url);
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <label className="uploadBox">
      <span>{loading ? "Mengunggah..." : "Upload foto perangkat"}</span>
      <input type="file" accept="image/*" onChange={onChange} disabled={loading} />
    </label>
  );
}
