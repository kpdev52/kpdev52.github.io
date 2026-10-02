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
          Open to full stack and Angular roles — {profile.location}, hybrid or
          remote. Fastest reply is email or WhatsApp.
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
          <a className="btn" href={profile.phoneHref}>
            {profile.phone}
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

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 1.8a8.2 8.2 0 0 1 0 16.4 8.1 8.1 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 0 1 12 3.8zm-3.3 4.4c-.2 0-.5 0-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.2 5 4.4 2.5 1 3 .8 3.5.7.5 0 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4l-.5-.3-1.9-.9c-.3-.1-.4-.1-.6.1l-.9 1.1c-.2.2-.3.2-.6.1a6.8 6.8 0 0 1-3.4-3c-.3-.4 0-.5.1-.7l.5-.6.3-.5c.1-.2 0-.4 0-.5l-.9-2.1c-.2-.5-.4-.5-.6-.5z" />
    </svg>
  );
}
