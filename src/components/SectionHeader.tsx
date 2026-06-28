type Props = {
  eyebrow: string;
  title: string;
  lede: string;
};

export function SectionHeader({ eyebrow, title, lede }: Props) {
  return (
    <div className="mb-6 max-w-5xl">
      <div className="mb-3 flex items-center gap-3">
        <span className="h-px w-12 bg-teal/60" />
        <span className="text-lg font-semibold uppercase tracking-[0.18em] text-teal md:text-xl">
          {eyebrow}
        </span>
      </div>
      <h2 className="text-4xl font-black leading-[1.05] text-ink md:text-5xl lg:text-6xl">
        {title}
      </h2>
      <p className="mt-4 max-w-3xl text-xl leading-relaxed text-ink md:text-2xl">
        {lede}
      </p>
    </div>
  );
}




