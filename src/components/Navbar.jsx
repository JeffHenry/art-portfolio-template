import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white/80 text-gray-800 fixed w-full shadow-lg h-16s">
            <div className="mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="text-2xl font-bold tracking-wide">
                    Your Name
                </a>

                {/* Desktop Menu */}
                <div className="flex-grow flex justify-end">
                    <ul className="hidden md:flex space-x-6 text-lg">
                        <li><a href="#home" className="hover:text-gray-600">Home</a></li>
                        <li><a href="#about" className="hover:text-gray-600">About</a></li>
                        <li><a href="#portfolio" className="hover:text-gray-600">Portfolio</a></li>
                    </ul>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white">
                    <ul className="flex flex-col items-center py-4 space-y-6 text-lg list-none">
                        <li><a href="#home" className="hover:text-gray-600" onClick={() => setIsOpen(false)}>Home</a></li>
                        <li><a href="#about" className="hover:text-gray-600" onClick={() => setIsOpen(false)}>About</a></li>
                        <li><a href="#portfolio" className="hover:text-gray-600" onClick={() => setIsOpen(false)}>Portfolio</a></li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
