import crypto from "crypto";

export function cloudinarySignature(paramsToSign: Record<string, string>) {
  const sorted = Object.keys(paramsToSign)
    .sort()
    .map((key) => `${key}=${paramsToSign[key]}`)
    .join("&");

  return crypto
    .createHash("sha1")
    .update(sorted + process.env.CLOUDINARY_API_SECRET)
    .digest("hex");
}
