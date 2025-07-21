'use client'

import { Search, User, ShoppingBag } from "lucide-react"
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center px-6 py-4 bg-black text-white">
            <div className="text-xl font-bold">🧿 Gadgets</div>

            <ul className="hidden md:flex space-x-8 text-sm font-medium text-center">
                <li className="text-white underline underline-offset-4">
                    <Link href="/">Home</Link>
                </li>
            </ul>

            <div className="flex space-x-4 items-center">
                <Search size={20} />
                <User size={20} />
                <ShoppingBag size={20} />

                {/* Auth Buttons */}
                <Link
                    href="/login"
                    className="text-sm px-3 py-1 rounded-md border border-white hover:bg-white hover:text-black transition"
                >
                    Login
                </Link>
                <Link
                    href="/register"
                    className="text-sm px-3 py-1 rounded-md bg-white text-black hover:bg-gray-200 transition"
                >
                    Create Account
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;
