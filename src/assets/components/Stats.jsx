import React from 'react'
import { stats } from '/src/assets/components/constants';
import { motion } from 'framer-motion';


const Stats = () => {
    return (
        <div>
            <section className="py-12 bg-white">
                <div className="container relative mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">{stat.number}</div>
                                <div className="text-amber-200">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Stats    