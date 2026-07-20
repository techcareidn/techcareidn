import { NextResponse } from "next/server";
import { cloudinarySignature } from "@/lib/cloudinary";

export async function POST() {
  const timestamp = Math.floor(Date.now() / 1000).toString();
  const folder = "techcareidn/devices";
  const signature = cloudinarySignature({ folder, timestamp });

  return NextResponse.json({
    timestamp,
    folder,
    signature,
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_API_KEY
  });
}
