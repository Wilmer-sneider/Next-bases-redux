import { createSlice } from "@reduxjs/toolkit";

export const OtherSlice = createSlice({
  name: "otherSlice",
  initialState: {
    count: 1,
  },
  reducers: {
    incrementOther: (state /* action */) => {
      state.count += 1;
    },
    decrementOther: (state /* action */) => {
      state.count -= 1;
    },
  },
});

export const { incrementOther, decrementOther } = OtherSlice.actions;
export default OtherSlice.reducer;
