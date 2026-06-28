import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

// Columns (left → right): Action Space — applications, tools & data
const xItems = [
  "Target Research",
  "Competitive Intelligence",
  "Clinical Data Benchmarking",
  "Protocol Deviation Analysis",
  "Medical Monitoring",
  "ADMET Prediction",
];

// Rows (bottom → top): AI Agentic Capability scaling
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

const COLS = xItems.length; // 6
const ROWS = yItems.length; // 6
const HALF_C = Math.ceil(COLS / 2); // 3
const HALF_R = Math.ceil(ROWS / 2); // 3

// r = 0 bottom, c = 0 left
function tileState(r: number, c: number, step: number) {
  // Returns { filled: boolean, delay: number }
  if (step >= 3) {
    // skip tiles already covered in earlier steps (they stay filled, no delay)
    const fromStep1 = r === 0 && c < HALF_C;
    const fromStep2 = c === 0 && r < HALF_R;
    if (fromStep1 || fromStep2) return { filled: true, delay: 0 };
    return { filled: true, delay: 0.04 * (r + c) };
  }
  if (step >= 2 && c === 0 && r < HALF_R) {
    return { filled: true, delay: r * 0.45 };
  }
  if (step >= 1 && r === 0 && c < HALF_C) {
    return { filled: true, delay: c * 0.45 };
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

export function ScalingSection() {
  const [step, setStep] = useState(0);
  const next = () => setStep((s) => (s + 1) % STEPS.length);

  return (
    <section id="scaling" className="bg-paper py-8">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <SectionHeader
          eyebrow="Two-way Scaling"
          title="Tile the matrix toward Drug R&D Super Intelligence."
        />

        <div className="mt-4 flex items-center justify-between gap-4">
          <div className="text-lg font-medium text-ink">{STEPS[step]}</div>
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              {STEPS.map((_, i) => (
                <span
                  key={i}
                  className={`h-2 w-6 rounded-full ${
                    i <= step ? "bg-teal" : "bg-hairline"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="rounded-full bg-ink px-5 py-2 text-sm font-semibold text-paper hover:opacity-90"
            >
              {step === STEPS.length - 1 ? "Restart" : "Next →"}
            </button>
          </div>
        </div>

        <div
          onClick={next}
          className="mt-4 cursor-pointer overflow-hidden rounded-lg border border-hairline bg-card p-6"
        >
          <div className="relative">
            {/* Target badge — top right */}
            <div className="absolute right-2 top-0 z-10 rounded-lg bg-ink px-6 py-3 text-center shadow-md">
              <div className="font-serif text-xl text-paper">Drug R&amp;D</div>
              <div className="text-[11px] tracking-[0.25em] text-teal-soft">
                SUPER INTELLIGENCE
              </div>
            </div>

            {/* Grid: y-labels column + tile grid; bottom row = x-labels */}
            <div
              className="grid gap-2"
              style={{
                gridTemplateColumns: `170px repeat(${COLS}, minmax(0, 1fr))`,
              }}
            >
              {/* For each row from top (ROWS-1) down to 0 */}
              {Array.from({ length: ROWS }).map((_, idxFromTop) => {
                const r = ROWS - 1 - idxFromTop; // actual row index (0 = bottom)
                const labelOn = rowRevealed(r, step);
                return (
                  <RowFragment
                    key={r}
                    r={r}
                    step={step}
                    labelOn={labelOn}
                    label={yItems[r]}
                  />
                );
              })}

              {/* Bottom strip: empty cell under y-labels, then x-axis labels */}
              <div className="flex items-start justify-end pr-2 pt-2">
                <div className="text-center">
                  <div className="inline-block h-3 w-3 rounded-full bg-ink" />
                  <div className="mt-1 text-xs font-bold tracking-wider text-ink">
                    NOW
                  </div>
                </div>
              </div>
              {xItems.map((label, c) => (
                <div
                  key={label}
                  className={`pt-2 text-center text-[11px] font-medium leading-tight transition-opacity duration-500 ${
                    colRevealed(c, step) ? "text-teal opacity-100" : "opacity-30 text-ink-soft"
                  }`}
                >
                  {label}
                </div>
              ))}
            </div>

            {/* Axis captions */}
            <div className="mt-4 flex items-center justify-between text-[11px] tracking-[0.25em] text-ink-soft">
              <span>↑ AI AGENTIC CAPABILITY</span>
              <span>ACTION SPACE — APPLICATIONS →</span>
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
        className={`flex items-center justify-end pr-3 text-right text-[11px] font-medium leading-tight transition-opacity duration-500 ${
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
            className="relative aspect-[5/3] rounded-md border border-hairline bg-paper"
          >
            <motion.div
              initial={false}
              animate={{
                opacity: filled ? 1 : 0,
                scale: filled ? 1 : 0.6,
              }}
              transition={{ duration: 0.35, delay: filled ? delay : 0 }}
              className="absolute inset-0 rounded-md bg-teal shadow-sm"
            />
          </div>
        );
      })}
    </>
  );
}
