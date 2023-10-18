import { ADD_MEDICINES, DELETE_MEDICINES, GET_MEDICINES, LOADING_MEDICINES, UPDATE_MEDICINES } from "../ActionType";

export const initialState = {
    isLoading: false,
    medicines: [],
    error: null
}

export const medicinesReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case LOADING_MEDICINES:
            return {
                isLoading: true,
                medicines: [],
                error: null
            }
        case GET_MEDICINES:
            return {
                // ...state,
                isLoading: false,
                medicines: action.payload,
                error: null
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