import { ArrowRight, CheckCircle2 } from "lucide-react";

const timeline = [
  { date: "May 8", label: "Brainstorm" },
  { date: "May 11", label: "Prototype completed" },
  { date: "May 14", label: "First prototype communication" },
  { date: "Jun 12", label: "First round feedback" },
  { date: "Jun 26", label: "First round optimization completed" },
];

const metrics = [
  {
    label: "PD Category Classification Accuracy",
    before: 94.4,
    after: 97.3,
  },
  {
    label: "IPD Determination Accuracy",
    before: 67.5,
    after: 80.5,
  },
];

export function CaseStudySection() {
  return (
    <section id="case-study" className="border-t border-hairline bg-paper py-3 md:py-4">
      <div className="mx-auto w-full max-w-7xl px-2 md:px-3">
        {/* Title eyebrow */}
        <div className="mb-2">
          <div className="mb-1 flex items-center gap-3">
            <span className="h-px w-12 bg-teal/60" />
            <span className="eyebrow text-lg">Case Study <span className="mx-1 text-ink/40">·</span> AI-Assisted Protocol Deviation</span>
          </div>
        </div>

        {/* Timeline */}
        <div className="rounded-2xl border border-hairline bg-card p-2 md:p-3">
          <div className="mb-2 flex items-center gap-3">
            <span className="h-px w-8 bg-teal" />
            <span className="eyebrow text-base">Project Timeline</span>
          </div>
          <div className="flex w-full items-start">
            {timeline.map((m, i) => (
              <div key={i} className="flex flex-1 flex-col items-center text-center">
                <div className="font-mono text-base font-semibold uppercase tracking-wider text-ink md:text-lg">
                  {m.date}
                </div>
                <div className="relative my-1.5 flex h-4 w-full items-center justify-center">
                  <span className="z-10 h-3 w-3 rounded-full bg-teal ring-4 ring-teal/20" />
                  {i < timeline.length - 1 && (
                    <div className="absolute left-1/2 right-0 top-1/2 h-0 -translate-y-1/2 border-t border-dashed border-ink/30" />
                  )}
                  {i > 0 && (
                    <div className="absolute left-0 right-1/2 top-1/2 h-0 -translate-y-1/2 border-t border-dashed border-ink/30" />
                  )}
                </div>
                <div className="w-full break-words px-1 text-base font-medium leading-tight text-ink md:text-lg">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-2 rounded-xl border-2 border-dashed border-teal bg-paper p-2 text-center">
            <div className="text-base font-black uppercase tracking-wider text-ink md:text-lg">
              Human review-based feedback and manual AI tool tuning
              <span className="mx-2 text-teal">·</span>
              <span className="text-teal">87%</span>
              <span className="ml-2 text-sm font-semibold normal-case tracking-normal text-ink/70 md:text-base">
                of total time spent
              </span>
            </div>
          </div>
        </div>

        {/* Before AI vs With AI */}
        <div className="mt-2 rounded-2xl border border-hairline bg-card p-2 md:p-3">
          <div className="mb-2 flex items-center gap-3">
            <span className="h-px w-8 bg-teal" />
            <span className="eyebrow text-base">PD Analysis Workflow</span>
          </div>
          <div className="grid gap-2 md:grid-cols-2">
            {/* Before AI */}
            <div className="rounded-xl border border-hairline bg-paper p-2 shadow-sm">
              <div className="mb-2 text-center text-lg font-bold uppercase tracking-wider text-ink">
                Before AI
              </div>
              <div className="flex flex-col items-stretch gap-1.5">
                <div className="rounded-lg border border-hairline bg-card p-1.5 text-center">
                  <div className="text-base font-bold uppercase tracking-wider text-ink md:text-lg">
                    CRA Input
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <ArrowRight className="h-4 w-4 rotate-90 text-ink/40" />
                </div>
                <div className="rounded-lg border border-hairline bg-card p-1.5 text-center">
                  <div className="text-base font-bold uppercase tracking-wider text-ink md:text-lg">
                    Physician Review
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <ArrowRight className="h-4 w-4 rotate-90 text-ink/40" />
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  <div className="rounded-lg border border-hairline bg-card p-1.5 text-center">
                    <div className="text-sm font-bold uppercase tracking-wider text-ink md:text-base">
                      PD Classification
                    </div>
                  </div>
                  <div className="rounded-lg border border-hairline bg-card p-1.5 text-center">
                    <div className="text-sm font-bold uppercase tracking-wider text-ink md:text-base">
                      IPD Determination
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <ArrowRight className="h-4 w-4 rotate-90 text-ink/40" />
                </div>
                <div className="rounded-lg border border-hairline bg-card p-1.5 text-center">
                  <div className="text-base font-bold uppercase tracking-wider text-ink md:text-lg">
                    Trend Analysis
                  </div>
                </div>
              </div>
            </div>

            {/* With AI */}
            <div className="rounded-xl border border-hairline bg-paper p-2 shadow-sm">
              <div className="mb-2 text-center text-lg font-bold uppercase tracking-wider text-teal">
                With AI
              </div>
              <div className="flex flex-col items-stretch gap-1.5">
                <div className="rounded-lg border border-hairline bg-card p-1.5 text-center">
                  <div className="text-base font-bold uppercase tracking-wider text-ink md:text-lg">
                    CRA Input
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <ArrowRight className="h-4 w-4 rotate-90 text-teal" />
                </div>
                <div className="rounded-lg border border-teal/30 bg-teal/5 p-1.5 text-center">
                  <div className="text-base font-bold uppercase tracking-wider text-teal md:text-lg">
                    AI Agent
                  </div>
                  <div className="mt-1 flex flex-wrap items-center justify-center gap-1">
                    <span className="rounded-full bg-teal/10 px-2 py-0.5 text-sm font-semibold uppercase tracking-wider text-teal">
                      PD Category
                    </span>
                    <span className="rounded-full bg-teal/10 px-2 py-0.5 text-sm font-semibold uppercase tracking-wider text-teal">
                      IPD
                    </span>
                    <span className="rounded-full bg-teal/10 px-2 py-0.5 text-sm font-semibold uppercase tracking-wider text-teal">
                      Trend
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <ArrowRight className="h-4 w-4 rotate-90 text-teal" />
                </div>
                <div className="rounded-lg border border-hairline bg-card p-1.5 text-center">
                  <div className="text-base font-bold uppercase tracking-wider text-ink md:text-lg">
                    Physician Review
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Accuracy improvement */}
        <div className="mt-2 rounded-2xl border border-hairline bg-card p-2 md:p-3">
          <div className="mb-2 flex items-center gap-3">
            <span className="h-px w-8 bg-teal" />
            <span className="eyebrow text-base">After One Round of Optimization</span>
          </div>
          <div className="grid gap-2 md:grid-cols-2">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-xl border border-hairline bg-paper p-2 shadow-sm"
              >
                <div className="text-base font-semibold leading-tight text-ink md:text-lg">
                  {m.label}
                </div>
                <div className="mt-1.5 flex items-center justify-between gap-3">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-ink/60 md:text-4xl">
                      {m.before.toFixed(1)}%
                    </div>
                    <div className="mt-0.5 text-sm uppercase tracking-wider text-ink/50">
                      Before
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <ArrowRight className="h-5 w-5 text-teal" />
                    <span className="text-sm font-bold text-teal">
                      +{(m.after - m.before).toFixed(1)}pp
                    </span>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-teal md:text-4xl">
                      {m.after.toFixed(1)}%
                    </div>
                    <div className="mt-0.5 flex items-center justify-center gap-1 text-sm uppercase tracking-wider text-teal">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      After
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
