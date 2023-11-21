import styles from "./DesktopContainer.module.css";
import Desktop from "@/components/Desktop/Desktop";
import Taskbar from "@/components/Taskbar/Taskbar";
import { useAppSelector } from "@/util/redux/store";

export default function DesktopContainer() {
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

    //@ts-ignore
    return <main className={styles.main} style={style}>
        <Desktop />
        <Taskbar />
    </main>
}
