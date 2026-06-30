import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
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

const COLS = xItems.length; // 17 application columns
const ROWS = yItems.length; // 6
const STEP1_END = COLS; // fill all the way across on step 1

// X-axis labels: each application gets its own column
const xLabels: string[] = [...xItems];

// Gradient height when going up: leftmost 2 columns reach the top,
// then next 2 reach the second-to-last row, gradually decreasing.
function upHeight(c: number) {
  return Math.max(1, ROWS - Math.floor(c / 2));
}

function tileState(r: number, c: number, step: number) {
  if (step === 0) return { filled: false, delay: 0 };

  // Step 1: bottom row fills all the way across
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

  // Step 3: fill any remaining tiles from bottom-left to top-right
  if (r < height) return { filled: true, delay: 0 };
  return { filled: true, delay: 0.025 * (r + c) + 0.5 };
}

function colRevealed(c: number, step: number) {
  return step >= 1;
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
  const next = () => setStep((s) => (s + 1) % 4);

  return (
    <section id="scaling" className="bg-paper pb-4">
      <div className="mx-auto w-full max-w-7xl px-2 md:px-4">
        <SectionHeader
          title="Drug R&D AI Operating System"
          lede="Scaling Through Applications × Agentic Capabilities"
        />

        <div className="mt-2 grid gap-2 md:grid-cols-3">
          {[
            "Expand the Application Layer by building specialized tools and scaling trusted data assets",
            "Upgrade Agentic Intelligence by embedding advanced reasoning and planning capabilities",
            "Accelerate Organizational AI Maturity by developing talent while shipping solutions faster",
          ].map((text, i) => (
            <div
              key={i}
              className={`flex items-start gap-2 text-base text-ink transition-opacity duration-500 md:text-lg ${
                step > i ? "opacity-100" : "opacity-0"
              }`}
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
              <span className="leading-snug">{text}</span>
            </div>
          ))}
        </div>

        {/* Next control — above the matrix, far right */}
        <div className="mt-2 flex items-start justify-end">
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next step"
            className="inline-flex items-center justify-center rounded-full bg-ink p-3 text-paper shadow-sm transition-transform hover:scale-105 active:scale-95"
          >
            <Play className="h-6 w-6" />
          </button>
        </div>

        <div
          onClick={next}
          className="mt-1 cursor-pointer overflow-hidden p-1 md:p-2"
        >
          <div className="relative">
            {/* Y-axis label (vertical) + grid */}
            <div className="flex gap-4">
              <div className="flex items-center">
                <div
                  className="whitespace-nowrap text-sm font-bold tracking-[0.2em] text-ink md:text-base"
                  style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                >
                  AI AGENTIC CAPABILITY SCALING
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
                  APPLICATION SCALING (TOOL &amp; DATA)
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
