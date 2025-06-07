"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

interface ContentSectionProps {
    title: string;
    description: string;
    images: string[];
    imagePosition?: "left" | "right";
}

export default function ContentSection({
    title,
    description,
    images,
    imagePosition = "right",
}: ContentSectionProps) {
    const isImageLeft = imagePosition === "left";

    return (
        <section className="py-16 px-20 bg-black/70 text-white">
            <div
                className={`flex flex-row ${isImageLeft ? "flex-row-reverse" : ""} items-center gap-12`}
            >
                <motion.div
                    initial={{ opacity: 0, x: isImageLeft ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="w-1/2 text-left space-y-6"
                >
                    <h2 className="text-4xl font-bold">{title}</h2>
                    <p className="text-lg text-gray-300">{description}</p>
                </motion.div>


                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="w-1/2 flex justify-center items-center"
                >
                    <Swiper
                        modules={[Autoplay, EffectCoverflow, Pagination]}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        effect="coverflow"
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={1.5}
                        loop={true}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 60,
                            depth: 100,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        pagination={{ clickable: true }}
                        className="rounded-lg shadow-lg w-[600px] h-[600px] "
                    >
                        {images.map((imgUrl, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={imgUrl}
                                    alt={`Image ${index + 1}`}
                                    className="w-full h-full object-cover rounded-lg  border-[3px] border-[#C9A14D] p-4"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </div>
        </section>
    );
}
