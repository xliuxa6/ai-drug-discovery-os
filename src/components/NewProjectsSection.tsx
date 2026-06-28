import React from "react";

type Item = { name: string; sub?: string[] };

const topColumns: {
  id: string;
  title: string;
  color: string;
  existing: Item[];
  candidates: Item[];
}[] = [
  {
    id: "search",
    title: "Search & Evaluation",
    color: "bg-bg-search",
    existing: [
      { name: "Target Research" },
      { name: "Animal Model Translatability Evaluation" },
      { name: "ADMET Prediction" },
      { name: "Molecule Differentiation Analysis" },
    ],
    candidates: [{ name: "Unmet Medical Needs Identification" }],
  },
  {
    id: "clinical",
    title: "Clinical Development",
    color: "bg-bg-clinical",
    existing: [
      { name: "Clinical Study QC & QA", sub: ["Protocol Deviation Analysis"] },
      { name: "Project Risk & Issue Identification & Management" },
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
    existing: [{ name: "Virtual Cell" }, { name: "Digital Pathology" }],
    candidates: [{ name: "Genomics Platform" }, { name: "PBPK Prediction" }],
  },
];

const ciColumn: {
  id: string;
  title: string;
  color: string;
  existing: Item[];
  candidates: Item[];
} = {
  id: "ci",
  title: "Competitive Intelligence & Scientific Finding Tracking",
  color: "bg-bg-ci",
  existing: [
    { name: "Scientific Finding Tracking" },
    { name: "Disease Deep Dive" },
    { name: "Clinical Data Benchmarking" },
    { name: "Competitive Intelligence Monitoring" },
  ],
  candidates: [],
};

const itColumn: {
  id: string;
  title: string;
  color: string;
  existing: Item[];
  candidates: Item[];
} = {
  id: "it",
  title: "IT Infrastructure Excellence Enablement",
  color: "bg-bg-infra",
  existing: [{ name: "IT Infrastructure Excellence Enablement" }],
  candidates: [],
};

function ExistingItem({ item }: { item: Item }) {
  return (
    <div>
      <div className="text-base font-medium leading-tight text-ink">
        {item.name}
      </div>
      {item.sub && (
        <div className="ml-3 border-l border-ink/15 pl-2">
          {item.sub.map((s) => (
            <div key={s} className="text-sm text-ink/80">
              {s}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function CandidateItem({ item }: { item: Item }) {
  return (
    <div>
      <div className="text-base font-medium leading-tight text-ink/40">
        {item.name}
      </div>
      {item.sub && (
        <div className="ml-3 border-l border-ink/10 pl-2">
          {item.sub.map((s) => (
            <div key={s} className="text-sm text-ink/30">
              {s}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function ColumnCard({
  col,
  children,
  ciCentered,
}: {
  col: { id: string; title: string; color: string; existing: Item[]; candidates: Item[] };
  children?: React.ReactNode;
  ciCentered?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border border-hairline p-3 shadow-sm ${col.color}`}
    >
      <div className="mb-2 text-center text-xl font-bold uppercase tracking-[0.12em] text-ink">
        {col.title}
      </div>
      {children ? (
        children
      ) : (
        <>
          <div className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-ink/50">
            In Progress
          </div>
          <div className={ciCentered ? "grid grid-cols-1 gap-1 md:grid-cols-2 md:pl-6 md:pr-3" : "space-y-1"}>
            {col.existing.map((p) => (
              <ExistingItem key={p.name} item={p} />
            ))}
          </div>

          {col.candidates.length > 0 && (
            <>
              <div className="my-3 border-t border-dashed border-ink/20" />
              <div className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-teal">
                Candidates
              </div>
              <div className="space-y-1.5">
                {col.candidates.map((p) => (
                  <CandidateItem key={p.name} item={p} />
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export function NewProjectsSection() {
  return (
    <section id="new-projects" className="border-t border-hairline bg-paper pt-6 pb-6">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-12 bg-teal/60" />
          <span className="eyebrow text-base">Potential New Projects · Candidates</span>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {topColumns.map((col) => (
            <ColumnCard key={col.id} col={col} />
          ))}
        </div>

        <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-3">
          <div className="md:col-span-2">
            <ColumnCard col={ciColumn} ciCentered>
              <div className="grid grid-cols-1 gap-1 md:grid-cols-2 md:place-items-center md:pl-8 md:pr-4">
                {ciColumn.existing.map((p) => (
                  <ExistingItem key={p.name} item={p} />
                ))}
              </div>
            </ColumnCard>
          </div>
          <div className="md:col-span-1">
            <ColumnCard col={itColumn} />
          </div>
        </div>
      </div>
    </section>
  );
}
