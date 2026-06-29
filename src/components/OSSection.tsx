import { motion } from "framer-motion";

const appItems = [
  "Target Research",
  "ADMET Prediction",
  "Molecule Diff. Analysis",
  "Animal Model Eval.",
  "Unmet Medical Needs",
  "Clinical Study QC/QA",
  "Protocol Deviation",
  "Project Risk & Issue Mgmt",
  "Medical Monitoring",
  "Protocol Review",
  "GCTO Operation Platform",
  "Guidance QA",
  "Virtual Cell",
  "Digital Pathology",
  "Genomics Platform",
  "PBPK Prediction",
  "Scientific Finding Tracking",
  "PV Literature Search",
  "Disease Deep Dive",
  "Clinical Data Benchmark",
  "Competitive Intelligence",
];

const TOP_COUNT = 5;
const BOTTOM_COUNT = 5;
const LEFT_COUNT = 5;
const RIGHT_COUNT = 6;

const topItems = appItems.slice(0, TOP_COUNT);
const bottomItems = appItems.slice(TOP_COUNT, TOP_COUNT + BOTTOM_COUNT);
const leftItems = appItems.slice(
  TOP_COUNT + BOTTOM_COUNT,
  TOP_COUNT + BOTTOM_COUNT + LEFT_COUNT
);
const rightItems = appItems.slice(
  TOP_COUNT + BOTTOM_COUNT + LEFT_COUNT,
  TOP_COUNT + BOTTOM_COUNT + LEFT_COUNT + RIGHT_COUNT
);

const OS = { x: 400, y: 210, w: 200, h: 60 };
const TOP_W = 180;
const TOP_H = 45;
const SIDE_W = 190;
const SIDE_H = 45;
const RIGHT_H = 40;
const TOP_Y = 40;
const BOTTOM_Y = 410;
const LEFT_X = 10;
const RIGHT_X = 800;
const LEFT_START_Y = 95;
const RIGHT_START_Y = 95;

const TOP_TRUNK_Y = 130;
const BOTTOM_TRUNK_Y = 350;
const LEFT_TRUNK_X = 210;
const RIGHT_TRUNK_X = 790;

function distribute(
  count: number,
  start: number,
  itemSize: number,
  max: number
) {
  const gap = (max - start - itemSize * count) / (count - 1);
  return Array.from({ length: count }, (_, i) => start + i * (itemSize + gap));
}

const topXs = distribute(TOP_COUNT, 20, TOP_W, 1000 - 20);
const bottomXs = topXs;
const leftYs = distribute(LEFT_COUNT, LEFT_START_Y, SIDE_H, 395);
const rightYs = distribute(RIGHT_COUNT, RIGHT_START_Y, RIGHT_H, 405);

export function OSSection() {
  return (
    <section
      id="os"
      className="bg-card py-0 md:py-0"
    >
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="mb-8 max-w-6xl">
          <h2 className="font-sans text-2xl font-black leading-[1.05] text-ink md:text-3xl lg:text-4xl">
            Multi-agent Platform for Drug R&D AI OS
          </h2>
          <p className="mt-6 max-w-5xl text-lg leading-snug text-ink md:text-xl">
            Complex problems are rarely solved by a single agent—they require coordinated multi-agent orchestration - turning fragmented into one coherent workflow.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <OSDiagram />
        </motion.div>
      </div>
    </section>
  );
}

function OSDiagram() {
  return (
    <div className="relative w-full max-h-[72vh] overflow-hidden">
      <svg viewBox="0 0 1000 480" className="h-auto w-full">
        <defs>
          <marker
            id="arrow-os"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="5"
            markerHeight="5"
            orient="auto-start-reverse"
          >
            <path d="M0,0 L10,5 L0,10 z" fill="currentColor" />
          </marker>
        </defs>

        {/* connection polylines */}
        {topItems.map((_, i) => {
          const x = topXs[i] + TOP_W / 2;
          const y = TOP_Y + TOP_H;
          return (
            <polyline
              key={`top-line-${i}`}
              points={`${x},${y} ${x},${TOP_TRUNK_Y} ${OS.x + OS.w / 2},${TOP_TRUNK_Y} ${OS.x + OS.w / 2},${OS.y}`}
              fill="none"
              className="stroke-teal/50 text-teal"
              strokeWidth="1.5"
              markerEnd="url(#arrow-os)"
            />
          );
        })}
        {bottomItems.map((_, i) => {
          const x = bottomXs[i] + TOP_W / 2;
          const y = BOTTOM_Y;
          return (
            <polyline
              key={`bottom-line-${i}`}
              points={`${x},${y} ${x},${BOTTOM_TRUNK_Y} ${OS.x + OS.w / 2},${BOTTOM_TRUNK_Y} ${OS.x + OS.w / 2},${OS.y + OS.h}`}
              fill="none"
              className="stroke-teal/50 text-teal"
              strokeWidth="1.5"
              markerEnd="url(#arrow-os)"
            />
          );
        })}
        {leftItems.map((_, i) => {
          const x = LEFT_X + SIDE_W;
          const y = leftYs[i] + SIDE_H / 2;
          return (
            <polyline
              key={`left-line-${i}`}
              points={`${x},${y} ${LEFT_TRUNK_X},${y} ${LEFT_TRUNK_X},${OS.y + OS.h / 2} ${OS.x},${OS.y + OS.h / 2}`}
              fill="none"
              className="stroke-teal/50 text-teal"
              strokeWidth="1.5"
              markerEnd="url(#arrow-os)"
            />
          );
        })}
        {rightItems.map((_, i) => {
          const x = RIGHT_X;
          const y = rightYs[i] + RIGHT_H / 2;
          return (
            <polyline
              key={`right-line-${i}`}
              points={`${x},${y} ${RIGHT_TRUNK_X},${y} ${RIGHT_TRUNK_X},${OS.y + OS.h / 2} ${OS.x + OS.w},${OS.y + OS.h / 2}`}
              fill="none"
              className="stroke-teal/50 text-teal"
              strokeWidth="1.5"
              markerEnd="url(#arrow-os)"
            />
          );
        })}

        {/* application labels */}
        {topItems.map((name, i) =>
          renderLabel(name, topXs[i], TOP_Y, TOP_W, TOP_H, "center")
        )}
        {bottomItems.map((name, i) =>
          renderLabel(name, bottomXs[i], BOTTOM_Y, TOP_W, TOP_H, "center")
        )}
        {leftItems.map((name, i) =>
          renderLabel(name, LEFT_X, leftYs[i], SIDE_W, SIDE_H, "right")
        )}
        {rightItems.map((name, i) =>
          renderLabel(name, RIGHT_X, rightYs[i], SIDE_W, RIGHT_H, "left")
        )}

        {/* central OS kernel */}
        <g>
          <rect
            x={OS.x}
            y={OS.y}
            width={OS.w}
            height={OS.h}
            rx="8"
            className="fill-ink"
          />
          <text
            x={OS.x + OS.w / 2}
            y={OS.y + OS.h / 2 - 2}
            textAnchor="middle"
            dominantBaseline="middle"
            className="font-serif fill-paper"
            fontSize="22"
          >
            Drug R&amp;D AI OS
          </text>
          <text
            x={OS.x + OS.w / 2}
            y={OS.y + OS.h - 10}
            textAnchor="middle"
            fontSize="11"
            letterSpacing="3"
            className="fill-teal-soft"
          >
            KERNEL
          </text>
        </g>
      </svg>
    </div>
  );
}

function renderLabel(
  name: string,
  x: number,
  y: number,
  w: number,
  h: number,
  align: "left" | "right" | "center"
) {
  const alignClass =
    align === "left"
      ? "text-left"
      : align === "right"
      ? "text-right"
      : "text-center";

  return (
    <foreignObject key={name} x={x} y={y} width={w} height={h}>
      <div className="flex h-full w-full items-center">
        <div
          className={`w-full rounded-md border border-hairline bg-card px-2 py-1 shadow-sm ${alignClass}`}
        >
          <span className="inline-block text-xs font-semibold leading-tight text-ink md:text-sm">
            {name}
          </span>
        </div>
      </div>
    </foreignObject>
  );
}
