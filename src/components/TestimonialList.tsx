"use client"

import { SwiperSlide } from 'swiper/react';
import TestimonialCard from './cards/testimonialsCard/TestimonialsCards';
import { fakeTestimonials } from './data/fakeTestimonials';
import MainSwiper from './shared/swiperSlide/MainSwiper';

const TestimonialList = () => {
    return (
        <div className='section-gap container mx-auto'>
            <h1 className='text-4xl font-bold mb-8'>Trusted by Smart Investors Worldwide</h1>
            <MainSwiper items={fakeTestimonials}>
                {fakeTestimonials.map((testimonial) => (
                    <SwiperSlide key={testimonial.id} className=''>
                        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                    </SwiperSlide>
                ))}
            </MainSwiper>

        </div>
    );
};

export default TestimonialList;