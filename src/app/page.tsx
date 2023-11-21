"use client";
import { Provider } from "react-redux";

import store from "@/util/redux/store";
import styles from "./page.module.css"

import Desktop from "@/components/Desktop/Desktop";
import Taskbar from "@/components/Taskbar/Taskbar";

export default function Home() {
    return <Provider store={store}>
        <main className={styles.desktop}>
            <Desktop />
            <Taskbar />
        </main>
    </Provider>
}
store.subscribe(Home);
