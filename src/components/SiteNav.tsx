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
  { id: "new-projects", label: "Project Overview", Icon: Lightbulb },
  { id: "progress", label: "Current Project Progress", Icon: Activity },
  { id: "case-study", label: "Case Study", Icon: FileSearch },
  { id: "loop", label: "Self-Evolving Agent", Icon: RefreshCw },
  { id: "os", label: "Multi-agent Platform", Icon: Network },
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
    const onSlideChange = (e: Event) => {
      const id = (e as CustomEvent<string>).detail;
      if (id) setActive(id);
    };
    window.addEventListener("slidechange", onSlideChange as EventListener);
    return () =>
      window.removeEventListener("slidechange", onSlideChange as EventListener);
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
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-hairline bg-paper/85 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-3 py-2 md:px-4">
        <div className="flex items-center gap-1 md:gap-2">
          <ul className="hidden flex-wrap items-center justify-start gap-1 md:flex">
            {links.map((l) => {
              const isActive = active === l.id;
              const { Icon } = l;
              return (
                <li key={l.id} className="relative group">
                  <a
                    href={`#${l.id}`}
                    onClick={() => handleClick(l.id)}
                    aria-label={l.label}
                    title={l.label}
                    className={`relative flex h-6 w-6 items-center justify-center rounded-md border transition-all ${
                      isActive
                        ? "border-teal bg-teal text-primary-foreground shadow-sm"
                        : "border-hairline bg-card text-ink hover:border-teal hover:text-teal"
                    }`}
                  >
                    <Icon className="h-3 w-3" strokeWidth={2.5} />
                  </a>
                  <span
                    className="pointer-events-none absolute left-1/2 top-full z-50 mt-1.5 -translate-x-1/2 whitespace-nowrap rounded-md border border-hairline bg-ink px-2 py-0.5 text-[10px] font-semibold text-paper opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100"
                  >
                    {l.label}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        <button
          onClick={toggleTheme}
          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          className="flex h-6 w-6 items-center justify-center rounded-full border border-hairline bg-card text-ink shadow-sm transition-colors hover:border-teal hover:text-teal"
        >
          {theme === "dark" ? <Sun className="h-3 w-3" /> : <Moon className="h-3 w-3" />}
        </button>
      </nav>
    </header>
  );
}
