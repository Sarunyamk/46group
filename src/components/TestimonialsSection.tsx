"use client";
import { motion } from "framer-motion";

const testimonials = [
    { name: "John D.", text: "Professional service and great results!" },
    { name: "Emily R.", text: "Highly recommended for premium properties." },
    { name: "Michael T.", text: "Trustworthy and efficient team." },
];

export default function TestimonialsSection() {
    return (
        <section id="testimonials" className="py-20 px-20 bg-black/70 text-white text-center">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-semibold mb-12"
            >
                What Our Clients Say
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-10">
                {testimonials.map((t, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="p-6 bg-white text-[#0a1e3a] rounded shadow-lg"
                    >
                        <p className="italic mb-4">{t.text}</p>
                        <h4 className="font-bold">{t.name}</h4>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
