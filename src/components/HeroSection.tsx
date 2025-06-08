'use client';
import { motion } from 'framer-motion';
export default function HeroSection() {
    return (

        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <motion.div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2048&q=80")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                }}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
            />

            <div className="absolute inset-0 bg-black/50 z-10" />

            <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <motion.h1
                        className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                    >
                        Forty-Six Real Estate
                    </motion.h1>

                    <motion.div
                        className="w-24 h-1 bg-[#C9A14D] mx-auto mb-8"
                        initial={{ width: 0 }}
                        animate={{ width: 96 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                    />

                    <motion.p
                        className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    >
                        Discover exceptional properties that redefine luxury living.
                        From penthouses to estates, we curate the finest real estate experiences.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4, duration: 0.8 }}
                    >
                        <motion.button
                            className="bg-[#C9A14D] text-black px-8 py-4 font-semibold tracking-wider uppercase hover:bg-yellow-400 transition-colors duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View Properties
                        </motion.button>

                        <motion.button
                            className="border-2 border-[#C9A14D] text-[#C9A14D] px-8 py-4 font-semibold tracking-wider uppercase hover:bg-[#C9A14D] hover:text-black transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Learn More
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.8 }}
            >
                <motion.div
                    className="w-6 h-10 border-2 border-luxury-gold rounded-full flex justify-center"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <motion.div
                        className="w-1 h-3 bg-[#C9A14D] rounded-full mt-2"
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}
