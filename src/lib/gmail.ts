// lib/gmail.ts — pengirim email via Gmail API (pola dari knj-web / double opt-in).
// Dipakai untuk email verifikasi akun TechCareIDN.
//
// Env yang dibutuhkan (.env.local):
//   GMAIL_CLIENT_ID      — OAuth2 client id (Google Cloud Console)
//   GMAIL_CLIENT_SECRET  — OAuth2 client secret
//   GMAIL_REFRESH_TOKEN  — refresh token (dari OAuth Playground)
//   GMAIL_SENDER         — alamat Gmail pengirim (mis. kakaksukaservis@gmail.com)
import { google } from "googleapis";

export function isGmailConfigured(): boolean {
  return Boolean(
    process.env.GMAIL_CLIENT_ID &&
      process.env.GMAIL_CLIENT_SECRET &&
      process.env.GMAIL_REFRESH_TOKEN &&
      process.env.GMAIL_SENDER
  );
}

function oauthClient() {
  const id = process.env.GMAIL_CLIENT_ID;
  const secret = process.env.GMAIL_CLIENT_SECRET;
  const refresh = process.env.GMAIL_REFRESH_TOKEN;
  if (!id || !secret || !refresh) {
    throw new Error("GMAIL_CLIENT_ID / GMAIL_CLIENT_SECRET / GMAIL_REFRESH_TOKEN belum dikonfigurasi.");
  }
  const client = new google.auth.OAuth2(id, secret, "https://developers.google.com/oauthplayground");
  client.setCredentials({ refresh_token: refresh });
  return client;
}

function senderAddress(): string {
  const sender = process.env.GMAIL_SENDER;
  if (!sender) throw new Error("GMAIL_SENDER belum dikonfigurasi.");
  return sender;
}

function encodeMessage(to: string, subject: string, html: string): string {
  const from = `"TechCareIDN" <${senderAddress()}>`;
  const encodedSubject = `=?UTF-8?B?${Buffer.from(subject).toString("base64")}?=`;
  const headers = [
    `From: ${from}`,
    `To: ${to}`,
    `Subject: ${encodedSubject}`,
    "MIME-Version: 1.0",
    "Content-Type: text/html; charset=UTF-8",
    "Precedence: personal",
    `Message-ID: <${Date.now()}.${Math.random().toString(36).slice(2)}@techcareidn.mail>`
  ];
  const message = [...headers, "", html].join("\r\n");
  return Buffer.from(message).toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

/** Kirim satu email HTML lewat akun Gmail terhubung. */
export async function sendEmail(to: string, subject: string, html: string): Promise<void> {
  const gmail = google.gmail({ version: "v1", auth: oauthClient() });
  await gmail.users.messages.send({ userId: "me", requestBody: { raw: encodeMessage(to, subject, html) } });
}
