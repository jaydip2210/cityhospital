import { json } from "react-router-dom"
import { API_URL } from "../../Utilitys/baseURL";
import { type } from "@testing-library/user-event/dist/type";
import { GET_MEDICINES } from "../ActionType";


export const getMedicines = () => (dispatch) => {
    try{
        fetch(API_URL + "medicines")
        .then(response => response.json())
        // .then(data => console.log(data));
        .then(data => dispatch({type: GET_MEDICINES, payload: data}));
    } catch(error) {
        console.log(error);
    } 
}