"use client";
import { SessionProvider } from "next-auth/react";

export function AppWrapper({children}) {
    return (
        <SessionProvider>{children}</SessionProvider>
    )
}