"use client"

import { SwiperSlide } from "swiper/react";
import BlogCard from "./cards/blogCards/BlogCards";
import { fakeBlogPosts } from "./data/fakeBlog";
import MainSwiper from "./shared/swiperSlide/MainSwiper";




const BlogList = () => {
    return (
        <div className='section-gap container mx-auto'>
            <h1 className='text-4xl font-bold mb-8'>Stay Ahead of the Market</h1>
            <MainSwiper items={fakeBlogPosts}>
                {fakeBlogPosts.map(post => (
                    <SwiperSlide key={post.id} className=''>
                        <BlogCard key={post.id} post={post} />
                    </SwiperSlide>
                ))}
            </MainSwiper>
        </div>
    );
};

export default BlogList;