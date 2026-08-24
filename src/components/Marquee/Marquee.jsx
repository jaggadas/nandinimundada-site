import "./Marquee.css";

// Endless scrolling ticker strip, poster-style.
export default function Marquee({ items = [], speed = 18 }) {
  const row = items.map((t) => `${t} ✶ `).join("");
  return (
    <div className="marquee" aria-hidden="true">
      <div
        className="marquee__track"
        style={{ animationDuration: `${speed}s` }}
      >
        <span>{row}</span>
        <span>{row}</span>
      </div>
    </div>
  );
}
