import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const xItems = [
  "Target Research",
  "Competitive Intelligence",
  "Clinical Data Benchmarking",
  "Protocol Deviation Analysis",
  "Medical Monitoring",
  "ADMET Prediction",
];

const yItems = [
  "Prompt Engineering",
  "Chain of Thoughts",
  "Context Engineering",
  "Harness Engineering",
  "Loop Engineering",
  "Multi-Agent Framework",
];

const zItems = [
  "Individual AI Capability Uplift",
  "Organizational AI Capability Uplift",
];

const STEPS = [
  "Start: anchor the destination.",
  "Step 1 · Scale the Action Space (tools & data).",
  "Step 2 · Scale Agentic Capability (reasoning & planning).",
  "Step 3 · Lift the whole system: people + organization.",
  "All three axes must scale together to reach Super Intelligence.",
];

export function ScalingSection() {
  const [step, setStep] = useState(0);
  const next = () => setStep((s) => (s + 1) % STEPS.length);

  // SVG geometry
  const W = 1100;
  const H = 620;
  const ox = 180; // origin x
  const oy = 500; // origin y
  const xEnd = { x: 980, y: 500 };
  const yEnd = { x: 180, y: 70 };
  const zEnd = { x: 380, y: 320 }; // diagonal (depth) axis
  const target = { x: 880, y: 130 };

  const showX = step >= 1;
  const showY = step >= 2;
  const showZ = step >= 3;
  const showAll = step >= 4;

  return (
    <section id="scaling" className="bg-paper py-8">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <SectionHeader
          eyebrow="Two-way Scaling"
          title="Three axes of scaling toward Drug R&D Super Intelligence."
          lede="Click the canvas to reveal each axis. Reaching the upper-right requires all three to scale together."
        />

        <div className="mt-4 flex items-center justify-between gap-4">
          <div className="text-lg font-medium text-ink">
            {STEPS[step]}
          </div>
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
          className="mt-4 cursor-pointer overflow-hidden rounded-lg border border-hairline bg-card"
        >
          <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full">
            <defs>
              <marker
                id="ar"
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="10"
                markerHeight="10"
                orient="auto-start-reverse"
              >
                <path d="M0,0 L10,5 L0,10 z" fill="currentColor" />
              </marker>
              <linearGradient id="diag" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="var(--color-teal-soft)" />
                <stop offset="100%" stopColor="var(--color-teal)" />
              </linearGradient>
            </defs>

            {/* NOW */}
            <g>
              <circle cx={ox} cy={oy} r="10" className="fill-ink" />
              <text x={ox - 16} y={oy + 32} className="fill-ink" fontSize="18" fontWeight="700">
                NOW
              </text>
            </g>

            {/* TARGET */}
            <g>
              <rect
                x={target.x - 130}
                y={target.y - 36}
                width="260"
                height="72"
                rx="10"
                className="fill-ink"
              />
              <text
                x={target.x}
                y={target.y - 10}
                textAnchor="middle"
                className="font-serif fill-paper"
                fontSize="20"
              >
                Drug R&amp;D
              </text>
              <text
                x={target.x}
                y={target.y + 18}
                textAnchor="middle"
                fontSize="12"
                letterSpacing="3"
                className="fill-teal-soft"
              >
                SUPER INTELLIGENCE
              </text>
            </g>

            {/* X axis — Action Space */}
            <AnimatePresence>
              {showX && (
                <motion.g
                  key="x"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-teal"
                >
                  <motion.line
                    x1={ox}
                    y1={oy}
                    x2={xEnd.x}
                    y2={xEnd.y}
                    stroke="currentColor"
                    strokeWidth="2.5"
                    markerEnd="url(#ar)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.7 }}
                  />
                  <text
                    x={xEnd.x}
                    y={xEnd.y + 48}
                    textAnchor="end"
                    fontSize="13"
                    letterSpacing="3"
                    className="fill-teal"
                  >
                    ACTION SPACE — TOOLS &amp; DATA →
                  </text>
                  {xItems.map((t, i) => {
                    const x = ox + ((i + 1) / (xItems.length + 1)) * (xEnd.x - ox);
                    return (
                      <motion.g
                        key={t}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + i * 0.15 }}
                      >
                        <line
                          x1={x}
                          y1={oy - 6}
                          x2={x}
                          y2={oy + 6}
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <text
                          x={x}
                          y={oy + 24}
                          textAnchor="middle"
                          fontSize="12"
                          className="fill-ink"
                        >
                          {t}
                        </text>
                      </motion.g>
                    );
                  })}
                </motion.g>
              )}
            </AnimatePresence>

            {/* Y axis — Agentic Capability */}
            <AnimatePresence>
              {showY && (
                <motion.g
                  key="y"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-teal"
                >
                  <motion.line
                    x1={ox}
                    y1={oy}
                    x2={yEnd.x}
                    y2={yEnd.y}
                    stroke="currentColor"
                    strokeWidth="2.5"
                    markerEnd="url(#ar)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.7 }}
                  />
                  <text
                    x={ox - 16}
                    y={yEnd.y - 16}
                    textAnchor="start"
                    fontSize="13"
                    letterSpacing="3"
                    className="fill-teal"
                  >
                    ↑ AGENTIC CAPABILITY — REASONING &amp; PLANNING
                  </text>
                  {yItems.map((t, i) => {
                    const y = oy - ((i + 1) / (yItems.length + 1)) * (oy - yEnd.y);
                    return (
                      <motion.g
                        key={t}
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + i * 0.15 }}
                      >
                        <line
                          x1={ox - 6}
                          y1={y}
                          x2={ox + 6}
                          y2={y}
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <text
                          x={ox - 14}
                          y={y + 4}
                          textAnchor="end"
                          fontSize="12"
                          className="fill-ink"
                        >
                          {t}
                        </text>
                      </motion.g>
                    );
                  })}
                </motion.g>
              )}
            </AnimatePresence>

            {/* Z axis — depth: human + org uplift */}
            <AnimatePresence>
              {showZ && (
                <motion.g
                  key="z"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-ink-soft"
                >
                  <motion.line
                    x1={ox}
                    y1={oy}
                    x2={zEnd.x}
                    y2={zEnd.y}
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeDasharray="6 5"
                    markerEnd="url(#ar)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.7 }}
                  />
                  <text
                    x={zEnd.x + 8}
                    y={zEnd.y - 8}
                    fontSize="13"
                    letterSpacing="2"
                    className="fill-ink"
                  >
                    ↗ HUMAN + ORG AI UPLIFT
                  </text>
                  {zItems.map((t, i) => {
                    const f = (i + 1) / (zItems.length + 1);
                    const x = ox + f * (zEnd.x - ox);
                    const y = oy + f * (zEnd.y - oy);
                    return (
                      <motion.g
                        key={t}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 + i * 0.2 }}
                      >
                        <circle cx={x} cy={y} r="4" className="fill-ink" />
                        <text
                          x={x + 10}
                          y={y + 4}
                          fontSize="12"
                          className="fill-ink"
                        >
                          {t}
                        </text>
                      </motion.g>
                    );
                  })}
                </motion.g>
              )}
            </AnimatePresence>

            {/* Final convergent arrow */}
            <AnimatePresence>
              {showAll && (
                <motion.g
                  key="conv"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <motion.line
                    x1={ox + 20}
                    y1={oy - 20}
                    x2={target.x - 60}
                    y2={target.y + 40}
                    stroke="url(#diag)"
                    strokeWidth="6"
                    markerEnd="url(#ar)"
                    className="text-teal"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.1 }}
                  />
                  <motion.text
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.0 }}
                    x={(ox + target.x) / 2}
                    y={(oy + target.y) / 2 - 16}
                    textAnchor="middle"
                    fontSize="14"
                    letterSpacing="2"
                    className="fill-teal"
                    fontWeight="700"
                  >
                    SCALE ALL THREE — TOGETHER
                  </motion.text>
                </motion.g>
              )}
            </AnimatePresence>
          </svg>
        </div>
      </div>
    </section>
  );
}
