// New version of redux-react using RTK reduxToolKit
import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./features/cart/cartSlice";
import  productSlice  from "./features/products/productSlice";
export const store = configureStore({
    //call reducers from cartSlice
    reducer: {
        cart: cartSlice.reducer,
        products: productSlice
    }
});