import { useScrollProgress } from "../hooks/useMotion";
import styles from "./ScrollProgress.module.css";

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className={styles.bar} aria-hidden="true">
      <i style={{ transform: `scaleX(${progress})` }} />
    </div>
  );
}
