import { useEffect, useMemo, useRef } from "react";
import Meteors from "./Meteors/Meteors";

const rand = (min, max) => Math.random() * (max - min) + min;

// Fixed full-screen night sky: a deep dark gradient with a twinkling
// starfield, a rocket that follows the cursor and the occasional meteor.
// Rendered only in dark mode.
const GridBackgroundTheme = () => {
  const cursorRef = useRef();

  // Random, stable star positions/sizes.
  const stars = useMemo(
    () =>
      Array.from({ length: 160 }, () => ({
        top: `${rand(0, 100)}%`,
        left: `${rand(0, 100)}%`,
        size: `${rand(1, 2.6)}px`,
        delay: `${rand(0, 4)}s`,
        duration: `${rand(2.5, 6)}s`,
      })),
    []
  );

  useEffect(() => {
    let lastX = null;
    let lastY = null;
    let angle = 0; // continuous degrees; keeps last heading when still

    const INTERACTIVE = 'a, button, input, textarea, select, label, summary, [role="button"], [contenteditable="true"]';

    const handleMouseMove = (e) => {
      const el = cursorRef.current;
      if (!el) return;

      el.style.left = e.clientX + "px";
      el.style.top = e.clientY + "px";

      if (lastX !== null) {
        const dx = e.clientX - lastX;
        const dy = e.clientY - lastY;
        // Only update heading once there's meaningful movement (avoids jitter).
        if (dx * dx + dy * dy > 4) {
          const raw = (Math.atan2(dy, dx) * 180) / Math.PI;
          // Unwrap so we always rotate the short way (no 360° spins).
          let diff = ((raw - (angle % 360) + 540) % 360) - 180;
          angle += diff;
        }
      }
      el.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;

      // Hide the rocket over clickable/typeable elements so the native
      // pointer/text cursor takes over.
      const overInteractive =
        e.target && e.target.closest && e.target.closest(INTERACTIVE);
      el.style.opacity = overInteractive ? "0" : "1";

      lastX = e.clientX;
      lastY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div
        className="fixed inset-0 -z-10 h-screen w-screen overflow-hidden"
        style={{
          background:
            "radial-gradient(120% 100% at 50% 0%, #0d0d18 0%, #08080f 45%, #050507 100%)",
        }}
      >
        {/* Starfield */}
        {stars.map((s, i) => (
          <span
            key={"star" + i}
            className="star"
            style={{
              top: s.top,
              left: s.left,
              width: s.size,
              height: s.size,
              animationDelay: s.delay,
              animationDuration: s.duration,
            }}
          />
        ))}

        <Meteors number={14} />
      </div>

      {/* Rocket cursor — follows the pointer above all content. */}
      <div ref={cursorRef} className="rocket-cursor">
        <span className="rocket-glow" />
        <span className="rocket" aria-hidden="true">
          🚀
        </span>
      </div>
    </>
  );
};

export default GridBackgroundTheme;
