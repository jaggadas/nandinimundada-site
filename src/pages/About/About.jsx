import { site } from "../../content/site.js";
import { aboutSections } from "../../content/about.js";
import "./About.css";

export default function About() {
  return (
    <div className="page about">
      <div className="container about__inner">
        <h1 className="about__title">{site.name}</h1>

        <div className="about__sections">
          {aboutSections.map((section) => (
            <section key={section.id} className="about__section">
              {section.label && (
                <p className="eyebrow about__label">{section.label}</p>
              )}
              <div className="about__copy">
                {section.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
