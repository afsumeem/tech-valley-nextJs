import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: {},
};

const pcBuilderSlice = createSlice({
  name: "PCBuilder",
  initialState,
  reducers: {
    //
  },
});

export const { addProduct, removeProduct } = pcBuilderSlice.actions;

export default pcBuilderSlice.reducer;
