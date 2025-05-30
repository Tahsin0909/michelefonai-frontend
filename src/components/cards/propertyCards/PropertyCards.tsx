import { Property } from '@/interface/types';
import React, { useState } from 'react';
import { CiRuler } from 'react-icons/ci';
import { FaHome, FaMapMarkerAlt, FaRulerCombined, FaBed, FaBath, FaRegHeart, FaHeart, FaShower } from 'react-icons/fa';
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
        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ">
            {/* Property Image */}
            <div className="relative">
                <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-48 object-cover"
                />
            </div>

            {/* Property Icons Info */}
            <div className="p-3 border-b border-gray-100 flex justify-center gap-4 text-sm text-gray-600">
                <div className="flex items-center border p-1 rounded-md border-gray-400">
                    <FaHome className="mr-1" />
                    <span>{property.propertyType}</span>
                </div>
                <div className="flex items-center border p-1 rounded-md border-gray-400">
                    <MdApartment className="mr-1" />
                    <span>{property.status}</span>
                </div>
                <div className="flex items-center border p-1 rounded-md border-gray-400 truncate max-w-[130px]">
                    <FaMapMarkerAlt className="mr-1 flex-shrink-0" />
                    <span className="truncate">{property.location}</span>
                </div>
            </div>

            {/* Property Title */}
            <div className="p-3 pb-2">
                <h3 className="font-semibold text-center text-gray-800 text-lg sm:text-xl">{property.title}</h3>
            </div>

            {/* Property Details */}
            <div className="lg:px-10 py-2 flex justify-between px-4 text-sm border-b border-gray-100">
                <div className="flex flex-col items-center">
                    <CiRuler className="mr-1 text-2xl text-gray-500" />
                    <span className='text-base'>{property.area} m²</span>
                </div>
                <div className="flex flex-col items-center">
                    <FaBed className="mr-1 text-2xl text-gray-500" />
                    <span className='text-base'>{property.rooms} Rooms</span>
                </div>
                <div className="flex flex-col items-center">
                    <FaShower className="mr-1 text-2xl text-gray-500" />
                    <span className='text-base'>{property.bathrooms} Bathrooms</span>
                </div>
            </div>

            {/* Property Pricing */}
            <div className="p-3 grid grid-cols-3 gap-2 text-center">
                <div className="flex flex-col">
                    <span className="font-bold text-lg">${property.price.toLocaleString()}</span>
                    <span className="text-sm mt-2 text-gray-500">Price</span>
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-lg">{property.capRate}%</span>
                    <span className="text-sm mt-2 text-gray-500">Cap Rate</span>
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-lg">${property.yearlyIncome.toLocaleString()}</span>
                    <span className="text-sm mt-2 text-gray-500">Income/Yr</span>
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
                    className="ml-2 p-2 text-gray-500 hover:text-red-500 transition-colors duration-300 border rounded-md border-gray-400"
                >
                    {isFavorite ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
                </button>
            </div>
        </div>
    );
};

export default PropertyCard;