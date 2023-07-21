import { API_URL, VERSION } from "../ApiUrls";
import Http from "../HTTPRequest";



// ********************* SEND MESSAGE SERVICE *********************

export const sendMessageService = async (data: any, _token?: any) => {
  let response = await Http.post(VERSION+API_URL.SEND_MESSAGE,data,_token);
  return response;
};

// ********************* SEND MESSAGE SERVICE *********************

export const countMessageService = async (data: any, _token?: any) => {
  let response = await Http.get(VERSION+API_URL.MESSAGE_COUNT,{},_token);
  return response;
};