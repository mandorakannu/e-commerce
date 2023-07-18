import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    addProduct: (state: any, action: PayloadAction<any>) => {
      let product = state.find((item: any) => item.id === action.payload.id);
      if (product) {
        product.quantity++;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeProduct: (state: any, action: PayloadAction<any>) => {
      return state.filter((item: any) => item.id !== action.payload);
    },
  },
});

export const { addProduct, removeProduct } = counterSlice.actions;

export default counterSlice.reducer;
