import { useEffect, useRef, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SlideDeckProps {
  children: ReactNode;
}

export function SlideDeck({ children }: SlideDeckProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const getSlides = () => {
    const root = scrollerRef.current;
    if (!root) return [] as HTMLElement[];
    return Array.from(root.querySelectorAll<HTMLElement>("[data-slide]"));
  };

  const currentIndex = () => {
    const root = scrollerRef.current;
    if (!root) return 0;
    const slides = getSlides();
    const top = root.scrollTop;
    let best = 0;
    let bestDist = Infinity;
    slides.forEach((s, i) => {
      const d = Math.abs(s.offsetTop - top);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    return best;
  };

  const goTo = (i: number) => {
    const root = scrollerRef.current;
    if (!root) return;
    const slides = getSlides();
    const clamped = Math.max(0, Math.min(slides.length - 1, i));
    slides[clamped]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const next = () => goTo(currentIndex() + 1);
  const prev = () => goTo(currentIndex() - 1);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (
        e.key === "ArrowRight" ||
        e.key === "ArrowDown" ||
        e.key === "PageDown" ||
        e.key === " "
      ) {
        e.preventDefault();
        next();
      } else if (
        e.key === "ArrowLeft" ||
        e.key === "ArrowUp" ||
        e.key === "PageUp"
      ) {
        e.preventDefault();
        prev();
      } else if (e.key === "Home") {
        e.preventDefault();
        goTo(0);
      } else if (e.key === "End") {
        e.preventDefault();
        goTo(getSlides().length - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Anchor-link clicks from the nav: intercept and slide to the matching slide.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement)?.closest(
        "a[href^='#']"
      ) as HTMLAnchorElement | null;
      if (!a) return;
      const id = a.getAttribute("href")?.slice(1);
      if (!id) return;
      const root = scrollerRef.current;
      if (!root) return;
      const slide = root.querySelector<HTMLElement>(
        `[data-slide-id="${id}"]`
      );
      if (slide) {
        e.preventDefault();
        slide.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // Dispatch slidechange events for nav scrollspy.
  useEffect(() => {
    const root = scrollerRef.current;
    if (!root) return;
    let last = "";
    const onScroll = () => {
      const slides = getSlides();
      const top = root.scrollTop + root.clientHeight * 0.3;
      let currentId = slides[0]?.dataset.slideId ?? "";
      for (const s of slides) {
        if (s.offsetTop <= top) currentId = s.dataset.slideId ?? currentId;
      }
      if (currentId && currentId !== last) {
        last = currentId;
        window.dispatchEvent(
          new CustomEvent("slidechange", { detail: currentId })
        );
      }
    };
    onScroll();
    root.addEventListener("scroll", onScroll, { passive: true });
    return () => root.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <div
        ref={scrollerRef}
        className="h-full snap-y snap-mandatory overflow-y-scroll scroll-smooth"
      >
        {children}
      </div>

      <button
        onClick={prev}
        aria-label="Previous slide"
        className="fixed bottom-12 right-24 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-hairline bg-card text-ink shadow-lg transition-colors hover:border-teal hover:text-teal"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="fixed bottom-12 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-hairline bg-card text-ink shadow-lg transition-colors hover:border-teal hover:text-teal"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
}

interface SlideProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function Slide({ id, children, className = "" }: SlideProps) {
  return (
    <section
      data-slide
      data-slide-id={id}
      className={`flex h-screen w-full snap-start snap-always flex-col overflow-hidden ${className}`}
    >
      <div className="flex h-full w-full flex-col justify-center overflow-auto pt-16 md:pt-20">
        {children}
      </div>
    </section>
  );
}
