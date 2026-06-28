

type Project = { name: string; progress?: number; sub?: string[] };

const applications: { title: string; projects: Project[] }[] = [
  {
    title: "Search & Evaluation",
    projects: [
      { name: "Target Research" },
      { name: "Animal Model Translatability Evaluation" },
      { name: "ADMET Prediction" },
      { name: "Molecule Differentiation Analysis" },
    ],
  },
  {
    title: "Clinical Development",
    projects: [
      { name: "Clinical Study QC & QA", sub: ["Protocol Deviation Analysis"] },
      { name: "Project Risk & Issue Identification & Management" },
    ],
  },
  {
    title: "Frontier Technology",
    projects: [{ name: "Virtual Cell" }, { name: "Digital Pathology" }],
  },
];

const ciItems = [
  "Scientific Finding Checking",
  "Disease Deep Dive",
  "Clinical Data Benchmarking",
  "Competitive Intelligence Monitoring",
];

function ProgressBar({ value = 50, showLabels = false }: { value?: number; showLabels?: boolean }) {
  return (
    <div className="mt-1.5">
      <div className="relative h-4 w-full rounded-full bg-hairline/60 overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: `${value}%`,
            backgroundImage:
              "repeating-linear-gradient(45deg, #16a34a 0 6px, #15803d 6px 12px)",
          }}
        />
      </div>
      {/* Markers BELOW the bar pointing UP */}
      <div className="relative h-3">
        <div className="absolute top-0 -translate-x-1/2" style={{ left: "80%" }}>
          <div className="h-0 w-0 border-x-[7px] border-b-[10px] border-x-transparent border-b-ink" />
        </div>
        <div className="absolute top-0 -translate-x-1/2" style={{ left: "100%" }}>
          <div className="h-0 w-0 border-x-[7px] border-b-[10px] border-x-transparent border-b-ink" />
        </div>
      </div>
      {showLabels && (
        <div className="relative h-9 text-[12px] font-semibold uppercase tracking-wider text-ink/80">
          <div className="absolute -translate-x-1/2 text-center leading-tight" style={{ left: "80%" }}>
            <div>Pilot</div>
            <div className="font-normal text-ink/60">September</div>
          </div>
          <div className="absolute -translate-x-1/2 text-center leading-tight" style={{ left: "100%" }}>
            <div>Massive Reuse</div>
            <div className="font-normal text-ink/60">November</div>
          </div>
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project, showLabels }: { project: Project; showLabels?: boolean }) {
  return (
    <div className="rounded-lg border border-hairline bg-card/50 px-3 py-2">
      <div className="text-[15px] font-semibold text-ink leading-tight">{project.name}</div>
      <ProgressBar value={50} showLabels={showLabels} />
      {project.sub && (
        <div className="mt-2 space-y-1.5 border-l-2 border-teal/40 pl-3">
          {project.sub.map((s) => (
            <div key={s}>
              <div className="text-[13px] font-medium text-ink/80">{s}</div>
              <ProgressBar value={50} />
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
      className="grid items-center justify-items-center py-1"
      style={{ gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))` }}
    >
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="22" height="26" viewBox="0 0 22 26" className="text-teal">
          <line x1="11" y1="26" x2="11" y2="8" stroke="currentColor" strokeWidth="2.5" />
          <polygon points="11,0 4,10 18,10" fill="currentColor" />
        </svg>
      ))}
    </div>
  );
}

export function ProgressSection() {
  let firstShown = false;
  return (
    <section id="progress" className="border-t border-hairline bg-paper pt-2 pb-6">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <SectionHeader
          eyebrow="Current Project Progress"
          title="Five streams, three tiers."
          lede=""
        />

        {/* Tier 3: Applications */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {applications.map((app) => (
            <div
              key={app.title}
              className="rounded-2xl border border-hairline bg-card/30 p-3"
            >
              <div className="mb-2 text-center text-lg font-bold uppercase tracking-[0.15em] text-teal">
                {app.title}
              </div>
              <div className="space-y-2">
                {app.projects.map((p) => {
                  const showLabels = !firstShown;
                  firstShown = true;
                  return <ProjectCard key={p.name} project={p} showLabels={showLabels} />;
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Arrows up from CI to applications */}
        <Arrows count={3} />

        {/* Tier 2: CI & Scientific Finding Checking — flat */}
        <div className="rounded-2xl border border-hairline bg-card/30 p-3">
          <div className="mb-2 text-center text-lg font-bold uppercase tracking-[0.15em] text-teal">
            Competitive Intelligence & Scientific Finding Checking
          </div>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
            {ciItems.map((item) => (
              <div
                key={item}
                className="rounded-md border border-hairline bg-paper/70 px-3 py-1.5 text-[15px] font-semibold text-ink"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Arrows up from infra to CI */}
        <Arrows count={3} />

        {/* Tier 1: IT Infrastructure — flat */}
        <div className="rounded-2xl border border-hairline bg-card/30 px-3 py-2.5 text-center">
          <div className="text-lg font-bold uppercase tracking-[0.15em] text-teal">
            IT Infrastructure Excellence Enablement
          </div>
        </div>
      </div>
    </section>
  );
}
