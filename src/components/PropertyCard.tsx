'use client';
import { motion } from 'framer-motion';

interface PropertyCardProps {
    image: string;
    title: string;
    location: string;
    price: string;
    type: string;
    index: number;
}

const PropertyCard = ({ image, title, location, price, type, index }: PropertyCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-lg backdrop-blur-sm cursor-pointer"
        >
            <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                className="w-full h-full "
            >
                <div className="aspect-[4/3] overflow-hidden">
                    <motion.img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
                    >
                        <span className="text-white text-sm font-medium tracking-wider uppercase">
                            {type}
                        </span>
                        <h3 className="text-xl font-semibold mt-1 mb-2">
                            {title}
                        </h3>
                        <p className="text-white text-sm mb-2">{location}</p>
                        <p className=" text-2xl font-bold text-white">
                            {price}
                        </p>
                    </motion.div>
                </div>
            </motion.div>

            <motion.div
                className="absolute inset-0 bg-[#C9A14D] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.1 }}
            />
        </motion.div>

    );
};

export default PropertyCard;
