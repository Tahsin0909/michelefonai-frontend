"use client"

import { Property } from '@/interface/types';
import React, { useState } from 'react';
import PropertyCard from './cards/propertyCards/PropertyCards';

interface PropertyCardListProps {
    properties: Property[];
}

const RecentProperties: React.FC<PropertyCardListProps> = ({ properties }) => {
    const [favorites, setFavorites] = useState<Record<string, boolean>>({});

    const handleToggleFavorite = (id: string) => {
        setFavorites(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <div className='section-gap container mx-auto'>
            <h1 className='text-4xl font-bold mb-8'>Recent view Properties</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {properties.map(property => (
                    <PropertyCard
                        key={property.id}
                        property={{
                            ...property,
                            isFavorite: favorites[property.id] || false
                        }}
                        onToggleFavorite={handleToggleFavorite}
                    />
                ))}
            </div>
        </div>
    );
};

export default RecentProperties;