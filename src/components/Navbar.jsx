import React from "react";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import NavigationOptions from "./NavigationOptions";
import useTheme from "../contexts/theme";

const Navbar = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  const onClose = () => {
    setShowDrawer((prev) => !prev);
  };

  const { themeMode } = useTheme();

  return (
    <div className="relative h-[20vh]">
      <div className="bg-[#0099ff] md:hidden w-screen h-[6vh]"></div>
      {themeMode === "light" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 210"
          className="w-screen scale-y-105"
        >
          <path
            fill="#0099ff"
            fillOpacity="1"
            d="M0,192L30,186.7C60,181,120,171,180,170.7C240,171,300,181,360,165.3C420,149,480,107,540,85.3C600,64,660,64,720,90.7C780,117,840,171,900,181.3C960,192,1020,160,1080,144C1140,128,1200,128,1260,133.3C1320,139,1380,149,1410,154.7L1440,160L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
          ></path>
        </svg>
      )}
      <div className="absolute w-screen top-0 left-0 px-[30px] lg:px-[130px] md:px-[60px]">
        <nav className="flex h-[10vh] lg:h-[17vh] justify-between items-center xl:px-[120px] text-textLight dark:text-white">
          <h1 className="text-[24px] sm:text-[28px] md:text-[32px]">
            Abhishek Seth
          </h1>
          <div className="hidden md:block">
            <NavigationOptions direction="horizontal" />
          </div>

          {!showDrawer && (
            <div
              className="text-[24px] sm:text-[28px] md:hidden cursor-pointer"
              onClick={onClose}
            >
              <FaBars />
            </div>
          )}

          <div
            className={`z-10 flex flex-col items-center gap-[20px] fixed left-[100vw] top-[0px] w-[40vw] h-[100%] pt-[30px] bg-yellow-400 transition-left ${
              showDrawer ? "left-[60vw]" : ""
            } md:hidden`}
          >
            <div className="bg-white text-[20px] p-[8px] rounded-full grid place-content-center dark:text-black cursor-pointer">
              <ImCross onClick={onClose} />
            </div>
            <NavigationOptions direction="vertical" />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
