import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { Timeline } from "@/components/Timeline";
import { LoopSection } from "@/components/LoopSection";
import { OSSection } from "@/components/OSSection";
import { ScalingSection } from "@/components/ScalingSection";
import { PlaceholderSection } from "@/components/PlaceholderSection";
import { ProgressSection } from "@/components/ProgressSection";
import { NewProjectsSection } from "@/components/NewProjectsSection";
import { CaseStudySection } from "@/components/CaseStudySection";
import { SlideDeck, Slide } from "@/components/SlideDeck";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MRL China AI Taskforce Update" },
      {
        name: "description",
        content:
          "MRL China AI Taskforce Update — Program timeline, current progress, case studies, self-evolving agents, multi-agent OS, two-way scaling, and R&D opportunities.",
      },
      { property: "og:title", content: "MRL China AI Taskforce Update" },
      {
        property: "og:description",
        content:
          "MRL China AI Taskforce Update — Program timeline and agentic drug R&D thesis.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="h-screen overflow-hidden bg-paper text-ink">
      <SiteNav />
      <SlideDeck>
        <Slide id="timeline">
          <Timeline />
        </Slide>
        <Slide id="new-projects">
          <NewProjectsSection />
        </Slide>
        <Slide id="progress">
          <ProgressSection />
        </Slide>
        <Slide id="case-study">
          <CaseStudySection />
        </Slide>
        <Slide id="loop">
          <LoopSection />
        </Slide>
        <Slide id="os">
          <OSSection />
        </Slide>
        <Slide id="scaling">
          <ScalingSection />
        </Slide>
        <Slide id="opportunities">
          <PlaceholderSection
            id="opportunities-inner"
            eyebrow="Opportunities"
            title="Opportunities across the R&D value chain."
            lede="Where agentic systems can compound value next — from discovery through translational, clinical, regulatory, and commercial."
          />
        </Slide>
      </SlideDeck>
    </div>
  );
}
