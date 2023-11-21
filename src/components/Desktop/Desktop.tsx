import styles from "./Desktop.module.css";
import { useAppSelector } from "@/util/redux/store";

export default function Desktop() {
    const taskbar = useAppSelector((state) => state.settings.desktop.taskbar);
    const style = {
        backgroundColor: useAppSelector((state) => state.settings.desktop.wallpaper.color),
        color: useAppSelector((state) => state.settings.desktop.text.color),
        width: taskbar.position === "top" || taskbar.position === "bottom"
            ? "100vw"
            : `calc(100vw - ${taskbar.width}rem)`,
        height: taskbar.position === "top" || taskbar.position === "bottom"
            ? `calc(100vh - ${taskbar.width}rem)`
            : "100vh"
    }

    return <section className={styles.section} style={style}>
        DESKTOP
    </section>
}
