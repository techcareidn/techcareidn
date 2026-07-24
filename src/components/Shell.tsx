import Nav from "./Nav";
import Footer from "./Footer";

// Bungkus halaman dengan Nav + Footer dan scope kelas .tc-page (warna & font).
export default function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="tc-page">
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
