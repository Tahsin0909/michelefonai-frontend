"use client";

import { Property } from '@/interface/types';
import React, { useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import PropertyCard from './cards/propertyCards/PropertyCards';
import SwiperCore from 'swiper';
interface PropertyCardListProps {
    properties: Property[];
}

// Custom Pagination Component
const CustomPagination: React.FC<{ totalSlides: number; currentSlide: number }> = ({
    totalSlides,
    currentSlide,
}) => {
    const swiper = useSwiper();
    SwiperCore.use([Autoplay]);
    return (
        <div className="flex justify-center gap-2 mt-6 ">
            {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-black w-8' : 'bg-gray-400'
                        }`}
                    onClick={() => swiper.slideTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                />
            ))}
        </div>
    );
};

const RecentProperties: React.FC<PropertyCardListProps> = ({ properties }) => {
    const [favorites, setFavorites] = useState<Record<string, boolean>>({});
    const [activeIndex, setActiveIndex] = useState(0);

    const handleToggleFavorite = (id: string) => {
        setFavorites(prev => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return (
        <div className='section-gap container mx-auto'>
            <h1 className='text-4xl font-bold mb-8'>Recent View Properties</h1>

            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                centeredSlides={true}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                autoplay={{
                    delay: 3000,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false,
                    stopOnLastSlide: false,

                }}
                loop={true}
                className=" !py-2 mySwiper"
            >
                {properties.map(property => (
                    <SwiperSlide key={property.id} className=''>
                        <PropertyCard
                            property={{
                                ...property,
                                isFavorite: favorites[property.id] || false,
                            }}
                            onToggleFavorite={handleToggleFavorite}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Pagination */}
            <CustomPagination totalSlides={properties.length} currentSlide={activeIndex} />
        </div>
    );
};

export default RecentProperties;