import { marquee, skillGroups } from "../data/resume";
import styles from "./Toolkit.module.css";

export function Toolkit() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="kicker">Toolkit</p>
          <h2>The stack I reach for.</h2>
          <p className="sub">
            What I use daily, grouped the way I actually think about a feature.
          </p>
        </div>
      </div>

      <div className={styles.marquee} aria-hidden="true">
        <div className={styles.track}>
          {[...marquee, ...marquee].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </div>

      <div className="container">
        <div className={styles.grid}>
          {skillGroups.map((group, index) => (
            <article
              key={group.id}
              className={`card ${styles.group}`}
              data-reveal
              data-reveal-delay={index * 0.05}
            >
              <h3>{group.title}</h3>
              <ul className="chips">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
