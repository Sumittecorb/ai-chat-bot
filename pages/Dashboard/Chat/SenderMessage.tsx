'use client'

import Avatar from "@/components/Avatar/page";
import React from "react";

const SenderMessage = ({ message }: { message: string }) => {
  return (
    <div className="flex justify-end mt-3">
      <p className="text-right pr-5 tablet:pr-3 tablet:w-[calc(100%-48px)] text-black dark:text-white  font-['Poppins'] w-[calc(100%-85px)] tablet:text-[14px]">
        {message}
      </p>
     
      <div className="w-14 h-14 tablet:w-9 tablet:h-9">
        <Avatar
          path={"/images/sidebarIcons/botprofile.svg"}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};
export default SenderMessage;
