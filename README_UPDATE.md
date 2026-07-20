# Fix tampilan header nimpa + file khusus logo

ZIP ini berisi:

```txt
src/app/page.tsx
src/config/siteBrand.ts
public/README_LOGO.txt
```

## Yang diperbaiki

- Header/logo yang sebelumnya saling nimpa sudah diprefix dengan class `tc-*`, jadi tidak bentrok dengan `globals.css` lama.
- Navigasi dibuat responsif: di layar sempit menu otomatis disembunyikan agar tidak menabrak logo.
- Logo sekarang dikontrol dari file khusus:

```txt
src/config/siteBrand.ts
```

## Cara ganti logo

Buka:

```txt
D:\techcare-vercel\src\config\siteBrand.ts
```

Pilihan cepat:

### 1. Pakai logo bawaan

```ts
logoMode: "mark"
```

### 2. Pakai gambar sendiri

Taruh file logo kamu di:

```txt
D:\techcare-vercel\public\logo.png
```

Lalu ubah:

```ts
logoMode: "image",
logoImageUrl: "/logo.png",
```

### 3. Pakai emoji/icon

```ts
logoMode: "emoji",
logoEmoji: "⚡",
```

### 4. Hanya teks

```ts
logoMode: "text"
```

## Cara pasang update

Copy/replace file dari ZIP ini ke project lokal, lalu jalankan:

```powershell
cd D:\techcare-vercel
npm.cmd run build
git add src/app/page.tsx src/config/siteBrand.ts public/README_LOGO.txt
git commit -m "Fix header overlap and add logo config"
git push
```

Gunakan `npm.cmd run build`, bukan `npm run build`, kalau PowerShell kamu masih memblokir `npm.ps1`.
