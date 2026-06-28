import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const links = [
  { id: "timeline", label: "Timeline" },
  { id: "progress", label: "Progress" },
  { id: "new-projects", label: "New Projects" },
  { id: "case-study", label: "Case Study" },
  { id: "loop", label: "Self-Evolving Agent" },
  { id: "os", label: "Multi-Agent OS" },
  { id: "scaling", label: "Two-way Scaling" },
  { id: "opportunities", label: "Opportunities" },
];

export function SiteNav() {
  const [active, setActive] = useState("timeline");
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = saved || (prefersDark ? "dark" : "light");
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => !!el);
    if (sections.length === 0) return;

    const onScroll = () => {
      const probe = window.innerHeight * 0.3;
      let current = sections[0].id;
      for (const s of sections) {
        const top = s.getBoundingClientRect().top;
        if (top - probe <= 0) current = s.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  const handleClick = (id: string) => {
    setActive(id);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-paper/85 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <a href="#top" className="flex shrink-0 items-baseline gap-2">
          <span className="font-serif text-2xl text-ink md:text-3xl">AI TF Update</span>
        </a>
        <div className="flex items-center gap-2 md:gap-3">
          <ul className="hidden flex-wrap items-center justify-end gap-1.5 lg:flex">
            {links.map((l, idx) => {
              const isActive = active === l.id;
              return (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    onClick={() => handleClick(l.id)}
                    className={`group flex items-center gap-1.5 rounded-lg border px-2.5 py-2 text-sm font-semibold transition-all xl:text-base ${
                      isActive
                        ? "border-teal bg-teal text-primary-foreground shadow-sm"
                        : "border-hairline bg-card text-ink hover:border-teal hover:text-teal"
                    }`}
                  >
                    <span
                      className={`flex h-5 w-5 items-center justify-center rounded-full font-mono text-[11px] font-bold ${
                        isActive
                          ? "bg-primary-foreground/20 text-primary-foreground"
                          : "bg-muted text-ink/70 group-hover:text-teal"
                      }`}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    {l.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-hairline bg-card text-ink shadow-sm transition-colors hover:border-teal hover:text-teal"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>
      </nav>
    </header>
  );
}
