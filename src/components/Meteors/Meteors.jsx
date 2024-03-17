import React, { useEffect, useState } from "react";
import "./Meteors.css";

const Meteors = ({ number = 20 }) => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    // Delay the animation start after 1 second (adjust the delay time as needed)
    const timeout = setTimeout(() => {
      setStartAnimation(true);
    }, 500);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []);

  const meteors = new Array(number).fill(true);

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
      {meteors.map((el, idx) => (
        <div
          key={"meteor" + idx}
          className="absolute z-10 meteor-effect rotate-[215deg]"
          style={{
            top: `${Math.random() * 80}%`,
            left: `${Math.random() * 60}%`,
            animationDelay: `${Math.random() * (0.8 - 0.2) + 0.2}s`,
            animationDuration: `${Math.floor(Math.random() * (10 - 2) + 2)}s`,
          }}
        >
          <div
            className="meteor-body"
            style={{
              opacity: "0.8",
              borderBottom: "120px solid white",
              borderLeft: "2px solid transparent",
              borderRight: "2px solid transparent",
              height: 0,
              width: "1px",
              borderRadius: "100px",
              rotate: "90deg",
              display: startAnimation ? "block" : "none",
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default Meteors;
