// utils/useDarkMode.js
import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState<any>(true);

  useEffect(() => {
    const darkModeClass = "dark";
    const root = window.document.documentElement;

    if (isDarkMode) {
      root.classList.add(darkModeClass);
    } else {
      root.classList.remove(darkModeClass);
    }
  }, [isDarkMode]);
  return [isDarkMode, setIsDarkMode];
};
export default useDarkMode;
