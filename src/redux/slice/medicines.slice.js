import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addMedicinesData, deteleMedicinesData, getMedicinesData, updateMedicinesData } from "../../common/api/medicines.api"
import { db } from "../../firebase"
import { collection, addDoc } from "firebase/firestore"; 


const initialState = {
    isLoading: false,
    medicines: [],
    error: null
}

export const getMedicines = createAsyncThunk(
    'medicines/get',
    async () => {
        await new Promise((resolve, reject) => setTimeout(resolve, 2000))
        const response = await getMedicinesData();

        console.log(response.data);

        return response.data
    }
)

const onLoading = (state, action) => {
    state.isLoading = true;
    state.error = null;
}

const onError = (state, action) => {
    state.isLoading = false;
    state.error = action.error.message;
}

export const deleteMedicines = createAsyncThunk(  //create AysncThunk search
    'medicines/delete',
    async (id) => {
        const response = await deteleMedicinesData(id);

        return id;
    }
)

export const addMedicines = createAsyncThunk(  
    'medicines/post',
    async (data) => {
        // await addMedicinesData(data);

        // return data;
        try {
            const docRef = await addDoc(collection(db, "medicines"), {
              data
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }          
          
    }
)

export const updateMedicines = createAsyncThunk(  
    'medicines/put',
    async (data) => {
        await updateMedicinesData(data);

        return data;
    }
)

export const medicinesSlice = createSlice({
    name: 'medicines',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getMedicines.pending, onLoading)
        builder.addCase(getMedicines.fulfilled, (state, action) => {
            console.log(action);
            state.isLoading = false;
            state.medicines = action.payload;
            state.error = null;
        }),
            builder.addCase(getMedicines.rejected, onError)
            builder.addCase(deleteMedicines.fulfilled, (state, action) => {
            state.medicines = state.medicines.filter((v) => v.id !== action.payload)
        })
      }
})

export default medicinesSlice.reducer