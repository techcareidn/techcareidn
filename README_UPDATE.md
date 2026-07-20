# Update navbar jadi bar kedua

ZIP ini mengganti file:

```txt
src/app/page.tsx
```

Perubahan:
- Bar paling atas hanya berisi logo + brand/tagline di kiri, lalu search/dashboard/masuk/gabung di kanan.
- Menu `Beranda`, `Layanan`, `Perangkat`, `Wall of Dreams`, `Komunitas` dipindahkan ke bar baru di bawahnya.
- Bar menu bisa scroll horizontal di layar kecil, jadi tidak nabrak logo lagi.
- Ticker `TERKINI` tetap berada di bawah bar menu.

Cara pasang:

```cmd
D:\ncd \techcare-vercel
# copy/replace src\app\page.tsx dari ZIP ini
npm run build
git add src/app/page.tsx
git commit -m "Move main navigation to second bar"
git push
```
