


import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import chatHistoryReducer from "./features/chatSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import subscriptionReducer from './features/subscriptionSlice'
export const store = configureStore({
  reducer: {
    chatHistoryReducer,
    userReducer,
    subscriptionReducer
  },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
