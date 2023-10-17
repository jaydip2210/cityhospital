import { DELETE_MEDICINES, GET_MEDICINES } from "../ActionType";

export const initialState = {
    isLoading: false,
    medicines: [],
    error: null
}

export const medicinesReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case GET_MEDICINES:
            return {
                ...state,
                medicines: action.payload
            }
        case DELETE_MEDICINES:
            return {
                ...state,
                medicines : state.medicines.filter((v) => v.id !== action.payload)
            }
        default:
            return state
    }
} 