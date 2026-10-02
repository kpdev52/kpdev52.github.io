import { useRef, useState } from "react";
import { eyebrow, profile } from "../data/resume";
import { useHeroIntro } from "../hooks/useMotion";
import styles from "./Hero.module.css";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [hasPhoto, setHasPhoto] = useState(true);
  useHeroIntro(ref);

  return (
    <section className={styles.hero} id="top" ref={ref}>
      <div className={styles.backdrop} aria-hidden="true">
        <div className={styles.streaks} />
        <div className={styles.glow} />
        <div className={styles.veil} />
      </div>
      <div className={`container ${styles.content}`}>
        <div className={styles.avatarWrap} data-hero>
          {hasPhoto ? (
            <img
              className={styles.avatar}
              src="assets/profile.jpg"
              alt={`Portrait of ${profile.name}`}
              width={132}
              height={132}
              onError={() => setHasPhoto(false)}
            />
          ) : (
            /* No photo on disk yet — initials rather than a broken image. */
            <div className={`${styles.avatar} ${styles.avatarFallback}`}>
              {profile.initials}
            </div>
          )}
          <span className={styles.avatarRing} aria-hidden="true" />
        </div>

        <p className={styles.eyebrow} data-hero>
          {eyebrow.map((item, index) => (
            <span key={item.label}>
              {index > 0 && <i aria-hidden="true">·</i>}
              <span
                className={`${styles.eb} ${"gradient" in item && item.gradient ? "grad" : ""}`}
                title={item.caption}
              >
                {item.label}
              </span>
            </span>
          ))}
        </p>

        <h1 className={styles.title} data-hero>
          {profile.headline.map((line, index) => (
            <span key={line.accent}>
              {index > 0 && <br className={styles.brDesk} />}
              {line.lead} <span className="grad">{line.accent}</span>{" "}
            </span>
          ))}
        </h1>

        <p className={styles.lede} data-hero>
          {profile.lede}
        </p>

        <div className={styles.ctaRow} data-hero>
          <a className="btn btn-primary" href="#work">
            See my work
          </a>
          <a
            className="btn"
            href={profile.resume}
            target="_blank"
            rel="noopener"
          >
            Download resume
          </a>
          <a className="btn" href={`mailto:${profile.email}`}>
            Get in touch
          </a>
        </div>
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <span />
      </div>
    </section>
  );
}
