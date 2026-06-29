import { ChevronRight } from "lucide-react";

type Ownership = "China" | "China & HQ" | "HQ" | "Unexplored";

const ownership: Record<string, Ownership> = {
  // China
  "External Environment Monitoring": "China",
  "Disease Deep-dive": "China",
  "Target Research & Novel Target Alerts": "China",
  "Asset Benchmarking": "China",
  "Animal Model Translatability Eval.": "China",
  "Molecular Differentiation Analysis": "China",
  "Project Risk & Issue Management": "China",
  "Clinical Data Benchmarking": "China",
  // China & HQ
  "ADMET Prediction": "China & HQ",
  "Binding Affinity Prediction": "China & HQ",
  "Competitive Intelligence Monitoring": "China & HQ",
  "Scientific Finding Tracking": "China & HQ",
  "Virtual Cell": "China & HQ",
  "Site Selection": "China & HQ",
  "Clinical Study QC/QA": "China & HQ",
  "Protocol Deviation": "China & HQ",
  "CSR Drafting": "China & HQ",
  "Medical Monitoring": "China & HQ",
  // HQ
  "Protocol Drafting": "HQ",
  "ICF Drafting": "HQ",
  "IB Updates": "HQ",
  "Digital Pathology": "HQ",
  "AI-assisted Drafting": "HQ",
  // Unexplored
  "Unmet Medical Needs Identification": "Unexplored",
  "Protocol Review": "Unexplored",
  "IB Drafting": "Unexplored",
  "Patient Recruitment": "Unexplored",
  "Operation Management Platform": "Unexplored",
  "AI for RWE": "Unexplored",
  "AI-based Virtual Review": "Unexplored",
  "AE/SAE Detection": "Unexplored",
  "Audit Report": "Unexplored",
};

type Phase = { name: string; apps: string[] };
type Group = { name: string; phases: Phase[] };

const groups: Group[] = [
  {
    name: "Search & Evaluation",
    phases: [
      {
        name: "Innovation Focus & Ideation",
        apps: [
          "External Environment Monitoring",
          "Disease Deep-dive",
          "Target Research & Novel Target Alerts",
          "Competitive Intelligence Monitoring",
          "Scientific Finding Tracking",
          "Virtual Cell",
          "Unmet Medical Needs Identification",
        ],
      },
      {
        name: "Search & Evaluation",
        apps: [
          "Asset Benchmarking",
          "Animal Model Translatability Eval.",
          "Molecular Differentiation Analysis",
        ],
      },
      {
        name: "Data Generation & Validation",
        apps: ["ADMET Prediction", "Binding Affinity Prediction"],
      },
    ],
  },
  {
    name: "Clinical Development",
    phases: [
      {
        name: "Study Planning",
        apps: [
          "Site Selection",
          "Protocol Drafting",
          "ICF Drafting",
          "Protocol Review",
          "IB Drafting",
        ],
      },
      {
        name: "Execution",
        apps: [
          "Clinical Study QC/QA",
          "Protocol Deviation",
          "Project Risk & Issue Management",
          "CSR Drafting",
          "IB Updates",
          "Medical Monitoring",
          "Patient Recruitment",
          "Operation Management Platform",
          "AE/SAE Detection",
          "Digital Pathology",
          "Audit Report",
          "AI for RWE",
        ],
      },
      {
        name: "Analysis & Reporting",
        apps: ["Clinical Data Benchmarking"],
      },
    ],
  },
  {
    name: "Regulatory Affairs",
    phases: [
      {
        name: "Regulatory Affairs",
        apps: ["AI-assisted Drafting", "AI-based Virtual Review"],
      },
    ],
  },
];

const order: Record<Ownership, number> = {
  "China": 0,
  "China & HQ": 1,
  "HQ": 2,
  "Unexplored": 3,
};

const chipClass: Record<Ownership, string> = {
  "China": "bg-emerald-500/15 border-emerald-600/50 text-emerald-900 dark:text-emerald-200",
  "China & HQ": "bg-sky-500/15 border-sky-600/50 text-sky-900 dark:text-sky-200",
  "HQ": "bg-amber-500/20 border-amber-600/50 text-amber-900 dark:text-amber-200",
  "Unexplored": "bg-zinc-400/15 border-zinc-500/60 border-dashed text-ink/70",
};

const dotClass: Record<Ownership, string> = {
  "China": "bg-emerald-500",
  "China & HQ": "bg-sky-500",
  "HQ": "bg-amber-500",
  "Unexplored": "bg-zinc-400",
};

const groupBg: Record<string, string> = {
  "Search & Evaluation": "bg-bg-search/40",
  "Clinical Development": "bg-bg-clinical/40",
  "Regulatory Affairs": "bg-bg-frontier/40",
};

const totalPhases = groups.reduce((n, g) => n + g.phases.length, 0); // 7

export function OpportunitiesSection() {
  return (
    <section id="opportunities" className="h-full bg-paper">
      <div className="mx-auto flex h-full w-full max-w-[1600px] flex-col px-4 py-4 md:px-6">
        {/* Title + legend */}
        <div className="mb-3 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-sans text-2xl font-black leading-[1.05] text-ink md:text-3xl lg:text-4xl">
              Opportunities Across R&amp;D Value Chain
            </h2>
            <p className="mt-1 text-base text-ink/70 md:text-lg">
              {"\n"}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-base">
            {(Object.keys(chipClass) as Ownership[]).map((k) => (
              <div key={k} className="flex items-center gap-1.5">
                <span className={`h-4 w-4 rounded-sm ${dotClass[k]}`} />
                <span className="font-medium text-ink">{k}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Group band */}
        <div
          className="mb-1 grid gap-1"
          style={{
            gridTemplateColumns: groups
              .map((g) => `${g.phases.length}fr`)
              .join(" "),
          }}
        >
          {groups.map((g) => (
            <div
              key={g.name}
              className={`rounded-md border border-hairline px-3 py-1.5 text-center text-base font-bold uppercase tracking-wider text-ink ${groupBg[g.name]}`}
            >
              {g.name}
            </div>
          ))}
        </div>

        {/* Phase header row with arrows */}
        <div
          className="grid items-stretch gap-1"
          style={{ gridTemplateColumns: `repeat(${totalPhases}, minmax(0,1fr))` }}
        >
          {groups.flatMap((g) =>
            g.phases.map((p, i) => (
              <div
                key={`${g.name}-${p.name}`}
                className="relative flex items-center justify-center rounded-md bg-ink px-2 py-2 text-center text-sm font-bold leading-tight text-paper md:text-base"
              >
                {p.name}
                {/* Arrow chevron between consecutive phases */}
                <ChevronRight
                  className="pointer-events-none absolute -right-3 top-1/2 z-10 h-6 w-6 -translate-y-1/2 text-ink"
                  strokeWidth={3}
                  aria-hidden
                  style={{
                    display:
                      g.name === groups[groups.length - 1].name &&
                      i === g.phases.length - 1
                        ? "none"
                        : undefined,
                  }}
                />
              </div>
            ))
          )}
        </div>

        {/* App columns */}
        <div
          className="mt-1 grid min-h-0 flex-1 gap-1"
          style={{ gridTemplateColumns: `repeat(${totalPhases}, minmax(0,1fr))` }}
        >
          {groups.flatMap((g) =>
            g.phases.map((p) => (
              <div
                key={`col-${g.name}-${p.name}`}
                className={`flex flex-col gap-1.5 overflow-y-auto rounded-md border border-hairline p-1.5 ${groupBg[g.name]}`}
              >
                {[...p.apps]
                  .sort(
                    (a, b) =>
                      order[ownership[a] ?? "Unexplored"] -
                      order[ownership[b] ?? "Unexplored"]
                  )
                  .map((app) => {
                    const own = ownership[app] ?? "Unexplored";
                    return (
                      <div
                        key={app}
                        className={`rounded-md border px-2 py-1.5 text-[13px] font-semibold leading-tight md:text-sm ${chipClass[own]}`}
                      >
                        {app}
                      </div>
                    );
                  })}
              </div>
            ))
          )}
        </div>

        {/* Bottom questions */}
        <div className="mt-3 flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-ink bg-paper py-3 shadow-lg">
          <p className="text-center text-lg font-black text-ink md:text-xl lg:text-2xl">
            Where are the valuable AI applications in different functions or project process?
          </p>
          <p className="text-center text-lg font-black text-ink md:text-xl lg:text-2xl">
            Where are the opportunities we believe we are more advanced so that we can talk broadly with HQ?
          </p>
        </div>
      </div>
    </section>
  );
}
