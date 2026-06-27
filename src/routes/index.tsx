import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { Hero } from "@/components/Hero";
import { LoopSection } from "@/components/LoopSection";
import { OSSection } from "@/components/OSSection";
import { ScalingSection } from "@/components/ScalingSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Drug R&D Super Intelligence — A thesis in three movements" },
      {
        name: "description",
        content:
          "Loop Engineering with RL, a Drug R&D AI Operating System, and the two axes of scaling that lead to drug discovery super intelligence.",
      },
      { property: "og:title", content: "Drug R&D Super Intelligence" },
      {
        property: "og:description",
        content:
          "Loop engineering, an R&D AI OS, and two axes of scaling — a thesis on super-intelligent drug discovery.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <SiteNav />
      <main>
        <Hero />
        <LoopSection />
        <OSSection />
        <ScalingSection />
      </main>
      <footer className="border-t border-hairline py-10 text-center text-xs uppercase tracking-[0.3em] text-ink-soft">
        Drug R&amp;D Super Intelligence · A visual thesis
      </footer>
    </div>
  );
}
