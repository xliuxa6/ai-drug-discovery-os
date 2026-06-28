import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const links = [
  { id: "loop", label: "Loop Engineering" },
  { id: "os", label: "AI OS" },
  { id: "scaling", label: "Two Scalings" },
];

export function SiteNav() {
  const [active, setActive] = useState("loop");
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = saved || (prefersDark ? "dark" : "light");
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-paper/85 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-serif text-3xl text-ink">AI TF Update</span>
        </a>
        <div className="flex items-center gap-3 md:gap-5">
          <ul className="hidden items-center gap-2 md:flex">
            {links.map((l) => {
              const isActive = active === l.id;
              return (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    className={`group flex items-center gap-2 rounded-lg border px-3 py-2.5 text-base font-semibold transition-all md:px-4 md:text-lg ${
                      isActive
                        ? "border-teal bg-teal text-primary-foreground shadow-sm"
                        : "border-hairline bg-card text-ink hover:border-teal hover:text-teal"
                    }`}
                  >
                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded-full font-mono text-sm font-bold ${
                        isActive
                          ? "bg-primary-foreground/20 text-primary-foreground"
                          : "bg-muted text-ink/70 group-hover:text-teal"
                      }`}
                    >
                      {String(links.indexOf(l) + 1).padStart(2, "0")}
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
            className="flex h-12 w-12 items-center justify-center rounded-full border border-hairline bg-card text-ink shadow-sm transition-colors hover:border-teal hover:text-teal"
          >
            {theme === "dark" ? (
              <Sun className="h-6 w-6" />
            ) : (
              <Moon className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
