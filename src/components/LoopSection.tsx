import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

export function LoopSection() {
  return (
    <section
      id="loop"
      className="border-t border-hairline bg-paper py-12 md:py-16"
    >
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <SectionHeader
          eyebrow="Self-Evolving Agent · Loop Engineering + RL"
          title="An agent that gets better by living inside its task."
          lede="The AI Agent uses inference to attempt a task. The task evaluates the outcome and returns a reward signal. That signal updates the agent — closing the loop. Loop Engineering + RL turns each attempt into training data."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid h-full gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12"
        >
          <LoopDiagram />

          <div className="flex h-full flex-col justify-between">
            <div className="space-y-4">
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
                  <div className="eyebrow text-base mb-2">{row.k}</div>
                  <p className="text-base text-ink md:text-lg">{row.v}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-lg border border-hairline bg-card p-4 md:p-5">
              <div className="eyebrow text-sm mb-3 md:text-base">
                Enhancing Agentic Capability
              </div>
              <div className="space-y-3">
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
                  <div key={item.title} className="flex gap-3">
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
      <svg viewBox="0 0 500 500" className="h-full w-full text-ink">
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
          y="34"
          textAnchor="middle"
          className="fill-current text-xs uppercase tracking-[0.3em]"
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
            className="fill-teal/15 stroke-teal"
            strokeWidth="1.5"
          />
          <text
            x="120"
            y="238"
            textAnchor="middle"
            className="font-serif fill-ink"
            fontSize="28"
          >
            AI Agent
          </text>
          <text
            x="120"
            y="268"
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
            y="170"
            width="160"
            height="160"
            rx="8"
            className="fill-card stroke-ink"
            strokeWidth="1.5"
          />
          <text
            x="380"
            y="238"
            textAnchor="middle"
            className="font-serif fill-ink"
            fontSize="28"
          >
            Task
          </text>
          <text
            x="380"
            y="268"
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
            d="M 180 200 Q 250 130 320 200"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            markerEnd="url(#arrow-loop)"
          />
          <text
            x="250"
            y="148"
            textAnchor="middle"
            fontSize="14"
            className="fill-ink"
          >
            Inference / Action
          </text>
          <text
            x="250"
            y="170"
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
            d="M 320 300 Q 250 370 180 300"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            markerEnd="url(#arrow-loop)"
          />
          <text
            x="250"
            y="366"
            textAnchor="middle"
            fontSize="14"
            className="fill-ink"
          >
            Reward / Feedback
          </text>
          <text
            x="250"
            y="388"
            textAnchor="middle"
            fontSize="11"
            letterSpacing="2"
            className="fill-ink-soft"
          >
            POLICY UPDATE
          </text>
        </g>

        {/* corner annotations */}
        <text x="28" y="452" fontSize="11" letterSpacing="2" className="fill-ink-soft">
          OUTCOME EVAL
        </text>
        <text x="360" y="452" fontSize="11" letterSpacing="2" className="fill-ink-soft">
          REWARD MODEL
        </text>
      </svg>
    </div>
  );
}
