import Image from 'next/image'

export default function Register() {
    return (
        <section className=" max-w-lg rounded-lg text-center bg-gray-600 shadow-2xl shadow-black transition-all mx-auto mt-16 mb-16 px-8 py-8">
            <h1 className="text-center text-white text-4xl">Register Now</h1>
            <form className="block max-w-xs text-center mx-auto mt-16">
                <input type="email" name="email" placeholder="email"/>
                <input type="password" name="password" placeholder="password"/>
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