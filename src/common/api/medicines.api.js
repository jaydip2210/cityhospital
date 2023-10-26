import { deleteRequest, getRequest, postRequest, putRequest } from "../request"


export const getMedicinesData = () => {
    return getRequest('medicines'); // db.json mathi name medicines
}

export const addMedicinesData = (data) => {
    return postRequest('medicines', data)
}

export const updateMedicinesData = (data) => {
    return putRequest('medicines', data)
}

export const deteleMedicinesData = (id) => {
    return deleteRequest('medicines/', id)
}