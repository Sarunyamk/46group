"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const projects = [
    "https://plus.unsplash.com/premium_photo-1661962911608-ea55ac7785da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1471039497385-b6d6ba609f9c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJ1aWxkaW5nfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1494526585095-c41746248156?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvcGVydHl8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvcGVydHl8ZW58MHx8MHx8fDA%3D",
];

export default function PortfolioSection() {
    return (
        <section id="projects" className="py-20 px-20 bg-black/70 text-white text-center">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-semibold mb-12"
            >
                Featured Projects
            </motion.h2>

            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                pagination={{ clickable: true }}
                slidesPerView={1.5}
                spaceBetween={30}
                grabCursor={true}
                centeredSlides={true}
                className="rounded-lg"
            >
                {projects.map((img, i) => (
                    <SwiperSlide key={i}>
                        <div className="rounded  shadow-lg  p-10 border-[3px] border-[#C9A14D] text-white cursor-pointer transition-transform duration-500">
                            <motion.img
                                src={img}
                                alt={`Project ${i + 1}`}
                                width={800}
                                height={500}
                                className="w-full h-[400px] object-cover transition-transform duration-500 "
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">Project {i + 1}</h3>
                                <p className="text-sm text-white">
                                    Stunning modern architecture in prime locations.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
