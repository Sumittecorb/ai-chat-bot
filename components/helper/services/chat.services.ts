import { chatListSuccess, chatListFailure, noData, loadingStart } from "@/redux/features/chatSlice";
import { API_URL, VERSION } from "../ApiUrls";
import Http from "../HTTPRequest";

export const createSessionService = async (data?: any, _token?: any) => {
  // Params :
  // "title":"first messages",
  // "sessionId":"649ac176c7ab54d3a07f2bef"
  // * These params only use when we need a title

  let response = await Http.post(
    VERSION + API_URL.CREATE_CHAT_SESSION,
    data,
    _token
  );
  return response;
};

export const deleteSessionService = async (sessionId?: any, _token?: any) => {
  let response = await Http.get(
    VERSION + API_URL.DELETE_CHAT_SESSION+sessionId,
    _token
  );
  return response;
};

export const sendMessageService = async (data: any, _token?: any) => {
  let response = await Http.post(VERSION + API_URL.SEND_MESSAGE, data, _token);
  return response;
};
export const replyMessageService = async (data: any, _token?: any) => {
  // Params :
  // "reply":"reply change message",
  // "messageId": "649bdf79889665e7c17a77ff"
  let response = await Http.post(VERSION + API_URL.SEND_MESSAGE, data, _token);
  return response;
};




export const chatHistoryService = async (dispatch:any) => {
  dispatch(loadingStart())
  try {
  let response =await Http.get(VERSION+API_URL.CHAT_HISTORY );
    if (response.error) {
      throw response.error;
    }
    else if(response.code==200){
      dispatch(chatListSuccess(response.data));

    }
    else{
      dispatch(noData());

    }

  } catch (error) {
    dispatch(chatListFailure(error));
  }
};


export const messageChatHistoryService = async (data: any, _token?: any) => {
  let response = await Http.get(`${VERSION + API_URL.MESSAGE_HISTORY}?sessionId=${data}`, {}, _token);
  return response;
};
export const messageSendHistory = async (data: any, _token?: any) => {
  // Params :
  // "title":"first messages",
  // "sessionId":"649ac176c7ab54d3a07f2bef"
  // * These params only use when we need a title
  let response = await Http.get(VERSION + API_URL.SEND_MESSAGE, data, _token);
  return response;
};

// ********************* SEND MESSAGE SERVICE *********************

// ********************* SEND MESSAGE SERVICE *********************

export const countMessageService = async (data?: any, _token?: any) => {
  let response = await Http.get(VERSION + API_URL.MESSAGE_COUNT, {}, _token);
  return response;
};

// *******************   CHANGE PDF FORMATE ************************
export const userMessagePdfService = async (sessionId?: any, _token?: any) => {
  let response = await Http.get(
    VERSION + API_URL.MESSAGE_PDF+sessionId,
    _token
  );
  return response;
};

