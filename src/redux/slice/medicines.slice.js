import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addMedicinesData, deteleMedicinesData, getMedicinesData, updateMedicinesData } from "../../common/api/medicines.api"
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { ADD_MEDICINES } from "../ActionType";

const initialState = {
    isLoading: false,
    medicines: [],
    error: null
}

export const getMedicines = createAsyncThunk(
    'medicines/get',
    async () => {
        console.log("sdfsdfsdfsdf");
        await new Promise((resolve, reject) => setTimeout(resolve, 2000))
        // const response = await getMedicinesData();

        // console.log(response.data);

        // return response.data

        let data = []

        const querySnapshot = await getDocs(collection(db, "medicines"));
        querySnapshot.forEach((doc) => {
            data.push({ id: doc.id, ...doc.data() });
            console.log({ id: doc.id, ...doc.data() });
        });

        return data
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
        // const response = await deteleMedicinesData(id);

        await deleteDoc(doc(db, "medicines", id));

        return id;
    }
)

export const addMedicines = createAsyncThunk(
    'medicines/post',
    async (data) => {
        // await addMedicinesData(data);
        console.log("hello", data);
        // return data;
        try {
            const docRef = await addDoc(collection(db, "medicines"), data);
            return { ...data, id: docRef.id }
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
)

export const updateMedicines = createAsyncThunk(
    'medicines/put',
    async (data) => {
        // await updateMedicinesData(data);

        // return data;

        const washingtonRef = doc(db, "medicines", data.id);
        await updateDoc(washingtonRef, {...data, id: data.id });

        return data.id
    }
)

export const medicinesSlice = createSlice({
    name: 'medicines',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getMedicines.pending, onLoading)
        builder.addCase(getMedicines.fulfilled, (state, action) => {
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