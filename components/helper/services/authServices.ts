import { API_URL, VERSION } from "../ApiUrls";
import Http from "../HTTPRequest";

// ********************* LOGIN SERVICE *********************



export const loginService = async (data: any, _token?: any) => {
  // requestParams : { email !required, password !required, guest_token !required-}
  let response = await Http.post(
      VERSION+API_URL.LOGIN,
    data,
  );
  return response;
};

// ********************* CHECK USER SERVICE *********************

export const CheckUserService = async (data: any, _token?: any) => {
  let response = await Http.post(
    VERSION+API_URL.CHECK_ACCOUNT,
    data,
  );
  return response;
};

// ********************* SIGNUP SERVICE *********************

export const signUpService = async (data: any, _token?: any) => {
  let response = await Http.post(
    VERSION+API_URL.SIGNUP,
    data,
  );
  return response;
};




// ********************* LOGOUT SERVICE *********************

export const logoutService = async () => {
  let response = Http.get(VERSION + API_URL.LOGOUT, {});
  return response;
};

