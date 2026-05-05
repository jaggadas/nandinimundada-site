import { useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import "./Flipbook.css";

// Realistic page-flip viewer powered by react-pageflip / StPageFlip.
// Pages curl and fold as you turn them — drag the corner or click prev/next.
// Pass an array of image URLs as `pages`.
export default function Flipbook({ pages = [], title }) {
  const bookRef = useRef(null);
  const [page, setPage] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  if (pages.length === 0) return null;

  const total = pages.length;
  const flip = (dir) => {
    if (!bookRef.current) return;
    const api = bookRef.current.pageFlip();
    if (dir === "next") api.flipNext();
    else api.flipPrev();
  };

  return (
    <div className="flipbook">
      {title && <h3 className="flipbook__title">{title}</h3>}

      <div className="flipbook__stage">
        {ready && (
          <HTMLFlipBook
            ref={bookRef}
            width={600}
            height={800}
            size="stretch"
            minWidth={300}
            maxWidth={1600}
            minHeight={400}
            maxHeight={2000}
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={true}
            drawShadow={true}
            flippingTime={900}
            usePortrait={false}
            startZIndex={0}
            autoSize={true}
            className="flipbook__book"
            onFlip={(e) => setPage(e.data)}
          >
            {pages.map((src, i) => (
              <div className="flipbook__page" key={i}>
                <img src={src} alt={`Page ${i + 1}`} />
              </div>
            ))}
          </HTMLFlipBook>
        )}

        <button
          type="button"
          className="flipbook__nav flipbook__nav--prev"
          aria-label="Previous page"
          onClick={() => flip("prev")}
          disabled={page <= 0}
        >
          ←
        </button>
        <button
          type="button"
          className="flipbook__nav flipbook__nav--next"
          aria-label="Next page"
          onClick={() => flip("next")}
          disabled={page >= total - 1}
        >
          →
        </button>
      </div>

      <div className="flipbook__meta">
        <span>
          {Math.min(page + 1, total)} / {total}
        </span>
      </div>
    </div>
  );
}
