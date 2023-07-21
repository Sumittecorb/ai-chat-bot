'use client'
import Avatar from "@/components/Avatar/page";
import { createSessionService } from "@/components/helper/services/chat.services";
import { ChatSession } from "@/typescript/interface/chat.interface";
import { useRouter } from "next/navigation";
import React from "react";

const NewChat = () => {
  const { push } = useRouter();
  const createChatSession = async () => {
    let chatSession: ChatSession = await createSessionService();
    if (chatSession.code === 201) {
      push(`/chat/${chatSession.data.sessionId}`);
    }
  };
  return (
    <button
      onClick={createChatSession}
      type="button"
      className="bg-white dark:bg-[#2f2b2b] border-2 border-[#ccc] dark:border[#2f2b2b] dark:border-none text-black dark:text-white font-medium font-['Poppins'] w-full flex items-center h-14 px-5 rounded-xl tablet:h-10 tablet:px-3"
    >
      <Avatar path={"/images/addicon.svg"} className="mr-3 w-7 tablet:w-4" />
      <span className="truncate tablet:text-[14px]">New Chat</span>
    </button>
  );
};
export default NewChat;
