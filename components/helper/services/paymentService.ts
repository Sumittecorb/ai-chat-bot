import { API_URL, VERSION } from "../ApiUrls";
import Http from "../HTTPRequest";

// ********************* CUSTOMER SOURSE SERVICE *********************

export const customerSourceService = async ( data:any,_token?: any,) => {
  let response = await Http.post(VERSION+API_URL.CUSTOMER_SOURCE,data,_token);
  return response;
};

// ********************* CUSTOMER PAYMENT INTENT SERVICE *********************

export const customerPaymentIntentService = async ( data:any,_token?: string,) => {
    let response = await Http.post(VERSION+API_URL.PAYMENT_INTENT,data,_token);
    return response;
  };

// *********************  PAYMENT LIST SERVICE *********************

export const paymentListService = async ( customerId:any,_token?: any,) => {
    let response = await Http.get(VERSION+API_URL.PAYMENT_LIST+customerId,_token);
    return response;
  };