type Item = { name: string; sub?: string[] };

const columns: {
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

function ExistingItem({ item }: { item: Item }) {
  return (
    <div>
      <div className="text-sm font-medium leading-tight text-ink/50 line-through decoration-ink/30">
        {item.name}
      </div>
      {item.sub && (
        <div className="ml-3 border-l border-ink/15 pl-2">
          {item.sub.map((s) => (
            <div key={s} className="text-xs text-ink/40 line-through decoration-ink/30">
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
    <div className="rounded-md border border-teal/50 bg-paper/80 px-2.5 py-1.5 shadow-sm">
      <div className="flex items-center gap-2">
        <span className="inline-block h-2 w-2 rounded-full bg-teal" />
        <span className="text-base font-semibold leading-tight text-ink">{item.name}</span>
        <span className="ml-auto rounded-full bg-teal/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-teal">
          New
        </span>
      </div>
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
          {columns.map((col) => (
            <div
              key={col.id}
              className={`rounded-2xl border border-hairline p-3 shadow-sm ${col.color}`}
            >
              <div className="mb-2 text-center text-xl font-bold uppercase tracking-[0.12em] text-ink">
                {col.title}
              </div>

              <div className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-ink/50">
                In Progress
              </div>
              <div className="space-y-1">
                {col.existing.map((p) => (
                  <ExistingItem key={p.name} item={p} />
                ))}
              </div>

              <div className="my-3 border-t border-dashed border-ink/20" />

              <div className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-teal">
                Candidates
              </div>
              <div className="space-y-1.5">
                {col.candidates.map((p) => (
                  <CandidateItem key={p.name} item={p} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
