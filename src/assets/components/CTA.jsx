import React from 'react'
import { motion } from 'framer-motion';


const CTA = () => {
    return (
        <div>
            <section className="py-20 bg-indigo-600">
                <div className="container mx-auto px-4 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-white mb-6"
                    >
                        Ready to Take the First Step?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto"
                    >
                        Your mental health journey starts here. Book a free consultation today and discover how we can support you.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
                    >
                        <button className="bg-white text-indigo-600 px-8 py-4 rounded-full hover:bg-indigo-50 transition-colors font-medium text-lg">
                            Fill Out the Form
                        </button>
                        <button className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-indigo-600 transition-colors font-medium text-lg">
                            Chat with our AI Assistant
                        </button>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default CTA