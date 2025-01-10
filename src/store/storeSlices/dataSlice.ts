import { createSlice } from "@reduxjs/toolkit";
import { data } from "@/data/db";

const initialState = data;

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    dataDb: (state /* action */) => {
      return state;
    },
  },
});

export const { dataDb } = dataSlice.actions;
export default dataSlice.reducer;
