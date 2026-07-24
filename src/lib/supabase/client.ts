"use client";
import { createBrowserClient } from "@supabase/ssr";

// Client Supabase untuk komponen browser (Marketplace: upload & baca devices)
export const supabaseBrowser = () =>
  createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
