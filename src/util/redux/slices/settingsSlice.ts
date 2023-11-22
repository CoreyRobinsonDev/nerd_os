import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    desktop: {
        wallpaper: {
            color: "#222"
        },
        text: {
            color: "#eee"
        },
        taskbar: {
            position: "left",
            width: 4
        }
    },
    saveInterval: 10
}

const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        setWallpaperColor: (state, {payload}) => {
            state.desktop.wallpaper.color = payload;
        },
        setTextColor: (state, {payload}) => {
            state.desktop.text.color = payload;
        },
        setTaskbarPosition: (state, {payload}) => {
            state.desktop.taskbar.position = payload;
        },
        setTaskbarWidth: (state, {payload}) => {
            state.desktop.taskbar.width = payload; 
        },
        setSaveInterval: (state, {payload}) => {
            state.saveInterval = payload;
        }
    }
})

export const settingsReducer = settingsSlice.reducer;
export const {
    setWallpaperColor,
    setTextColor,
    setTaskbarPosition,
    setTaskbarWidth,
    setSaveInterval,
} = settingsSlice.actions;

