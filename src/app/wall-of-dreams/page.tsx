import Shell from "@/components/Shell";
import RoomHeader from "@/components/RoomHeader";
import StoryCard from "@/components/cards/StoryCard";
import { getStories } from "@/lib/data/queries";

export const metadata = { title: "Wall of Dreams — TechCareIDN" };

export default async function WallOfDreamsPage() {
  const stories = await getStories(); // semua cerita

  return (
    <Shell>
      <RoomHeader
        eyebrow="Ruang 3 · Wall of Dreams"
        title="Cerita target, proses, dan pencapaian"
        desc="Dinding mimpi para Pejuang dan Bintang. Setiap kartu adalah satu langkah yang diperjuangkan."
        icon="dream" theme="s2"
      />

      <section className="tc-section">
        <div className="tc-wrap">
          <div className="tc-grid tc-grid-stories">
            {stories.map((s) => <StoryCard key={s.id} s={s} />)}
          </div>
        </div>
      </section>
    </Shell>
  );
}
