'use client';
import { motion } from 'framer-motion';
import PropertyCard from './PropertyCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const PropertiesSection = () => {
    const properties = [
        {
            image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            title: 'Manhattan Penthouse',
            location: 'New York, NY',
            price: '$12,500,000',
            type: 'Penthouse'
        },
        {
            image: 'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            title: 'Beverly Hills Estate',
            location: 'Los Angeles, CA',
            price: '$18,750,000',
            type: 'Estate'
        },
        {
            image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            title: 'Lad prao Beach House',
            location: 'Malibu, CA',
            price: '$25,000,000',
            type: 'Oceanfront'
        },
        {
            image: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9tZXxlbnwwfHwwfHx8MA%3D%3D',
            title: 'Oceanfront Villa',
            location: 'Malibu, CA',
            price: '$25,000,000',
            type: 'Oceanfront'
        },
        {
            image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvbWV8ZW58MHx8MHx8fDA%3D0',
            title: 'Luxury Mountain Retreat',
            location: 'Malibu, CA',
            price: '$25,000,000',
            type: 'Oceanfront'
        },
    ];

    return (
        <section id="properties" className="py-24 px-4 bg-luxury-gradient">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <motion.h2
                        className="text-4xl md:text-6xl font-bold text-white mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        Featured Properties
                    </motion.h2>

                    <motion.div
                        className="w-24 h-1 bg-[#C9A14D] mx-auto mb-8"
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        viewport={{ once: true }}
                    />

                    <motion.p
                        className="text-xl text-gray-300 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        Explore our curated selection of the world's most prestigious properties,
                        each offering unparalleled luxury and sophistication.
                    </motion.p>
                </motion.div>


                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    slidesPerGroup={1}
                    loop={true}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination]}
                    className="!pb-12"
                >

                    {properties.map((property, index) => (
                        <SwiperSlide key={index}>
                            <PropertyCard {...property} index={index} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <motion.div
                    className="text-center mt-16 "
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <motion.button
                        className="border-2 border-[#C9A14D] text-[#C9A14D] px-8 py-4 font-semibold tracking-wider uppercase hover:bg-[#C9A14D] hover:text-black transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View All Properties
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default PropertiesSection;