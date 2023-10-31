import { createSlice } from "@reduxjs/toolkit";

export const initState = {
    isLoading: false,
    cart: [],
    error: null
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initState,
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

        },

        incQty: (state, action) => {
            let index1 = state.cart.findIndex((v) => v.id === action.payload)
            console.log(index1);
            state.cart[index1].qty++
        },

        decQty: (state, action) => {
            console.log(index2);
            // state.cart[index2].qty--

            if (state.cart[index2].qty > 1) {
                state.cart[index2].qty--
            }
        },
    }
})

export const { addToCart, incQty, decQty } = cartSlice.actions

export default cartSlice.reducer