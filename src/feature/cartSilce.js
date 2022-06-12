import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: [],
  total: "",
  quantity: 1,
};

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addToCart(state, action) {
      if (!state.cartItem.find((item) => item.id === action.payload.id)) {
        state.cartItem.push({
          ...action.payload,
          quantity: state.quantity,
        });
      }
      //   return {
      //     cartItem: [...state.cartItem],
      //   };
    },
    removeItem(state, action) {
      return state.cartItem.filter((item) => item.id !== action.payload);
    },
  },
});
export const { addToCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
