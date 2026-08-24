import "./WorkItem.css";

// One project on the /work page. Vertical layout: large image, then title row,
// then short description. Width and alignment are driven by per-project fields
// in src/content/projects.js
export default function WorkItem({
  title,
  year,
  role,
  tags = [],
  description,
  cover,
  width = "default",
  aspect = "4/3",
  align = "center",
  href,
  index,
}) {
  const Wrapper = href ? "a" : "article";
  const wrapperProps = href ? { href, target: "_blank", rel: "noreferrer" } : {};

  return (
    <Wrapper
      className={`work-item work-item--${width} is-${align}`}
      {...wrapperProps}
    >
      <div className="work-item__media" style={{ aspectRatio: aspect }}>
        {cover ? (
          <img src={cover} alt={title} loading="lazy" />
        ) : (
          <div className="work-item__placeholder">
            <span>{title}</span>
          </div>
        )}
      </div>

      <div className="work-item__meta">
        {index != null && (
          <p className="work-item__index">
            № {String(index + 1).padStart(2, "0")}
          </p>
        )}
        <div className="work-item__row">
          <h2 className="work-item__title">{title}</h2>
          {href && <span className="work-item__open">[ open pdf ↗ ]</span>}
        </div>
        {role && <p className="work-item__role">{role}</p>}
        {description && <p className="work-item__desc">{description}</p>}
        {tags.length > 0 && (
          <ul className="work-item__tags">
            {tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        )}
      </div>
    </Wrapper>
  );
}
