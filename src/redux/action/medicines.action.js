import { json } from "react-router-dom"
import { API_URL } from "../../Utilitys/baseURL";
import { type } from "@testing-library/user-event/dist/type";
import { ADD_MEDICINES, DELETE_MEDICINES, ERROR_MEDICINES, GET_MEDICINES, LOADING_MEDICINES, UPDATE_MEDICINES } from "../ActionType";


export const getMedicines = () => (dispatch) => {
    try {
        dispatch(loadingMedicines())
        return setTimeout(() => {
            fetch(API_URL + "medicines")
                .then(response => {
                    if (response.ok) {
                        console.log(response);
                        return response.json()
                    }

                    if(response.status === 404) {
                        return "404"
                    } else if (response.statusText) {
                        return "Data Not Found"
                    }

                    throw new Error("Something went wrong!" + response.status + " " + response.statusText)
                })
                // .then(response => response.json())
                // .then(data => console.log(data));
                .then(data => dispatch({ type: GET_MEDICINES, payload: data }))
                // .catch(error => console.log(error))
                .catch(error => dispatch(errorMedicines(error)))
        }, 2000);
    } catch (error) {
        console.log(error);
        dispatch(errorMedicines(error))
    }
}

export const deleteMedicines = (id) => (dispatch) => {
    try {
        fetch(API_URL + "medicines/" + id, {
            method: "DELETE"
        })
            .then(dispatch({ type: DELETE_MEDICINES, payload: id }))
    } catch (error) {
        console.log(error);
    }
}

export const addMedicines = (data) => (dispatch) => {
    try {
        fetch(API_URL + "medicines", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => (response.json()))
            .then((rdata) => dispatch({ type: ADD_MEDICINES, payload: rdata }))
            .catch((error) => console.log(error));
    } catch (error) {
        console.log(error);
    }
}

export const updataMedicines = (data) => (dispatch) => {
    try {
        fetch(API_URL + "medicines/" + data.id, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => (response.json()))
            .then((rdata) => dispatch({ type: UPDATE_MEDICINES, payload: rdata }))
            .catch((error) => console.log(error))
    } catch (error) {
        console.log(error);
    }
}

export const loadingMedicines = () => (dispatch) => {
    dispatch({ type: LOADING_MEDICINES })
}

export const errorMedicines = (error) => (dispatch) => {
    dispatch({ type: ERROR_MEDICINES, payload: error.message })
}