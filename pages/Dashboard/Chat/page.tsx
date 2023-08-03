"use client";
import Avatar from "@/components/Avatar/page";
import { UserContext } from "@/components/context";
import {
  chatHistoryService,
  countMessageService,
  createSessionService,
  messageChatHistoryService,
  sendMessageService,
} from "@/components/helper/services/chat.services";
import Input from "@/components/Input/page";
import {
  ChatData,
  // ChatHistory,
  SendMessage,
} from "@/typescript/interface/chat.interface";
import { chatCompletion } from "@/utils/api";
import { useParams } from "next/navigation";
import DownLoadModal from "@/components/Modal/downloadModal";
import React, {
  Fragment,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import ChatHeader from "./Header";
import MessageLoading from "./MessageLoader";
import RecieveMessage from "./RecieverMessage";
import SenderMessage from "./SenderMessage";
import { LightImage } from "@/components/Images/page";
const messageType = {
  answer: "answer",
  question: "question",
};

const Chat = () => {
  const chatWrapperRef: any = useRef();
  const messagesEndRef: any = useRef();

  const [onRequest, setOnRequest] = useState(false);
  const [chatLoad, setChatLoad] = useState(false);
  const [onMsgCount, setOnMsgCount] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<any>([]);
  const [updatedMessages, setUpdatedMessages] = useState<any>([]);
  const [updatedMessagesData, setUpdatedMessagesData] = useState<any>({
    message: "",
    reply: "",
  });

  const params: any = useParams();

  const messageChatHistoryList = async () => {
    setChatLoad(true);
    let chatHistory: ChatData = await messageChatHistoryService(params.slug);
    setMessages(chatHistory.data);
    setChatLoad(false);
  };
  let userData: any = UserContext();
  let contextMode: any = UserContext();

  const checkCounts = async () => {
    let countValidation: any = await countMessageService();
    if (countValidation?.response?.data?.code === 401) {
      getAnswer();
    } else if (countValidation?.code === 200 && countValidation.data == 10) {
      getAnswer();
      setOnMsgCount(true);
    } else {
      if (
        contextMode.isSubscription &&
        userData?.userData?.perDayMessageCount < 10
      ) {
        getAnswer();
      } else if (
        countValidation.data < 10 &&
        !userData?.userData?.subscription
      ) {
        getAnswer();
      } else {
        setOnRequest(true);
      }
    }
  };
  useEffect(() => {
    if (
      !contextMode.isSubscription &&
      userData?.userData?.perDayMessageCount >= 10
    ) {
      setOnMsgCount(true);
    }
  }, [userData]);

  const getAnswer = async () => {
    if (onRequest) return;
    const newMessages: any = [
      ...updatedMessages,
      {
        message: question,
      },
    ];

    // setUpdatedMessagesData([...messages, { message: question }]);

    let senderData = {
      sessionId: params?.slug,
      title: question,
    };
    let senderMessageData = {
      sessionId: params?.slug,
      message: question,
    };

    if (messages.length <= 0) {
      let chatSession: any = await createSessionService(senderData);
    }

    let messageSended: SendMessage = await sendMessageService(
      senderMessageData
    );

    // setUpdatedMessages(newMessages);
    setQuestion("");
    setOnRequest(true);
    const response: any = await chatCompletion(question);
    if (response) {
      let replyMessageData = {
        messageId: messageSended?.data._id,
        reply: response,
      };
      let replyMessage: SendMessage = await sendMessageService(
        replyMessageData
      );
      setUpdatedMessagesData({
        message: question,
        reply: response,
      });
      setUpdatedMessages([
        ...updatedMessages,
        {
          message: question,
          reply: response,
        },
      ]);
      setOnRequest(false);
    }
    let err: any = "";
    if (err) {
      // toast.error(err.message);
      setOnRequest(false);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      chatWrapperRef?.current?.addEventListener("DOMNodeInserted", (e: any) => {
        e.currentTarget.scroll({
          top: e.currentTarget.scrollHeight,
          behavior: "smooth",
        });
      });
    }, 200);
    messageChatHistoryList();
  }, []);

  useMemo(() => {
    const transformedResponse: any = [];
    // if (updatedMessagesData?.message || updatedMessagesData?.reply) {
    setMessages([...messages, updatedMessagesData]);

    // updatedMessages.forEach((element: any) => {
    // }
    //   if (updatedMessages[0]?.message && updatedMessages[1]?.reply) {
    //     const transformedElement = {
    //       message: updatedMessages[0].message ? updatedMessages[0].message : "",
    //       reply: updatedMessages[1].reply ? updatedMessages[1].reply : "",
    //     };
    //     setMessages([...messages, transformedElement]);
    //     setUpdatedMessages([]);
    //   }
    // });
  }, [updatedMessagesData]);
  useEffect(() => {
    scrollToBottom();
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };
  const convertToCsv = () => {
    const keys = Object.keys(messages[0]);
    const replacer = (_key: any, value: any) => (value === null ? "" : value);
    const processRow = (row: any) =>
      keys.map((key) => JSON.stringify(row[key], replacer)).join(",");
    let data = [keys.join(","), ...messages.map(processRow)].join("\r\n");
    console.log(data);
    downloadFile(data);
    return data;
  };

  const downloadFile = (data: any) => {
    var link = document.createElement("a");
    link.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(data)
    );
    link.setAttribute("download", "data.txt");
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Fragment>
      <button
        onClick={() => {
          setIsOpen(true);
        }}
        className="ml-3 mt-14 mr-8 float-right"
      >
        <Avatar
          path={LightImage.whiteDownloadIcon}
          className="w-7 tablet:w-4"
        />
      </button>
      <DownLoadModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        messages={messages}
      />
      {onMsgCount && (
        <span className="text-dark-secondary relative bottom-6">
          Pls take subscription for more benefits
        </span>
      )}
      <ChatHeader
        title={messages?.length > 0 && messages[0]?.message}
        chatLoad={chatLoad}
      />
      <div
        ref={chatWrapperRef}
        className=" mt-3 tablet:mt-3 pb-12 w-full h-[calc(100vh-295px)] tablet:h-[calc(100vh-310px)] mobile:h-[calc(100vh-345px)] xss:h-[calc(100vh-330px)] overflow-auto"
      >
        {messages?.map((item: any, index: number) => {
          const { message, reply } = item;
          return (
            <Fragment>
              {message && <SenderMessage message={message} />}
              {reply && <RecieveMessage message={reply.trimStart()} />}
            </Fragment>
          );
        })}
        {/* {messages.map((item: any, index: number) => (
          <Fragment>
            {item.type === messageType.answer ? (
              <RecieveMessage message={item.content} />
            ) : (
              <SenderMessage message={item.content} />
            )}
          </Fragment>
        ))} */}
        {onRequest && <MessageLoading />}
      </div>
      <div className="flex items-center w-[-webkit-fill-available] fixed bottom-3 pr-6">
        <div className="border border-black dark:border-white pb-1 rounded-xl w-[calc(100%-60px)]">
          <Input
            type="text"
            placeholder="Send Message"
            name="question"
            value={question}
            className={
              "bg-black focus:outline-none dark:bg-white text-white dark:text-black font-['Poppins'] border border-black dark:border-white w-full p-3 rounded-tl-[9px] rounded-tr-[9px] rounded-xl dark:m-[-1px] dark:border-1"
            }
            onChange={(e: any) => setQuestion(e.target.value)}
            disabled={onRequest}
            readOnly={onMsgCount || onRequest}
          />
        </div>
        <button
          disabled={onMsgCount || onRequest}
          onClick={() => checkCounts()}
          className="w-14 ml-1"
        >
          <Avatar path={"/images/sendbtn.svg"} />
        </button>
      </div>
    </Fragment>
  );
};
export default Chat;
