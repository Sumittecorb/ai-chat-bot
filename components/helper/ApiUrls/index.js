export const VERSION = "/api/v1/";


export const BASE_URL = process.env.RESTURL_SESSIONS.BASE_URL
export const STRIPE_KEY = process.env.RESTURL_SESSIONS.STRIPE_KEY
export const REDIRECT_URL = process.env.RESTURL_SESSIONS.REDIRECT_URL


export const API_URL = {

  // -------  Auth -------
  SIGNUP: "user/auth/signup",
  LOGIN: "user/auth/login",
  CHECK_ACCOUNT: "user/auth/check-account",
  GET_PROFILE: "user/auth/get",
  UPDATE_PROFILE:"user/auth/update",
  LOGOUT:"user/auth/logout",

  // -------------- SUBSCRIPTION ---------------
  SUBSCRIPTION:"user/auth/subscription",

  // ---------------- PAYMENT API ------------------
  CUSTOMER_SOURCE:"user/payment/customer-source",
  PAYMENT_INTENT:"user/payment/customer-payment",
  PAYMENT_LIST:"user/payment/payment-history?customerId=",

    // ---------------- CARD API ------------------
   CARD_LIST:"user/payment/card-list",
   DELETE_CARD:"user/payment/card-delete",
   
  // ------------------ MESSAGES API ---------------
  SEND_MESSAGE : "user/message/send",
  REPLY_MESSAGE : "user/message/send",

  MESSAGE_COUNT : "user/message/count",
  CREATE_CHAT_SESSION:"user/message/session",
  CHAT_HISTORY:"user/message/chat-history",
  MESSAGE_HISTORY:"user/message/message-history"
  
};


