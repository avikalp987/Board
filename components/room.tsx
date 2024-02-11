"use client"

import { RoomProvider } from "@/liveblocks.config"
import { ReactNode } from "react"

import { ClientSideSuspense } from "@liveblocks/react" //this is an alias
import { LiveMap, LiveObject,LiveList } from "@liveblocks/client"
import { Layer } from "@/types/canvas"

interface RoomProps {
    children: ReactNode,
    roomId: string,
    fallback: NonNullable<ReactNode> | null
}


export const Room = ({
    children,
    roomId,
    fallback,
}: RoomProps) => {
    return (
        <RoomProvider
            id={roomId}
            initialPresence={{
                cursor: null,
                selection: []
            }}
            initialStorage={{
                layers: new LiveMap<string, LiveObject<Layer>>(),
                layerIds: new LiveList(),
            }}
        >
            <ClientSideSuspense
                fallback={fallback}
            >
                {() => children}
            </ClientSideSuspense>
        </RoomProvider>
    )
}