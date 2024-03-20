"use client"

import { useState } from "react";

export default function Login() {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("")

    return (
        <section className=" max-w-lg rounded-lg text-center bg-gray-600 shadow-2xl shadow-black transition-all mx-auto mt-16 mb-16 px-8 py-8">
        <h1 className="text-center text-white text-4xl">Login</h1>
        <form>
            <input
                
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
        </form>
    </section>
    )
}