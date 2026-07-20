import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { to, message } = await req.json();

  if (!to || !message) {
    return NextResponse.json({ error: "Nomor tujuan dan pesan wajib diisi." }, { status: 400 });
  }

  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const token = process.env.WHATSAPP_TOKEN;

  if (!phoneNumberId || !token) {
    return NextResponse.json({ error: "WhatsApp env belum di-set." }, { status: 500 });
  }

  const res = await fetch(`https://graph.facebook.com/v20.0/${phoneNumberId}/messages`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      messaging_product: "whatsapp",
      to,
      type: "text",
      text: { body: message }
    })
  });

  const data = await res.json();
  if (!res.ok) return NextResponse.json({ error: data }, { status: 400 });
  return NextResponse.json({ ok: true, data });
}
