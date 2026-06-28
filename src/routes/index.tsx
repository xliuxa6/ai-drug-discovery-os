import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { Timeline } from "@/components/Timeline";
import { LoopSection } from "@/components/LoopSection";
import { OSSection } from "@/components/OSSection";
import { ScalingSection } from "@/components/ScalingSection";
import { PlaceholderSection } from "@/components/PlaceholderSection";
import { ProgressSection } from "@/components/ProgressSection";
import { PotentialSection } from "@/components/PotentialSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI TF Update" },
      {
        name: "description",
        content:
          "AI TF Update — Program timeline, current progress, case studies, self-evolving agents, multi-agent OS, two-way scaling, and R&D opportunities.",
      },
      { property: "og:title", content: "AI TF Update" },
      {
        property: "og:description",
        content:
          "AI TF Update — Program timeline and agentic drug R&D thesis.",
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
        <section id="timeline">
          <Timeline />
        </section>

        <ProgressSection />

        <PotentialSection />

        <PlaceholderSection
          id="case-study"
          eyebrow="Case Study"
          title="AI-assisted Protocol Deviation."
          lede="A worked example of how an agentic workflow detects, classifies, and triages protocol deviations end-to-end."
        />

        <LoopSection />
        <OSSection />
        <ScalingSection />

        <PlaceholderSection
          id="opportunities"
          eyebrow="Opportunities"
          title="Opportunities across the R&D value chain."
          lede="Where agentic systems can compound value next — from discovery through translational, clinical, regulatory, and commercial."
        />
      </main>
      <footer className="border-t border-hairline py-12 text-center text-base uppercase tracking-[0.3em] text-ink">
        AI TF Update · A visual thesis
      </footer>
    </div>
  );
}
