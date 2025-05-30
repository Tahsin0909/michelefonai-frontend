"use client";

import React, { useState } from 'react';
import MainSwiper from './shared/swiperSlide/MainSwiper';
import { fakeProperties } from './data/fakeProperty';
import { SwiperSlide } from 'swiper/react';
import PropertyCard from './cards/propertyCards/PropertyCards';

const RecentProperties = () => {
    const [favorites, setFavorites] = useState<Record<string, boolean>>({});

    const handleToggleFavorite = (id: string) => {
        setFavorites(prev => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return (
        <div className='section-gap container mx-auto'>
            <h1 className='text-4xl font-bold mb-8'>Recent View Properties</h1>
            <MainSwiper items={fakeProperties}>
                {fakeProperties.map(property => (
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
            </MainSwiper>
        </div>
    );
};

export default RecentProperties;