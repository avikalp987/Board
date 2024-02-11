"use client"

import { RoomProvider } from "@/liveblocks.config"
import { ReactNode } from "react"

import { ClientSideSuspense } from "@liveblocks/react" //this is an alias

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
                cursor: null
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