'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Disable scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
 <div className="fixed top-4 left-0 w-full z-50 flex justify-center inter-font">

       <nav className="bg-white/90 backdrop-blur-md shadow-md py-4 md:px-8 rounded-2xl container w-full flex items-center justify-between">

          {/* Logo */}
          <div className="text-3xl md:text-[40px] poppins-font font-extrabold text-[#1B1F3A] ">Logo</div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-6 text-sm md:text-base font-medium inter-font text-[#1B1F3A]">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/browse">Browse Properties</Link></li>
            <li><Link href="/contact">Contact us</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/about">About us</Link></li>
          </ul>

          {/* Buttons - desktop */}
          <div className="hidden md:flex space-x-3">
            <Link href="/login">
              <button className="px-4 py-2 border border-gray-500 text-sm md:text-base rounded-md hover:bg-gray-100">
                Login
              </button>
            </Link>
            <Link href="/register">
              <button className="bg-[#D5BC79] hover:bg-[#c4ac6a] text-white py-2 px-4 rounded-md transition-colors duration-300 flex-grow text-center">
                Register
              </button>
            </Link>
          </div>

          {/* Hamburger icon - mobile */}
          <button className="md:hidden" onClick={() => setIsOpen(true)} aria-label="Open menu">
            <Menu size={24} />
          </button>
        </nav>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/90 bg-opacity-50 z-40" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <span className="text-3xl md:text-[40px] poppins-font font-extrabold text-[#1B1F3A]">Logo</span>
          <button onClick={() => setIsOpen(false)} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col p-4 space-y-4 text-sm md:text-base font-medium inter-font text-[#1B1F3A]">
          <Link href="/" onClick={handleLinkClick}>Home</Link>
          <Link href="/browse" onClick={handleLinkClick}>Browse Properties</Link>
          <Link href="/contact" onClick={handleLinkClick}>Contact us</Link>
          <Link href="/blog" onClick={handleLinkClick}>Blog</Link>
          <Link href="/about" onClick={handleLinkClick}>About us</Link>

          <hr className="my-2" />

          <Link href="/login" onClick={handleLinkClick}>
            <button className="w-full px-4 py-2 border border-gray-500 text-sm rounded-md hover:bg-gray-100">
              Login
            </button>
          </Link>
          <Link href="/register" onClick={handleLinkClick}>
            <button className="w-full px-4 py-2 bg-yellow-600 text-white text-sm rounded-md hover:bg-yellow-700">
              Register
            </button>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
