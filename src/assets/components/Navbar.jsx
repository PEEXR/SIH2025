import React from 'react'
import { Heart, Menu, X, Globe } from 'lucide-react';
import { useState } from "react";
import { motion } from 'framer-motion';

export default function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    return(
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100">
            <header className="shadow-sm backdrop-filter backdrop-blur-md fixed w-full top-0 z-50 bg-white/90">
                <div className="mx-auto px-4 py-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-4 mr-6">
                            {/* Updated logo container - bigger PNG inside circle */}
                            <div className="bg-white rounded-full flex items-center justify-center shadow border border-gray-200 ">
                                <img 
                                    src="/src/assets/logo.png" 
                                    alt="logo" 
                                    className="w-16 h-16 object-cover"
                                />
                            </div>
                            <img 
                                src="/src/assets/text.png" 
                                alt="logotext" 
                                className="h-12 object-contain"
                            />
                        </div>
                         
                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex space-x-8">
                            <a href="#home" className="text-indigo-900 hover:text-indigo-600 font-medium transition-colors">Home</a>
                            <a href="#services" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Services</a>
                            <a href="#about" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">About</a>
                            <a href="#testimonials" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Testimonials</a>
                            <a href="#contact" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Contact</a>
                        </nav>
                         
                        <div className="hidden md:flex items-center space-x-4">
                            <button className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors">
                                Log In
                            </button>
                            <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors font-medium shadow-md">
                                Get Started
                            </button>
                            <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-md transition-colors">
                                <Globe className="w-5 h-5 text-indigo-600" />
                                <span className="text-gray-700 font-medium">EN</span>
                            </div>
                        </div>
                         
                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? 
                                <X className="w-6 h-6 text-gray-700" /> : 
                                <Menu className="w-6 h-6 text-gray-700" />
                            }
                        </button>
                    </div>
                     
                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4"
                        >
                            <div className="flex flex-col space-y-4">
                                <a href="#home" className="text-indigo-900 hover:text-indigo-600 font-medium py-2 px-2 hover:bg-gray-50 rounded-md transition-colors">
                                    Home
                                </a>
                                <a href="#services" className="text-gray-600 hover:text-indigo-600 font-medium py-2 px-2 hover:bg-gray-50 rounded-md transition-colors">
                                    Services
                                </a>
                                <a href="#about" className="text-gray-600 hover:text-indigo-600 font-medium py-2 px-2 hover:bg-gray-50 rounded-md transition-colors">
                                    About
                                </a>
                                <a href="#testimonials" className="text-gray-600 hover:text-indigo-600 font-medium py-2 px-2 hover:bg-gray-50 rounded-md transition-colors">
                                    Testimonials
                                </a>
                                <a href="#contact" className="text-gray-600 hover:text-indigo-600 font-medium py-2 px-2 hover:bg-gray-50 rounded-md transition-colors">
                                    Contact
                                </a>
                                
                                <div className="flex items-center space-x-2 cursor-pointer pt-2 px-2 hover:bg-gray-50 rounded-md transition-colors">
                                    <Globe className="w-5 h-5 text-indigo-600" />
                                    <span className="text-gray-700 font-medium">EN</span>
                                </div>
                                 
                                <div className="flex flex-col space-y-3 pt-4">
                                    <button className="text-indigo-600 hover:text-indigo-800 font-medium py-2 px-4 hover:bg-gray-50 rounded-md transition-colors">
                                        Log In
                                    </button>
                                    <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors font-medium shadow-md">
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