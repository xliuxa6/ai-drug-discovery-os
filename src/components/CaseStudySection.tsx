import { ArrowRight, FileInput, Stethoscope, BrainCircuit, TrendingUp, AlertCircle, Users, CheckCircle2 } from "lucide-react";

const timeline = [
  { date: "May 8", label: "Brainstorm" },
  { date: "May 11", label: "Prototype completed" },
  { date: "May 14", label: "First prototype communication" },
  { date: "Jun 12", label: "First round feedback" },
  { date: "Jun 26", label: "First round optimization completed" },
];


export function CaseStudySection() {
  return (
    <section id="case-study" className="bg-paper pb-2 md:pb-3">
      <div className="mx-auto w-full max-w-7xl px-2 md:px-3">
        {/* Title */}
        <div className="mb-8">
          <h2 className="font-sans text-2xl font-black leading-[1.05] text-ink md:text-3xl lg:text-4xl">
            Case Study <span className="text-ink/40">·</span>{" "}
            <span className="text-teal">AI-Assisted Protocol Deviation</span>
          </h2>
        </div>

        {/* Before AI vs With AI — split comparison (PD Analysis Workflow) */}
        <div className="mt-1.5 rounded-2xl border border-hairline bg-card p-2 md:p-3">
          <div className="relative mx-auto grid max-w-5xl grid-cols-1 gap-3 md:grid-cols-[1fr_auto_1fr]">
            {/* Status Quo lane */}
            <div className="flex flex-col gap-1">
              <div className="mb-1 flex items-center justify-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-hairline bg-paper text-ink/60">
                  <AlertCircle className="h-4 w-4" />
                </div>
                <h3 className="font-sans text-base font-bold text-ink md:text-lg">
                  Status Quo
                </h3>
              </div>

              <div className="relative flex flex-col gap-1">
                {/* Step 1 */}
                <div className="flex items-center justify-center gap-2.5 rounded-xl border-2 border-hairline bg-paper p-2">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-ink/5 text-ink/60">
                    <FileInput className="h-3.5 w-3.5" />
                  </div>
                  <h4 className="text-sm font-bold text-ink md:text-base">CRA Input</h4>
                </div>

                <div className="flex justify-center py-0">
                  <ArrowRight className="h-3.5 w-3.5 rotate-90 text-ink/30" />
                </div>

                {/* Step 2 */}
                <div className="flex items-center justify-center gap-2.5 rounded-xl border-2 border-hairline bg-paper p-2">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-ink/5 text-ink/60">
                    <Users className="h-3.5 w-3.5" />
                  </div>
                  <h4 className="text-sm font-bold text-ink md:text-base">Physician Review</h4>
                </div>

                <div className="flex justify-center py-0">
                  <ArrowRight className="h-3.5 w-3.5 rotate-90 text-ink/30" />
                </div>

                {/* Step 3 - split branch */}
                <div className="grid grid-cols-2 gap-1.5">
                  <div className="flex items-center justify-center gap-1 rounded-xl border-2 border-hairline bg-paper p-2 text-center">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-ink/5 text-ink/60">
                      <span className="text-[10px] font-bold">PD</span>
                    </div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-ink md:text-sm">
                      PD Classification
                    </h4>
                  </div>
                  <div className="flex items-center justify-center gap-1 rounded-xl border-2 border-hairline bg-paper p-2 text-center">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-ink/5 text-ink/60">
                      <span className="text-[10px] font-bold">IPD</span>
                    </div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-ink md:text-sm">
                      IPD Determination
                    </h4>
                  </div>
                </div>

                <div className="flex justify-center py-0">
                  <ArrowRight className="h-3.5 w-3.5 rotate-90 text-ink/30" />
                </div>

                {/* Step 4 */}
                <div className="flex items-center justify-center gap-2.5 rounded-xl border-2 border-hairline bg-paper p-2 opacity-80">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-ink/5 text-ink/60">
                    <TrendingUp className="h-3.5 w-3.5" />
                  </div>
                  <h4 className="text-sm font-bold text-ink md:text-base">Trend Analysis</h4>
                </div>
              </div>
            </div>

            {/* Center divider */}
            <div className="hidden md:flex flex-col items-center justify-center py-0">
              <div className="h-full w-px bg-gradient-to-b from-transparent via-teal to-transparent" />
            </div>

            {/* AI-assisted lane */}
            <div className="flex flex-col gap-1">
              <div className="mb-1 flex items-center justify-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-teal text-primary-foreground shadow-md shadow-teal/20">
                  <BrainCircuit className="h-4 w-4" />
                </div>
                <h3 className="font-sans text-base font-bold text-ink md:text-lg">
                  AI-Assisted
                </h3>
              </div>

              <div className="relative flex flex-col gap-1">
                {/* Step 1 */}
                <div className="flex items-center justify-center gap-2.5 rounded-xl border border-teal/30 bg-paper p-2 shadow-sm ring-1 ring-teal/10">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-teal/10 text-teal">
                    <FileInput className="h-3.5 w-3.5" />
                  </div>
                  <h4 className="text-sm font-bold text-ink md:text-base">CRA Input</h4>
                </div>

                <div className="flex justify-center py-0">
                  <ArrowRight className="h-3.5 w-3.5 rotate-90 text-teal" />
                </div>

                {/* Step 2 - AI Agent */}
                <div className="flex flex-col items-center justify-center gap-1.5 rounded-xl border border-teal/30 bg-gradient-to-br from-teal/10 to-teal/5 p-1.5 shadow-md ring-1 ring-teal/20">
                  <div className="flex items-center justify-center gap-2.5">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-teal text-primary-foreground">
                      <BrainCircuit className="h-3.5 w-3.5" />
                    </div>
                    <h4 className="text-sm font-bold text-ink md:text-base">AI Agent</h4>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-1">
                    {["PD Category", "IPD Determination", "Trend Analysis"].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-teal/20 bg-paper px-1.5 py-0.5 text-xs font-bold uppercase tracking-wider text-teal md:text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center py-0">
                  <ArrowRight className="h-3.5 w-3.5 rotate-90 text-teal" />
                </div>

                {/* Step 3 */}
                <div className="flex items-center justify-center gap-2.5 rounded-xl border border-teal/30 bg-paper p-2 shadow-sm ring-1 ring-teal/10">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-teal/10 text-teal">
                    <Stethoscope className="h-3.5 w-3.5" />
                  </div>
                  <h4 className="text-sm font-bold text-ink md:text-base">Physician Review</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-4 rounded-2xl bg-card p-2">
          <div className="flex w-full items-start">
            {timeline.map((m, i) => (
              <div key={i} className="flex flex-1 flex-col items-center text-center">
                <div className="font-mono text-base font-semibold uppercase tracking-wider text-ink md:text-lg">
                  {m.date}
                </div>
                <div className="relative my-1 flex h-4 w-full items-center justify-center">
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

        {/* Key takeaways */}
        <div className="mt-4 rounded-2xl border border-hairline bg-card p-3 md:p-4">
          <ul className="flex flex-col gap-2">
            {[
              "After one round of optimization, IPD determination accuracy increased from 67.5% to 80.5%, and PD category classification accuracy increased from 94.4% to 97.3%.",
              "\n",
              "AI pre-screening not only improves Physician review efficiency, but also enhances consistency across physicians and generates more comprehensive trend analysis and insights, further improving clinical study quality.",
              "Human review-based feedback and manual AI tool tuning during development consume significant time (87% of total time spent), becoming a bottleneck for AI application development. How can AI learn to improve accuracy by itself?",
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                <span className="text-sm font-medium leading-snug text-ink md:text-base">
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
