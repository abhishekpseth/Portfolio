import { useEffect, useRef } from "react";
import Meteors from "./Meteors/Meteors";

// Fixed full-screen grid with a cursor-tracking accent glow + meteors.
// Rendered only in dark mode.
const GridBackgroundTheme = () => {
  const cells = Array(350).fill(0);
  const cursorRef = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 h-screen w-screen overflow-hidden bg-black">
      <div className="grid-bg relative mx-auto h-full w-full max-w-full">
        {cells.map((_, index) => (
          <span key={index} className="relative z-10 h-[100px] bg-[#0e0e0e]" />
        ))}
      </div>

      <div
        ref={cursorRef}
        className="cursor absolute -z-10 h-[140px] w-[140px] rounded-full bg-accent"
      />
      <Meteors number={4} />
    </div>
  );
};

export default GridBackgroundTheme;
