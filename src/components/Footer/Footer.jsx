import { site } from "../../content/site.js";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a className="footer__item footer__item--left" href={`mailto:${site.email}`}>
          {site.emailLabel}
        </a>
        <a
          className="footer__item footer__item--center"
          href={site.instagram.href}
          target="_blank"
          rel="noreferrer"
        >
          {site.instagram.label}
        </a>
        <p className="footer__item footer__item--right">{site.location}</p>
      </div>
    </footer>
  );
}
