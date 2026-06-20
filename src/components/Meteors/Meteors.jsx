import { useMemo } from "react";
import "./Meteors.css";

const rand = (min, max) => Math.random() * (max - min) + min;

const Meteors = ({ number = 20 }) => {
  // Generate randomized properties once so each meteor has its own
  // size, speed, trail length and position — no two look alike.
  const meteors = useMemo(
    () =>
      Array.from({ length: number }, () => ({
        top: `${rand(-5, 55)}%`,
        left: `${rand(0, 85)}%`,
        scale: rand(0.5, 1.2),
        tail: `${rand(80, 190)}px`,
        delay: `${rand(0, 9)}s`,
        duration: `${rand(3.5, 9)}s`,
      })),
    [number]
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {meteors.map((m, idx) => (
        <span
          key={"meteor" + idx}
          className="meteor-wrap"
          style={{
            top: m.top,
            left: m.left,
            transform: `rotate(215deg) scale(${m.scale})`,
          }}
        >
          <span
            className="meteor"
            style={{
              "--tail": m.tail,
              animationDelay: m.delay,
              animationDuration: m.duration,
            }}
          />
        </span>
      ))}
    </div>
  );
};

export default Meteors;
