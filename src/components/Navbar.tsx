"use client";

import { useState } from 'react'; // Import useState from React
import Link from 'next/link';
import { Menu, X, Brain } from 'lucide-react'; // Import Menu and X icons from lucide-react
import { motion, AnimatePresence } from 'framer-motion'; // Import motion and AnimatePresence from framer-motion

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // State to manage the mobile menu

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Toggle the mobile menu state
    };

    return (
        <nav className="bg-gray-900 text-white p-4 fixed w-full bg-blur-lg backdrop-blur-lg shadow-lg z-50">
            {/* Logo and Links */}
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">
                    <div className="flex items-center">
                        {/* Logo Icon */}
                        {/* You can replace this with your actual logo image or SVG */}
                        <Brain size={32} className="inline-block mr-1" /> {/* Logo Icon */}
                        {/* Logo Text */}
                        Dev<span className='text-blue-500'>Drill</span>
                    </div>
                </Link> {/* Logo */}

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-4">
                    <Link href="#features" className="hover:text-gray-400">Features</Link>
                    <Link href="#testimonials" className="hover:text-gray-400">Testimonials</Link>
                    <Link href="/challenges" className="hover:text-gray-400">Challenges</Link>
                </div>

                {/* Menu icon */}
                <button onClick={toggleMenu} className="md:hidden focus:outline-none">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div 
                      initial={{ opacity: 0 }} // Initial state for animation
                      animate={{ opacity: 1 }} // Animation when the menu opens
                      exit={{ opacity: 0 }} // Animation when the menu closes
                      transition={{ duration: 0.3 }} // Duration of the animation
                      className='flex h-screen inset-0 bg-black/50 fixed z-40 md:hidden' 
                      onClick={toggleMenu} />
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }} // Initial state for animation
                        animate={{ opacity: 1, y: 0 }} // Animation when the menu opens
                        exit={{ opacity: 0, y: -20 }} // Animation when the menu closes
                        transition={{ duration: 0.3 }} // Duration of the animation
                        className="md:hidden bg-gray-800 p-4 mt-2 rounded shadow-lg z-50 relative"
                    >
                        <Link href="#features" className="block py-2 hover:text-gray-400">Features</Link>
                        <Link href="#testimonials" className="block py-2 hover:text-gray-400">Testimonials</Link>
                        <Link href="/challenges" className="block py-2 hover:text-gray-400">Challenges</Link>
                        <Link href="/login" className="block py-2 hover:text-gray-400">Login</Link>
                        <Link href="/register" className="block py-2 hover:text-gray-400">Register</Link>
                    </motion.div>
                </>
            )}
            </AnimatePresence>
        </nav>
    );
}

export default Navbar;