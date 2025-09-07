import React from 'react'
import { Heart, Menu, X, Globe } from 'lucide-react';
import { useState } from "react";
import { motion } from 'framer-motion';
export default function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return(
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100">
        <header className="shadow-sm backdrop-filter backdrop-blur-md fixed w-full top-0 z-50">
            <div className="mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <div className=" bg-indigo-600 rounded-full flex items-center justify-center">
                            <img src="/src/assets/logo.png" alt="logo" className="w-12 h-12 text-white"/>
                        </div>
                            <img src="/src/assets/text.png" alt="logotext" className="w-50 h-10 text-white"/>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <a href="#home" className="text-indigo-900 hover:text-indigo-600 font-medium">Home</a>
                        <a href="#services" className="text-gray-600 hover:text-indigo-600 font-medium">Services</a>
                        <a href="#about" className="text-gray-600 hover:text-indigo-600 font-medium">About</a>
                        <a href="#testimonials" className="text-gray-600 hover:text-indigo-600 font-medium">Testimonials</a>
                        <a href="#contact" className="text-gray-600 hover:text-indigo-600 font-medium">Contact</a>
                    </nav>

                    <div className="hidden md:flex items-center space-x-4">
                        <button className="text-indigo-600 hover:text-indigo-800 font-medium">Log In</button>
                        <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors font-medium">
                            Get Started
                        </button>
                        <div className="flex items-center space-x-2 cursor-pointer">
                            <Globe className="w-5 h-5 text-indigo-600" />
                            <span className="text-gray-700 font-medium">EN</span>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden mt-4 pb-4"
                    >
                        <div className="flex flex-col space-y-4">
                            <a href="#home" className="text-indigo-900 hover:text-indigo-600 font-medium">Home</a>
                            <a href="#services" className="text-gray-600 hover:text-indigo-600 font-medium">Services</a>
                            <a href="#about" className="text-gray-600 hover:text-indigo-600 font-medium">About</a>
                            <a href="#testimonials" className="text-gray-600 hover:text-indigo-600 font-medium">Testimonials</a>
                            <a href="#contact" className="text-gray-600 hover:text-indigo-600 font-medium">Contact</a>
                            <div className="flex items-center space-x-2 cursor-pointer pt-2">
                                <Globe className="w-5 h-5 text-indigo-600" />
                                <span className="text-gray-700 font-medium">EN</span>
                            </div>

                            <div className="flex space-x-4 pt-4">
                                <button className="text-indigo-600 hover:text-indigo-800 font-medium flex-1 text-center">Log In</button>
                                <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors font-medium flex-1">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </header>
    </div>
    )
    
}