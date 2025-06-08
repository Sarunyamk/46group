'use client';
import { motion } from 'framer-motion';
import PropertyCard from './PropertyCard';

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
            title: 'Malibu Oceanfront',
            location: 'Malibu, CA',
            price: '$25,000,000',
            type: 'Oceanfront'
        }
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
                        className="font-playfair text-4xl md:text-6xl font-bold text-white mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        Featured Properties
                    </motion.h2>

                    <motion.div
                        className="w-24 h-1 bg-luxury-gold mx-auto mb-8"
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {properties.map((property, index) => (
                        <PropertyCard key={index} {...property} index={index} />
                    ))}
                </div>

                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <motion.button
                        className="border-2 border-luxury-gold text-luxury-gold px-8 py-4 font-semibold tracking-wider uppercase hover:bg-luxury-gold hover:text-black transition-all duration-300"
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
