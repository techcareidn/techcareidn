# TechCareIDN — Next.js + Supabase + Vercel

Starter code website TechCareIDN yang siap di-deploy ke Vercel.

## Stack

- **Frontend**: Next.js App Router
- **Database + Login + Upload Foto + Upload KTM**: Supabase
- **Foto perangkat**: Cloudinary
- **Lokasi**: Google Maps API
- **Pembayaran nanti**: Midtrans webhook placeholder
- **Notifikasi**: WhatsApp Cloud API placeholder

## Cara jalan lokal

```bash
npm install
cp .env.example .env.local
npm run dev
```

Buka: `http://localhost:3000`

## Deploy ke Vercel

1. Push folder ini ke GitHub.
2. Import project di Vercel.
3. Masukkan Environment Variables dari `.env.example`.
4. Deploy.

## Setup Supabase

1. Buka Supabase SQL Editor.
2. Jalankan file `supabase/schema.sql`.
3. Buat bucket Storage:
   - `user-photos` (public boleh)
   - `user-ktm` (disarankan private, tapi starter ini pakai public URL agar mudah dites)

## Catatan keamanan

- Jangan taruh `CLOUDINARY_API_SECRET`, `MIDTRANS_SERVER_KEY`, dan `WHATSAPP_TOKEN` di frontend.
- Key rahasia hanya dipakai di folder `src/app/api/*`.
- Untuk produksi, KTM sebaiknya private dan ditampilkan via signed URL.
