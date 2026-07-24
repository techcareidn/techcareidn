// Template email verifikasi akun — gaya dari knj-web (double opt-in).
export function buildVerifyEmail(args: { nama: string; verifyUrl: string; peran: string }): string {
  const { nama, verifyUrl, peran } = args;
  const peranLabel = peran === "bintang" ? "Bintang (pemilik perangkat)" : "Pejuang (peminjam)";
  return `
  <!DOCTYPE html>
  <html lang="id">
  <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
  <body style="margin:0;padding:0;background:#EAF2FA;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#16233A;">
    <div style="max-width:520px;margin:0 auto;padding:40px 24px;">
      <div style="margin-bottom:28px;">
        <span style="font-size:13px;color:#C69A3E;letter-spacing:0.14em;text-transform:uppercase;font-weight:800;">TechCareIDN</span>
        <div style="font-size:11px;color:#5A6B82;letter-spacing:0.14em;text-transform:uppercase;margin-top:4px;">Second Chance Technology</div>
      </div>
      <h1 style="font-size:26px;font-weight:800;line-height:1.3;margin:0 0 14px;color:#0D2745;">Halo ${nama}, konfirmasi akunmu</h1>
      <p style="font-size:15px;line-height:1.7;color:#5A6B82;margin:0 0 10px;">
        Kamu mendaftar sebagai <b style="color:#0D2745;">${peranLabel}</b> di TechCareIDN. Tinggal satu langkah lagi — konfirmasi email ini untuk mengaktifkan akun dan masuk ke dashboard.
      </p>
      <p style="font-size:15px;line-height:1.7;color:#5A6B82;margin:0 0 26px;">Empat ruang menantimu: Dokter Gadget, Marketplace, Wall of Dreams, dan Second Chance.</p>
      <a href="${verifyUrl}" style="display:block;background:#C69A3E;color:#0D2745;font-size:15px;font-weight:700;text-decoration:none;padding:15px 24px;border-radius:12px;text-align:center;">Konfirmasi &amp; Masuk Dashboard</a>
      <p style="font-size:12px;color:#9aa8ba;text-align:center;margin:16px 0 0;">Tautan berlaku 24 jam. Jika kamu tidak mendaftar, abaikan email ini.</p>
      <div style="border-top:1px solid #d7e2ef;margin-top:40px;padding-top:20px;">
        <p style="font-size:12px;color:#9aa8ba;margin:0;">© 2026 TechCareIDN · Second Chance Technology</p>
      </div>
    </div>
  </body>
  </html>`.trim();
}
