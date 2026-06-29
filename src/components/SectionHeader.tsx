type Props = {
  eyebrow?: string;
  title: string;
  lede?: string;
  className?: string;
};

export function SectionHeader({ eyebrow, title, lede, className = "" }: Props) {
  return (
    <div className={`mb-8 max-w-5xl ${className}`}>
      {eyebrow && (
        <div className="text-sm font-semibold uppercase tracking-[0.18em] text-teal md:text-base">
          {eyebrow}
        </div>
      )}
      <h2 className="font-sans text-2xl font-black leading-[1.05] text-ink md:text-3xl lg:text-4xl">
        {title}
      </h2>
      {lede && (
        <p className="mt-2 max-w-3xl text-lg leading-snug text-ink md:text-xl">
          {lede}
        </p>
      )}
    </div>
  );
}






