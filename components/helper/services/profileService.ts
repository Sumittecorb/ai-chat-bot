
import { API_URL, VERSION } from "../ApiUrls";
import Http from "../HTTPRequest";

// ********************* GET PROFILE SERVICE *********************

export const profileService = async (data: any, _token?: any) => {
    let response = await Http.get(
      VERSION+API_URL.GET_PROFILE,
      {},
      _token
    );
    return response;
  };

// ********************* GET PROFILE SERVICE *********************

export const updateProfileService = async (data: any, _token?: any) => {
    let response = await Http.put(
      VERSION+API_URL.UPDATE_PROFILE,
      data,
      _token
    );
    return response;
  };