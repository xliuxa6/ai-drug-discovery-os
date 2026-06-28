type Props = {
  number: string;
  eyebrow: string;
  title: string;
  lede: string;
};

export function SectionHeader({ number, eyebrow, title, lede }: Props) {
  return (
    <div className="mb-12 max-w-3xl">
      <div className="mb-6 flex items-center gap-3">
        <span className="font-mono text-sm text-teal">{number}</span>
        <span className="h-px w-12 bg-teal/60" />
        <span className="eyebrow text-base">{eyebrow}</span>
      </div>
      <h2 className="text-5xl leading-[1.1] text-ink md:text-6xl">{title}</h2>
      <p className="mt-5 max-w-3xl text-xl leading-relaxed text-ink">{lede}</p>
    </div>
  );
}
