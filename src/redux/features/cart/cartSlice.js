import { createSlice } from "@reduxjs/toolkit";

//initial state
const initialState = {
    items: [],
    total : 0
};
export const cartSlice = createSlice({ 
    name: "cart",
    initialState,
    //reducers
    reducers:{
        //action to add item to cart
        addToCart: (state, action) => {
            // state.item -> items:[]
            let existingProduct = state.items.some(
                (item) => item.id === action.payload.id
            );
            if (existingProduct){
                state.items.map((item) => {
                    if (item.id === action.payload.id){
                        item.qty += 1;
                        //item.total += item.price;
                    }else if(!item.id === action.payload.id){
                        state.items.push(
                            action.payload
                        )
                        state.total +=1
                    }
                });
            }else{
                state.items.push(action.payload)
                state.total +=1;
            }
        },
        remove : (state, action) => {
        }
    }
});

//export action
export const {addToCart} = cartSlice.actions;
