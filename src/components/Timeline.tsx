import { Fragment } from "react";

const milestones = [
  { date: "Feb 5", label: "Kickoff" },
  { date: "Feb 14", label: "Project proposal finalized" },
  { date: "Mar 17", label: "Overall system design confirmed" },
  { date: "Mar 18", label: "8 project teams established" },
  { date: "Jul 27", label: "Deliver ≥ 2 project pilots", highlight: true },
  { date: "Sep", label: "Deliver ≥ 5 project MVPs" },
  { date: "Nov", label: "Launch ≥ 5 projects into production" },
];

export function Timeline() {
  return (
    <section className="border-b border-hairline bg-paper/60">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-8 bg-teal" />
          <span className="eyebrow text-base">Program Timeline · 2026</span>
        </div>
        <div className="relative overflow-x-auto pb-2">
          <div className="relative flex min-w-[900px] items-start">
            {milestones.map((m, i) => (
              <Fragment key={i}>
                {i > 0 && (
                  <div className="flex min-w-[24px] flex-1 items-start pt-[40px]">
                    <div
                      className={`h-0 w-full ${
                        i >= 4
                          ? "border-t border-dashed border-ink/30"
                          : "border-t border-hairline"
                      }`}
                    />
                  </div>
                )}
                <div className="flex min-w-[120px] max-w-[150px] flex-1 shrink-0 flex-col items-center text-center">
                  <div className="font-mono text-lg uppercase tracking-wider text-ink">
                    {m.date}
                  </div>
                  <div className="relative mt-3 flex h-4 items-center justify-center">
                    {m.highlight ? (
                      <span className="relative flex h-4 w-4">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" />
                        <span className="relative inline-flex h-4 w-4 rounded-full bg-teal ring-4 ring-teal/20" />
                      </span>
                    ) : (
                      <span className="h-3 w-3 rounded-full bg-ink-soft" />
                    )}
                  </div>
                  <div
                    className={`mt-4 max-w-[140px] text-base leading-snug ${
                      m.highlight ? "font-semibold text-teal" : "text-ink"
                    }`}
                  >
                    {m.label}
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
