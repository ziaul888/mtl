import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./feature/ProductReducer";
import cartReducer from "./feature/cartReducer";
export default configureStore({
  reducer: {
    products: productReducer,
    carts: cartReducer,
  },
});
