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
};

export function Pillars() {
  return (
    <section className="section" id="what">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="kicker">What I do</p>
          <h2>Three layers I take responsibility for.</h2>
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
