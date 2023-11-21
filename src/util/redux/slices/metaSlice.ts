import type { IconProperties } from "@/util/types";
import { createSlice } from "@reduxjs/toolkit";

type State = {
    desktop: {
        icons: IconProperties[]
    }
}

const initialState: State = {
    desktop: {
        icons: []
    }
}

const metaSlice = createSlice({
    name: "meta",
    initialState,
    reducers: {
        saveData: (state) => {
            localStorage.setItem("meta", JSON.stringify(state));
        },
        loadData: (state) => {
            const cache: State | undefined = localStorage.getItem("meta") 
                ? JSON.parse(localStorage.getItem("meta"))
                : undefined;

            if (cache) {
                for (const [key, value] of Object.entries(cache)) {
                    state[key as keyof State] = value;
                }
            }
        },
        clearData: (state) => {
            localStorage.clear()
            for (const [key, value] of Object.entries(initialState)) {
                state[key as keyof State] = value;
            }
        },
        addIcon: (state, {payload}) => {
            state.desktop.icons.push(payload);
        }
    }
})

export const metaReducer = metaSlice.reducer;
export const {
    saveData,
    loadData,
    clearData,
    addIcon,
} = metaSlice.actions;

