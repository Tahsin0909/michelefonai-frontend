import { Feature } from '@/interface/types';
import React from 'react';
import FeatureCard from './cards/featureCard/FeatureCard';


interface FeatureListProps {
    features: Feature[];
}

const FeatureList: React.FC<FeatureListProps> = ({ features }) => {
    return (
        <div className='section-gap container mx-auto'>
            <h1 className='text-4xl font-bold mb-8'>How iRendity Works</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature) => (
                    <FeatureCard key={feature.id} feature={feature} />
                ))}
            </div>
            <div className='flex w-full items-center justify-center mt-10'>
                <button
                    className="bg-[#D5BC79] hover:bg-[#c4ac6a] text-white py-2 px-4 rounded-md transition-colors duration-300  text-center w-fit"
                >
                    Start Exploring Listings
                </button>
            </div>

        </div>
    );
};

export default FeatureList;