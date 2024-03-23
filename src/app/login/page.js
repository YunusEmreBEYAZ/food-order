"use client"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function Login() {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleFormSubmit = async (e) => {
        e.preventDefault();
      await signIn('credentials',{email,password})
    }

    return (
        <section className=" max-w-lg rounded-lg text-center bg-gray-600 shadow-2xl shadow-black transition-all mx-auto mt-16 mb-16 px-8 py-8">
        <h1 className="text-center text-white text-4xl">Login</h1>
        <form className="block max-w-xs text-center mx-auto mt-16" onSubmit={handleFormSubmit}>
            <input
                
                type="email"
                name="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                
                type="password"
                name="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button  type="submit">Login</button>
            <div className="my-4 text-white italic">
                    or login with...
            </div>
            <button className="bg-gray-100 hover:bg-blue-300 text-gray-900 flex gap-4 justify-center">
                <Image src="/google.png" alt="Google Logo" width={20} height={20} />
                Login with Google
            </button>
            <div className='text-center text-white mt-6 italic'>
                    Don't have an account? <Link href={"/register"} className='underline'> Register here</Link>
            </div>
        </form>
    </section>
    )
}