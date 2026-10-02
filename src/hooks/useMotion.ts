import { useEffect, useState } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia(REDUCED_MOTION_QUERY).matches
  );
}

/** Lenis smooth scroll driven by GSAP's ticker, kept in sync with ScrollTrigger.
 *  Disabled entirely when the user asks for reduced motion. */
export function useSmoothScroll() {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    /* Lenis owns the scroll position, so native anchor jumps do nothing.
       Route in-page links through it instead. */
    const onAnchorClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement | null)?.closest?.(
        'a[href^="#"]',
      ) as HTMLAnchorElement | null;

      const hash = link?.getAttribute("href");
      if (!hash || hash === "#") return;

      const target = document.querySelector(hash);
      if (!target) return;

      event.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -72 });
      history.replaceState(null, "", hash);
    };

    document.addEventListener("click", onAnchorClick);

    return () => {
      document.removeEventListener("click", onAnchorClick);
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);
}

/** Fades every [data-reveal] element in as it enters the viewport. */
export function useScrollReveal() {
  useEffect(() => {
    const targets = gsap.utils.toArray<HTMLElement>("[data-reveal]");
    if (!targets.length) return;

    if (prefersReducedMotion()) {
      targets.forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    const triggers = targets.map((el) =>
      ScrollTrigger.create({
        trigger: el,
        start: "top 88%",
        once: true,
        onEnter: () => {
          gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            delay: Number(el.dataset.revealDelay ?? 0),
          });
        },
      }),
    );

    ScrollTrigger.refresh();

    return () => triggers.forEach((trigger) => trigger.kill());
  }, []);
}

/** Hero entrance: staggered rise, skipped under reduced motion. */
export function useHeroIntro(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const items = root.querySelectorAll<HTMLElement>("[data-hero]");
    if (!items.length) return;

    if (prefersReducedMotion()) {
      items.forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
      return;
    }

    const tween = gsap.fromTo(
      items,
      { opacity: 0, y: 26 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.09,
        delay: 0.15,
      },
    );

    return () => {
      tween.kill();
    };
  }, [ref]);
}

/** Fills the experience timeline's gradient line as the section scrolls past. */
export function useTimelineProgress(
  track: React.RefObject<HTMLElement | null>,
  fill: React.RefObject<HTMLElement | null>,
) {
  useEffect(() => {
    const trackEl = track.current;
    const fillEl = fill.current;
    if (!trackEl || !fillEl) return;

    if (prefersReducedMotion()) {
      fillEl.style.transform = "scaleY(1)";
      return;
    }

    const trigger = ScrollTrigger.create({
      trigger: trackEl,
      start: "top 72%",
      end: "bottom 65%",
      scrub: 0.6,
      onUpdate: (self) => {
        fillEl.style.transform = `scaleY(${self.progress})`;
      },
    });

    return () => trigger.kill();
  }, [track, fill]);
}

/** Scroll progress 0 → 1 for the top bar. */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? window.scrollY / scrollable : 0);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return progress;
}

/** Id of the section currently in view, for nav highlighting. */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [ids]);

  return active;
}
