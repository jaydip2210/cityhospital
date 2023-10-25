import { ADD_TO_CART, DEC_QTY, INC_QTY, REMOVE } from "../ActionType";

const initialState = {
    isLoading: false,
    cart: [],
    error: null
}

export const cartReducer = (state = initialState, action) => {
    console.log(action);

    switch (action.type) {
        case ADD_TO_CART:
            let check = state.cart.some((v) => v.id === action.payload.id)
            console.log(check);

            if (check) {
                let index = state.cart.findIndex((v) => v.id === action.payload.id)
                console.log(index);
                state.cart[index].qty++;
            } else {
                state.cart.push(action.payload)
            }

            return {
                isLoading: false,
                cart: state.cart,
                error: null
            }

        case INC_QTY:
            let index1 = state.cart.findIndex((v) => v.id === action.payload)
            console.log(index1);
            state.cart[index1].qty++

            return {
                isLoading: false,
                cart: state.cart,
                error: null
            }

        case DEC_QTY:
            let index2 = state.cart.findIndex((v) => v.id === action.payload)
            console.log(index2);
            // state.cart[index2].qty--

            if (state.cart[index2].qty > 1) {
                state.cart[index2].qty--
            }

            return {
                isLoading: false,
                cart: state.cart,
                error: null
            }

        case REMOVE: 
            return {
                ...state,
                cart: state.cart.filter((v) => v.id !== action.payload)
            }

        default:
            return state;
    }
}