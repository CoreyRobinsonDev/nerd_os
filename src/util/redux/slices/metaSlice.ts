import type { IconProperties } from "@/util/types";
import { createSlice } from "@reduxjs/toolkit";

type State = {
    desktop: {
        icons: IconProperties[]
    }
}

const initialState: State = {
    desktop: {
        icons: [{id: 0, name: "windows installer installer application", x: 0, y: 0}]
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
            const cache: State | null = localStorage.getItem("meta") 
                //@ts-ignore
                ? JSON.parse(localStorage.getItem("meta"))
                : null;

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
        addIcon: (state, {payload}: {payload: IconProperties}) => {
            state.desktop.icons.push(payload);
        },
        updateIcon: (state, {payload}: {payload: IconProperties}) => {
            state.desktop.icons[state.desktop.icons.findIndex((icon) => icon.id === payload.id)] = payload;
        }
    }
})

export const metaReducer = metaSlice.reducer;
export const {
    saveData,
    loadData,
    clearData,
    addIcon,
    updateIcon,
} = metaSlice.actions;

