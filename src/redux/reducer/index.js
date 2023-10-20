import { combineReducers } from "redux";
import { counterReducer } from "./counter.reducer"
import { medicinesReducer } from "./medicines.reducer";
import { cartReducer } from "./cart.reducer";

export const rootReducer = combineReducers({
   counter: counterReducer,
   medicines: medicinesReducer,
   cart: cartReducer
})