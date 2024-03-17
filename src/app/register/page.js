"use client";

import Image from 'next/image';
import {useState} from "react";

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    

    const handleFormSubmit =  (e) => {
        e.preventDefault();

        fetch('/api/register', {
                     method: 'POST',
                     body: JSON.stringify({email,password}),
                     headers: {
                         'Content-Type': 'application/json'
                     }
                    });

    }
        
    return (
        <section className=" max-w-lg rounded-lg text-center bg-gray-600 shadow-2xl shadow-black transition-all mx-auto mt-16 mb-16 px-8 py-8">
            <h1 className="text-center text-white text-4xl">Register Now</h1>
            <form className="block max-w-xs text-center mx-auto mt-16"
                onSubmit={handleFormSubmit}>
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
                <button type="submit">Register</button>
                <div className="my-4 text-white italic">
                    or login with...
                </div>
                <button className="bg-gray-100 hover:bg-blue-300 text-gray-900 flex gap-4 justify-center">
                    <Image src="/google.png" alt="Google Logo" width={20} height={20} />
                    Login with Google</button>
            </form>
        </section>
    )
}