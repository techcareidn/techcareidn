import Icon, { type IconName } from "./Icon";

// Banner judul di atas tiap halaman ruang.
export default function RoomHeader({
  eyebrow, title, desc, icon, theme = "s1"
}: { eyebrow: string; title: string; desc: string; icon: IconName; theme?: "s1" | "s2" | "s3" }) {
  return (
    <header className={`tc-room-hero ${theme}`}>
      <div className="tc-wrap tc-room-hero-inner">
        <div>
          <span className="tc-slide-badge">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{desc}</p>
        </div>
        <div className="tc-room-hero-ic"><Icon name={icon} size={92} /></div>
      </div>
    </header>
  );
}
