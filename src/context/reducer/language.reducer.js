import { TOGGLE_LANGUAGE } from "../ActionTypes";

export const languageReducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case TOGGLE_LANGUAGE: 
        return {
            language: action.payload
        }
        default:
            return state;
    }
}