import { useRef } from "react";
import { education, jobs } from "../data/resume";
import { useTimelineProgress } from "../hooks/useMotion";
import styles from "./Experience.module.css";

export function Experience() {
  const timeline = useRef<HTMLDivElement>(null);
  const fill = useRef<HTMLSpanElement>(null);
  useTimelineProgress(timeline, fill);

  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="kicker">Experience</p>
          <h2>Where I&rsquo;ve shipped.</h2>
        </div>

        <div className={styles.timeline} ref={timeline}>
          <span className={styles.line} aria-hidden="true">
            <span className={styles.fill} ref={fill} />
          </span>

          {jobs.map((job) => (
            <article key={job.company} className={styles.job} data-reveal>
              <div className={styles.logo}>
                {job.logo ? (
                  <img src={job.logo} alt="" loading="lazy" />
                ) : (
                  <span>{job.company.slice(0, 1)}</span>
                )}
              </div>

              <div className={styles.body}>
                <div className={styles.head}>
                  <h3>{job.company}</h3>
                  <span className={styles.date}>{job.period}</span>
                </div>

                <p className={styles.role}>{job.role}</p>
                <p className={styles.place}>{job.location}</p>

                <ul className={styles.points}>
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className={`card ${styles.edu}`} data-reveal>
          <p className="kicker">Education</p>
          <div className={styles.eduGrid}>
            {education.map((item) => (
              <div key={item.degree}>
                <p className={styles.degree}>{item.degree}</p>
                <p className={styles.school}>
                  {item.school} · {item.place}
                </p>
                <p className={styles.period}>{item.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
