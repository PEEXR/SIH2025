import React from 'react';
import { Brain, Heart, Users, Calendar, Star, Menu, X, ChevronRight, Phone, Mail, MapPin } from 'lucide-react';
import Stats from './assets/components/Stats';
import About from './assets/components/About';
import Testimonials from './assets/components/Testimonials';
import Contact from './assets/components/Contact';
import CTA from './assets/components/CTA';
import Chatbot from './assets/components/Chatbot';
import Footer from './assets/components/Footer';
import Navbar from './assets/components/Navbar';
import Hero from './assets/components/Hero';
import Features from './assets/components/Features';


const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Stats/>
      <About/>
      <Features/>
      <Testimonials/>
      <Contact/>
      <CTA/>
      <Chatbot/>
      <Footer/>
    </main>
  )
}

export default App

/* <div className="md:w-1/2 flex justify-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="w-80 h-80 md:w-96 md:h-96 bg-indigo-200 rounded-full flex items-center justify-center">
                  <div className="w-64 h-64 md:w-80 md:h-80 bg-indigo-300 rounded-full flex items-center justify-center">
                    <div className="w-48 h-48 md:w-60 md:h-60 bg-indigo-400 rounded-full flex items-center justify-center">
                      <Heart className="w-24 h-24 text-white" />
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-lg">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="font-medium text-gray-700">Available Now</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-600">24/7</div>
                    <div className="text-sm text-gray-600">Support</div>
                  </div>
                </div>
              </motion.div>
            </div> */

/* <>  
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="shadow-sm backdrop-filter backdrop-blur-md fixed w-full top-0 z-50">
        <div className="mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-indigo-900">SafeSpace</span>
            </div>
            
            /* Desktop Navigation 
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
            </div>
            
            {/* Mobile Menu Button }
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          
          {/* Mobile Navigation 
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
    </div> */