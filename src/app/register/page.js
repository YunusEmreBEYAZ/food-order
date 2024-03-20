"use client";

import Link from 'next/link';
import Image from 'next/image';
import {useState} from "react";


export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userCreated, setUserCreated] = useState(false);
    const [creatingUser, setCreatingUser] = useState(false);
    const [error, setError] = useState(null);

    

    const handleFormSubmit =  async (e) => {
        e.preventDefault();
        setCreatingUser(true);
        setError(false);

            const response = await fetch('/api/register', {
                method: 'POST',
                body: JSON.stringify({email,password}),
                headers: {
                    'Content-Type': 'application/json'
                }
               });

            if (!response.ok) {
                setError("An error occurred while creating the user");
                setCreatingUser(false);
                return;
            }
            setCreatingUser(false);
            setEmail('');
            setPassword('');
            setUserCreated(true);



        

    }
        
    return (
        <section className=" max-w-lg rounded-lg text-center bg-gray-600 shadow-2xl shadow-black transition-all mx-auto mt-16 mb-16 px-8 py-8">
            <h1 className="text-center text-white text-4xl">Register Now</h1>
            {userCreated && (<div className="text-green-400 mt-2">User created successfully! <br /> <Link className='underline' href={"/login"}> Please Login </Link></div> )}
            {error && (<div className="text-red-400 mt-2">Error: {error}</div>)}
            <form className="block max-w-xs text-center mx-auto mt-16"
                onSubmit={handleFormSubmit}>
                <input
    disabled={creatingUser}
    type="email"
    placeholder="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
/>
<input
    disabled={creatingUser}
    type="password"
    placeholder="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
/>
                <button disabled={creatingUser} type="submit">Register</button>
                <div className="my-4 text-white italic">
                    or login with...
                </div>
                <button className="bg-gray-100 hover:bg-blue-300 text-gray-900 flex gap-4 justify-center">
                    <Image src="/google.png" alt="Google Logo" width={20} height={20} />
                    Login with Google</button>

                <div className='text-center text-white mt-6 italic'>
                    Already have an account? <Link href={"/login"} className='underline'> Login here</Link>
                </div>
            </form>
        </section>
    )
}