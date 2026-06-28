import { useEffect, useState } from "react";
import {
  Sun,
  Moon,
  Calendar,
  Activity,
  Lightbulb,
  FileSearch,
  RefreshCw,
  Network,
  Scaling,
  Compass,
  type LucideIcon,
} from "lucide-react";

const links: { id: string; label: string; Icon: LucideIcon }[] = [
  { id: "timeline", label: "Timeline", Icon: Calendar },
  { id: "progress", label: "Progress", Icon: Activity },
  { id: "new-projects", label: "New Projects", Icon: Lightbulb },
  { id: "case-study", label: "Case Study", Icon: FileSearch },
  { id: "loop", label: "Self-Evolving Agent", Icon: RefreshCw },
  { id: "os", label: "Multi-Agent OS", Icon: Network },
  { id: "scaling", label: "Two-way Scaling", Icon: Scaling },
  { id: "opportunities", label: "Opportunities", Icon: Compass },
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
          <ul className="hidden flex-wrap items-center justify-end gap-1.5 md:flex">
            {links.map((l, idx) => {
              const isActive = active === l.id;
              const { Icon } = l;
              return (
                <li key={l.id} className="relative group">
                  <a
                    href={`#${l.id}`}
                    onClick={() => handleClick(l.id)}
                    aria-label={l.label}
                    title={l.label}
                    className={`relative flex h-11 w-11 items-center justify-center rounded-lg border transition-all ${
                      isActive
                        ? "border-teal bg-teal text-primary-foreground shadow-sm"
                        : "border-hairline bg-card text-ink hover:border-teal hover:text-teal"
                    }`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={2.25} />
                    <span
                      className={`absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full font-mono text-[10px] font-bold ring-2 ring-paper ${
                        isActive
                          ? "bg-primary-foreground text-teal"
                          : "bg-ink/80 text-paper"
                      }`}
                    >
                      {idx + 1}
                    </span>
                  </a>
                  <span
                    className="pointer-events-none absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 whitespace-nowrap rounded-md border border-hairline bg-ink px-2.5 py-1 text-xs font-semibold text-paper opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100"
                  >
                    {l.label}
                  </span>
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
