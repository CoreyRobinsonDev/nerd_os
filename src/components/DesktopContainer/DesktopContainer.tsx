import { useEffect } from "react";

import styles from "./DesktopContainer.module.css";
import Desktop from "@/components/Desktop/Desktop";
import Taskbar from "@/components/Taskbar/Taskbar";
import { useAppSelector, useAppDispatch } from "@/util/redux/store";
import { saveData, loadData } from "@/util/redux/slices/metaSlice";

export default function DesktopContainer() {
    const dispatch = useAppDispatch();
    const saveInterval = useAppSelector((state) => state.settings.saveInterval);
    const taskbar = useAppSelector((state) => state.settings.desktop.taskbar);
    const style = {
        flexDirection: taskbar.position === "right" 
            ? "row"
            : taskbar.position === "left"
            ? "row-reverse"
            : taskbar.position === "top"
            ? "column-reverse"
            : "column",
        backgroundColor: useAppSelector((state) => state.settings.desktop.wallpaper.color), 
    }

    useEffect(() => {
        dispatch(loadData());
    }, [])

    useEffect(() => {
        const timeout = setTimeout(() => {
            dispatch(saveData());
        }, 1000 * saveInterval)

        return () => clearTimeout(timeout);
    }, [])

    //@ts-ignore
    return <main className={styles.main} style={style}>
        <Desktop />
        <Taskbar />
    </main>
}
