const potentialStreams = [
  {
    id: "search",
    title: "Search & Evaluation",
    color: "bg-bg-search",
    items: ["Unmet Medical Needs Identification"],
  },
  {
    id: "clinical",
    title: "Clinical Development",
    color: "bg-bg-clinical",
    items: ["Medical Monitoring", "Protocol Review", "CTO / Operation Platform"],
  },
  {
    id: "frontier",
    title: "Frontier Technology",
    color: "bg-bg-frontier",
    items: ["Genomics Platform", "PBPK Prediction"],
  },
];

export function PotentialSection() {
  return (
    <section id="new-projects" className="border-t border-hairline bg-paper pt-6 pb-6">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-12 bg-teal/60" />
          <span className="eyebrow text-lg font-bold">Potential New Projects</span>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {potentialStreams.map((stream) => (
            <div
              key={stream.id}
              className={`rounded-2xl border border-hairline p-3 shadow-sm ${stream.color}`}
            >
              <div className="mb-2 text-center text-xl font-bold uppercase tracking-[0.12em] text-ink">
                {stream.title}
              </div>
              <div className="space-y-2">
                {stream.items.map((item) => (
                  <div key={item} className="text-lg font-medium text-ink/70">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
