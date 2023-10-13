import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "../ActionType"

export const increment = () => (dispatch) => {
    dispatch({type: INCREMENT_COUNTER})
}

export const Decrement = () => (dispatch) => {
    dispatch({type: DECREMENT_COUNTER})
}