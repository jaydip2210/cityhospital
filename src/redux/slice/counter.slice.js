import { createSlice } from "@reduxjs/toolkit"

export const initState = {
    count: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState: initState,
    reducers: {
        increment: (state, action) => {
            state.count += 1;
        },
        decrement: (state, action) => {
            state.count -= 1;
        },
        incrementByFive: (state, action) => {
            console.log(action);
            state.count += action.payload
        }
    }
})

export const { increment, decrement, incrementByFive } = counterSlice.actions

export default counterSlice.reducer