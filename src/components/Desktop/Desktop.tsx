import { useRef } from "react";

import styles from "./Desktop.module.css";
import { useAppSelector } from "@/util/redux/store";
import Icon from "../Icon/Icon";

export default function Desktop() {
    const sectionRef = useRef<HTMLElement>(null);
    const taskbar = useAppSelector((state) => state.settings.desktop.taskbar);
    const style = {
        backgroundColor: useAppSelector((state) => state.settings.desktop.wallpaper.color),
        color: useAppSelector((state) => state.settings.desktop.text.color),
        width: taskbar.position === "top" || taskbar.position === "bottom"
            ? "calc(100vw - 2rem)"
            : `calc(calc(100vw - ${taskbar.width}rem) - 2rem)`,
        height: taskbar.position === "top" || taskbar.position === "bottom"
            ? `calc(calc(100vh - ${taskbar.width}rem) - 2rem)`
            : "calc(100vh - 2rem)"
    }

    return <section ref={sectionRef} className={styles.section} style={style}>
        <Icon meta={{container: sectionRef}} name="windows installer installer app" />
    </section>
}
