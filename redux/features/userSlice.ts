import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  value: number;
};

const initialState = {
  value: 0,
} as UserState;

export const counter = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: () => initialState,
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    
  },
});

export const {
  increment,
  incrementByAmount,
  decrement,
  reset,
} = counter.actions;
export default counter.reducer;
