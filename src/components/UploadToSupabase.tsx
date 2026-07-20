"use client";

import { useState } from "react";
import { supabaseBrowser } from "@/lib/supabase/client";

type Props = {
  bucket: "user-photos" | "user-ktm";
  label: string;
  onUploaded: (url: string) => void;
};

export function UploadToSupabase({ bucket, label, onUploaded }: Props) {
  const supabase = supabaseBrowser();
  const [loading, setLoading] = useState(false);

  async function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    const { data: auth } = await supabase.auth.getUser();
    const uid = auth.user?.id;

    if (!uid) {
      setLoading(false);
      alert("Harus login dulu.");
      return;
    }

    const ext = file.name.split(".").pop();
    const path = `${uid}/${crypto.randomUUID()}.${ext}`;
    const { error } = await supabase.storage.from(bucket).upload(path, file, { upsert: false });

    if (error) {
      setLoading(false);
      alert(error.message);
      return;
    }

    const { data } = supabase.storage.from(bucket).getPublicUrl(path);
    onUploaded(data.publicUrl);
    setLoading(false);
  }

  return (
    <label className="uploadBox">
      <span>{loading ? "Mengunggah..." : label}</span>
      <input type="file" accept="image/*,.pdf" onChange={onChange} disabled={loading} />
    </label>
  );
}
