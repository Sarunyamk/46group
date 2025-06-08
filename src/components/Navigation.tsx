'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { name: 'Home', href: '#home' },
        { name: 'Properties', href: '#properties' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Contact', href: '#contact' },
    ];

    const handleMenuClick = (href: string) => {
        setIsOpen(false);
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-8 right-8 z-50 w-12 h-12 flex flex-col justify-center items-center"
            >
                <motion.div className="relative">
                    <motion.span
                        animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
                        className="block w-6 h-0.5 bg-[#C9A14D] mb-1.5 origin-center"
                    />
                    <motion.span
                        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                        className="block w-6 h-0.5 bg-[#C9A14D] mb-1.5"
                    />
                    <motion.span
                        animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
                        className="block w-6 h-0.5 bg-[#C9A14D] origin-center"
                    />
                </motion.div>
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black bg-opacity-95 z-40 flex items-center justify-center"
                    >
                        <motion.nav
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 50 }}
                            transition={{ delay: 0.1, duration: 0.4 }}
                            className="text-center"
                        >
                            {menuItems.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                                    className="mb-8"
                                >
                                    <button
                                        onClick={() => handleMenuClick(item.href)}
                                        className="font-playfair text-4xl md:text-6xl text-foreground hover:text-luxury-gold transition-colors duration-300 block"
                                    >
                                        {item.name}
                                    </button>
                                </motion.div>
                            ))}
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navigation;