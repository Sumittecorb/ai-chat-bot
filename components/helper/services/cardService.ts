import { API_URL, VERSION } from "../ApiUrls";
import Http from "../HTTPRequest";

// ********************* ADD CARD SERVICE *********************

export const customerSourceService = async (data: any, _token?: any) => {
  let response = await Http.post(
    VERSION + API_URL.CUSTOMER_SOURCE,
    data,
    _token
  );
  return response;
};

// ********************* DELETE CARD SERVICE *********************

export const cardDeleteService = async (
  data: any,
  _token?: string
) => {
  let response = await Http.post(
    VERSION + API_URL.DELETE_CARD,
    data,
    _token
  );
  return response;
};

// *********************  PAYMENT LIST SERVICE *********************

export const cardListService = async (_token?: any) => {
  let response = await Http.get(VERSION + API_URL.CARD_LIST, {}, _token);
  return response;
};
