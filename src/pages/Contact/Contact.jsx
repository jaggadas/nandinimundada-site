import Section from "../../components/Section/Section.jsx";
import PageHead from "../../components/PageHead/PageHead.jsx";
import { site } from "../../content/site.js";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="page">
      <PageHead
        index="05"
        title="Let&rsquo;s talk"
        note="tell me about your project — i reply within a few days"
      />

      <Section>
        <div className="contact__grid">
          <div>
            <p className="eyebrow">Email</p>
            <a className="contact__email" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>
          <div>
            <p className="eyebrow">Phone</p>
            <a
              className="contact__email"
              href={`tel:${site.phone.replace(/\s/g, "")}`}
            >
              {site.phone}
            </a>
          </div>
          <div>
            <p className="eyebrow">Elsewhere</p>
            <ul className="contact__social">
              {site.social.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noreferrer">
                    {s.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Location</p>
            <p className="contact__location">{site.location}</p>
          </div>
        </div>
      </Section>
    </div>
  );
}
