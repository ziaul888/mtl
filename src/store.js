import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./feature/ProductSlice";
import cartReducer from "./feature/cartSilce";
export default configureStore({
  reducer: {
    products: productReducer,
    carts: cartReducer,
  },
});
