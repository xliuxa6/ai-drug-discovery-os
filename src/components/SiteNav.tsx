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
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-serif text-3xl text-ink">AI TF Update</span>
        </a>
        <div className="flex items-center gap-3 md:gap-6">
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
