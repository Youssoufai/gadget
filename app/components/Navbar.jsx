'use client'

import { Search, User, ShoppingBag } from "lucide-react"
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center px-6 py-4 bg-black text-white">
            <div className="text-xl font-bold">🧿 Gadgets</div>
            <ul className="hidden md:flex space-x-8 text-sm font-medium">
                <li className="text-white underline underline-offset-4">
                    <Link href="#">Home</Link>
                </li>
                <li>
                    <Link href="/products">Products</Link>
                </li>
                <li>
                    <Link href="#">About Us</Link>
                </li>
                <li>
                    <Link href="#">Blog</Link>
                </li>
                <li>
                    <Link href="#">Contact Us</Link>
                </li>
            </ul>
            <div className="flex space-x-4 items-center">
                <Search size={20} />
                <User size={20} />
                <ShoppingBag size={20} />
            </div>
        </nav>
    )
}

export default Navbar;