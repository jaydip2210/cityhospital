import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    cart: [],
    error: null
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            let check = state.cart.some((v) => v.id === action.payload.id)
            console.log(check);

            if (check) {
                let index = state.cart.findIndex((v) => v.id === action.payload.id)
                console.log(index);
                state.cart[index].qty++;
            } else {
                state.cart.push(action.payload)
            }

            state.isLoading = false;
            state.cart = state.cart;
            state.error = null
        },

        incQty: (state, action) => {
            let index1 = state.cart.findIndex((v) => v.id === action.payload)
            console.log(index1);
            state.cart[index1].qty++

            state.isLoading = false;
            state.cart = state.cart;
            state.error = null
        },

        decQty: (state, action) => {
            let index2 = state.cart.findIndex((v) => v.id === action.payload)
            console.log(index2);

            if (state.cart[index2].qty > 1) {
                state.cart[index2].qty--
            }


            state.isLoading = false;
            state.cart = state.cart;
            state.error = null
        },

        deleteCart: (state, action) => { 
            const removeCart = state.cart.filter((v) => v.id !== action.payload)
            state.cart = removeCart
        }
    }
})

export const { addToCart, incQty, decQty, deleteCart } = cartSlice.actions

export default cartSlice.reducer