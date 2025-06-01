'use client';

import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#131733] text-white py-12 inter-font">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-18 md:gap-28">
        {/* Column 1: Logo + Info */}
        <div>
          <h2 className="text-3xl md:text-[40px] poppins-font font-extrabold text-white  mb-2">Logo</h2>
          <p className="text-sm md:text-base font-normal  mb-6">
            Tech-enabled platform for data-driven property investment.
          </p>

          <div className="mb-4">
            <select className="bg-blue-500 border border-gray-400 text-sm px-4 py-2 rounded-md text-white">
              <option>Language</option>
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
          </div>

          <p className="text-sm md:text-base font-normal  ">Legal & Policies</p>
          <p className="text-base md:text-xl font-normal ">© {currentYear} iRendity. All rights reserved.</p>
        </div>

        {/* Column 2: Platform Links */}
        <div>
          <h3 className="text-xl md:text-[28px] font-semibold mb-4">Platform</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="text-base md:text-xl font-normal hover:text-white">Home</a></li>
            <li><a href="#" className="text-base md:text-xl font-normal hover:text-white">Browse Properties</a></li>
            <li><a href="#" className="text-base md:text-xl font-normal hover:text-white">Membership Plans</a></li>
            <li><a href="#" className="text-base md:text-xl font-normal hover:text-white">Saved Listings</a></li>
            <li><a href="#" className="text-base md:text-xl font-normal hover:text-white">Blog</a></li>
            <li><a href="#" className="text-base md:text-xl font-normal hover:text-white">About</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h3 className="text-xl md:text-[28px] font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="text-base md:text-xl font-normal hover:text-white">Help Center</a></li>
            <li><a href="#" className="text-base md:text-xl font-normal hover:text-white">Investor Guides</a></li>
            <li><a href="#" className="text-base md:text-xl font-normal hover:text-white">Tax & Legal Info</a></li>
            <li>Email: <a href="mailto:loremispsum@info.com" className="hover:text-white">loremispsum@info.com</a></li>
            <li>Phone: 01234567890</li>
            <li>Location: Arizona, USA</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
