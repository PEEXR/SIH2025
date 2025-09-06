import React from 'react'
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <div>
            <section id="contact" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">Get In Touch</h2>
                            <p className="text-xl text-gray-600">
                                Have questions? We're here to help you find the support you need.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-12">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-2xl font-bold text-indigo-900 mb-6">Contact Information</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <Phone className="w-6 h-6 text-indigo-600 mr-4 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-gray-900">Emergency Helpline</h4>
                                            <p className="text-gray-600">24/7 - (555) 123-4567</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <Mail className="w-6 h-6 text-indigo-600 mr-4 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-gray-900">General Inquiries</h4>
                                            <p className="text-gray-600">support@safespace.edu</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <MapPin className="w-6 h-6 text-indigo-600 mr-4 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-gray-900">Campus Locations</h4>
                                            <p className="text-gray-600">Available at 15 campus health centers</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12">
                                    <h4 className="font-bold text-gray-900 mb-4">Office Hours</h4>
                                    <div className="space-y-2 text-gray-600">
                                        <div className="flex justify-between">
                                            <span>Monday - Friday</span>
                                            <span>9:00 AM - 8:00 PM</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Saturday</span>
                                            <span>10:00 AM - 4:00 PM</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Sunday</span>
                                            <span>Crisis Support Only</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="bg-indigo-50 rounded-2xl p-8"
                            >
                                <h3 className="text-2xl font-bold text-indigo-900 mb-6">Send Us a Message</h3>
                                <form className="space-y-6">
                                    <div>
                                        <label className="block text-gray-700 mb-2">Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="Your full name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Email</label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="your.email@university.edu"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Message</label>
                                        <textarea
                                            rows="4"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="How can we help you?"
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact