import { profile } from "../data/resume";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section className={`section ${styles.contact}`} id="contact">
      <div className="container">
        <p className="kicker" data-reveal>
          Contact
        </p>
        <h2 className={styles.title} data-reveal>
          Got something that needs
          <br />
          <span className="grad">building properly?</span>
        </h2>
        <p className={styles.sub} data-reveal>
          Open to software engineering and Angular roles — {profile.location},
          hybrid or remote. Fastest reply is email or WhatsApp.
        </p>

        <div className={styles.row} data-reveal>
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <a
            className="btn"
            href={profile.whatsapp}
            target="_blank"
            rel="noopener"
          >
            <WhatsAppIcon /> WhatsApp
          </a>
          {/* number stays out of the markup; the link still dials it */}
          <a className="btn" href={profile.phoneHref}>
            <PhoneIcon /> Call me
          </a>
          <a
            className="btn"
            href={profile.linkedin}
            target="_blank"
            rel="noopener"
          >
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
          <a className="btn" href={profile.github} target="_blank" rel="noopener">
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.47-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.18-.3-.02-.46.13-.6.13-.14.3-.35.45-.53.14-.17.2-.3.3-.5.1-.2.05-.37-.03-.52l-.92-2.2c-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.03 1.01-1.03 2.48 0 1.46 1.06 2.87 1.21 3.07.15.2 2.1 3.2 5.08 4.49.7.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.42-.08-.12-.28-.2-.57-.34M12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.89 9.89-9.89 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.89-9.88 9.89M20.46 3.49A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.69 1.45c6.55 0 11.89-5.34 11.89-11.9a11.82 11.82 0 0 0-3.48-8.4" />
    </svg>
  );
}
