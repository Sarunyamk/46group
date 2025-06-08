"use client";
import { motion } from "framer-motion";

const services = [
    { title: "Property Sales", desc: "Premium residential and commercial properties." },
    { title: "Property Management", desc: "Comprehensive property management services." },
    { title: "Investment Consulting", desc: "Expert advice for property investors." },
];

export default function ServicesSection() {
    return (
        <section id="services" className="py-20 px-6 md:px-32 bg-luxury-gradient text-white text-center">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-semibold mb-12"
            >
                Our Services
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-10">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="p-10 bg-white text-[#0a1e3a] rounded shadow-lg"
                    >
                        <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                        <p className="text-gray-700">{service.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
