"use client";

import React, { useState } from 'react';
import SwiperCore from 'swiper';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, useSwiper } from 'swiper/react';
interface PropertyCardListProps {
    items: any[];
    children: React.ReactNode
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

const MainSwiper: React.FC<PropertyCardListProps> = ({ items, children }) => {
    const [favorites, setFavorites] = useState<Record<string, boolean>>({});
    const [activeIndex, setActiveIndex] = useState(0);

    const handleToggleFavorite = (id: string) => {
        setFavorites(prev => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return (
        <div >
            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                centeredSlides={true}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1440: { slidesPerView: 3 },
                }}
                autoplay={{
                    delay: 3000,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false,
                    stopOnLastSlide: false,

                }}
                loop={true}
                className=" !py-2 !px-2 mySwiper"
            >
                {children}
            </Swiper>

            {/* Custom Pagination */}
            <CustomPagination totalSlides={items.length} currentSlide={activeIndex} />
        </div>
    );
};

export default MainSwiper;