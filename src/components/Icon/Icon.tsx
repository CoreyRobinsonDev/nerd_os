import type { IconProperties, MousePosition } from "@/util/types";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { IoShapes } from "react-icons/io5";
import styles from "./Icon.module.css";
import { useAppDispatch } from "@/util/redux/store";
import { updateIcon } from "@/util/redux/slices/metaSlice";

export default function Icon({ meta, properties }: { meta: MousePosition, properties: IconProperties }) {
    const dispatch = useAppDispatch();
    const [mouseDown, setMouseDown] = useState(false);

    useEffect(() => {
        if (mouseDown) {
            dispatch(updateIcon({...properties, x: meta.mouseX, y: meta.mouseY}))
        }
        console.log(meta.mouseX, meta.mouseY);
    }, [meta.mouseX, meta.mouseY])


    return <motion.section 
        onMouseUp={() => setMouseDown(false)}
        onMouseDown={() => setMouseDown(true)}
        title={properties.name}
        className={styles.section}
        whileHover={{backgroundColor: "rgba(30,30,30, 0.5)"}}
        initial={{left: `${properties.x}px`, top: `${properties.y}px`}}
        animate={{left: `${properties.x}px`, top: `${properties.y}px`}}
        >
        {properties.image 
            ? <Image className={styles.image} src={properties.image} alt={properties.name} /> 
            : <IoShapes className={styles.image} />
        }
        <span className={styles.name}>{properties.name}</span>
    </motion.section>
}
