import Avatar from "@/components/Avatar/page";
import { LightImage } from "@/components/Images/page";
import React from "react";

const ChatHeader = ({
  title,
  chatLoad,
}: {
  title?: string;
  chatLoad: boolean;
}) => {

  return (
    <div className="flex items-center border-b-2 border-black dark:border-white pb-5 mt-12">
      <div className="w-14 h-14 tablet:w-9 tablet:h-9">
        <Avatar
          path={"/images/sidebarIcons/botprofile.svg"}
          className="w-full h-full"
        />
      </div>
      <h3 className="text-black dark:text-white font-['Poppins'] ml-8 text-xl truncate tablet:ml-3 tablet:text-lg tablet:w-[calc(100%-50px)]">
        {chatLoad ? "..." : title || "Hi, How can i help you today"}
      </h3>
    </div>
  );
};
export default ChatHeader;
