import type { ReactNode } from "react";
import { pillars } from "../data/resume";
import styles from "./Pillars.module.css";

const icons: Record<string, ReactNode> = {
  frontend: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="9" width="36" height="24" rx="4" />
      <path d="M6 27h36M16 39h16M24 33v6" />
      <path d="M14 15h8M14 21h5" />
    </svg>
  ),
  backend: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 5l15 6v11c0 9.5-6.4 17.4-15 21-8.6-3.6-15-11.5-15-21V11l15-6z" />
      <path d="M18 24l4 4 9-9" />
    </svg>
  ),
  data: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="24" cy="12" rx="14" ry="5" />
      <path d="M10 12v12c0 2.8 6.3 5 14 5s14-2.2 14-5V12" />
      <path d="M10 24v12c0 2.8 6.3 5 14 5s14-2.2 14-5V24" />
    </svg>
  ),
  distributed: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="8" width="12" height="10" rx="3" />
      <rect x="30" y="8" width="12" height="10" rx="3" />
      <rect x="6" y="30" width="12" height="10" rx="3" />
      <rect x="30" y="30" width="12" height="10" rx="3" />
      <path d="M18 13h12M18 35h12M12 18v12M36 18v12" />
    </svg>
  ),
  ai: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="24" r="6" />
      <circle cx="24" cy="8" r="3" />
      <circle cx="24" cy="40" r="3" />
      <circle cx="8" cy="24" r="3" />
      <circle cx="40" cy="24" r="3" />
      <path d="M24 11v7M24 30v7M11 24h7M30 24h7" />
    </svg>
  ),
};

export function Pillars() {
  return (
    <section className="section" id="what">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="kicker">What I do</p>
          <h2>What I own, and what I&rsquo;m growing into.</h2>
          <p className="sub">
            Most of my work sits where these meet — a screen, the endpoint behind
            it, and the query underneath that.
          </p>
        </div>

        <div className={styles.grid}>
          {pillars.map((pillar, index) => (
            <article
              key={pillar.id}
              className={`card ${styles.pillar}`}
              data-reveal
              data-reveal-delay={index * 0.08}
            >
              <div className={styles.icon} aria-hidden="true">
                {icons[pillar.id]}
              </div>
              <h3>{pillar.title}</h3>
              <p>{pillar.body}</p>
              <ul className="chips">
                {pillar.chips.map((chip) => (
                  <li key={chip}>{chip}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
