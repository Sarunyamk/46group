"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
    return (
        <section id="contact" className="py-20 px-20 bg-luxury-gradient text-white text-center">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-4xl font-semibold mb-6">Get In Touch</h2>
                <p className="text-lg text-gray-300 mb-8">
                    Contact us today to start your property journey.
                </p>
                <Button className="bg-white text-[#0a1e3a] hover:bg-gray-200 px-8 py-6 text-lg">
                    Contact Us
                </Button>
            </motion.div>
        </section>
    );
}
