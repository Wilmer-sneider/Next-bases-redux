import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    countR: 1,
  },
  reducers: {
    increment: (state /* action */) => {
      state.countR += 1;
    },
    decrement: (state /* action */) => {
      state.countR -= 1;
    },
    reset: (state /* action */) => {
      state.countR = 0;
    },
    incrementByAmount: (state, action) => {
      state.countR += action.payload;
    },
  },
});

export const { increment, decrement, reset, incrementByAmount } =
  counterSlice.actions;
export default counterSlice.reducer;
