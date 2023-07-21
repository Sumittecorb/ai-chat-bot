"use client";
import ChatHistory from "@/pages/Dashboard/Chat/ChatHistory";
import ChatListHide from "@/pages/Dashboard/Chat/ChatListHide";
import ChatUserDetail from "@/pages/Dashboard/Chat/ChatUserDetail";
import NewChat from "@/pages/Dashboard/Chat/NewChat";
import Chat from "@/pages/Dashboard/Chat/page";
import { useAppSelector } from "@/redux/hooks";

const AIChat = () => {
  const chatListData = useAppSelector(
    (state) => state.chatHistoryReducer.chatList
  );

  return (
    <>
      <div className="relative rounded-xl w-[300px] overflow-auto mr-3 xl:block xl:peer-checked:hidden xl:w-[300px] xl:bg-transparent xl:mr-3 xl:static xl:p-0 md:p-3 md:absolute left-0 md:bg-white dark:md:bg-black md:z-10 md:top-16 md:hidden md:peer-checked:block mobileView:absolute mobileView:bg-white dark:mobileView:bg-black mobileView:z-10 mobileView:top-16 mobileView:hidden mobileView:peer-checked:block mobileView:p-3 mobileView:w-[275px] ">
        <div className="h-[calc(100vh-230px)] xl:h-[calc(100vh-230px)] md:h-[calc(100vh-300px)] mobileView:h-[calc(100vh-300px)] overflow-auto p-3">
          <NewChat />
          <ChatHistory chatListData={chatListData} />
        </div>
        <ChatUserDetail />
      </div>
      <div className="w-[calc(100%-315px)] xl:w-[calc(100%-315px)] md:w-full mobileView:w-full h-screen relative peer-checked:w-full pl-14 tablet:pl-0 tablet:pt-16">
        <ChatListHide />
        <Chat />
      </div>
    </>
  );
};
export default AIChat;
