import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const yAxis = [
  "Prompt Engineering",
  "Context Engineering",
  "Loop Engineering",
  "Multi-Agent Framework",
];

const xAxis = [
  "Competitive Intel",
  "Target Research",
  "Medical Monitoring",
  "ADMET Prediction",
];

export function ScalingSection() {
  return (
    <section
      id="scaling"
      className="border-t border-hairline bg-paper py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          number="03"
          eyebrow="Two Axes of Scaling"
          title="Super intelligence emerges along two orthogonal axes."
          lede="One axis scales the agent's reasoning and planning. The other scales its action space — the tools and data it can wield. Drug R&D Super Intelligence lives in the upper-right corner."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <ScalingChart />

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <Axis
              title="Agentic Capability"
              subtitle="Reasoning & Planning"
              items={[
                ["Prompt Engineering", "Single-shot instruction crafting."],
                ["Context Engineering", "Curated memory, retrieval, and state."],
                ["Loop Engineering", "Self-correction via reward signal."],
                ["Multi-Agent Framework", "Specialists coordinated by an OS."],
              ]}
            />
            <Axis
              title="Action Space"
              subtitle="Tools & Data"
              items={[
                ["Competitive Intelligence", "Pipelines, deals, KOL signals."],
                ["Target Research", "Omics, literature, target validation."],
                ["Medical Monitoring", "Adverse events and real-world evidence."],
                ["ADMET Prediction", "Absorption, metabolism, toxicity models."],
              ]}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Axis({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle: string;
  items: [string, string][];
}) {
  return (
    <div className="rounded-lg border border-hairline bg-card p-7">
      <div className="eyebrow mb-2">{subtitle}</div>
      <h3 className="mb-5 text-2xl text-ink">{title}</h3>
      <ul className="space-y-3">
        {items.map(([k, v]) => (
          <li key={k} className="flex gap-4 border-t border-hairline pt-3">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
            <div>
              <div className="text-sm font-medium text-ink">{k}</div>
              <div className="text-sm text-ink-soft">{v}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ScalingChart() {
  const W = 800;
  const H = 480;
  const padL = 200;
  const padR = 40;
  const padT = 40;
  const padB = 80;

  return (
    <div className="overflow-hidden rounded-lg border border-hairline bg-card p-6">
      <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full">
        <defs>
          <linearGradient id="diag" x1="0" x2="1" y1="1" y2="0">
            <stop offset="0%" stopColor="oklch(0.82 0.05 210)" />
            <stop offset="100%" stopColor="oklch(0.45 0.13 220)" />
          </linearGradient>
          <marker
            id="arrow-diag"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="10"
            markerHeight="10"
            orient="auto-start-reverse"
          >
            <path d="M0,0 L10,5 L0,10 z" fill="oklch(0.45 0.13 220)" />
          </marker>
        </defs>

        {/* axes */}
        <line
          x1={padL}
          y1={H - padB}
          x2={W - padR}
          y2={H - padB}
          stroke="oklch(0.22 0.04 250)"
          strokeWidth="1.5"
        />
        <line
          x1={padL}
          y1={H - padB}
          x2={padL}
          y2={padT}
          stroke="oklch(0.22 0.04 250)"
          strokeWidth="1.5"
        />

        {/* gridlines + y ticks */}
        {yAxis.map((t, i) => {
          const y =
            H - padB - ((i + 1) / (yAxis.length + 1)) * (H - padB - padT);
          return (
            <g key={t}>
              <line
                x1={padL}
                y1={y}
                x2={W - padR}
                y2={y}
                stroke="oklch(0.88 0.01 240)"
                strokeDasharray="2 4"
              />
              <text
                x={padL - 12}
                y={y + 4}
                textAnchor="end"
                fontSize="11"
                fill="oklch(0.22 0.04 250)"
              >
                {t}
              </text>
            </g>
          );
        })}

        {/* x ticks */}
        {xAxis.map((t, i) => {
          const x =
            padL + ((i + 1) / (xAxis.length + 1)) * (W - padR - padL);
          return (
            <g key={t}>
              <line
                x1={x}
                y1={H - padB}
                x2={x}
                y2={padT}
                stroke="oklch(0.88 0.01 240)"
                strokeDasharray="2 4"
              />
              <text
                x={x}
                y={H - padB + 22}
                textAnchor="middle"
                fontSize="11"
                fill="oklch(0.22 0.04 250)"
              >
                {t}
              </text>
            </g>
          );
        })}

        {/* axis labels */}
        <text
          x={padL - 12}
          y={padT - 12}
          textAnchor="end"
          fontSize="9"
          letterSpacing="3"
          fill="oklch(0.58 0.09 210)"
        >
          AGENTIC CAPABILITY ↑
        </text>
        <text
          x={W - padR}
          y={H - padB + 50}
          textAnchor="end"
          fontSize="9"
          letterSpacing="3"
          fill="oklch(0.58 0.09 210)"
        >
          ACTION SPACE →
        </text>

        {/* diagonal arrow */}
        <line
          x1={padL + 20}
          y1={H - padB - 20}
          x2={W - padR - 40}
          y2={padT + 30}
          stroke="url(#diag)"
          strokeWidth="3"
          markerEnd="url(#arrow-diag)"
        />

        {/* destination label */}
        <g>
          <rect
            x={W - padR - 240}
            y={padT + 10}
            width="200"
            height="46"
            rx="6"
            fill="oklch(0.22 0.04 250)"
          />
          <text
            x={W - padR - 140}
            y={padT + 32}
            textAnchor="middle"
            className="font-serif"
            fontSize="14"
            fill="oklch(0.97 0.01 240)"
          >
            Drug R&amp;D
          </text>
          <text
            x={W - padR - 140}
            y={padT + 49}
            textAnchor="middle"
            fontSize="9"
            letterSpacing="3"
            fill="oklch(0.82 0.05 210)"
          >
            SUPER INTELLIGENCE
          </text>
        </g>

        {/* origin label */}
        <text
          x={padL + 8}
          y={H - padB - 8}
          fontSize="10"
          fill="oklch(0.45 0.03 250)"
        >
          today
        </text>
      </svg>
    </div>
  );
}
