import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: {},
};

const pcBuilderSlice = createSlice({
  name: "pcBuilder",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const { category, product } = action.payload;

      state.products[category] = [...(state.products[category] || []), product];
    },
    removeProduct: (state, action) => {
      const { category, productId } = action.payload;
      state.products[category] = state.products[category].filter(
        (product) => product.id !== productId
      );
    },
  },
});

export const { addProduct, removeProduct } = pcBuilderSlice.actions;

export default pcBuilderSlice.reducer;
