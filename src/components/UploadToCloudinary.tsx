"use client";
import { useState } from "react";
import Icon from "./Icon";

// Upload gambar ke Cloudinary (unsigned preset). Mengembalikan secure_url.
export default function UploadToCloudinary({
  onUploaded, label = "Unggah foto"
}: { onUploaded: (url: string) => void; label?: string }) {
  const [busy, setBusy] = useState(false);
  const [preview, setPreview] = useState<string>("");

  const handle = async (file: File) => {
    setBusy(true);
    try {
      const cloud = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
      const body = new FormData();
      body.append("file", file);
      body.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!);
      const res = await fetch(`https://api.cloudinary.com/v1_1/${cloud}/image/upload`, {
        method: "POST",
        body
      });
      const json = await res.json();
      if (json.secure_url) {
        setPreview(json.secure_url);
        onUploaded(json.secure_url);
      }
    } finally {
      setBusy(false);
    }
  };

  return (
    <label className="tc-upload">
      {preview ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={preview} alt="preview" />
      ) : (
        <span className="tc-upload-empty">
          <Icon name="upload" size={22} />
          {busy ? "Mengunggah…" : label}
        </span>
      )}
      <input type="file" accept="image/*" hidden onChange={(e) => e.target.files?.[0] && handle(e.target.files[0])} />
    </label>
  );
}
