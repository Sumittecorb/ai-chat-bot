'use client'
import Avatar from "@/components/Avatar/page";
import { DarkImage, ImagePath, LightImage } from "@/components/Images/page";
import { useTheme } from "next-themes";
import React from "react";

const ChatListHide = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  return (
    <label
      htmlFor="menuOpen"
      id="mobile-menu-button"
      className="cursor-pointer absolute top-0 left-0 bg-white dark:bg-[#2f2b2b] p-3 rounded-xl"
    >
      {theme === "light" && (
        <img
        src={DarkImage.darkChatMenu}
        id="openIcon"
        className="h-6 w-6"
      />
      )}
      {theme === "dark" && ( 
      <img
        src={LightImage.whiteCahtMenu}
        id="openIcon"
        className="h-6 w-6"
      />
      )}{" "}
     
    </label>
  );
};
export default ChatListHide;
