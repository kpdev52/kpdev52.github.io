import { useEffect } from "react";
import { burstLabels, profile } from "../data/resume";
import styles from "./IdentityBurst.module.css";

type Props = {
  open: boolean;
  onClose: () => void;
};

/** One ring position per label: angle in degrees (0 = 3 o'clock) and how far
 *  out it sits, as a % of the stage. Lower pills sit wider so they clear the
 *  name block under the photo. */
const POSITIONS = [
  { angle: -90, radius: 33 },
  { angle: -142, radius: 40 },
  { angle: -38, radius: 40 },
  { angle: 180, radius: 44 },
  { angle: 0, radius: 44 },
  { angle: 142, radius: 44 },
  { angle: 38, radius: 44 },
  { angle: 90, radius: 45 },
];
const PHOTO_RADIUS = 19; // % of the stage, where each connector line starts

function polar(angle: number, radius: number) {
  const rad = (angle * Math.PI) / 180;
  return { x: 50 + radius * Math.cos(rad), y: 50 + radius * Math.sin(rad) };
}

export function IdentityBurst({ open, onClose }: Props) {
  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <div
      className={styles.burst}
      data-open={open ? "" : undefined}
      aria-hidden={!open}
      role="dialog"
      aria-modal="true"
      aria-label={`${profile.name} — what I work on`}
      onClick={onClose}
    >
      <button type="button" className={styles.close} aria-label="Close">
        ×
      </button>

      <div className={styles.stage} onClick={(event) => event.stopPropagation()}>
        <svg className={styles.lines} viewBox="0 0 100 100" aria-hidden="true">
          {POSITIONS.map(({ angle, radius }, index) => {
            const from = polar(angle, PHOTO_RADIUS);
            const to = polar(angle, radius - 5);
            return (
              <g key={angle} style={{ ["--i" as string]: index }}>
                <line x1={from.x} y1={from.y} x2={to.x} y2={to.y} />
                <circle cx={from.x} cy={from.y} r="0.5" />
                <circle cx={to.x} cy={to.y} r="0.5" />
              </g>
            );
          })}
        </svg>

        <div className={styles.photoWrap}>
          <img
            className={styles.photo}
            src="assets/profile-og.jpg"
            alt={`Portrait of ${profile.name}`}
          />
          <span className={styles.ring} />
          <span className={styles.ringDashed} />
        </div>

        {burstLabels.map((label, index) => {
          const { angle, radius } = POSITIONS[index];
          const pos = polar(angle, radius);
          return (
            <span
              key={label.accent}
              className={styles.pill}
              style={{
                left: `${pos.x}%`,
                top: `${pos.y}%`,
                ["--i" as string]: index,
              }}
            >
              {label.lead && `${label.lead} `}
              <b className="grad">{label.accent}</b>
            </span>
          );
        })}

        <div className={styles.identity}>
          <p className={styles.name}>{profile.name}</p>
          <p className={styles.role}>Engineer who owns the whole path</p>
        </div>
      </div>
    </div>
  );
}
