import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    desktop: {
        wallpaperColor: "#222",
        textColor: "#eee",
        taskbar: {
            position: "left",
            width: 4
        }
    }
}

const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        setWallpaperColor: (state, {payload}) => {
            state.desktop.wallpaperColor = payload;
        },
        setTextColor: (state, {payload}) => {
            state.desktop.textColor = payload;
        },
        setTaskbarPosition: (state, {payload}) => {
            state.desktop.taskbar.position = payload;
        },
        setTaskbarWidth: (state, {payload}) => {
            state.desktop.taskbar.width = payload; 
        }
    }
})

export const settingsReducer = settingsSlice.reducer;
export const {
    setWallpaperColor,
    setTextColor,
    setTaskbarPosition,
    setTaskbarWidth,
} = settingsSlice.actions;

