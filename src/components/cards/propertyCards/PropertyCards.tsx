import { Property } from '@/interface/types';
import React, { useState } from 'react';
import { FaHome, FaMapMarkerAlt, FaRulerCombined, FaBed, FaBath, FaRegHeart, FaHeart } from 'react-icons/fa';
import { MdApartment } from 'react-icons/md';

interface PropertyCardProps {
    property: Property;
    onToggleFavorite?: (id: string) => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, onToggleFavorite }) => {
    const [isFavorite, setIsFavorite] = useState(property.isFavorite || false);

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);
        if (onToggleFavorite) {
            onToggleFavorite(property.id);
        }
    };

    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            {/* Property Image */}
            <div className="relative">
                <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                    <div className="bg-white/90 px-2 py-1 rounded-md text-xs flex items-center">
                        <span className="mr-1">{property.id.slice(0, 3)}</span>
                    </div>
                </div>
            </div>

            {/* Property Icons Info */}
            <div className="p-3 border-b border-gray-100 flex justify-between text-sm text-gray-600">
                <div className="flex items-center">
                    <FaHome className="mr-1" />
                    <span>{property.propertyType}</span>
                </div>
                <div className="flex items-center">
                    <MdApartment className="mr-1" />
                    <span>{property.status}</span>
                </div>
                <div className="flex items-center truncate max-w-[130px]">
                    <FaMapMarkerAlt className="mr-1 flex-shrink-0" />
                    <span className="truncate">{property.location}</span>
                </div>
            </div>

            {/* Property Title */}
            <div className="p-3 pb-2">
                <h3 className="font-semibold text-gray-800 text-lg">{property.title}</h3>
            </div>

            {/* Property Details */}
            <div className="px-3 py-2 flex justify-between text-sm border-b border-gray-100">
                <div className="flex items-center">
                    <FaRulerCombined className="mr-1 text-gray-500" />
                    <span>{property.area} m²</span>
                </div>
                <div className="flex items-center">
                    <FaBed className="mr-1 text-gray-500" />
                    <span>{property.rooms} Rooms</span>
                </div>
                <div className="flex items-center">
                    <FaBath className="mr-1 text-gray-500" />
                    <span>{property.bathrooms} Bathrooms</span>
                </div>
            </div>

            {/* Property Pricing */}
            <div className="p-3 grid grid-cols-3 gap-2 text-center">
                <div className="flex flex-col">
                    <span className="font-semibold text-lg">${property.price.toLocaleString()}</span>
                    <span className="text-xs text-gray-500">Price</span>
                </div>
                <div className="flex flex-col">
                    <span className="font-semibold text-lg">{property.capRate}%</span>
                    <span className="text-xs text-gray-500">Cap Rate</span>
                </div>
                <div className="flex flex-col">
                    <span className="font-semibold text-lg">${property.yearlyIncome.toLocaleString()}</span>
                    <span className="text-xs text-gray-500">Income/Yr</span>
                </div>
            </div>

            {/* Action buttons */}
            <div className="p-3 pt-2 flex justify-between items-center">
                <button
                    className="bg-[#D5BC79] hover:bg-[#c4ac6a] text-white py-2 px-4 rounded-md transition-colors duration-300 flex-grow text-center"
                >
                    View Details
                </button>
                <button
                    onClick={handleFavoriteClick}
                    className="ml-2 p-2 text-gray-500 hover:text-red-500 transition-colors duration-300"
                >
                    {isFavorite ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
                </button>
            </div>
        </div>
    );
};

export default PropertyCard;