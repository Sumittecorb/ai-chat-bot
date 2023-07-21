import axios from "axios";
import { BASE_URL, TokenKeys, VERSION } from "./ApiUrls";
import { SESSION_TOKEN } from "../common/constant";
import { getCook } from "./cookies_setup";

export default class Http {
  static axios = axios.create({
    baseURL: BASE_URL, //base url enter here
    headers: {
      "Content-Type": "application/json",
      Authorization: getCook(SESSION_TOKEN),
      deviceType: "web",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  });

  static logout = () => {};

  static getToken = async (token) => {
    if (token) {
      return {
        deviceType: "web",
        Authorization: token || "",
      };
    }
  };

  static async get(url, body, _token) {
    var errorData;
    try {
      const token = await Http.getToken(_token);
      const _body = body ? body : {};
      const latestConfig = token
        ? { headers: _token ? token : body, params: _body }
        : "";
      const { data } = await Http.axios.get(url, latestConfig);
      return data;
    } catch (err) {
      Http.handleErrors(err);
      errorData = err;
      return errorData;
    }
  }

  static async post(url, body, _token, _gtoken, config = "") {
    var errorData;
    try {
      const token = await Http.getToken(_token, _gtoken);
      const latestConfig = token ? { headers: token } : config;
      const { data } = await Http.axios.post(url, body, latestConfig);
      errorData = data;
    } catch (err) {
      Http.handleErrors(err);
      // errorData= Promise.reject(err);
      errorData = err;
    }
    return errorData;
  }

  static async put(url, body, _token, _gtoken, config = "") {
    var errorData;
    try {
      const token = await Http.getToken(_token, _gtoken);
      const latestConfig = token ? { headers: token } : config;
      const { data } = await Http.axios.put(url, body, latestConfig);
      errorData = data;
    } catch (err) {
      Http.handleErrors(err);
      // errorData= Promise.reject(err);
      errorData = err;
    }
    return errorData;
  }

  static async patch(url, body, config = AxiosRequestConfig) {
    try {
      const token = await Http.getToken();
      const latestConfig = token ? { headers: token } : config;
      const response = await Http.axios.patch(url, body, latestConfig);
      if (response) {
        return response.data;
      }
    } catch (err) {
      return Promise.reject(err);
    }
  }

  static async delete(url, body, config = "") {
    try {
      const token = await Http.getToken();
      const latestConfig = token ? { headers: token } : config;
      const response = await Http.axios.delete(url, body, latestConfig);
      if (response.data.code === 123) {
        return response.data;
      } else if (response.data.code === 345) {
        localStorage.clear();
        return response.data;
      } else if (response.data.code === 400) {
        localStorage.clear();
        return response.data;
      } else {
        return response.data;
      }
    } catch (err) {
      return Promise.reject(err);
    }
  }

  static handleErrors(error) {
    if (error.response) {
      const message = error.response.data && error.response.data?.message;
      const errorMessage = message
        ? message
        : "Something Went Wrong, Please Try Again";
      //   if (Platform.OS === "android") {
      //     ToastAndroid.show(errorMessage, ToastAndroid.LONG);
      //   } else {
      //     Alert.alert("Error", errorMessage);
      //   }
      // } else {
      //   if (Platform.OS === "android") {
      //     ToastAndroid.show("Something Went Wrong", ToastAndroid.LONG);
      //   } else {
      //     Alert.alert("Something Went Wrong");
      //   }
    }
  }
}
