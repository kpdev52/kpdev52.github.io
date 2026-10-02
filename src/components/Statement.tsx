import { profile } from "../data/resume";
import styles from "./Statement.module.css";

export function Statement() {
  return (
    <section className={styles.statement}>
      <div className="container">
        <p className={styles.text} data-reveal>
          {profile.statement}
        </p>
      </div>
    </section>
  );
}
