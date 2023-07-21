import { setCookie, getCookie, getCookies, deleteCookie } from "cookies-next";

export const setCookies = (key: string, value: any, options?: any) => {
  setCookie(key, value, options);
};

export const getCook = (key: string, options?: any) => {
  return getCookie(key, options); // => 'value'
};
export const getAllCookies = (options?: any, key?: string) => {
  return getCookies(options); // => { 'name1': 'value1', name2: 'value2' }
};

export const deletCookies = (name: string, options?: any) => {
  deleteCookie(name, options);
};


