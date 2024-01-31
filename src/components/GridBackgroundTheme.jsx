import React, { useContext } from "react";
import { useEffect, useRef } from "react";
import { useState } from "react";

const GridBackgroundTheme = ({ children }) => {
  const arr = Array(350).fill(0);
  const cursorRef = useRef();
  const [themeMode, setThemeMode] = useState("dark"); // Get the current theme mode from the context

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen overflow-hidden bg-black -z-10 opacity-85">
      <div className="container mx-auto max-w-full relative h-full w-full">
        {arr.map((_, index) => (
          <span
            key={index}
            className="relative h-[100px] bg-[#111] z-10"
          ></span>
        ))}
      </div>

      <div
        ref={cursorRef}
        className="cursor absolute w-[125px] h-[125px] z-[-10] rounded-full bg-green-500"
      ></div>
    </div>
  );
};

export default GridBackgroundTheme;
