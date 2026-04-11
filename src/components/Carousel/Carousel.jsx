import { useEffect, useRef, useState } from "react";
import "./Carousel.css";

// Full-width image carousel. Takes an array of slides:
//   { src, alt, caption }
// Edit slides in src/content/carousel.js
export default function Carousel({ slides = [], autoplay = true, interval = 5000 }) {
  const [index, setIndex] = useState(0);
  const timer = useRef(null);
  const count = slides.length;

  useEffect(() => {
    if (!autoplay || count <= 1) return;
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, interval);
    return () => clearInterval(timer.current);
  }, [autoplay, interval, count]);

  const go = (i) => {
    setIndex((i + count) % count);
    if (timer.current) {
      clearInterval(timer.current);
      if (autoplay && count > 1) {
        timer.current = setInterval(() => {
          setIndex((n) => (n + 1) % count);
        }, interval);
      }
    }
  };

  if (count === 0) {
    return (
      <div className="carousel carousel--empty">
        <div className="carousel__placeholder">
          <span>Add slides in src/content/carousel.js</span>
        </div>
      </div>
    );
  }

  return (
    <div className="carousel" aria-roledescription="carousel">
      <div className="carousel__track">
        {slides.map((s, i) => (
          <figure
            key={i}
            className={`carousel__slide ${i === index ? "is-active" : ""}`}
            aria-hidden={i !== index}
          >
            {s.src ? (
              <img src={s.src} alt={s.alt ?? ""} />
            ) : (
              <div className="carousel__placeholder">
                <span>{s.label ?? `Slide ${i + 1}`}</span>
              </div>
            )}
            {s.caption && <figcaption>{s.caption}</figcaption>}
          </figure>
        ))}
      </div>

      {count > 1 && (
        <>
          <button
            className="carousel__btn carousel__btn--prev"
            aria-label="Previous slide"
            onClick={() => go(index - 1)}
          >
            ←
          </button>
          <button
            className="carousel__btn carousel__btn--next"
            aria-label="Next slide"
            onClick={() => go(index + 1)}
          >
            →
          </button>

          <div className="carousel__dots" role="tablist">
            {slides.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === index}
                aria-label={`Go to slide ${i + 1}`}
                className={`carousel__dot ${i === index ? "is-active" : ""}`}
                onClick={() => go(i)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
