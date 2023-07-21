import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from '../store'

const initialState = {
  loading: false,
  error: null,
  data: {},
  noDataOnloadMore:true
};

export const subscriptionData = createSlice({
  name: "subscription",
  initialState: initialState,
  reducers: {
    loadingStart: (state) => {
      state.loading = true;
    },
    chatListSuccess: (state, action) => {
      state.loading = false;
      state.data =  action.payload;
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

export default subscriptionData.reducer;
export const subscription = (state: RootState) => state.subscriptionReducer

export const { loadingStart, chatListSuccess, chatListFailure,noData } =
subscriptionData.actions;


