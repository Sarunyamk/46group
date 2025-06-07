"use client";
import { useEffect, useState } from "react";

const sections = ["section-1", "section-2", "section-3", "section-4"];

export default function ScrollIndicator() {
    const [activeSection, setActiveSection] = useState<string>("section-1");
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            const centerY = window.scrollY + window.innerHeight / 2;

            let foundActive = false;
            let newActiveSection = "";

            for (const sectionId of sections) {
                const section = document.getElementById(sectionId);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    const sectionTop = window.scrollY + rect.top;
                    const sectionBottom = sectionTop + section.offsetHeight;

                    if (centerY >= sectionTop && centerY <= sectionBottom) {
                        newActiveSection = sectionId;
                        foundActive = true;
                        break;
                    }
                }
            }

            if (foundActive && newActiveSection) {
                setActiveSection(newActiveSection);
            }

            setIsVisible(foundActive);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col space-y-4 transition-opacity duration-500
                ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
            {sections.map((sectionId) => (
                <div
                    key={sectionId}
                    onClick={() => {
                        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300
                        ${activeSection === sectionId
                            ? "bg-[#C9A14D] scale-125 shadow-[0_0_10px_#C9A14D]"
                            : "bg-gray-400 opacity-50 scale-100"}`}
                ></div>
            ))}
        </div>
    );
}
