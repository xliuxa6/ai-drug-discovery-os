import { useState } from "react";
import { Play, RotateCcw } from "lucide-react";

type Project = {
  name: string;
  sub?: {
    name: string;
    value?: number;
    feasibility?: boolean;
    greenLabel?: string;
    blackLabel?: string;
  }[];
  value?: number;
  feasibility?: boolean;
  greenLabel?: string;
  blackLabel?: string;
};

const streams: {
  id: string;
  title: string;
  color: string;
  projects: Project[];
}[] = [
  {
    id: "search",
    title: "Search & Evaluation",
    color: "bg-bg-panel",
    projects: [
      { name: "Target Research", value: 80 },
      { name: "ADMET Prediction", value: 70 },
      { name: "Molecule Differentiation Analysis", value: 50 },
      {
        name: "Animal Model Translatability Evaluation",
        value: 20,
        greenLabel: "Q1 2027",
        blackLabel: "Q2 2027",
      },
    ],
  },
  {
    id: "clinical",
    title: "Clinical Development",
    color: "bg-bg-panel",
    projects: [
      {
        name: "Clinical Study QC & QA",
        feasibility: true,
        sub: [{ name: "Protocol Deviation Analysis", value: 70 }],
      },
      {
        name: "Project Risk & Issue Identification & Management",
        feasibility: true,
        greenLabel: "NOV",
        blackLabel: "Q1 2027",
      },
    ],
  },
  {
    id: "frontier",
    title: "Frontier Technology",
    color: "bg-bg-panel",
    projects: [
      {
        name: "Virtual Cell",
        value: 20,
        greenLabel: "Q1 2027",
        blackLabel: "Q2 2027",
      },
      {
        name: "Digital Pathology",
        feasibility: true,
        greenLabel: "Q1 2027",
        blackLabel: "TBD",
      },
    ],
  },
];

const ciItems: { name: string; value: number }[] = [
  { name: "Scientific Finding Tracking", value: 50 },
  { name: "Disease Deep Dive", value: 30 },
  { name: "Clinical Data Benchmarking", value: 30 },
  { name: "Competitive Intelligence Monitoring", value: 50 },
];

function ProgressLegend() {
  return (
    <div className="flex items-center gap-5 text-base font-semibold uppercase tracking-wider text-ink">
      <div className="flex items-center gap-1.5">
        <div className="h-0 w-0 border-x-[5px] border-t-[7px] border-x-transparent border-t-teal drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]" />
        <span>PILOT</span>
      </div>
      <div className="flex items-center gap-1.5">
        <div className="h-0 w-0 border-x-[5px] border-t-[7px] border-x-transparent border-t-ink drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]" />
        <span>MASSIVE USE</span>
      </div>
    </div>
  );
}

function ProgressBar({
  value = 50,
  animate = false,
  resetting = false,
  greenLabel = "SEP",
  blackLabel = "NOV",
}: {
  value?: number;
  animate?: boolean;
  resetting?: boolean;
  greenLabel?: string;
  blackLabel?: string;
}) {
  return (
    <div className="mt-1 w-[65%]">
      {/* Markers above the bar, pointing down */}
      <div className="relative h-3 w-full">
        <div className="absolute -translate-x-1/2" style={{ left: "80%" }}>
          <div className="h-0 w-0 border-x-[5px] border-t-[7px] border-x-transparent border-t-teal drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]" />
        </div>
        <div className="absolute -translate-x-1/2" style={{ left: "100%" }}>
          <div className="h-0 w-0 border-x-[5px] border-t-[7px] border-x-transparent border-t-ink drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]" />
        </div>
      </div>

      {/* Progress track */}
      <div className="relative h-3 w-full overflow-hidden rounded-full bg-progress-track">
        <div
          className={`h-full rounded-full ${
            resetting ? "transition-none" : "transition-[width] duration-1000 ease-out"
          }`}
          style={{
            width: animate ? `${value}%` : "0%",
            backgroundImage:
              "repeating-linear-gradient(45deg, var(--success) 0 5px, var(--success-dim) 5px 10px)",
          }}
        />
      </div>

      {/* Month / quarter labels below the markers */}
      <div className="relative mt-1 h-6 text-base font-semibold uppercase tracking-wider text-ink/80">
        <div
          className="absolute text-right leading-none whitespace-nowrap"
          style={{ left: "80%", transform: "translateX(-100%)" }}
        >
          {greenLabel}
        </div>
        <div
          className="absolute text-left leading-none whitespace-nowrap"
          style={{ left: "100%" }}
        >
          {blackLabel}
        </div>
      </div>
    </div>
  );
}

function FeasibilityBadge() {
  return (
    <span className="inline-flex items-center gap-1 align-middle rounded-full bg-teal/10 px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-teal">
      <svg
        width="10"
        height="10"
        viewBox="0 0 12 12"
        fill="none"
        className="shrink-0"
      >
        <circle cx="6" cy="6" r="6" fill="currentColor" />
        <path
          d="M3.5 6.2L5.2 7.8L8.5 4.5"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Feasibility
    </span>
  );
}

function ProjectItem({
  project,
  animate,
  resetting,
}: {
  project: Project;
  animate?: boolean;
  resetting?: boolean;
}) {
  return (
    <div className="py-1">
      <div className="flex items-start gap-2">
        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ink" />
        <div className="text-lg leading-none text-ink">
          <span className="font-semibold">{project.name}</span>
          {project.feasibility && (
            <>
              {" "}
              <FeasibilityBadge />
            </>
          )}
        </div>
      </div>
      {(!project.feasibility || project.greenLabel || project.blackLabel) && (
        <div className="ml-[14px]">
          <ProgressBar
            value={project.feasibility ? 0 : project.value ?? 50}
            animate={animate}
            resetting={resetting}
            greenLabel={project.greenLabel}
            blackLabel={project.blackLabel}
          />
        </div>
      )}
      {project.sub && (
        <div className="mt-2 space-y-2 border-l-2 border-ink/20 pl-4">
          {project.sub.map((s) => (
            <div key={s.name}>
              <div className="text-base leading-none text-ink/90">
                <span className="font-medium">{s.name}</span>
                {s.feasibility && (
                  <>
                    {" "}
                    <FeasibilityBadge />
                  </>
                )}
              </div>
              {(!s.feasibility || s.greenLabel || s.blackLabel) && (
                <ProgressBar
                  value={s.feasibility ? 0 : s.value ?? 50}
                  animate={animate}
                  resetting={resetting}
                  greenLabel={s.greenLabel}
                  blackLabel={s.blackLabel}
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function ProgressSection() {
  const [animate, setAnimate] = useState(false);
  const [resetting, setResetting] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);

  const handlePlay = () => {
    if (hasPlayed) {
      // Replay: instantly reset to beginning, then re-animate at original speed
      setResetting(true);
      setAnimate(false);
      setTimeout(() => {
        setResetting(false);
        setAnimate(true);
      }, 60);
    } else {
      setHasPlayed(true);
      setAnimate(true);
    }
  };

  return (
    <section id="progress" className="border-t border-hairline bg-paper pt-6 pb-6">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <h2 className="font-sans text-2xl font-black leading-[1.05] text-ink md:text-3xl lg:text-4xl">
            Current Project Progress
          </h2>
          <div className="flex items-center gap-5">
            <ProgressLegend />
            <button
              onClick={handlePlay}
              aria-label={hasPlayed ? "Replay progress" : "Play progress"}
              className="inline-flex items-center justify-center rounded-full bg-ink p-3 text-paper shadow-sm transition-colors hover:bg-teal focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2"
            >
              {hasPlayed ? (
                <RotateCcw className="h-6 w-6" />
              ) : (
                <Play className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Tier 3: Applications */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {streams.map((stream) => (
            <div
              key={stream.id}
              className={`rounded-2xl border border-hairline p-4 shadow-sm ${stream.color}`}
            >
              <div className="mb-3 text-center text-lg font-bold uppercase tracking-[0.12em] text-teal">
                {stream.title}
              </div>
              <div className="space-y-2">
                {stream.projects.map((p) => (
                  <ProjectItem
                    key={p.name}
                    project={p}
                    animate={animate}
                    resetting={resetting}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tier 2: CI & Scientific Finding Tracking — flat, warm tint */}
        <div className="mt-5 rounded-2xl border border-hairline bg-bg-panel p-4 shadow-sm">
          <div className="mb-3 text-center text-lg font-bold uppercase tracking-[0.12em] text-teal">
            Competitive Intelligence & Scientific Finding Tracking
          </div>
          <div className="grid grid-cols-1 gap-x-5 gap-y-2 md:grid-cols-2">
            {ciItems.map((item) => (
              <div key={item.name} className="py-1">
                <div className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ink" />
                  <div className="text-lg font-semibold leading-none text-ink">
                    {item.name}
                  </div>
                </div>
                <div className="ml-[14px]">
                  <ProgressBar
                    value={item.value}
                    animate={animate}
                    resetting={resetting}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tier 1: IT Infrastructure — flat, cool tint */}
        <div className="mt-5 rounded-2xl border border-hairline bg-bg-panel px-4 py-3 text-center shadow-sm">
          <div className="text-lg font-bold uppercase tracking-[0.12em] text-teal">
            IT Infrastructure Excellence Enablement
          </div>
        </div>
      </div>
    </section>
  );
}
