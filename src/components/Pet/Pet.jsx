import { useEffect, useRef } from "react";
import "./Pet.css";

// A pixel-art dog (public/pet-sheet.png, 4x4 frames of 21x16) that wanders
// the site. It walks (sometimes sneaks) along "hard" element edges, falls
// with gravity, and can be picked up with the mouse and dropped anywhere.

const FW = 21;
const FH = 16;
const SCALE = 3;
const W = FW * SCALE;
const H = FH * SCALE;
const HW = W / 2;

// sheet rows + frame durations (ms) from the aseprite export
const ANIM = {
  walk: { row: 0, dur: 120 },
  idle: { row: 1, dur: 160 },
  sneak: { row: 2, dur: 180 },
};

// Elements the dog can stand on (top edges).
const SOLIDS =
  ".carousel, .work-item__media, .home__cta, .about__portrait img, " +
  ".flipbook__stage, .play-group__item img, .page-head, .nav, .footer, " +
  ".home__line";

export default function Pet() {
  const elRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = elRef.current;

    // ---- state: x = feet center, y = feet, in viewport (fixed) px ----
    const s = {
      x: window.innerWidth * 0.7,
      y: -80,
      vx: 0,
      vy: 0,
      dir: -1,
      mode: "fall", // fall | walk | idle | drag
      gait: "walk", // walk | sneak (picked when it starts moving)
      animT: 0,
      actT: 1,
      rects: [],
      grabDX: 0,
      grabDY: 0,
      lastPX: 0,
      lastPY: 0,
      pvx: 0,
      pvy: 0,
    };

    const collectRects = () => {
      s.rects = [...document.querySelectorAll(SOLIDS)]
        .map((n) => n.getBoundingClientRect())
        .filter((r) => r.width >= 60 && r.top > 40);
    };
    collectRects();
    const rectTimer = setInterval(collectRects, 500);

    // Highest floor below (or near) fromY at horizontal position x.
    const floorAt = (x, fromY) => {
      let best = window.innerHeight;
      for (const r of s.rects) {
        if (x < r.left + 6 || x > r.right - 6) continue;
        if (r.top >= fromY && r.top < best) best = r.top;
      }
      return best;
    };

    const setSprite = (anim, frameIdx) => {
      el.style.backgroundPosition = `${-frameIdx * W}px ${-ANIM[anim].row * H}px`;
    };

    let raf;
    let last = performance.now();
    const tick = (now) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      const vw = window.innerWidth;
      let tilt = 0;
      s.animT += dt * 1000;

      if (s.mode === "drag") {
        setSprite("idle", 0);
        tilt = 4;
      } else if (s.mode === "fall") {
        s.vy = Math.min(s.vy + 2400 * dt, 1500);
        s.y += s.vy * dt;
        s.x += s.vx * dt;
        if (s.x < HW) (s.x = HW), (s.vx *= -0.5);
        if (s.x > vw - HW) (s.x = vw - HW), (s.vx *= -0.5);
        const floor = floorAt(s.x, s.y - s.vy * dt - 4);
        if (s.y >= floor) {
          s.y = floor;
          s.vx = 0;
          s.vy = 0;
          s.mode = "idle";
          s.actT = 0.3 + Math.random();
        }
        setSprite("walk", 1);
        tilt = 4;
      } else {
        // walk / idle — stay glued to ground, fall if it disappears
        const floor = floorAt(s.x, s.y - 30);
        if (floor - s.y > 30) {
          s.mode = "fall";
          s.vy = 0;
        } else {
          s.y = floor;
          if (s.mode === "walk") {
            const speed = s.gait === "sneak" ? 20 : 46;
            const nx = s.x + s.dir * speed * dt;
            const nfloor = floorAt(nx, s.y - 30);
            const offEdge = nfloor - s.y > 30;
            if (nx < HW || nx > vw - HW || (offEdge && Math.random() < 0.6)) {
              s.dir *= -1; // turn at edges (usually)
            } else {
              s.x = nx;
              if (offEdge) {
                s.mode = "fall"; // sometimes just walks off, like a real menace
                s.vy = 0;
                s.vx = s.dir * 40;
              }
            }
            setSprite(s.gait, Math.floor(s.animT / ANIM[s.gait].dur) % 4);
          } else {
            setSprite("idle", Math.floor(s.animT / ANIM.idle.dur) % 4);
          }
          s.actT -= dt;
          if (s.actT <= 0) {
            s.actT = 1.5 + Math.random() * 3;
            if (Math.random() < 0.65) {
              s.mode = "walk";
              s.gait = Math.random() < 0.25 ? "sneak" : "walk";
              if (Math.random() < 0.4) s.dir *= -1;
            } else {
              s.mode = "idle";
            }
          }
        }
      }

      el.style.transform =
        `translate3d(${s.x - HW}px, ${s.y - H}px, 0) ` +
        `scaleX(${-s.dir}) rotate(${tilt * s.dir}deg)`;
      raf = requestAnimationFrame(tick);
    };

    const onDown = (e) => {
      e.preventDefault();
      el.setPointerCapture(e.pointerId);
      s.mode = "drag";
      s.grabDX = s.x - e.clientX;
      s.grabDY = s.y - e.clientY;
      s.lastPX = e.clientX;
      s.lastPY = e.clientY;
      s.pvx = 0;
      s.pvy = 0;
    };
    const onMove = (e) => {
      if (s.mode !== "drag") return;
      s.pvx = (e.clientX - s.lastPX) * 60;
      s.pvy = (e.clientY - s.lastPY) * 60;
      s.lastPX = e.clientX;
      s.lastPY = e.clientY;
      s.x = e.clientX + s.grabDX;
      s.y = e.clientY + s.grabDY;
    };
    const onUp = () => {
      if (s.mode !== "drag") return;
      s.mode = "fall";
      s.vx = Math.max(-500, Math.min(500, s.pvx));
      s.vy = Math.max(-400, Math.min(600, s.pvy * 0.5));
      if (Math.abs(s.vx) > 40) s.dir = s.vx > 0 ? 1 : -1;
    };

    el.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      clearInterval(rectTimer);
      el.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, []);

  return <div ref={elRef} className="pet" aria-hidden="true" />;
}
