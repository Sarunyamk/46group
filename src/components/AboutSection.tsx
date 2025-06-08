'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 bg-luxury-gradient">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <motion.h2
                            className="font-playfair text-4xl md:text-6xl font-bold text-white mb-6"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            Excellence in <span className="text-gradient-gold">Luxury</span>
                        </motion.h2>

                        <motion.div
                            className="w-24 h-1 bg-[#C9A14D] mb-8"
                            initial={{ width: 0 }}
                            whileInView={{ width: 96 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            viewport={{ once: true }}
                        />

                        <motion.p
                            className="text-lg text-gray-300 mb-8 leading-relaxed"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            For over two decades, we have been the trusted name in luxury real estate,
                            representing the world's most discerning buyers and sellers. Our commitment
                            to excellence has earned us recognition as leaders in the industry.
                        </motion.p>

                        <motion.p
                            className="text-lg text-gray-300 mb-12 leading-relaxed"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            We curate extraordinary experiences.
                            Every transaction is handled with the utmost care, discretion, and professionalism
                            that our clientele deserves.
                        </motion.p>

                        <motion.div
                            className="grid grid-cols-2 gap-8"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div>
                                <h3 className="font-playfair text-3xl font-bold text-luxury-gold mb-2">500+</h3>
                                <p className="text-gray-300">Luxury Properties Sold</p>
                            </div>
                            <div>
                                <h3 className="font-playfair text-3xl font-bold text-luxury-gold mb-2">$2.5B+</h3>
                                <p className="text-gray-300">Total Sales Volume</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >

                        <motion.div
                            className="relative overflow-hidden rounded-lg h-[600px]"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1600047509782-20d39509f26d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Luxury Interior"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        </motion.div>

                        <motion.div
                            className="absolute -bottom-8 -right-8 bg-card-luxury backdrop-blur-sm p-8 rounded-lg"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="font-playfair text-xl font-bold text-gradient-gold mb-2">
                                Award Winning
                            </h4>
                            <p className="text-gray-300 text-sm">
                                Recognized globally for excellence in luxury real estate
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;