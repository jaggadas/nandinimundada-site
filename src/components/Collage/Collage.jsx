import "./Collage.css";

// A floating, asymmetric image collage. Each item is absolutely positioned
// within the collage container using percentages, so the layout scales with
// the container size. Data-driven — edit positions in src/content/collage.js.
//
// Item shape:
//   { id, src, alt, x, y, w, rotate, z }
// Where:
//   x, y    — top-left position in % of the collage container
//   w       — width in % of the collage container
//   rotate  — rotation in degrees (optional)
//   z       — stacking order (optional)
export default function Collage({ items = [] }) {
  return (
    <div className="collage">
      {items.map((it, i) => (
        <div
          key={it.id ?? i}
          className="collage__item"
          style={{
            left: `${it.x}%`,
            top: `${it.y}%`,
            width: `${it.w}%`,
            transform: `rotate(${it.rotate ?? 0}deg)`,
            zIndex: it.z ?? i,
          }}
        >
          {it.src ? (
            <img src={it.src} alt={it.alt ?? ""} loading="lazy" />
          ) : (
            <div className="collage__placeholder" aria-hidden="true">
              <span>{it.label ?? `Item ${i + 1}`}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
