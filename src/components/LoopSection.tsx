import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

export function LoopSection() {
  return (
    <section
      id="loop"
      className="bg-paper pb-0"
    >
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <SectionHeader
          title="Loop Engineering for Self-Evolving Agents"
        />

        <p className="max-w-4xl text-left text-base font-medium text-ink md:text-lg lg:text-xl">
          Systematic design of closed feedback loops that enable AI agents to continuously learn, self-correct, and evolve through autonomous iteration.
        </p>


        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid h-full items-center gap-2 lg:grid-cols-[1fr_1fr] lg:gap-4"
        >
          <LoopDiagram />

          <div className="flex h-full items-center justify-center">
            <div className="rounded-lg border border-hairline bg-card p-3 md:p-4 ml-3.5">


              <div className="eyebrow text-base mb-2 md:text-lg">
                Enhancing Agentic Capability
              </div>
              <div className="space-y-2">
                {[
                  {
                    title: "Prompt Engineering",
                    desc: "Shape how the agent reasons through instructions, templates, and chain-of-thought triggers.",
                  },
                  {
                    title: "Context Engineering",
                    desc: "Curate the right evidence, memory, and retrieval context so the agent decides from the best inputs.",
                  },
                  {
                    title: "Harness Engineering",
                    desc: "Add tools, validators, guardrails, and feedback channels that keep the agent aligned and on-task.",
                  },
                  {
                    title: "Loop Engineering",
                    desc: "Close the execution-evaluation-update loop so every task outcome becomes a training signal for the agent.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-2">
                    <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-teal" />
                    <div>
                      <div className="text-base font-semibold text-ink md:text-lg">
                        {item.title}
                      </div>
                      <p className="text-sm text-ink-soft md:text-base">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

function LoopDiagram() {
  return (
    <div className="relative aspect-square w-full max-w-xl">
      <svg viewBox="0 0 500 440" className="h-full w-full text-ink">
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
          cy="220"
          r="180"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.5"
          strokeWidth="2"
          strokeDasharray="4 8"
        />
        <text
          x="250"
          y="20"
          textAnchor="middle"
          className="fill-current text-xs uppercase tracking-[0.3em]"
          fill="currentColor"
          opacity="0.7"
        >
          Loop Engineering · RL
        </text>

        {/* Agent node */}
        <g>
          <circle
            cx="120"
            cy="220"
            r="70"
            className="fill-paper stroke-teal"
            strokeWidth="1.5"
          />
          <text
            x="120"
            y="210"
            textAnchor="middle"
            className="font-serif fill-ink"
            fontSize="26"
          >
            AI Agent
          </text>
          <text
            x="120"
            y="236"
            textAnchor="middle"
            fontSize="12"
            letterSpacing="2"
            className="fill-ink-soft"
          >
            POLICY · π
          </text>
        </g>

        {/* Task node */}
        <g>
          <rect
            x="300"
            y="150"
            width="150"
            height="150"
            rx="8"
            className="fill-card stroke-ink"
            strokeWidth="1.5"
          />
          <text
            x="375"
            y="210"
            textAnchor="middle"
            className="font-serif fill-ink"
            fontSize="26"
          >
            Task
          </text>
          <text
            x="375"
            y="236"
            textAnchor="middle"
            fontSize="12"
            letterSpacing="2"
            className="fill-ink-soft"
          >
            ENVIRONMENT
          </text>
        </g>

        {/* Top arrow: inference */}
        <g className="text-teal">
          <path
            d="M 180 175 Q 235 115 290 175"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            markerEnd="url(#arrow-loop)"
          />
          <text
            x="235"
            y="115"
            textAnchor="middle"
            fontSize="14"
            className="fill-ink"
          >
            Inference / Action
          </text>
          <text
            x="235"
            y="125"
            textAnchor="middle"
            fontSize="11"
            letterSpacing="2"
            className="fill-ink-soft"
          >
            TRAJECTORY · τ
          </text>
        </g>

        {/* Bottom arrow: reward */}
        <g className="text-ink-soft">
          <path
            d="M 290 265 Q 235 325 180 265"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            markerEnd="url(#arrow-loop)"
          />
          <text
            x="235"
            y="340"
            textAnchor="middle"
            fontSize="14"
            className="fill-ink"
          >
            Reward / Feedback
          </text>
          <text
            x="235"
            y="357"
            textAnchor="middle"
            fontSize="11"
            letterSpacing="2"
            className="fill-ink-soft"
          >
            POLICY UPDATE
          </text>
        </g>

        {/* corner annotations */}
        <text x="48" y="398" fontSize="11" letterSpacing="2" className="fill-ink-soft">
          OUTCOME EVAL
        </text>
        <text x="330" y="398" fontSize="11" letterSpacing="2" className="fill-ink-soft">
          REWARD MODEL
        </text>
      </svg>
    </div>
  );
}
