type Props = {
  eyebrow: string;
  title: string;
  lede: string;
};

export function SectionHeader({ eyebrow, title, lede }: Props) {
  return (
    <div className="mb-6 max-w-3xl">
      <div className="mb-3 flex items-center gap-3">
        <span className="h-px w-12 bg-teal/60" />
        <span className="eyebrow text-base">{eyebrow}</span>
      </div>
      <h2 className="text-4xl leading-[1.1] text-ink md:text-5xl">{title}</h2>
      <p className="mt-3 max-w-3xl text-lg leading-relaxed text-ink">{lede}</p>
    </div>
  );
}

