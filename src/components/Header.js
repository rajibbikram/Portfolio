// components/Header.js
import Link from "next/link";
import React from "react";  
import "../css/header.css"; 
const Header = () => {
    return (
       <header className="bg-gray-800 text-white p-4 sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">

                <div className="text-xl font-bold">
                    <Link href="/">Rajib Bikram Shah</Link>
                </div>
                <nav>
                    <ul className="flex gap-30 space-x-6">
                        <li>
                            <Link href="#hero" className="hover:text-gray-400">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="#about" className="hover:text-gray-400">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="#projects" className="hover:text-gray-400">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link href="#contact" className="hover:text-gray-400">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
