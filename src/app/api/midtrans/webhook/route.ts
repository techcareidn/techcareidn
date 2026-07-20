import crypto from "crypto";
import { NextResponse } from "next/server";

function verifySignature(payload: any) {
  const serverKey = process.env.MIDTRANS_SERVER_KEY;
  if (!serverKey) return false;

  const raw = `${payload.order_id}${payload.status_code}${payload.gross_amount}${serverKey}`;
  const signature = crypto.createHash("sha512").update(raw).digest("hex");
  return signature === payload.signature_key;
}

export async function POST(req: Request) {
  const payload = await req.json();

  if (!verifySignature(payload)) {
    return NextResponse.json({ error: "Invalid Midtrans signature" }, { status: 401 });
  }

  // TODO: update tabel pembayaran kalau nanti sudah dibuat.
  return NextResponse.json({ received: true, transaction_status: payload.transaction_status });
}
