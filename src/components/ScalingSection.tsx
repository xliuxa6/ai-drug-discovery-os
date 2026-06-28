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
const STEP1_END = COLS - 3; // 17 — fill right to the 4th-from-last column

// X-axis labels: first N are the real applications, last 3 are ellipses
const xLabels: string[] = Array.from({ length: COLS }, (_, i) => {
  if (i < xItems.length) return xItems[i];
  if (i >= COLS - 3) return "…";
  return "";
});

// Gradient height when going up: leftmost 2 columns reach the top,
// then next 2 reach the second-to-last row, gradually decreasing.
function upHeight(c: number) {
  if (c >= STEP1_END) return 1; // only bottom row filled from step 1
  return Math.max(1, ROWS - Math.floor(c / 2));
}

function tileState(r: number, c: number, step: number) {
  if (step === 0) return { filled: false, delay: 0 };

  // Step 1: bottom row fills right to STEP1_END
  if (step === 1) {
    if (r === 0 && c < STEP1_END) return { filled: true, delay: c * 0.12 };
    return { filled: false, delay: 0 };
  }

  const height = upHeight(c);

  // Step 2: gradient upward — column by column, bottom to top
  if (step === 2) {
    if (r < height) return { filled: true, delay: c * 0.18 + r * 0.12 };
    return { filled: false, delay: 0 };
  }

  // Step 3: fill the rightmost 3 columns bottom-to-top first, then the rest
  // from bottom-left to top-right.
  const isRightmost = c >= STEP1_END;
  if (isRightmost) {
    return { filled: true, delay: r * 0.08 };
  }

  if (r < height) return { filled: true, delay: 0 };
  return { filled: true, delay: 0.025 * (r + c) + 0.5 };
}

function colRevealed(c: number, step: number) {
  if (step >= 3) return true;
  if (step >= 1) return c < STEP1_END;
  return false;
}
function rowRevealed(r: number, step: number) {
  if (step >= 3) return true;
  if (step >= 2) return true; // leftmost column reaches the top in step 2
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
          title="Drug R&D AI OS"
          lede="Scaling Through Applications × Agentic Capabilities"
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

        <ul className="mt-4 list-disc space-y-1 pl-6 text-base text-ink md:text-lg">
          <li>Expand the Application Layer by building specialized tools and scaling trusted data assets</li>
          <li>Upgrade Agentic Intelligence by embedding advanced reasoning and planning capabilities</li>
          <li>Accelerate Organizational AI Maturity by developing talent while shipping solutions faster</li>
        </ul>

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
                    <div key={c} className="relative h-16">
                      {label && (
                        <div
                          className={`absolute top-0 left-1/2 origin-top-left rotate-45 whitespace-nowrap text-xs font-medium leading-tight transition-opacity duration-500 md:text-sm ${
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
