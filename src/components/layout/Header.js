"use client"

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Header() {
    const session = useSession();
    console.log(session);
    const status = session?.status;
    return (
    <header className="flex items-center justify-between mb-8 mt-4 font-semibold">
        
        <nav className="flex items-center gap-6 text-gray-600 font-semibold ">
            <a className="text-red-600 text-4xl mr-4 font-thin " href="/">BEST PIZZA</a>
            <Link href="/">Home</Link>
            <Link href="/about" >About</Link>
            <Link href="/contact" >Contact</Link>
            <Link href="/menu">Menu</Link>
        </nav>
        
        <nav className="flex items-center gap-2 font-semibold">
            {status === "authenticated" && (
                <>
                <p>{session.data.user.email}</p>
                <button
                    onClick={() => signOut()}               
                    className="bg-red-500 rounded-full px-6 py-2 text-white">Logout</button>
                </>
            )}
            {status !== "authenticated" && (
                <>
                    <Link href={"/login"} className="px-6 py-2 text-gray-600">Login</Link>
                    <Link href={"/register"} className="bg-red-500 rounded-full px-6 py-2 text-white">Register</Link>
                    </>
            )}


        </nav>

      </header>
      )
}