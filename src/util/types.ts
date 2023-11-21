import { RefObject } from "react";

export type IconMeta = {
    container: RefObject<HTMLElement>
}

export type IconProperties = {
    name: string
    image?: string
    position: { x: number, y: number }
}
