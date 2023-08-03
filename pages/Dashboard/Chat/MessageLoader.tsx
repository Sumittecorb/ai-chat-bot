'use client'

import Avatar from "@/components/Avatar/page";
import React from "react";

const MessageLoading = () => {
  return (
    <div className="flex justify-start mt-3">
      <div className="w-14 h-14 tablet:w-9 tablet:h-9">
        <Avatar
          path={"/images/sidebarIcons/botprofile.svg"}
          className="w-full h-full"
        />
      </div>
      <div className="flex items-center">
        <div className="bg-black dark:bg-white p-2  w-4 h-4 rounded-full animate-bounce red-circle"></div>
        <div className="bg-black dark:bg-white mx-3 w-3 h-3 rounded-full animate-bounce green-circle"></div>
        <div className="bg-black dark:bg-white w-2 h-2 rounded-full animate-bounce blue-circle"></div>
      </div>
    </div>
  );
};
export default MessageLoading;
