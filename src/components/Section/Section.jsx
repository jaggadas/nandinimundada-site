import "./Section.css";

export default function Section({
  eyebrow,
  title,
  children,
  variant = "default",
  as: Tag = "section",
}) {
  return (
    <Tag className={`section section--${variant}`}>
      <div className="container">
        {(eyebrow || title) && (
          <header className="section__head">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && <h2 className="section__title">{title}</h2>}
          </header>
        )}
        {children}
      </div>
    </Tag>
  );
}
