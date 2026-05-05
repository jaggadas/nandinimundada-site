import { useState, useEffect } from "react";
import "./Flipbook.css";

// A page-flip viewer. Pass an array of image URLs as `pages`.
// - Click "Next" / "Prev" or use ← → arrow keys
// - Click on a page to flip forward
// Pages flip with a 3D rotateY animation around the left edge.
export default function Flipbook({ pages = [], title }) {
  const [index, setIndex] = useState(0);
  const [flip, setFlip] = useState(null); // null | "forward" | "backward"

  const total = pages.length;
  const canNext = index < total - 1;
  const canPrev = index > 0;

  const next = () => {
    if (!flip && canNext) setFlip("forward");
  };
  const prev = () => {
    if (!flip && canPrev) setFlip("backward");
  };

  const onAnimationEnd = () => {
    if (flip === "forward") setIndex((i) => i + 1);
    else if (flip === "backward") setIndex((i) => i - 1);
    setFlip(null);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  if (total === 0) return null;

  // Bottom-layer image — the page that stays on screen behind the flipping leaf
  const bottomSrc =
    flip === "forward" ? pages[index + 1] : pages[index];

  // Leaf image — the page being animated. For forward, it's the current page
  // rotating away. For backward, it's the previous page rotating in.
  const leafSrc =
    flip === "forward"
      ? pages[index]
      : flip === "backward"
      ? pages[index - 1]
      : null;

  return (
    <div className="flipbook">
      {title && <h3 className="flipbook__title">{title}</h3>}

      <div className="flipbook__stage">
        <img className="flipbook__page" src={bottomSrc} alt="" />

        {flip && (
          <div
            className={`flipbook__leaf flipbook__leaf--${flip}`}
            onAnimationEnd={onAnimationEnd}
          >
            <img src={leafSrc} alt="" />
          </div>
        )}

        {canPrev && (
          <button
            type="button"
            className="flipbook__nav flipbook__nav--prev"
            onClick={prev}
            aria-label="Previous page"
            disabled={!!flip}
          >
            ←
          </button>
        )}
        {canNext && (
          <button
            type="button"
            className="flipbook__nav flipbook__nav--next"
            onClick={next}
            aria-label="Next page"
            disabled={!!flip}
          >
            →
          </button>
        )}
      </div>

      <div className="flipbook__meta">
        <span>
          {index + 1} / {total}
        </span>
      </div>
    </div>
  );
}
