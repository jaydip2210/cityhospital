import { combineReducers } from "redux";
// import { counterReducer } from "./counter.reducer"
import { medicinesReducer } from "./medicines.reducer";
import { cartReducer } from "./cart.reducer";
import counterReducer from "../slice/counter.slice";

export const rootReducer = combineReducers({
   // counter: counterSlice,
   counter: counterReducer,
   medicines: medicinesReducer,
   cart: cartReducer
})