import type { Project } from "../data/resume";
import { projects } from "../data/resume";
import styles from "./Work.module.css";

export function Work() {
  return (
    <section className="section" id="work">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="kicker">Selected work</p>
          <h2>What I&rsquo;ve built.</h2>
          <p className="sub">
            Two builds that show both halves of the stack: one I own end to end,
            one shipped under real-time load.
          </p>
        </div>

        <div className={styles.list}>
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`card ${styles.project} ${
                index % 2 === 1 ? styles.flip : ""
              }`}
              data-reveal
            >
              <div className={styles.media}>
                <ProjectMedia project={project} />
              </div>

              <div className={styles.body}>
                <div className={styles.meta}>
                  {project.badges.map((badge, badgeIndex) => (
                    <span
                      key={badge}
                      className={`badge ${badgeIndex === 0 ? "badge-accent" : ""}`}
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                <h3>{project.title}</h3>
                <p className={styles.tagline}>{project.tagline}</p>
                <p className={styles.description}>{project.description}</p>

                <ul className="chips">
                  {project.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>

                {project.link && (
                  <div className={styles.links}>
                    <a
                      className="btn btn-primary btn-sm"
                      href={project.link.href}
                      target="_blank"
                      rel="noopener"
                    >
                      {project.link.label} <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Screenshot when there is one, otherwise a deliberate placeholder frame
 *  rather than a broken image. */
function ProjectMedia({ project }: { project: Project }) {
  return (
    <div className={styles.frame}>
      <div className={styles.frameBar}>
        <span />
        <span />
        <span />
        <i>{project.frameLabel ?? project.title}</i>
      </div>

      {project.image ? (
        <img
          src={project.image}
          alt={project.imageAlt ?? `${project.title} screenshot`}
          loading="lazy"
        />
      ) : (
        <div className={styles.skeleton} aria-hidden="true">
          <div className={styles.skelSide}>
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className={styles.skelMain}>
            <div className={styles.skelRow}>
              <span />
              <span />
            </div>
            <div className={styles.skelCards}>
              <span />
              <span />
              <span />
            </div>
            <div className={styles.skelLines}>
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
