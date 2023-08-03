// utils/useDarkMode.js
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState<any>(true);
  const { systemTheme, theme, setTheme } = useTheme();

console.log("hit",theme)
  useEffect(() => {
    const darkModeClass = "dark";
    const root = window.document.documentElement;

    if (theme=="dark") {
      root.classList.add(darkModeClass);
    } else {
      root.classList.remove(darkModeClass);
    }
  }, [theme]);
  return [isDarkMode, setIsDarkMode];
};
export default useDarkMode;
