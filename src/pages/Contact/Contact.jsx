import PageHead from "../../components/PageHead/PageHead.jsx";
import { site } from "../../content/site.js";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="page">
      <PageHead
        title="Let&rsquo;s talk"
        note="tell me about your project — i reply within a few days"
      />

      <div className="container contact">
        <p className="contact__lede">Have a story to tell?</p>
        <a className="contact__email" href={`mailto:${site.email}`}>
          {site.email}
          <span className="contact__email-arrow">↗</span>
        </a>

        <ul className="contact__social">
          {site.social.map((s) => (
            <li key={s.href}>
              <a href={s.href} target="_blank" rel="noreferrer">
                {s.label} ↗
              </a>
            </li>
          ))}
        </ul>

        <div className="contact__credits">
          <p>
            <span className="contact__credit-label">Phone</span>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
          </p>
          <p>
            <span className="contact__credit-label">Instagram</span>
            <a href={site.instagram.href} target="_blank" rel="noreferrer">
              {site.instagram.label}
            </a>
          </p>
          <p>
            <span className="contact__credit-label">Location</span>
            {site.location}
          </p>
        </div>
      </div>
    </div>
  );
}
