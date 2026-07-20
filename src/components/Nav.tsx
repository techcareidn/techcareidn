import Link from "next/link";

export function Nav() {
  return (
    <nav className="nav">
      <div className="container navInner">
        <Link href="/" className="brand"><span className="logo">⚡</span>TechCareIDN</Link>
        <div className="links">
          <Link href="/#cara-kerja">Cara Kerja</Link>
          <Link href="/#devices">Perangkat</Link>
          <Link href="/#dreams">Wall of Dreams</Link>
          <Link href="/login">Masuk</Link>
          <Link className="btn yellow" href="/register">Mulai</Link>
        </div>
      </div>
    </nav>
  );
}
