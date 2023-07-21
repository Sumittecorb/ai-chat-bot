import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from '../store'

const initialState = {
  loading: false,
  error: null,
  chatList: [],
  noDataOnloadMore:true
};

export const chatData = createSlice({
  name: "chatHistory",
  initialState: initialState,
  reducers: {
    loadingStart: (state) => {
      state.loading = true;
    },
    chatListSuccess: (state, action) => {
      state.loading = false;
      state.chatList =  action.payload;
    },
    chatListFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    
    noData : (state) =>{
      return{
        ...state,
        loading : false,
        noDataOnloadMore:false

      }

    }
    
  },
});

export default chatData.reducer;
export const chatHistory = (state: RootState) => state.chatHistoryReducer

export const { loadingStart, chatListSuccess, chatListFailure,noData } =
chatData.actions;


