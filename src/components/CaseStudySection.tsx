import { ArrowRight, CheckCircle2 } from "lucide-react";

const timeline = [
  { date: "May 8", label: "Brainstorm" },
  { date: "May 11", label: "Prototype completed" },
  { date: "May 14", label: "First prototype communication" },
  { date: "Jun 12", label: "First round feedback" },
  { date: "Jun 26", label: "First round optimization completed" },
];

const workflow = [
  { title: "CRA Input", body: "CRA enters the PD activity into the SMART system." },
  { title: "Physician Review", body: "Physician reviews the submitted PD activity." },
  { title: "PD Type Classification", body: "Classify the PD by its type." },
  { title: "IPD Determination", body: "Determine whether the PD is an Important Protocol Deviation (IPD)." },
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
    <section id="case-study" className="border-t border-hairline bg-paper py-6 md:py-8">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        {/* Wide title */}
        <div className="mb-4 max-w-4xl">
          <div className="mb-2 flex items-center gap-3">
            <span className="h-px w-12 bg-teal/60" />
            <span className="eyebrow text-base">Case Study</span>
          </div>
          <h2
            className="inline-block font-sans text-2xl font-black uppercase tracking-[0.15em] text-ink md:text-3xl lg:text-4xl"
            style={{ transform: "scaleX(1.08)", transformOrigin: "left" }}
          >
            AI-ASSISTED PROTOCOL DEVIATION
          </h2>
        </div>

        {/* Timeline */}
        <div className="rounded-2xl border border-hairline bg-card p-4 md:p-5">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-8 bg-teal" />
            <span className="eyebrow text-base">Project Timeline</span>
          </div>
          <div className="flex w-full items-start">
            {timeline.map((m, i) => (
              <div key={i} className="flex flex-1 flex-col items-center text-center">
                <div className="font-mono text-sm font-semibold uppercase tracking-wider text-ink md:text-base">
                  {m.date}
                </div>
                <div className="relative my-2 flex h-4 w-full items-center justify-center">
                  <span className="z-10 h-3 w-3 rounded-full bg-teal ring-4 ring-teal/20" />
                  {i < timeline.length - 1 && (
                    <div className="absolute left-1/2 right-0 top-1/2 h-0 -translate-y-1/2 border-t border-dashed border-ink/30" />
                  )}
                  {i > 0 && (
                    <div className="absolute left-0 right-1/2 top-1/2 h-0 -translate-y-1/2 border-t border-dashed border-ink/30" />
                  )}
                </div>
                <div className="w-full break-words px-1 text-sm font-medium leading-tight text-ink md:text-base">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What is PD Analysis */}
        <div className="mt-4 rounded-2xl border border-hairline bg-card p-4 md:p-5">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-8 bg-teal" />
            <span className="eyebrow text-base">What is PD Analysis?</span>
          </div>
          <div className="flex flex-col items-stretch gap-3 md:flex-row">
            {workflow.map((step, idx, arr) => (
              <div key={step.title} className="flex flex-1 items-center gap-2">
                <div className="flex-1 rounded-xl border border-hairline bg-paper p-3 text-center shadow-sm">
                  <div className="text-base font-bold uppercase tracking-wider text-ink md:text-lg">
                    {step.title}
                  </div>
                  <p className="mt-1 text-sm leading-tight text-ink/80 md:text-base">
                    {step.body}
                  </p>
                </div>
                {idx < arr.length - 1 && (
                  <ArrowRight className="hidden h-5 w-5 shrink-0 text-teal md:block" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Accuracy improvement */}
        <div className="mt-4 rounded-2xl border border-hairline bg-card p-4 md:p-5">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-8 bg-teal" />
            <span className="eyebrow text-base">After One Round of Optimization</span>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-xl border border-hairline bg-paper p-4 shadow-sm"
              >
                <div className="text-base font-semibold leading-tight text-ink md:text-lg">
                  {m.label}
                </div>
                <div className="mt-3 flex items-center justify-between gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-ink/60 md:text-4xl">
                      {m.before.toFixed(1)}%
                    </div>
                    <div className="mt-1 text-xs uppercase tracking-wider text-ink/50 md:text-sm">
                      Before
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <ArrowRight className="h-6 w-6 text-teal" />
                    <span className="text-xs font-bold text-teal md:text-sm">
                      +{(m.after - m.before).toFixed(1)}pp
                    </span>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-teal md:text-4xl">
                      {m.after.toFixed(1)}%
                    </div>
                    <div className="mt-1 flex items-center justify-center gap-1 text-xs uppercase tracking-wider text-teal md:text-sm">
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
