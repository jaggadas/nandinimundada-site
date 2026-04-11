import "./StaggeredGrid.css";

// A 12-column asymmetric grid. Each block sets its own column start/span and
// row start/span, so you get a staggered / offset layout that feels custom.
// Edit block positions in src/content/homeBlocks.js
export default function StaggeredGrid({ blocks = [] }) {
  return (
    <div className="stagger">
      {blocks.map((b, i) => (
        <div
          key={b.id ?? i}
          className={`stagger__block stagger__block--${b.type ?? "text"} ${
            b.align ? `is-${b.align}` : ""
          }`}
          style={{
            gridColumn: `${b.colStart} / span ${b.colSpan}`,
            gridRow: `${b.rowStart} / span ${b.rowSpan ?? 1}`,
          }}
        >
          {b.type === "image" && (
            <div className="stagger__media">
              {b.src ? (
                <img src={b.src} alt={b.alt ?? ""} loading="lazy" />
              ) : (
                <div className="stagger__placeholder" />
              )}
              {b.caption && <p className="stagger__caption">{b.caption}</p>}
            </div>
          )}

          {b.type === "text" && (
            <div className="stagger__text">
              {b.eyebrow && <p className="eyebrow">{b.eyebrow}</p>}
              {b.title && <h3 className="stagger__title">{b.title}</h3>}
              {b.body && <p className="stagger__body">{b.body}</p>}
              {b.link && (
                <a className="stagger__link" href={b.link.href}>
                  {b.link.label} →
                </a>
              )}
            </div>
          )}

          {b.type === "headline" && (
            <h2 className="stagger__headline">{b.text}</h2>
          )}
        </div>
      ))}
    </div>
  );
}
