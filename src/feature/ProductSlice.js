import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { reactLocalStorage } from "reactjs-localstorage";
import axiosInstance from "../helper/axios";

const initialState = {
  loading: false,
  products: [],
  error: "",
};
export const getProducts = createAsyncThunk("products/getProducts", () => {
  return axiosInstance.get("/products").then((res) => console.log(res.data));
});
const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: {
    [getProducts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.products = payload;
      state.error = "";
      return state;
    },
    [getProducts.rejected]: (state, { payload }) => {
      console.log("payload", payload);
      state.loading = true;
      state.products = [];
      state.error = payload.error.message;
    },
    [getProducts.pending]: (state) => {
      state.loading = true;
    },
  },
});

export default productSlice.reducer;
