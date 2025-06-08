'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { name: 'Home', href: '#home' },
        { name: 'Services', href: '#services' },
        { name: 'Properties', href: '#properties' },
        { name: 'About', href: '#about' },
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
                className="fixed top-8 right-8 z-50 w-14 h-14 flex items-center justify-center cursor-pointer overflow-visible"
            >
                <motion.div className="relative w-10 h-10">
                    <motion.span
                        animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -15 }}
                        className="absolute left-0 top-1/2 w-10 h-0.5 bg-[#C9A14D] origin-center -translate-y-1/2"
                    />
                    <motion.span
                        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                        className="absolute left-0 top-1/2 w-10 h-0.5 bg-[#C9A14D] origin-center -translate-y-1/2"
                    />
                    <motion.span
                        animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 15 }}
                        className="absolute left-0 top-1/2 w-10 h-0.5 bg-[#C9A14D] origin-center -translate-y-1/2"
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
                        className="fixed inset-0 bg-black/80 bg-opacity-70 z-40 flex items-center justify-center"
                    >
                        <motion.nav
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 50 }}
                            transition={{ delay: 0.1, duration: 0.4 }}
                            className="text-center border-2 border-[#C9A14D] p-15 bg-black/90"
                        >
                            {menuItems.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                                    className="mb-8 "
                                >
                                    <button
                                        onClick={() => handleMenuClick(item.href)}
                                        className=" text-4xl md:text-6xl text-white hover:text-[#C9A14D]  transition-colors duration-300 block cursor-pointer"
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