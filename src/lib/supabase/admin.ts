// Klien Supabase sisi server dengan service-role (khusus route handler).
// Mengembalikan null bila env belum diisi → dipakai untuk mode mock/dev.
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

export function supabaseAdmin(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, { auth: { persistSession: false } });
}
