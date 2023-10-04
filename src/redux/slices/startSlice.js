import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    startLocation : ""
}

export const startLoc = createSlice({
    name: 'Start Location',
    initialState,
    reducers: {
        changeStartLocation: (state, action) => {
            const startLoc = {
                startLocation: action.payload
            }
            state.startLocation.replace(startLoc.startLocation)
        }
    }
})

export const { changeStartLocation } = startLoc.actions;

export default startLoc.reducer; 
