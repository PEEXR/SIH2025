import React from 'react'
import { testimonials } from '/src/assets/components/constants';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials = () => {
    return (
        <div>
            <section id="testimonials" className="py-20 bg-indigo-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">Student Stories</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Hear from students who have found support and healing through SafeSpace
                        </p>
                    </motion.div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl p-8 shadow-lg"
                            >
                                <div className="flex mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                                <div>
                                    <div className="font-bold text-indigo-900">{testimonial.name}</div>
                                    <div className="text-gray-500">{testimonial.role}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonials