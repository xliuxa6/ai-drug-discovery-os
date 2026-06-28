import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

// Action Space — applications, tools & data (left → right)
const xItems = [
  "Target Research",
  "ADMET Prediction",
  "Molecule Differentiation",
  "Animal Model Translatability",
  "Unmet Medical Needs",
  "Protocol Deviation Analysis",
  "Medical Monitoring",
  "Protocol Review",
  "GCTO Operation Platform",
  "Guidance QA",
  "Virtual Cell",
  "Digital Pathology",
  "Genomics Platform",
  "PBPK Prediction",
  "Clinical Data Benchmarking",
  "Competitive Intelligence",
  "Disease Deep Dive",
];


// AI Agentic Capability scaling (bottom → top)
const yItems = [
  "Prompt Engineering",
  "Chain of Thoughts",
  "Context Engineering",
  "Harness Engineering",
  "Loop Engineering",
  "Multi-Agent Framework",
];

const STEPS = [
  "Start: anchor the destination.",
  "Step 1 · Scale the Action Space — tiles spread across applications.",
  "Step 2 · Scale Agentic Capability — tiles climb the reasoning ladder.",
  "Step 3 · Fill the matrix — converge on Drug R&D Super Intelligence.",
];

const COLS = 20;
const ROWS = yItems.length; // 6
const HALF_C = Math.ceil(COLS / 2); // 10
const HALF_R = Math.ceil(ROWS / 2); // 3

// X-axis labels: first N are the real applications, last 3 are ellipses
const xLabels: string[] = Array.from({ length: COLS }, (_, i) => {
  if (i < xItems.length) return xItems[i];
  if (i >= COLS - 3) return "…";
  return "";
});

function tileState(r: number, c: number, step: number) {
  if (step >= 3) {
    const fromStep1 = r === 0 && c < HALF_C;
    const fromStep2 = c === 0 && r < HALF_R;
    if (fromStep1 || fromStep2) return { filled: true, delay: 0 };
    return { filled: true, delay: 0.025 * (r + c) };
  }
  if (step >= 2 && c === 0 && r < HALF_R) {
    return { filled: true, delay: r * 0.35 };
  }
  if (step >= 1 && r === 0 && c < HALF_C) {
    return { filled: true, delay: c * 0.18 };
  }
  return { filled: false, delay: 0 };
}

function colRevealed(c: number, step: number) {
  if (step >= 3) return true;
  if (step >= 1 && c < HALF_C) return true;
  return false;
}
function rowRevealed(r: number, step: number) {
  if (step >= 3) return true;
  if (step >= 2 && r < HALF_R) return true;
  return false;
}

// Lighter at bottom, darker at top
function tileOpacity(r: number) {
  return 0.35 + (r / (ROWS - 1)) * 0.65;
}

export function ScalingSection() {
  const [step, setStep] = useState(0);
  const next = () => setStep((s) => (s + 1) % STEPS.length);

  return (
    <section id="scaling" className="bg-paper py-4">
      <div className="mx-auto w-full max-w-7xl px-2 md:px-4">
        <SectionHeader
          eyebrow="Two-way Scaling"
          title="Tile the matrix toward Drug R&D Super Intelligence."
        />

        <div className="mt-4 flex items-center justify-between gap-4">
          <div className="text-xl font-medium text-ink md:text-2xl">{STEPS[step]}</div>
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              {STEPS.map((_, i) => (
                <span
                  key={i}
                  className={`h-2.5 w-8 rounded-full ${i <= step ? "bg-teal" : "bg-hairline"}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper hover:opacity-90 md:text-base"
            >
              {step === STEPS.length - 1 ? "Restart" : "Next →"}
            </button>
          </div>
        </div>

        <div
          onClick={next}
          className="mt-3 cursor-pointer overflow-hidden p-3 md:p-4"
        >
          <div className="relative">
            {/* Target badge — top right */}
            <div className="absolute right-2 top-2 z-10 rounded-lg bg-ink px-5 py-2 text-center shadow-md md:px-6 md:py-3">
              <div className="font-serif text-2xl text-paper md:text-3xl">Drug R&amp;D</div>
              <div className="text-xs font-semibold tracking-[0.25em] text-teal-soft md:text-sm">
                SUPER INTELLIGENCE
              </div>
            </div>

            {/* Y-axis label (vertical) + grid */}
            <div className="flex gap-4">
              <div className="flex items-center">
                <div
                  className="whitespace-nowrap text-sm font-bold tracking-[0.2em] text-ink md:text-base"
                  style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                >
                  AI AGENTIC CAPABILITY SCALING-UP
                </div>
              </div>

              <div className="flex-1">
                <div
                  className="grid gap-1"
                  style={{
                    gridTemplateColumns: `minmax(200px, 220px) repeat(${COLS}, minmax(0, 1fr))`,
                  }}
                >
                  {Array.from({ length: ROWS }).map((_, idxFromTop) => {
                    const r = ROWS - 1 - idxFromTop;
                    const labelOn = rowRevealed(r, step);
                    return (
                      <RowFragment key={r} r={r} step={step} labelOn={labelOn} label={yItems[r]} />
                    );
                  })}

                  {/* X-axis labels row — diagonal so they don't overlap */}
                  <div />
                  {xLabels.map((label, c) => (
                    <div key={c} className="relative h-32">
                      {label && (
                        <div
                          className={`absolute left-1/2 top-1 origin-top-left -rotate-45 whitespace-nowrap text-xs font-medium leading-tight transition-opacity duration-500 md:text-sm ${
                            colRevealed(c, step)
                              ? "text-teal opacity-100"
                              : "text-ink-soft opacity-30"
                          }`}
                        >
                          {label}
                        </div>
                      )}
                    </div>
                  ))}

                </div>

                {/* X-axis label */}
                <div className="mt-2 text-center text-sm font-bold tracking-[0.2em] text-ink md:text-base">
                  APPLICATION SCALING-UP (TOOL &amp; DATA)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RowFragment({
  r,
  step,
  labelOn,
  label,
}: {
  r: number;
  step: number;
  labelOn: boolean;
  label: string;
}) {
  return (
    <>
      <div
        className={`flex items-center justify-end pr-3 text-right text-sm font-medium leading-tight whitespace-normal transition-opacity duration-500 md:text-base ${
          labelOn ? "text-teal opacity-100" : "opacity-30 text-ink-soft"
        }`}
      >
        {label}
      </div>
      {Array.from({ length: COLS }).map((_, c) => {
        const { filled, delay } = tileState(r, c, step);
        return (
          <div
            key={c}
            className="relative aspect-square rounded-sm border border-hairline bg-paper"
          >
            <motion.div
              initial={false}
              animate={{
                opacity: filled ? tileOpacity(r) : 0,
                scale: filled ? 1 : 0.6,
              }}
              transition={{ duration: 0.3, delay: filled ? delay : 0 }}
              className="absolute inset-0 rounded-sm bg-teal"
            />
          </div>
        );
      })}
    </>
  );
}
