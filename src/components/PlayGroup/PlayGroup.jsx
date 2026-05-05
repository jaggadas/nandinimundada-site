import "./PlayGroup.css";

// Renders a group of images in one of four "fun" layout variants.
// Each entry in `images` can be:
//   - a string path: "/play/02/07.jpg"
//   - an object:     { src: "/play/02/07.jpg", full: true }
//   - a row object:  { row: ["/p/a.jpg", "/p/b.jpg"] }   // side-by-side
// `full: true` makes a single image span the full width.
// Wide images (aspect > 2.2) auto-break-out to full width on load.
//
// Optional `rowFirst` prop renders the first N items in a single horizontal
// row before the rest fall into the chosen layout.
export default function PlayGroup({
  label,
  layout = "mosaic",
  images = [],
  rowFirst = 0,
}) {
  const handleLoad = (e) => {
    const img = e.currentTarget;
    if (img.naturalHeight === 0) return;
    const ratio = img.naturalWidth / img.naturalHeight;
    if (ratio > 2.2) {
      img.closest(".play-group__item")?.classList.add("is-full");
    } else if (ratio < 0.55) {
      img.closest(".play-group__item")?.classList.add("is-tall");
    }
  };

  const renderItem = (entry, key) => {
    if (entry && typeof entry === "object" && Array.isArray(entry.row)) {
      return (
        <div key={key} className="play-group__inline-row">
          {entry.row.map((sub, j) => renderItem(sub, `${key}-${j}`))}
        </div>
      );
    }
    const item = typeof entry === "string" ? { src: entry } : entry;
    const cls = `play-group__item${item.full ? " is-full" : ""}`;
    return (
      <figure key={key} className={cls} style={{ "--i": key }}>
        <img src={item.src} alt="" loading="lazy" onLoad={handleLoad} />
      </figure>
    );
  };

  const rowItems = rowFirst > 0 ? images.slice(0, rowFirst) : [];
  const restItems = rowFirst > 0 ? images.slice(rowFirst) : images;

  return (
    <section className={`play-group play-group--${layout}`}>
      {label && <p className="play-group__label">{label}</p>}

      {rowItems.length > 0 && (
        <div className="play-group__row">
          {rowItems.map((entry, i) => renderItem(entry, i))}
        </div>
      )}

      {restItems.length > 0 && (
        <div className="play-group__items">
          {restItems.map((entry, i) => renderItem(entry, i + rowFirst))}
        </div>
      )}
    </section>
  );
}
