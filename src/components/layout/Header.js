import Link from "next/link";

export default function Header() {
    return (
    <header className="flex items-center justify-between">
        <a className="text-purple-700 font-bold text-2xl" href="/">BEST PIZZA</a>
        <nav className="flex items-center gap-6 text-gray-600-bold ">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/login" className="bg-red-500 rounded-full px-6 py-2 text-white">Login</Link>
        </nav>

      </header>
      )
}