type Project = { name: string; sub?: string[] };

const streams = [
  {
    id: "search",
    title: "Search & Evaluation",
    color: "bg-bg-search",
    projects: [
      { name: "Target Research" },
      { name: "Animal Model Translatability Evaluation" },
      { name: "ADMET Prediction" },
      { name: "Molecule Differentiation Analysis" },
    ],
  },
  {
    id: "clinical",
    title: "Clinical Development",
    color: "bg-bg-clinical",
    projects: [
      { name: "Clinical Study QC & QA", sub: ["Protocol Deviation Analysis"] },
      { name: "Project Risk & Issue Identification & Management" },
    ],
  },
  {
    id: "frontier",
    title: "Frontier Technology",
    color: "bg-bg-frontier",
    projects: [{ name: "Virtual Cell" }, { name: "Digital Pathology" }],
  },
];

const ciItems = [
  "Scientific Finding Checking",
  "Disease Deep Dive",
  "Clinical Data Benchmarking",
  "Competitive Intelligence Monitoring",
];

function ProjectItem({ project }: { project: Project }) {
  return (
    <div className="py-1">
      <div className="text-lg font-semibold leading-tight text-ink">{project.name}</div>
      {project.sub && (
        <div className="mt-2 space-y-2 border-l-2 border-ink/20 pl-4">
          {project.sub.map((s) => (
            <div key={s} className="text-base font-medium text-ink/90">
              {s}
            </div>
          ))}
        </div>
      )}
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

export function ProgressSection() {
  return (
    <section id="progress" className="border-t border-hairline bg-paper pt-6 pb-6">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-12 bg-teal/60" />
          <span className="eyebrow text-lg font-bold">Current Project Progress · Five Streams</span>
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
                {stream.projects.map((p) => (
                  <ProjectItem key={p.name} project={p} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Arrows up from CI to applications */}
        <Arrows count={3} />

        {/* Tier 2: CI & Scientific Finding Checking — flat, warm tint */}
        <div className="rounded-2xl border border-hairline bg-bg-ci p-3 shadow-sm">
          <div className="mb-2 text-center text-xl font-bold uppercase tracking-[0.12em] text-ink">
            Competitive Intelligence & Scientific Finding Checking
          </div>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
            {ciItems.map((item) => (
              <div key={item} className="text-lg font-semibold text-ink">
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Arrows up from infra to CI */}
        <Arrows count={3} />

        {/* Tier 1: IT Infrastructure — flat, cool tint */}
        <div className="rounded-2xl border border-hairline bg-bg-infra px-3 py-2.5 text-center shadow-sm">
          <div className="text-xl font-bold uppercase tracking-[0.12em] text-ink">
            IT Infrastructure Excellence Enablement
          </div>
        </div>
      </div>
    </section>
  );
}
