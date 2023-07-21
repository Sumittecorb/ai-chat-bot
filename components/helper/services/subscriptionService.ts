import { API_URL, VERSION } from "../ApiUrls";
import Http from "../HTTPRequest";

// ********************* SUBSCRIPTION SERVICE *********************



export const subscriptionService = async ( data:any,_token?: any,) => {
  let response = await Http.post(VERSION+API_URL.SUBSCRIPTION,data,_token);
  return response;
};