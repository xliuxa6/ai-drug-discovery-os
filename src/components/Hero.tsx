import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pb-24 pt-20 md:pt-32">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="mb-8 flex items-center gap-3">
          <span className="h-px w-12 bg-teal" />
          <span className="eyebrow">A thesis in three movements</span>
        </div>
        <h1 className="max-w-5xl text-5xl leading-[1.05] text-ink md:text-7xl">
          Engineering the loop, the operating system,
          <span className="text-teal"> and the two scalings</span> behind Drug
          R&amp;D Super Intelligence.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
          From a single self-improving agent, to an orchestrated R&amp;D
          operating system, to the two orthogonal axes along which agentic
          drug discovery must scale.
        </p>
        <div className="mt-12 flex flex-wrap gap-3 text-sm">
          {["Loop Engineering · RL", "Drug R&D AI OS", "Two Axes of Scaling"].map(
            (t, i) => (
              <a
                key={t}
                href={`#${["loop", "os", "scaling"][i]}`}
                className="rounded-full border border-hairline bg-card px-4 py-2 text-ink-soft transition-colors hover:border-teal hover:text-teal"
              >
                {t}
              </a>
            )
          )}
        </div>
      </motion.div>
    </section>
  );
}
