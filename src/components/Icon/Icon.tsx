import type { IconMeta } from "@/util/types";
import { useState, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import Image from "next/image";

import { IoShapes } from "react-icons/io5";
import styles from "./Icon.module.css";
import { useAppDispatch } from "@/util/redux/store";
import { addIcon } from "@/util/redux/slices/metaSlice";

export default function Icon({
    meta,
    image,
    name,
}: { meta: IconMeta, image?: string, name?: string }) {
    const dispatch = useAppDispatch();
    const [iName, setiName] = useState(name || "text");
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    useEffect(() => {
        const unsubX = x.on("change", (latest) => console.log("x:", latest));
        const unsubY = y.on("change", (latest) => console.log("y:", latest));

        return () => {
            unsubX();
            unsubY();
        }
    }, [x,y])

    useEffect(() => {
        dispatch(addIcon({name, image, x: x.getPrevious(), y: y.getPrevious()}));
    }, [])

    return <motion.section 
        title={name}
        className={styles.section}
        whileHover={{backgroundColor: "rgba(30,30,30, 0.5)"}}
        drag
        dragConstraints={meta.container}
        dragMomentum={false}
        style={{x,y}}
        >
        {image 
            ? <Image className={styles.image} src={image} alt={name || ""} /> 
            : <IoShapes className={styles.image} />
        }
        <span className={styles.name}>{iName}</span>
    </motion.section>
}
