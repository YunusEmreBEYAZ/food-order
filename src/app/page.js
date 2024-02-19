import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="flex items-center justify-between">
        <a className="text-gray-700 font-bold text-2xl" href="/">BEST PIZZA</a>
        <nav className="flex justify-between m-3 ml-3">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/login">Login</Link>
        </nav>

      </header>
    
    
    </>
  );
}
