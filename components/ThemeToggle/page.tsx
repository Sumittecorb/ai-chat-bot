"use client";
import useDarkMode from "@/utils/useDarkMode";
import React from "react";
import { DarkImage, ImagePath, LightImage } from "../Images/page";
const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useDarkMode();
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <>
      <div className="flex items-center w-full py-3">
        <label className="flex items-center cursor-pointer">
          <h1 className="text-black dark:text-white font-['Poppins'] text-lg xs:text-lg xss:text-md mr-3">
            Dark
          </h1>
          <div className="relative">
            <input onClick={toggleDarkMode} type="checkbox" className="sr-only peer" />
            <img src={LightImage.whiteToggle} className="h-12 w-20 peer-checked:hidden" />
            <img src={DarkImage.darkToggle} className="hidden h-12 w-20 peer-checked:block" />
          </div>
          <h1 className="text-black dark:text-white font-['Poppins'] text-lg xs:text-lg xss:text-md ml-3">
            Light
          </h1>
        </label>
      </div>
    </>
  );
};
export default ThemeToggle;