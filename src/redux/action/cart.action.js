import { ADD_TO_CART, DEC_QTY, INC_QTY } from "../ActionType"

export const addToCart = (id) => (dispatch) => {
    console.log(id);
    dispatch({type: ADD_TO_CART, payload: {id: id, qty: 1}})
}

export const incQty = (id) => (dispatch) => {
    console.log(id);
    dispatch({type: INC_QTY, payload: id})
}

export const decQty = (id) => (dispatch) => {
    console.log(id);
    dispatch({type: DEC_QTY, payload: id})
}