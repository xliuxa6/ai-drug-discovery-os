import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const agents = [
  {
    name: "Competitive Intelligence",
    role: "Pipeline mapping, deal flow, and rival readouts.",
    icon: "CI",
  },
  {
    name: "Target Research",
    role: "Disease biology, target validation, and mechanism mining.",
    icon: "TR",
  },
  {
    name: "Clinical Data Benchmarking",
    role: "Trial outcomes, endpoint comparisons, cohort analytics.",
    icon: "CB",
  },
  {
    name: "Medical Monitoring",
    role: "Safety signals, adverse events, real-world evidence.",
    icon: "MM",
  },
];

export function OSSection() {
  return (
    <section
      id="os"
      className="border-t border-hairline bg-card py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          number="02"
          eyebrow="Drug R&D AI OS"
          title="An operating system that composes specialist agents."
          lede="No single agent solves a drug program. The R&D AI OS routes tasks, shares context, and orchestrates specialized agents — turning fragmented tools into one coherent workflow."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <OSDiagram />

          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-hairline bg-hairline md:grid-cols-4">
            {agents.map((a) => (
              <div key={a.name} className="bg-card p-5">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-md border border-teal/40 font-mono text-xs text-teal">
                  {a.icon}
                </div>
                <div className="text-sm font-medium text-ink">{a.name}</div>
                <div className="mt-1 text-sm text-ink-soft">{a.role}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 rounded-md border border-dashed border-teal/40 bg-paper px-5 py-3 text-xs uppercase tracking-[0.2em] text-ink-soft">
            <span className="text-teal">Kernel</span>
            <span>Shared memory</span>
            <span>·</span>
            <span>Tool registry</span>
            <span>·</span>
            <span>Task router</span>
            <span>·</span>
            <span>Audit trail</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function OSDiagram() {
  return (
    <div className="relative w-full overflow-hidden rounded-lg border border-hairline bg-paper p-6">
      <svg viewBox="0 0 800 380" className="h-auto w-full">
        <defs>
          <marker
            id="arrow-os"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M0,0 L10,5 L0,10 z" fill="oklch(0.58 0.09 210)" />
          </marker>
        </defs>

        {/* kernel */}
        <g>
          <rect
            x="320"
            y="150"
            width="160"
            height="80"
            rx="6"
            fill="oklch(0.22 0.04 250)"
          />
          <text
            x="400"
            y="185"
            textAnchor="middle"
            className="font-serif"
            fontSize="20"
            fill="oklch(0.97 0.01 240)"
          >
            Drug R&amp;D AI OS
          </text>
          <text
            x="400"
            y="208"
            textAnchor="middle"
            fontSize="9"
            letterSpacing="3"
            fill="oklch(0.82 0.05 210)"
          >
            KERNEL
          </text>
        </g>

        {/* satellites */}
        {[
          { x: 80, y: 50, label: "Competitive Intelligence", tag: "CI" },
          { x: 560, y: 50, label: "Target Research", tag: "TR" },
          { x: 80, y: 270, label: "Clinical Benchmarking", tag: "CB" },
          { x: 560, y: 270, label: "Medical Monitoring", tag: "MM" },
        ].map((s) => {
          const cx = s.x + 80;
          const cy = s.y + 30;
          return (
            <g key={s.tag}>
              <line
                x1={cx < 400 ? s.x + 160 : s.x}
                y1={cy}
                x2={cx < 400 ? 320 : 480}
                y2={190}
                stroke="oklch(0.58 0.09 210)"
                strokeOpacity="0.5"
                strokeWidth="1"
                markerEnd="url(#arrow-os)"
              />
              <rect
                x={s.x}
                y={s.y}
                width="160"
                height="60"
                rx="6"
                fill="oklch(0.99 0 0)"
                stroke="oklch(0.88 0.01 240)"
              />
              <rect
                x={s.x + 12}
                y={s.y + 14}
                width="28"
                height="28"
                rx="4"
                fill="none"
                stroke="oklch(0.58 0.09 210)"
              />
              <text
                x={s.x + 26}
                y={s.y + 33}
                textAnchor="middle"
                fontSize="10"
                fill="oklch(0.58 0.09 210)"
                fontFamily="monospace"
              >
                {s.tag}
              </text>
              <text
                x={s.x + 50}
                y={s.y + 36}
                fontSize="12"
                fill="oklch(0.22 0.04 250)"
              >
                {s.label}
              </text>
              <text
                x={s.x + 50}
                y={s.y + 50}
                fontSize="9"
                letterSpacing="2"
                fill="oklch(0.45 0.03 250)"
              >
                AGENT
              </text>
            </g>
          );
        })}

        <text
          x="400"
          y="350"
          textAnchor="middle"
          fontSize="9"
          letterSpacing="3"
          fill="oklch(0.45 0.03 250)"
        >
          SHARED MEMORY · TOOL REGISTRY · TASK ROUTER
        </text>
      </svg>
    </div>
  );
}
