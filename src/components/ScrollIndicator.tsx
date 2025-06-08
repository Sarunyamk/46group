'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const sections = ['home', 'services', 'properties', 'about', 'contact'];
const ScrollIndicator = () => {
    const [activeSection, setActiveSection] = useState(0);


    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            sections.forEach((section, index) => {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(index);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (index: number) => {
        const element = document.getElementById(sections[index]);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-30 hidden md:block">
            <div className="flex flex-col space-y-4">
                {sections.map((_, index) => (
                    <motion.button
                        key={index}
                        onClick={() => scrollToSection(index)}
                        className="relative"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <motion.div
                            className={`w-3 h-3 rounded-full border-2 border-[#C9A14D] transition-all duration-300 ${activeSection === index ? 'bg-[#C9A14D]' : 'bg-transparent'
                                }`}
                            animate={{
                                scale: activeSection === index ? 1.2 : 1,
                            }}
                        />
                        {activeSection === index && (
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="absolute inset-0 w-3 h-3 rounded-full bg-[#C9A14D] opacity-30"
                            />
                        )}
                    </motion.button>
                ))}
            </div>
        </div>
    );
};

export default ScrollIndicator;