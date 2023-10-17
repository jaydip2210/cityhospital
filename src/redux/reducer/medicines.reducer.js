import { ADD_MEDICINES, DELETE_MEDICINES, GET_MEDICINES, UPDATE_MEDICINES } from "../ActionType";

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
                medicines: state.medicines.filter((v) => v.id !== action.payload)
            }
        case ADD_MEDICINES:
            return {
                ...state,
                medicines: state.medicines.concat(action.payload)
            }
        case UPDATE_MEDICINES:
            return {
                ...state,
                medicines: state.medicines.map((v) => {
                    if(v.id === action.payload.id) {
                        return action.payload
                    } else {
                        return v
                    }
                })
            }
        default:
            return state
    }
} 