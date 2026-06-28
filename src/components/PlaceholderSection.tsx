import { SectionHeader } from "./SectionHeader";

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  lede: string;
  note?: string;
};

export function PlaceholderSection({ id, eyebrow, title, lede, note }: Props) {
  return (
    <section id={id} className="border-t border-hairline bg-paper py-12 md:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <SectionHeader eyebrow={eyebrow} title={title} lede={lede} />
        <div className="mt-8 flex min-h-[280px] items-center justify-center rounded-2xl border border-dashed border-hairline bg-card/40 p-12 text-center">
          <div>
            <div className="font-mono text-sm uppercase tracking-[0.3em] text-teal">
              Placeholder
            </div>
            <p className="mt-4 text-xl text-ink/70">
              {note ?? "Content for this section is coming soon."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
