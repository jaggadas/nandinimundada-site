import { site } from "../../content/site.js";
import { aboutSections } from "../../content/about.js";
import "./About.css";

import PageHead from "../../components/PageHead/PageHead.jsx";

export default function About() {
  return (
    <div className="page about">
      <PageHead index="04" title="About" note="the person behind the work" />
      <div className="container about__inner">

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
