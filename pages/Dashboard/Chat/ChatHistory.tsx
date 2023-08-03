"use client";
import Avatar from "@/components/Avatar/page";
import { deleteSessionService } from "@/components/helper/services/chat.services";
import { ImagePath, LightImage } from "@/components/Images/page";
import {
  ChatHistoryData,
  ChatHistoryUpdateData,
} from "@/typescript/interface/chat.interface";
import { formattedDate } from "@/utils/methods/page";
import { useRouter } from "next/navigation";
import React, { FC, Fragment, useEffect, useMemo, useState } from "react";
import { date } from "yup";
interface ChatData {
  chatListData: any;
}
const ChatHistory: FC<ChatData> = ({ chatListData }) => {
  const [chathistoryFormat, setChatHistoryFormat] = useState<
    ChatHistoryUpdateData[]
  >([]);
  const { push } = useRouter();
  //  useEffect(() => {
  //     chatHistoryService(dispatch);
  //   }, []);
  const chatHistoryList = async () => {
    // let chatHistory: ChatHistory = await chatHistoryService();
    // if ((chatHistory.code = 200)) {
    //   setHistory(chatHistory.data);
    //   const formattedData = chatHistory.data.reduce((acc: any, obj) => {
    //     const date = formattedDate(obj.date);
    //     if (!acc[date]) {
    //       acc[date] = {
    //         date,
    //         newData: [],
    //       };
    //     }
    //     acc[date].newData.push(obj);
    //     return acc;
    //   }, {});
    //   const result: ChatHistoryUpdateData[] = Object.values(formattedData);
    //   setChatHistoryFormat(result);
    // }
  };
  const formattedData = () => {
    const formattedData =
      chatListData &&
      chatListData?.reduce((acc: any, obj: any) => {
        const date = formattedDate(obj.date);
        if (!acc[date]) {
          acc[date] = {
            date,
            newData: [],
          };
        }
        acc[date].newData.push(obj);

        return acc;
      }, {});

    const result: ChatHistoryUpdateData[] = Object.values(formattedData);
    return result;
  };
  const deleteSession = async (_id: string) => {
    const deleteChatSession = await deleteSessionService(_id);
    const result = chathistoryFormat.map((chatData) => {
      return {
        ...chatData,
        newData: chatData.newData.filter((data) => data._id !== _id),
        date: chatData.newData.some((data) => data._id === _id) ? "" : chatData.date
      };
    });
    if (deleteChatSession.code === 200) {
      setChatHistoryFormat(result);
    }
  };
  // const chatMemoData = (formattedData:any) => {
  //   setChatHistoryFormat(Object.values(formattedData()))
  //   };

  // useMemo(() => chatMemoData(formattedData), [chatListData])
  useEffect(() => {
    if (chatListData) {
      setChatHistoryFormat(Object.values(formattedData()));
    }
  }, [chatListData]);
  return (
    <Fragment>
      {chathistoryFormat.map((_data: ChatHistoryUpdateData) => {
        const { date, newData } = _data;
        return (
          <div className="py-3">
            <h2 className="text-black dark:text-[#807474] mb-2 font-['Poppins'] tablet:text-sm">
              {date}
            </h2>
            {newData.map((_chatData: ChatHistoryData) => {
              const { _id, title } = _chatData;
              if (!title) return null;
              return (
                <button className="bg-white dark:bg-[#2f2b2b] mt-5 text-black dark:text-white font-medium font-['Poppins'] w-full flex items-center justify-between h-14 px-3 rounded-xl tablet:px-3 tablet:h-10">
                  <div
                    className="flex items-center"
                    onClick={() => push(`/chat/${_id}`)}
                  >
                    <Avatar
                      path={LightImage.whiteChat}
                      className="mr-3 w-7 tablet:w-4"
                    />
                    <span className="truncate tablet:text-sm">{title}</span>
                  </div>
                  <Avatar
                    path={ImagePath.DeleteIcon}
                    className="w-5 tablet:w-4"
                    onClick={() => {
                      deleteSession(_id);
                    }}
                  />
                </button>
              );
            })}
          </div>
        );
      })}
    </Fragment>
  );
};
export default ChatHistory;
