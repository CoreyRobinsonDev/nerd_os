import { useState } from "react";

import styles from "./Desktop.module.css";
import { useAppSelector } from "@/util/redux/store";
import Icon from "../Icon/Icon";

export default function Desktop() {
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    const icons = useAppSelector((state) => state.meta.desktop.icons); 
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

    return <section 
        className={styles.section} 
        style={style}
        onMouseMove={(e) => {setMouseX(e.nativeEvent.offsetX); setMouseY(e.nativeEvent.offsetY);}}
    >
        {icons.map((icon) => <Icon key={icon.id} meta={{mouseX, mouseY}} properties={icon} />)}
    </section>
}
