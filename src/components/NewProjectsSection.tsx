import React from "react";

type Project = {
  name: string;
  sub?: { name: string; value?: number; feasibility?: boolean }[];
  value?: number;
  feasibility?: boolean;
};

const streams: {
  id: string;
  title: string;
  color: string;
  projects: Project[];
  candidates: { name: string }[];
}[] = [
  {
    id: "search",
    title: "Search & Evaluation",
    color: "bg-bg-search",
    projects: [
      { name: "Target Research", value: 80 },
      { name: "ADMET Prediction", value: 70 },
      { name: "Molecule Differentiation Analysis", value: 50 },
      { name: "Animal Model Translatability Evaluation", value: 20 },
    ],
    candidates: [{ name: "Unmet Medical Needs Identification" }],
  },
  {
    id: "clinical",
    title: "Clinical Development",
    color: "bg-bg-clinical",
    projects: [
      {
        name: "Clinical Study QC & QA",
        feasibility: true,
        sub: [{ name: "Protocol Deviation Analysis", value: 70 }],
      },
      { name: "Project Risk & Issue Identification & Management", feasibility: true },
    ],
    candidates: [
      { name: "Medical Monitoring" },
      { name: "Protocol Review" },
      { name: "GCTO Operation Platform" },
      { name: "Guidance QA" },
    ],
  },
  {
    id: "frontier",
    title: "Frontier Technology",
    color: "bg-bg-frontier",
    projects: [
      { name: "Virtual Cell", value: 20 },
      { name: "Digital Pathology", feasibility: true },
    ],
    candidates: [{ name: "Genomics Platform" }, { name: "PBPK Prediction" }],
  },
];

const ciItems: { name: string; value: number; candidates?: string[] }[] = [
  { name: "Scientific Finding Tracking", value: 50, candidates: ["PV Literature Search"] },
  { name: "Disease Deep Dive", value: 30 },
  { name: "Clinical Data Benchmarking", value: 30 },
  { name: "Competitive Intelligence Monitoring", value: 50 },
];

function ProgressBar({ value = 50, showLabels = false }: { value?: number; showLabels?: boolean }) {
  return (
    <div className="mt-1">
      <div className="relative h-4 w-full overflow-hidden rounded-full bg-paper/70">
        <div
          className="h-full rounded-full"
          style={{
            width: `${value}%`,
            backgroundImage:
              "repeating-linear-gradient(45deg, var(--success) 0 6px, var(--success-dim) 6px 12px)",
          }}
        />
      </div>
      <div className="relative h-3">
        <div className="absolute top-0 -translate-x-1/2" style={{ left: "80%" }}>
          <div className="h-0 w-0 border-x-[7px] border-b-[10px] border-x-transparent border-b-teal" />
        </div>
        <div className="absolute top-0 -translate-x-1/2" style={{ left: "100%" }}>
          <div className="h-0 w-0 border-x-[7px] border-b-[10px] border-x-transparent border-b-ink" />
        </div>
      </div>
      {showLabels && (
        <div className="relative mt-1 h-12 text-sm font-semibold uppercase tracking-wider text-ink/80">
          <div className="absolute text-center leading-tight" style={{ left: "80%", transform: "translateX(-50%)" }}>
            <div>Pilot</div>
            <div className="font-normal text-ink/60">Sep</div>
          </div>
          <div className="absolute text-center leading-tight" style={{ left: "100%", transform: "translateX(-50%)" }}>
            <div>MASSIVE USE</div>
            <div className="font-normal text-ink/60">Nov</div>
          </div>
        </div>
      )}
    </div>
  );
}

function FeasibilityBadge() {
  return (
    <div className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-teal/10 px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-teal">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <circle cx="6" cy="6" r="6" fill="currentColor" />
        <path d="M3.5 6.2L5.2 7.8L8.5 4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      Feasibility Analysis Complete
    </div>
  );
}

function ProjectItem({ project, showLabels }: { project: Project; showLabels?: boolean }) {
  return (
    <div className="py-1">
      <div className="text-base font-semibold leading-tight text-ink">{project.name}</div>
      {project.feasibility ? (
        <FeasibilityBadge />
      ) : (
        <ProgressBar value={project.value ?? 50} showLabels={showLabels} />
      )}
      {project.sub && (
        <div className="mt-2 space-y-2 border-l-2 border-ink/20 pl-4">
          {project.sub.map((s) => (
            <div key={s.name}>
              <div className="text-sm font-medium text-ink/90">{s.name}</div>
              {s.feasibility ? <FeasibilityBadge /> : <ProgressBar value={s.value ?? 50} />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function CandidateItem({ name }: { name: string }) {
  return (
    <div className="py-1">
      <div className="text-base font-medium leading-tight text-ink/60">{name}</div>
    </div>
  );
}

function Arrows({ count }: { count: number }) {
  return (
    <div
      className="grid items-center justify-items-center py-0.5"
      style={{ gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))` }}
    >
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="18" height="16" viewBox="0 0 18 16" className="text-ink/60">
          <line x1="9" y1="16" x2="9" y2="5" stroke="currentColor" strokeWidth="2.5" />
          <polygon points="9,0 2,8 16,8" fill="currentColor" />
        </svg>
      ))}
    </div>
  );
}

export function NewProjectsSection() {
  let firstShown = false;
  return (
    <section id="new-projects" className="border-t border-hairline bg-paper pt-6 pb-6">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-12 bg-teal/60" />
          <span className="eyebrow text-base">Potential New Projects · Future Candidates</span>
        </div>

        {/* Tier 3: Applications */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {streams.map((stream) => (
            <div
              key={stream.id}
              className={`rounded-2xl border border-hairline p-3 shadow-sm ${stream.color}`}
            >
              <div className="mb-2 text-center text-xl font-bold uppercase tracking-[0.12em] text-ink">
                {stream.title}
              </div>
              <div className="space-y-2">
                {stream.projects.map((p) => {
                  const needsLabels = !firstShown && !p.feasibility;
                  if (needsLabels) firstShown = true;
                  return <ProjectItem key={p.name} project={p} showLabels={needsLabels} />;
                })}
              </div>
              {stream.candidates.length > 0 && (
                <>
                  <div className="my-2 border-t border-dashed border-ink/20" />
                  <div className="space-y-1">
                    {stream.candidates.map((p) => (
                      <CandidateItem key={p.name} name={p.name} />
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Arrows up from CI to applications */}
        <Arrows count={3} />

        {/* Tier 2: CI & Scientific Finding Tracking */}
        <div className="rounded-2xl border border-hairline bg-bg-ci p-3 shadow-sm">
          <div className="mb-2 text-center text-xl font-bold uppercase tracking-[0.12em] text-ink">
            Competitive Intelligence & Scientific Finding Tracking
          </div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-1 md:grid-cols-2">
            {ciItems.map((item) => (
              <div key={item.name} className="py-1">
                <div className="text-base font-semibold leading-tight text-ink">{item.name}</div>
                <ProgressBar value={item.value} />
                {item.candidates && item.candidates.length > 0 && (
                  <div className="mt-1 space-y-1 border-l-2 border-ink/20 pl-4">
                    {item.candidates.map((c) => (
                      <div key={c} className="text-base font-medium leading-tight text-ink/60">
                        {c}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Arrows up from infra to CI */}
        <Arrows count={3} />

        {/* Tier 1: IT Infrastructure */}
        <div className="rounded-2xl border border-hairline bg-bg-infra px-3 py-2.5 text-center shadow-sm">
          <div className="text-xl font-bold uppercase tracking-[0.12em] text-ink">
            IT Infrastructure Excellence Enablement
          </div>
        </div>
      </div>
    </section>
  );
}
