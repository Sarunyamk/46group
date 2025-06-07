"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="fixed top-6 right-10 z-50 cursor-pointer">
                <button
                    onClick={toggleMenu}
                    className="relative w-8 h-8 flex items-center justify-center"
                >
                    <motion.span
                        animate={
                            isOpen
                                ? { rotate: 45, y: 0 }
                                : { rotate: 0, y: -7 }
                        }
                        transition={{ duration: 0.4 }}
                        className="absolute top-1/2 left-0 -translate-y-1/2 w-8 h-[3px] bg-[#C9A14D] rounded origin-center cursor-pointer"
                    />
                    <motion.span
                        animate={
                            isOpen
                                ? { opacity: 0 }
                                : { opacity: 1 }
                        }
                        transition={{ duration: 0.3 }}
                        className="absolute top-1/2 left-0 -translate-y-1/2 w-8 h-[3px] bg-[#C9A14D] rounded cursor-pointer"
                    />
                    <motion.span
                        animate={
                            isOpen
                                ? { rotate: -45, y: 0 }
                                : { rotate: 0, y: 7 }
                        }
                        transition={{ duration: 0.4 }}
                        className="absolute top-1/2 left-0 -translate-y-1/2 w-8 h-[3px] bg-[#C9A14D] rounded origin-center cursor-pointer"
                    />
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="fixed inset-0 z-40 bg-black/90 flex justify-center items-center "
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="p-12 border-[2px] border-[#C9A14D] "
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="px-12 py-16 rounded-lg text-center space-y-8 text-3xl max-w-lg w-full"
                            >
                                {[
                                    { label: "46Group", isLogo: true, delay: 0 },
                                    { label: "About", href: "#about", delay: 0.1 },
                                    { label: "Services", href: "#services", delay: 0.2 },
                                    { label: "Projects", href: "#projects", delay: 0.3 },
                                    { label: "Testimonials", href: "#testimonials", delay: 0.4 },
                                    { label: "Contact", href: "#contact", delay: 0.5 },
                                ].map((item) => (
                                    <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        transition={{ duration: 0.5, ease: "easeInOut", delay: item.delay }}
                                    >
                                        {item.isLogo ? (
                                            <div className="text-5xl font-extrabold mb-12">{item.label}</div>
                                        ) : (
                                            <Link
                                                href={item.href!}
                                                onClick={() => setIsOpen(false)}
                                                className="block hover:text-[#C9A14D] transition-colors duration-300 cursor-pointer"
                                            >
                                                {item.label}
                                            </Link>
                                        )}
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </motion.div>

                )}
            </AnimatePresence>
        </>
    );
}
