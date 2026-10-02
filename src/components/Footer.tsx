import { profile } from "../data/resume";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>
          {profile.location} · Built with React, Vite and too much coffee
        </span>
      </div>
    </footer>
  );
}
