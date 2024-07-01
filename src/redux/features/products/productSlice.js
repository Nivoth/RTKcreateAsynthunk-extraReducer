import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../api/index";
export const initialState = {
  products: [],
  singleProduct: {},//single product
  status: "idle", //idle [loading, success, error]
  error: null,
};

//create createAsyncThunk to fetch data from the api
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch(`${BASE_URL}products`);
    const data = await response.json();
    //console.log("data", data);
    return data;
  }
);
//get product by id
export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (id) => {
    const response = await fetch(`${BASE_URL}products/${id}`);
    const data = await response.json();
    return data;
  }
);
//create reducer and actions
export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers(builder) {
      builder
        .addCase(fetchProducts.pending, (state) => {
          state.status = "loading";
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
          state.status = "success";
          state.products = action.payload;
        })
        .addCase(fetchProducts.rejected, (state, action) => {
          state.status = "error";
          state.error = action.error.message;
        })
        .addCase(fetchProductById.pending, (state) => {
          state.status = "loading";
        })
        .addCase(fetchProductById.fulfilled, (state, action) => {
          state.status = "success";
          state.singleProduct = action.payload;
        })  
        .addCase(fetchProductById.rejected, (state, action) => {
          state.status = "error";
          state.error = action.error.message;
        });
    }
    }); 
//export reducer
export default productSlice.reducer;



