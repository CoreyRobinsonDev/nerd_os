import { createSlice } from "@reduxjs/toolkit";

const initialState = {
}

const metaSlice = createSlice({
    name: "meta",
    initialState,
    reducers: {
    }
})

export const metaReducer = metaSlice.reducer;
export const {
} = metaSlice.actions;

