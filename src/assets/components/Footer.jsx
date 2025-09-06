import React from 'react'
import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-indigo-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                                    <Heart className="w-5 h-5 text-indigo-600" />
                                </div>
                                <span className="text-xl font-bold">SafeSpace</span>
                            </div>
                            <p className="text-indigo-200 mb-4">
                                Supporting student mental health with compassion and professionalism.
                            </p>
                            <div className="flex space-x-4">
                                <div className="w-10 h-10 bg-indigo-800 rounded-full flex items-center justify-center hover:bg-indigo-700 cursor-pointer">
                                    <span className="text-sm font-bold">f</span>
                                </div>
                                <div className="w-10 h-10 bg-indigo-800 rounded-full flex items-center justify-center hover:bg-indigo-700 cursor-pointer">
                                    <span className="text-sm font-bold">t</span>
                                </div>
                                <div className="w-10 h-10 bg-indigo-800 rounded-full flex items-center justify-center hover:bg-indigo-700 cursor-pointer">
                                    <span className="text-sm font-bold">in</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-bold text-lg mb-4">Services</h4>
                            <ul className="space-y-2 text-indigo-200">
                                <li><a href="#" className="hover:text-white">Individual Counseling</a></li>
                                <li><a href="#" className="hover:text-white">Group Therapy</a></li>
                                <li><a href="#" className="hover:text-white">Crisis Intervention</a></li>
                                <li><a href="#" className="hover:text-white">Workshops</a></li>
                                <li><a href="#" className="hover:text-white">Online Resources</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-lg mb-4">Resources</h4>
                            <ul className="space-y-2 text-indigo-200">
                                <li><a href="#" className="hover:text-white">Student Guide</a></li>
                                <li><a href="#" className="hover:text-white">Mental Health Tips</a></li>
                                <li><a href="#" className="hover:text-white">Self-Assessment</a></li>
                                <li><a href="#" className="hover:text-white">Blog</a></li>
                                <li><a href="#" className="hover:text-white">FAQ</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-lg mb-4">Support</h4>
                            <ul className="space-y-2 text-indigo-200">
                                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                                <li><a href="#" className="hover:text-white">Emergency Help</a></li>
                                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                                <li><a href="#" className="hover:text-white">Accessibility</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-indigo-800 mt-12 pt-8 text-center text-indigo-300">
                        <p>&copy; 2023 SafeSpace. All rights reserved. This service is provided for educational purposes only.</p>
                        <p className="mt-2">If you are in crisis, please call 988 or go to your nearest emergency room.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer