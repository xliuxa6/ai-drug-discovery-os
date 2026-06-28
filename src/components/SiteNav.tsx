import { useEffect, useState } from "react";

const links = [
  { id: "loop", label: "Loop Engineering" },
  { id: "os", label: "AI OS" },
  { id: "scaling", label: "Two Scalings" },
];

export function SiteNav() {
  const [active, setActive] = useState("loop");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-paper/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-serif text-3xl text-ink">AI TF Update</span>
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={`text-base font-medium transition-colors ${
                  active === l.id
                    ? "text-teal"
                    : "text-ink hover:text-teal"
                }`}
              >
                <span className="mr-2 font-mono text-base text-ink/50">
                  {String(links.indexOf(l) + 1).padStart(2, "0")}
                </span>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
