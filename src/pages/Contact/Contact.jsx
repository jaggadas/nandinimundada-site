import Hero from "../../components/Hero/Hero.jsx";
import Section from "../../components/Section/Section.jsx";
import { site } from "../../content/site.js";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="page">
      <Hero
        eyebrow="Contact"
        title="Let's talk"
        subtitle="Tell me about your project, idea, or just say hi. I usually reply within a few days."
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
