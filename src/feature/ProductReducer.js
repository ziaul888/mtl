import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { reactLocalStorage } from "reactjs-localstorage";
import axiosInstance from "../helper/axios";

const initialState = {
  loading: false,
  products: [],
  productContainer: [],
  error: "",
};
export const getProducts = createAsyncThunk("products/getProducts", () => {
  return axiosInstance.get("/products").then(({ data }) => data);
});
const productReducer = createSlice({
  name: "productsReducer",
  initialState,

  reducers: {
    productSearch: (state, { payload }) => {
      state.products = state.productContainer.filter((pro) =>
        pro.name.toLowerCase().includes(payload)
      );
      console.log(productSearch);
    },
    // filterCategory: (state, { payload }) => {
    //   state.products=state.productContainer.filter(( ))
    // },
  },

  extraReducers: {
    [getProducts.pending]: (state) => {
      state.loading = true;
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      console.log("payload", payload);
      state.loading = false;
      state.products = payload;
      state.productContainer = payload;
      state.error = "";
      return state;
    },
    [getProducts.rejected]: (state, { payload }) => {
      state.loading = true;
      state.products = [];
      state.productContainer = payload;
      state.error = payload.error.message;
    },
  },
});
export const { productSearch } = productReducer.actions;
export default productReducer.reducer;
