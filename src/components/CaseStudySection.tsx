import { ArrowRight, CheckCircle2, FileInput, Stethoscope, BrainCircuit, TrendingUp, AlertCircle, Sparkles, Users } from "lucide-react";

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
        {/* Title */}
        <div className="mb-6">
          <h2 className="font-sans text-2xl font-black leading-[1.05] text-ink md:text-3xl lg:text-4xl">
            Case Study <span className="text-ink/40">·</span>{" "}
            <span className="text-teal">AI-Assisted Protocol Deviation</span>
          </h2>
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

        {/* Before AI vs With AI — split comparison */}
        <div className="mt-2 rounded-2xl border border-hairline bg-card p-3 md:p-4">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-8 bg-teal" />
            <span className="eyebrow text-base">PD Analysis Workflow</span>
          </div>

          <div className="relative grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
            {/* Center divider + transformation icon */}
            <div className="hidden md:flex absolute inset-y-0 left-1/2 -translate-x-1/2 flex-col items-center justify-center">
              <div className="h-full w-px bg-hairline" />
              <div className="absolute flex h-12 w-12 items-center justify-center rounded-full border border-hairline bg-card shadow-md">
                <Sparkles className="h-6 w-6 text-teal" />
              </div>
            </div>

            {/* Status Quo lane */}
            <div className="flex flex-col gap-2">
              <div className="mb-1 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-hairline bg-paper text-ink/60">
                  <AlertCircle className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-sans text-base font-bold leading-none text-ink md:text-lg">
                    Status Quo
                  </h3>
                  <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-ink/50">
                    Manual & Fragmented
                  </p>
                </div>
              </div>

              <div className="relative flex flex-col gap-1.5">
                {/* Step 1 */}
                <div className="rounded-xl border-2 border-dashed border-hairline bg-paper p-2.5">
                  <div className="flex items-start gap-2.5">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-ink/5 text-ink/60">
                      <FileInput className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-ink/40">
                        Step 01
                      </span>
                      <h4 className="text-sm font-bold text-ink md:text-base">CRA Input</h4>
                      <p className="text-xs leading-tight text-ink/60 md:text-sm">
                        Site staff submit protocol deviation reports manually.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center py-0.5">
                  <ArrowRight className="h-4 w-4 rotate-90 text-ink/30" />
                </div>

                {/* Step 2 */}
                <div className="rounded-xl border-2 border-dashed border-hairline bg-paper p-2.5">
                  <div className="flex items-start gap-2.5">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-ink/5 text-ink/60">
                      <Users className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-ink/40">
                        Step 02
                      </span>
                      <h4 className="text-sm font-bold text-ink md:text-base">Physician Review</h4>
                      <p className="text-xs leading-tight text-ink/60 md:text-sm">
                        Clinician reads every report before any analysis.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center py-0.5">
                  <ArrowRight className="h-4 w-4 rotate-90 text-ink/30" />
                </div>

                {/* Step 3 - split branch */}
                <div className="grid grid-cols-2 gap-1.5">
                  <div className="rounded-xl border-2 border-dashed border-hairline bg-paper p-2 text-center">
                    <div className="mx-auto mb-1 flex h-6 w-6 items-center justify-center rounded-md bg-ink/5 text-ink/60">
                      <span className="text-[10px] font-bold">PD</span>
                    </div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-ink md:text-sm">
                      PD Classification
                    </h4>
                    <p className="mt-0.5 text-[10px] leading-tight text-ink/50">
                      Manual category assignment
                    </p>
                  </div>
                  <div className="rounded-xl border-2 border-dashed border-hairline bg-paper p-2 text-center">
                    <div className="mx-auto mb-1 flex h-6 w-6 items-center justify-center rounded-md bg-ink/5 text-ink/60">
                      <span className="text-[10px] font-bold">IPD</span>
                    </div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-ink md:text-sm">
                      IPD Determination
                    </h4>
                    <p className="mt-0.5 text-[10px] leading-tight text-ink/50">
                      Subjective judgment call
                    </p>
                  </div>
                </div>

                <div className="flex justify-center py-0.5">
                  <ArrowRight className="h-4 w-4 rotate-90 text-ink/30" />
                </div>

                {/* Step 4 */}
                <div className="rounded-xl border-2 border-dashed border-hairline bg-paper p-2.5 opacity-80">
                  <div className="flex items-start gap-2.5">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-ink/5 text-ink/60">
                      <TrendingUp className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-ink/40">
                        Step 03
                      </span>
                      <h4 className="text-sm font-bold text-ink md:text-base">Trend Analysis</h4>
                      <p className="text-xs leading-tight text-ink/60 md:text-sm">
                        Aggregate and cross-reference by hand.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI-assisted lane */}
            <div className="flex flex-col gap-2">
              <div className="mb-1 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal text-primary-foreground shadow-md shadow-teal/20">
                  <BrainCircuit className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-sans text-base font-bold leading-none text-ink md:text-lg">
                    AI-Assisted
                  </h3>
                  <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-teal">
                    Unified & Automated
                  </p>
                </div>
              </div>

              <div className="relative flex flex-col gap-1.5">
                {/* Step 1 */}
                <div className="rounded-xl border border-teal/30 bg-paper p-2.5 shadow-sm ring-1 ring-teal/10">
                  <div className="flex items-start gap-2.5">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-teal/10 text-teal">
                      <FileInput className="h-3.5 w-3.5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-teal">
                          Step 01
                        </span>
                        <span className="rounded-full bg-teal/10 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-teal">
                          Same input
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-ink md:text-base">CRA Input</h4>
                      <p className="text-xs leading-tight text-ink-soft md:text-sm">
                        Reports flow into the system unchanged.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center py-0.5">
                  <ArrowRight className="h-4 w-4 rotate-90 text-teal" />
                </div>

                {/* Step 2 - AI Agent */}
                <div className="rounded-xl border border-teal/30 bg-gradient-to-br from-teal/10 to-teal/5 p-2.5 shadow-md ring-1 ring-teal/20">
                  <div className="flex items-start gap-2.5">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-teal text-primary-foreground">
                      <BrainCircuit className="h-3.5 w-3.5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-teal">
                          Step 02
                        </span>
                        <span className="rounded-full bg-teal px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                          AI Engine
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-ink md:text-base">AI Agent</h4>
                      <div className="mt-1 flex flex-wrap gap-1">
                        {["PD Category", "IPD Determination", "Trend Analysis"].map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-teal/20 bg-paper px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-teal"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center py-0.5">
                  <ArrowRight className="h-4 w-4 rotate-90 text-teal" />
                </div>

                {/* Step 3 */}
                <div className="rounded-xl border border-teal/30 bg-paper p-2.5 shadow-sm ring-1 ring-teal/10">
                  <div className="flex items-start gap-2.5">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-teal/10 text-teal">
                      <Stethoscope className="h-3.5 w-3.5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-teal">
                          Step 03
                        </span>
                        <span className="rounded-full bg-success/10 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-success-dim">
                          Review
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-ink md:text-base">Physician Review</h4>
                      <p className="text-xs leading-tight text-ink-soft md:text-sm">
                        Focused validation of AI-generated outputs.
                      </p>
                    </div>
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
