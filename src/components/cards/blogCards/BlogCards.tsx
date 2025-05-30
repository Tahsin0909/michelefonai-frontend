import { BlogPost } from '@/interface/types';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

interface BlogCardProps {
    post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-300">
            {/* Blog Image */}
            <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
            />

            {/* Blog Content */}
            <div className="p-6">
                <h2 className="text-[22px] font-semibold text-gray-900 mb-2 leading-tight">
                    {post.title}
                </h2>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                    {post.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-2 py-1.5 border border-gray-300 text-gray-600 rounded-md text-xs font-medium"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Read More Link */}
                <a
                    href={post.url}
                    className="inline-flex justify-between p-2 rounded-lg border-gray-300 items-center text-gray-800 hover:text-gray-900 border w-full font-medium transition-colors duration-300"
                >
                    Read more
                    <FaArrowRight className="ml-2 text-sm" />
                </a>
            </div>
        </div>
    );
};

export default BlogCard;