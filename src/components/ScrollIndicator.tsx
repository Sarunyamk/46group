// "use client";
// import { useEffect, useState } from "react";

// const sections = ["section-1", "section-2", "section-3", "section-4"];

// export default function ScrollIndicator() {
//     const [activeSection, setActiveSection] = useState<string>("section-1");
//     const [isVisible, setIsVisible] = useState<boolean>(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             const centerY = window.scrollY + window.innerHeight / 2;

//             let foundActive = false;
//             let newActiveSection = "";

//             for (const sectionId of sections) {
//                 const section = document.getElementById(sectionId);
//                 if (section) {
//                     const rect = section.getBoundingClientRect();
//                     const sectionTop = window.scrollY + rect.top;
//                     const sectionBottom = sectionTop + section.offsetHeight;

//                     if (centerY >= sectionTop && centerY <= sectionBottom) {
//                         newActiveSection = sectionId;
//                         foundActive = true;
//                         break;
//                     }
//                 }
//             }

//             if (foundActive && newActiveSection) {
//                 setActiveSection(newActiveSection);
//             }

//             setIsVisible(foundActive);
//         };

//         window.addEventListener("scroll", handleScroll);
//         handleScroll();

//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     return (
//         <div
//             className={`fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col space-y-4 transition-opacity duration-500
//                 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
//         >
//             {sections.map((sectionId) => (
//                 <div
//                     key={sectionId}
//                     onClick={() => {
//                         document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
//                     }}
//                     className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300
//                         ${activeSection === sectionId
//                             ? "bg-[#C9A14D] scale-125 shadow-[0_0_10px_#C9A14D]"
//                             : "bg-gray-400 opacity-50 scale-100"}`}
//                 ></div>
//             ))}
//         </div>
//     );
// }
'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const ScrollIndicator = () => {
    const [activeSection, setActiveSection] = useState(0);

    const sections = ['home', 'properties', 'about', 'services', 'contact'];

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
                            className={`w-3 h-3 rounded-full border-2 border-luxury-gold transition-all duration-300 ${activeSection === index ? 'bg-luxury-gold' : 'bg-transparent'
                                }`}
                            animate={{
                                scale: activeSection === index ? 1.2 : 1,
                            }}
                        />
                        {activeSection === index && (
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="absolute inset-0 w-3 h-3 rounded-full bg-luxury-gold opacity-30"
                            />
                        )}
                    </motion.button>
                ))}
            </div>
        </div>
    );
};

export default ScrollIndicator;