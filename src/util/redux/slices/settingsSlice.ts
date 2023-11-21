import { createSlice } from "@reduxjs/toolkit";

const initialState = {
}

const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
    }
})

export const settingsReducer = settingsSlice.reducer;
export const {
} = settingsSlice.actions;

