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
      className="border-t border-hairline bg-paper py-12 md:py-16"
    >
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <SectionHeader
          eyebrow="Two-way Scaling"
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
    <div className="rounded-lg border border-hairline bg-card p-8">
      <div className="eyebrow text-base mb-2">{subtitle}</div>
      <h3 className="mb-5 text-3xl text-ink">{title}</h3>
      <ul className="space-y-4">
        {items.map(([k, v]) => (
          <li key={k} className="flex gap-4 border-t border-hairline pt-4">
            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-teal" />
            <div>
              <div className="text-base font-semibold text-ink">{k}</div>
              <div className="text-base text-ink">{v}</div>
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
            <stop offset="0%" stopColor="var(--color-teal-soft)" />
            <stop offset="100%" stopColor="var(--color-teal)" />
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
            <path d="M0,0 L10,5 L0,10 z" fill="var(--color-teal)" />
          </marker>
        </defs>

        {/* axes */}
        <line
          x1={padL}
          y1={H - padB}
          x2={W - padR}
          y2={H - padB}
          className="stroke-ink"
          strokeWidth="1.5"
        />
        <line
          x1={padL}
          y1={H - padB}
          x2={padL}
          y2={padT}
          className="stroke-ink"
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
                className="stroke-hairline"
                strokeDasharray="2 4"
              />
              <text
                x={padL - 16}
                y={y + 5}
                textAnchor="end"
                fontSize="14"
                className="fill-ink"
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
                className="stroke-hairline"
                strokeDasharray="2 4"
              />
              <text
                x={x}
                y={H - padB + 26}
                textAnchor="middle"
                fontSize="14"
                className="fill-ink"
              >
                {t}
              </text>
            </g>
          );
        })}

        {/* axis labels */}
        <text
          x={padL - 16}
          y={padT - 16}
          textAnchor="end"
          fontSize="12"
          letterSpacing="3"
          className="fill-teal"
        >
          AGENTIC CAPABILITY ↑
        </text>
        <text
          x={W - padR}
          y={H - padB + 58}
          textAnchor="end"
          fontSize="12"
          letterSpacing="3"
          className="fill-teal"
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
            className="fill-ink"
          />
          <text
            x={W - padR - 140}
            y={padT + 36}
            textAnchor="middle"
            className="font-serif fill-paper"
            fontSize="18"
          >
            Drug R&amp;D
          </text>
          <text
            x={W - padR - 140}
            y={padT + 56}
            textAnchor="middle"
            fontSize="12"
            letterSpacing="3"
            className="fill-teal-soft"
          >
            SUPER INTELLIGENCE
          </text>
        </g>

        {/* origin label */}
        <text
          x={padL + 8}
          y={H - padB - 10}
          fontSize="12"
          className="fill-ink-soft"
        >
          today
        </text>
      </svg>
    </div>
  );
}
