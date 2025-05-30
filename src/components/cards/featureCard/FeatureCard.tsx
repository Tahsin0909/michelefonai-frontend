import { Feature } from '@/interface/types';
import React from 'react';
import { LuBuilding2, LuFileText, LuScanLine, LuUsers } from 'react-icons/lu';

interface FeatureCardProps {
    feature: Feature;
}

const iconMap = {
    'building': LuBuilding2,
    'chart': LuScanLine,
    'file': LuFileText,
    'users': LuUsers,
};

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
    const IconComponent = iconMap[feature.icon as keyof typeof iconMap];

    return (
        <div className="bg-white rounded-2xl p-6 border border-gray-300 transition-all duration-300">
            <div className="flex items-center gap-4">
                <div className="flex-shrink-0 items-center ">
                    <div className="w-20 h-20 bg-gray-50 rounded-xl flex items-center justify-center shadow-xl">
                        {IconComponent && <IconComponent className="w-6 h-6 text-gray-700" />}
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {feature.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                        {feature.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;