'use client'
import Avatar from "@/components/Avatar/page";
import { DarkImage, ImagePath, LightImage } from "@/components/Images/page";
import { UserContext } from "@/components/context";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import React from "react";

const ChatUserDetail = () => {
  let userData: any = UserContext();
  const { systemTheme, theme, setTheme } = useTheme();
  const { push } = useRouter();
  return (
    // <div className="absolute bg-gradient-to-t from-[#202708] to-[#171717] w-[300px] xl:w-[300px] md:w-[275px] mobileView:w-[250px] mr-3 bottom-2 border-t-2 border-white">
    <div className="pb-3 border-t-2 border-white dark:border-[#ccc]">
      <button className="text-black dark:text-white mt-3 font-medium font-['Poppins'] w-full flex items-center justify-between px-5 rounded-xl tablet:px-3">
        <div className="flex items-center" onClick={() => { push("/subscription") }}>
          <Avatar path={(theme === "light" ? DarkImage.darkUser : LightImage.whiteUserIcon)} className="mr-3 w-4 tablet:w-4" />
          <span className="truncate tablet:text-sm">Upgrade to Plus</span>
        </div>
      </button>
      <button className="text-black dark:text-white mt-3 font-medium font-['Poppins'] w-full flex items-center justify-between px-5 rounded-xl tablet:px-3">
        <div className="flex items-center">
          <Avatar path={(theme === "light" ? DarkImage.darkUser : LightImage.whiteUserIcon)} className="mr-3 w-4 tablet:w-4" />
          <span className="truncate tablet:text-sm">{userData.userData?.name}</span>
        </div>
      </button>
    </div>
    // </div>
  );
};
export default ChatUserDetail;
