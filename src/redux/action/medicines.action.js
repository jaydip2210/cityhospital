import { json } from "react-router-dom"
import { API_URL } from "../../Utilitys/baseURL";
import { type } from "@testing-library/user-event/dist/type";
import { DELETE_MEDICINES, GET_MEDICINES } from "../ActionType";


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

export const deleteMedicines = (id) => (dispatch) => {
    try{
        fetch(API_URL + "medicines/" + id,{
            method: "DELETE"
        })
        .then(() => dispatch({type: DELETE_MEDICINES, payload: id}));
    } catch(error) {
        console.log(error);
    } 
}