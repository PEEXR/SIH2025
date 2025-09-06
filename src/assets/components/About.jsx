import React from 'react'
import { motion } from 'framer-motion';


const About = () => {
    return (
        <div>
            <section id="about" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-12 md:mb-0">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-indigo-100 rounded-2xl p-6">
                                    <div className="text-4xl font-bold text-indigo-600 mb-2">50+</div>
                                    <div className="text-gray-600">Licensed Therapists</div>
                                </div>
                                <div className="bg-indigo-100 rounded-2xl p-6 mt-8">
                                    <div className="text-4xl font-bold text-indigo-600 mb-2">15+</div>
                                    <div className="text-gray-600">Campus Locations</div>
                                </div>
                                <div className="bg-indigo-100 rounded-2xl p-6">
                                    <div className="text-4xl font-bold text-indigo-600 mb-2">98%</div>
                                    <div className="text-gray-600">Confidentiality</div>
                                </div>
                                <div className="bg-indigo-100 rounded-2xl p-6 mt-8">
                                    <div className="text-4xl font-bold text-indigo-600 mb-2">Free</div>
                                    <div className="text-gray-600">Initial Consultation</div>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 md:pl-16">
                            <motion.h2
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="text-3xl md:text-4xl font-bold text-indigo-900 mb-6"
                            >
                                Why Choose SafeSpace?
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="text-gray-600 mb-6 text-lg leading-relaxed"
                            >
                                At SafeSpace, we understand the unique pressures students face. Our team of licensed professionals
                                specializes in student mental health, offering personalized support in a judgment-free environment.
                            </motion.p>
                            <motion.ul
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="space-y-4"
                            >
                                <li className="flex items-start">
                                    <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mr-3 mt-1">
                                        <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                                    </div>
                                    <span className="text-gray-700">Confidential and secure environment</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mr-3 mt-1">
                                        <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                                    </div>
                                    <span className="text-gray-700">Flexible scheduling for busy student life</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mr-3 mt-1">
                                        <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                                    </div>
                                    <span className="text-gray-700">Evidence-based therapeutic approaches</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mr-3 mt-1">
                                        <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                                    </div>
                                    <span className="text-gray-700">Peer support and community building</span>
                                </li>
                            </motion.ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About