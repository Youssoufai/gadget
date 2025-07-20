'use client'

import { Search, User, ShoppingBag } from "lucide-react"

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center px-6 py-4 bg-black text-white">
            <div className="text-xl font-bold">🧿 Gadgets</div>
            <ul className="hidden md:flex space-x-8 text-sm font-medium">
                <li className="text-white underline underline-offset-4">Home</li>
                <li>Products</li>
                <li>About Us</li>
                <li>Blog</li>
                <li>Contact Us</li>
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