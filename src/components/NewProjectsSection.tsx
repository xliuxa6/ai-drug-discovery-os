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
    color: "bg-bg-panel",
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
    color: "bg-bg-panel",
    projects: [
      {
        name: "Clinical Study QC & QA",
        feasibility: true,
        sub: [{ name: "Protocol Deviation Analysis", value: 70 }],
      },
      { name: "Project Risk & Issue Identification and Management", feasibility: true },
    ],
    candidates: [
      { name: "Medical Monitoring" },
      { name: "Protocol Review" },
      { name: "GCTO Operational Data Integration & Automation System" },
    ],
  },
  {
    id: "frontier",
    title: "Frontier Technology",
    color: "bg-bg-panel",
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

function NameOnlyItem({ name, gray, sub }: { name: string; gray?: boolean; sub?: Project["sub"] }) {
  return (
    <div className="py-1">
      <div className="flex items-start gap-2">
        <span className={`mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full ${gray ? "bg-ink/60" : "bg-ink"}`} />
        <div className={`text-lg leading-none ${gray ? "font-medium text-ink/60" : "font-semibold text-ink"}`}>
          {name}
        </div>
      </div>
      {sub && sub.length > 0 && (
        <div className="mt-2 space-y-2 border-l-2 border-ink/20 pl-4">
          {sub.map((s) => (
            <NameOnlyItem key={s.name} name={s.name} gray={gray || !!s.feasibility} />
          ))}
        </div>
      )}
    </div>
  );
}

function CandidateItem({ name }: { name: string }) {
  return (
    <div className="py-1">
      <div className="flex items-start gap-2">
        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ink/60" />
        <div className="text-lg font-medium leading-none text-ink/60">{name}</div>
      </div>
    </div>
  );
}


export function NewProjectsSection() {
  return (
    <section id="new-projects" className="bg-paper pb-6">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="mb-8">
          <h2 className="font-sans text-2xl font-black leading-[1.05] text-ink md:text-3xl lg:text-4xl">
            Project Overview
          </h2>
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
              <div className="space-y-3">
                {stream.projects.map((p) => (
                  <NameOnlyItem key={p.name} name={p.name} sub={p.sub} />
                ))}
              </div>
              {stream.candidates.length > 0 && (
                <>
                  <div className="my-3 border-t border-dashed border-ink/20" />
                  <div className="space-y-2">
                    {stream.candidates.map((p) => (
                      <CandidateItem key={p.name} name={p.name} />
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Tier 2: CI & Scientific Finding Tracking */}
        <div className="mt-5 rounded-2xl border border-hairline bg-bg-panel p-4 shadow-sm">
          <div className="mb-3 text-center text-lg font-bold uppercase tracking-[0.12em] text-teal">
            Competitive Intelligence & Scientific Finding Tracking
          </div>
          <div className="grid grid-cols-1 gap-x-5 gap-y-2 md:grid-cols-2">
            {ciItems.map((item) => (
              <div key={item.name} className="py-1">
                <NameOnlyItem name={item.name} />
                {item.candidates && item.candidates.length > 0 && (
                  <div className="mt-2 space-y-2 border-l-2 border-ink/20 pl-4">
                    {item.candidates.map((c) => (
                      <NameOnlyItem key={c} name={c} gray />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Tier 1: IT Infrastructure */}
        <div className="mt-5 rounded-2xl border border-hairline bg-bg-panel p-4 shadow-sm">
          <div className="text-center text-lg font-bold uppercase tracking-[0.12em] text-teal">
            IT Infrastructure Excellence Enablement
          </div>
        </div>
      </div>
    </section>
  );
}
