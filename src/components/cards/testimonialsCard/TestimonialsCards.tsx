import { Testimonial } from '@/interface/types';
import React from 'react';
import { FaStar } from 'react-icons/fa';

interface TestimonialCardProps {
    testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
    return (
        <div className="bg-white rounded-lg p-6 shadow-md">
            {/* Testimonial Content */}
            <p className="text-gray-700 text-sm mb-4">"{testimonial.content}"</p>

            {/* Rating Stars */}
            <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, index) => (
                    <FaStar
                        key={index}
                        className={`${index < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                            } w-4 h-4`}
                    />
                ))}
            </div>

            {/* Author Info */}
            <div className="flex items-center gap-3">
                <img
                    src={testimonial.author.avatar}
                    alt={testimonial.author.name}
                    className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                    <h4 className="font-medium text-gray-900">{testimonial.author.name}</h4>
                    <div className="text-sm text-gray-600">
                        {testimonial.author.title}, {testimonial.author.location} | {testimonial.author.date}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;