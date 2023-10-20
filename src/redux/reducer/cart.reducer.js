import { ADD_TO_CART, INC_QTY } from "../ActionType";

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

        // case INC_QTY:
        //     let index1 = state.cart.findIndex((v) => v.id === action.payload)
        //     state.cart[index1].qty++;
        //     console.log(index1);

        default:
            return state;
    }
}