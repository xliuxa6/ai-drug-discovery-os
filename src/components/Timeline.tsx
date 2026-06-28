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
    <section className="flex h-full flex-col bg-paper/60">
      {/* Hero title centered on the slide */}
      <div className="flex flex-1 flex-col items-center justify-center px-4">
        <h1 className="text-center text-4xl font-black uppercase tracking-[0.08em] text-ink md:text-5xl lg:text-6xl">
          AI Taskforce Update
        </h1>
      </div>

      {/* Timeline moved lower on the slide */}
      <div className="mx-auto w-full max-w-7xl px-4 pb-8 md:px-6 md:pb-12">
        <div className="w-full">
          <div className="flex w-full items-start gap-1 md:gap-2">
            {milestones.map((m, i) => (
              <Fragment key={i}>
                {i > 0 && (
                  <div className="flex min-w-[8px] flex-1 items-start pt-[40px]">
                    <div
                      className={`h-0 w-full ${
                        i >= 4
                          ? "border-t border-dashed border-ink/30"
                          : "border-t border-hairline"
                      }`}
                    />
                  </div>
                )}
                <div className="flex min-w-0 flex-1 flex-col items-center text-center">
                  <div className="font-mono text-sm uppercase tracking-wider text-ink md:text-base lg:text-lg">
                    {m.date}
                  </div>
                  <div className="relative mt-2 flex h-4 items-center justify-center md:mt-3">
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
                    className={`mt-3 w-full break-words text-sm leading-snug md:mt-4 md:text-base ${
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
