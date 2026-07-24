export const rupiah = (n: number) =>
  n === 0 ? "Gratis" : "Rp" + n.toLocaleString("id-ID");

export const views = (n: number) =>
  n >= 1000 ? (n / 1000).toFixed(1).replace(".0", "") + "rb" : String(n);
