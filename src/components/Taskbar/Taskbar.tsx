import { motion } from "framer-motion";

import styles from "./Taskbar.module.css";
import { useAppSelector } from "@/util/redux/store";

export default function Taskbar() {
    const taskbar = useAppSelector((state) => state.settings.desktop.taskbar);
    const style = {
        width: taskbar.position === "top" || taskbar.position === "bottom"
            ? "fit-content"
            : taskbar.width + "rem",
        height: taskbar.position === "left" || taskbar.position === "right"
            ? "fit-content"
            : taskbar.width + "rem",
        flexDirection: taskbar.position === "top" || taskbar.position === "bottom" 
            ? "row"
            : "column"
    }

    //@ts-ignore
    return <section className={styles.section} style={style}>
        <button className={styles.menu}>
            <motion.span className={styles.dot} whileHover={{scale: 2}}></motion.span> 
            <motion.span className={styles.dot} whileHover={{scale: 2}}></motion.span> 
            <motion.span className={styles.dot} whileHover={{scale: 2}}></motion.span> 
            <motion.span className={styles.dot} whileHover={{scale: 2}}></motion.span> 
            <motion.span className={styles.dot} whileHover={{scale: 2}}></motion.span> 
            <motion.span className={styles.dot} whileHover={{scale: 2}}></motion.span> 
            <motion.span className={styles.dot} whileHover={{scale: 2}}></motion.span> 
            <motion.span className={styles.dot} whileHover={{scale: 2}}></motion.span> 
            <motion.span className={styles.dot} whileHover={{scale: 2}}></motion.span> 
        </button>
    </section>
}
