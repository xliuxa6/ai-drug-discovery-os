import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

export function LoopSection() {
  return (
    <section
      id="loop"
      className="border-t border-hairline bg-paper py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          number="01"
          eyebrow="Loop Engineering · Reinforcement Learning"
          title="An agent that gets better by living inside its task."
          lede="The AI Agent uses inference to attempt a task. The task evaluates the outcome and returns a reward signal. That signal updates the agent — closing the loop. Loop Engineering + RL turns each attempt into training data."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <LoopDiagram />

          <div className="space-y-6">
            {[
              {
                k: "Inference → Action",
                v: "The agent reasons over the task, drafts a plan, and executes — producing a trajectory of decisions and tool calls.",
              },
              {
                k: "Outcome Evaluation",
                v: "The task scores the result against ground truth, expert rubrics, or downstream metrics — yielding a dense reward.",
              },
              {
                k: "Policy Update",
                v: "The signal flows back through RL fine-tuning, updating the agent so the next inference is measurably better.",
              },
            ].map((row) => (
              <div
                key={row.k}
                className="border-l-2 border-teal/40 pl-5 transition-colors hover:border-teal"
              >
                <div className="eyebrow mb-1">{row.k}</div>
                <p className="text-ink-soft">{row.v}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function LoopDiagram() {
  return (
    <div className="relative aspect-square w-full max-w-xl">
      <svg viewBox="0 0 500 500" className="h-full w-full">
        <defs>
          <marker
            id="arrow-loop"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="8"
            markerHeight="8"
            orient="auto-start-reverse"
          >
            <path d="M0,0 L10,5 L0,10 z" fill="currentColor" />
          </marker>
        </defs>

        {/* outer dotted ring */}
        <circle
          cx="250"
          cy="250"
          r="220"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.15"
          strokeDasharray="2 6"
        />
        <text
          x="250"
          y="40"
          textAnchor="middle"
          className="fill-current text-[10px] uppercase tracking-[0.3em]"
          fill="currentColor"
          opacity="0.5"
        >
          Loop Engineering · RL
        </text>

        {/* Agent node */}
        <g>
          <circle
            cx="120"
            cy="250"
            r="80"
            fill="oklch(0.97 0.02 210)"
            stroke="oklch(0.58 0.09 210)"
            strokeWidth="1.5"
          />
          <text
            x="120"
            y="240"
            textAnchor="middle"
            className="font-serif"
            fontSize="22"
            fill="oklch(0.22 0.04 250)"
          >
            AI Agent
          </text>
          <text
            x="120"
            y="262"
            textAnchor="middle"
            fontSize="10"
            letterSpacing="2"
            fill="oklch(0.45 0.03 250)"
          >
            POLICY · π
          </text>
        </g>

        {/* Task node */}
        <g>
          <rect
            x="300"
            y="170"
            width="160"
            height="160"
            rx="8"
            fill="oklch(0.99 0 0)"
            stroke="oklch(0.22 0.04 250)"
            strokeWidth="1.5"
          />
          <text
            x="380"
            y="240"
            textAnchor="middle"
            className="font-serif"
            fontSize="22"
            fill="oklch(0.22 0.04 250)"
          >
            Task
          </text>
          <text
            x="380"
            y="262"
            textAnchor="middle"
            fontSize="10"
            letterSpacing="2"
            fill="oklch(0.45 0.03 250)"
          >
            ENVIRONMENT
          </text>
        </g>

        {/* Top arrow: inference */}
        <g style={{ color: "oklch(0.58 0.09 210)" }}>
          <path
            d="M 180 200 Q 250 130 320 200"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            markerEnd="url(#arrow-loop)"
          />
          <text
            x="250"
            y="150"
            textAnchor="middle"
            fontSize="12"
            fill="oklch(0.22 0.04 250)"
          >
            Inference / Action
          </text>
          <text
            x="250"
            y="168"
            textAnchor="middle"
            fontSize="9"
            letterSpacing="2"
            fill="oklch(0.45 0.03 250)"
          >
            TRAJECTORY · τ
          </text>
        </g>

        {/* Bottom arrow: reward */}
        <g style={{ color: "oklch(0.45 0.03 250)" }}>
          <path
            d="M 320 300 Q 250 370 180 300"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            markerEnd="url(#arrow-loop)"
          />
          <text
            x="250"
            y="362"
            textAnchor="middle"
            fontSize="12"
            fill="oklch(0.22 0.04 250)"
          >
            Reward / Feedback
          </text>
          <text
            x="250"
            y="380"
            textAnchor="middle"
            fontSize="9"
            letterSpacing="2"
            fill="oklch(0.45 0.03 250)"
          >
            POLICY UPDATE
          </text>
        </g>

        {/* corner annotations */}
        <text x="40" y="450" fontSize="9" letterSpacing="2" fill="oklch(0.45 0.03 250)">
          OUTCOME EVAL
        </text>
        <text x="380" y="450" fontSize="9" letterSpacing="2" fill="oklch(0.45 0.03 250)">
          REWARD MODEL
        </text>
      </svg>
    </div>
  );
}
