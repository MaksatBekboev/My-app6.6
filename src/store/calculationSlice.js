import { createSlice } from "@reduxjs/toolkit";

const calculationSlice = createSlice({
  name: "calculation",
  initialState: {
    num1: "",
    num2: "",
    result: "",
  },
  reducers: {
    setNum1: (state, action) => {
      state.num1 = action.payload;
    },
    setNum2: (state, action) => {
      state.num2 = action.payload;
    },
    setResult: (state, action) => {
      state.result = action.payload;
    },
  },
});

export const { setNum1, setNum2, setResult } = calculationSlice.actions;

export default calculationSlice.reducer;
