import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { Timeline } from "@/components/Timeline";
import { Hero } from "@/components/Hero";
import { LoopSection } from "@/components/LoopSection";
import { OSSection } from "@/components/OSSection";
import { ScalingSection } from "@/components/ScalingSection";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI TF Update" },
      {
        name: "description",
        content:
          "AI TF Update — Loop Engineering with RL, a Drug R&D AI Operating System, and the two axes of scaling.",
      },
      { property: "og:title", content: "AI TF Update" },
      {
        property: "og:description",
        content:
          "AI TF Update — Loop engineering, an R&D AI OS, and two axes of scaling.",
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
        <Timeline />
        <Hero />

        <LoopSection />
        <OSSection />
        <ScalingSection />
      </main>
      <footer className="border-t border-hairline py-12 text-center text-base uppercase tracking-[0.3em] text-ink">
        AI TF Update · A visual thesis
      </footer>
    </div>
  );
}
