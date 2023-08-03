"use client";
import useDarkMode from "@/utils/useDarkMode";
import React, { useEffect, useState } from "react";
import { DarkImage, ImagePath, LightImage } from "../Images/page";
import { useTheme } from "next-themes";
const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useDarkMode();
  const { systemTheme, theme, setTheme } = useTheme();

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
            <input
              onClick={() =>
                theme == "dark" ? setTheme("light") : setTheme("dark")
              }
              type="checkbox"
              className="sr-only"
            />
            {theme === "light" && (
              <img
                src={LightImage.whiteToggle}
                className="h-12 w-20 "
              />
            )}
            {theme === "dark" && (
              <img
                src={DarkImage.darkToggle}
                className=" h-12 w-20"
              />
            )}{" "}
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
