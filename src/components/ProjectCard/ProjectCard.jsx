import "./ProjectCard.css";

export default function ProjectCard({
  title,
  role,
  year,
  summary,
  tags = [],
  cover,
  href = "#",
}) {
  return (
    <a className="card" href={href}>
      <div className="card__media">
        {cover ? (
          <img src={cover} alt="" loading="lazy" />
        ) : (
          <div className="card__placeholder" />
        )}
      </div>
      <div className="card__body">
        <div className="card__row">
          <h3 className="card__title">{title}</h3>
          {year && <span className="card__year">{year}</span>}
        </div>
        {role && <p className="card__role">{role}</p>}
        {summary && <p className="card__summary">{summary}</p>}
        {tags.length > 0 && (
          <ul className="card__tags">
            {tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        )}
      </div>
    </a>
  );
}
