import { createSlice } from "@reduxjs/toolkit";

export const SomeSlice = createSlice({
  name: "SomeSlice",
  initialState: {
    counter: 10,
  },
  reducers: {
    increment: (state /* action */) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
  },
});

export const { increment, decrement } = SomeSlice.actions;
export default SomeSlice.reducer;
