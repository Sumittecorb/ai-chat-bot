import Avatar from "@/components/Avatar/page";
import { ImagePath, LightImage } from "@/components/Images/page";
import React from "react";

const ChatListHide = () => {
  return (
    <label
    htmlFor="menuOpen"
    id="mobile-menu-button"
    className="cursor-pointer absolute top-0 left-0 bg-white dark:bg-[#2f2b2b] p-3 rounded-xl"
  >
    <img
      src={LightImage.whiteCahtMenu}
      id="openIcon"
      className="h-6 w-6"
    />
  </label>
  );
};
export default ChatListHide;
