'use client'

import Avatar from "@/components/Avatar/page";
import Button from "@/components/Button/page";
import { createSessionService } from "@/components/helper/services/chat.services";
import { ChatSession } from "@/typescript/interface/chat.interface";
import { useRouter } from "next/navigation";
import React from "react";

const InitialChat = () => {
  const { push } = useRouter();

  const createChatSession = async () => {
    let chatSession: ChatSession = await createSessionService();
    if (chatSession.code === 201) {
      push(`/chat/${chatSession.data.sessionId}`);
    }
  };
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="w-80 h-80 text-center tablet:h-72 tablet:w-72 mobileView:w-64 mobileView:h-64">
          <Avatar
            path={"/images/assistantrobot.svg"}
            className="w-full h-full object-cover"
          />
          <div className="flex items-center justify-center">
            <Avatar
              path={"/images/aichatbottext.svg"}
              className="w-auto h-auto object-cover"
            />
          </div>
          <div className="justify-center flex">
            <Button
              className={
                " bg-white dark:bg-gradient-to-r from-[#33ceb8] to-[#ace540] mt-12 flex items-center justify-center font-semibold text-black dark:text-white border border-[#ccc] dark:border-white w-full h-20 p-3 rounded-tl-[9px] rounded-tr-[9px] rounded-xl dark:m-[-1px] dark:border-1"
              }
              text="CHAT NOW"
              onClick={createChatSession}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default InitialChat;
