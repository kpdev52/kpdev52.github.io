import { useEffect, useState } from "react";
import { navLinks, profile } from "../data/resume";
import { useActiveSection } from "../hooks/useMotion";
import type { Theme } from "../hooks/useTheme";
import styles from "./Nav.module.css";

type NavProps = {
  theme: Theme;
  onToggleTheme: () => void;
};

const SECTION_IDS = navLinks.map((link) => link.id);

export function Nav({ theme, onToggleTheme }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  /* Slide the header away when scrolling down, bring it back on the way up.
     Lenis emits many tiny scroll steps, so track a sustained direction change
     rather than reacting to a single delta. */
  useEffect(() => {
    let lastY = window.scrollY;
    let anchorY = lastY;
    let direction = 0;

    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);

      if (y <= 160) {
        setHidden(false);
        direction = 0;
        anchorY = y;
        lastY = y;
        return;
      }

      const delta = y - lastY;

      // anchor where the reversal began, so one big jump still counts
      if (delta > 0 && direction <= 0) {
        direction = 1;
        anchorY = lastY;
      } else if (delta < 0 && direction >= 0) {
        direction = -1;
        anchorY = lastY;
      }

      if (direction > 0 && y - anchorY > 24) setHidden(true);
      if (direction < 0 && anchorY - y > 24) setHidden(false);

      lastY = y;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`${styles.nav} ${scrolled ? styles.scrolled : ""} ${
        hidden ? styles.hidden : ""
      }`}
    >
      <div className={styles.inner}>
        <a href="#top" className={styles.brand} aria-label="Back to top">
          <span className={styles.mark}>{profile.initials}</span>
          <span className={styles.name}>{profile.name}</span>
        </a>

        <nav className={styles.links} aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={active === link.id ? styles.active : undefined}
              aria-current={active === link.id ? "true" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.right}>
          <button
            type="button"
            className={styles.toggle}
            onClick={onToggleTheme}
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {theme === "dark" ? <MoonIcon /> : <SunIcon />}
          </button>

          <a
            className={`btn btn-primary btn-sm ${styles.cta}`}
            href={profile.resume}
            target="_blank"
            rel="noopener"
          >
            Resume
          </a>

        </div>
      </div>
    </header>
  );
}

function MoonIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}
