"use client";
import { Provider } from "react-redux";

import store from "@/util/redux/store";
import DesktopContainer from "@/components/DesktopContainer/DesktopContainer";

export default function Home() {
    return <Provider store={store}>
        <DesktopContainer />
    </Provider>
}
store.subscribe(Home);
