'use client'
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';
import { assets } from '@/assets/assets'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className={`hidden lg:flex items-center justify-between px-6 h-[50px] w-full max-w-[1440px] mx-auto transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-lg border-b border-gray-200/30 shadow-sm' 
          : 'bg-white/20 backdrop-blur-md border-b border-transparent'
      }`}>
        {/* Logo Section */}
        <div className="flex items-center pl-10 space-x-8">
          <div className="w-181 h-36.98 items-center justify-center">
            <Image src={assets.image1} alt="logo"/>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="absolute left-0 right-0 flex items-center justify-center mx-auto w-fit">
          <div className='flex items-center space-x-8'>
            <a href="#" className={`transition-colors text-[16px] font-medium font-inter ${
              scrolled ? 'text-gray-800 hover:text-purple-600' : 'text-black hover:text-purple-300'
            }`}>
              About Us
            </a>
            <a href="#" className={`transition-colors text-[16px] font-light font-inter ${
              scrolled ? 'text-gray-800 hover:text-purple-600' : 'text-black hover:text-purple-300'
            }`}>
              Pricing
            </a>
            <a href="#" className={`transition-colors text-[16px] font-light font-inter ${
              scrolled ? 'text-gray-800 hover:text-purple-600' : 'text-black hover:text-purple-300'
            }`}>
              FAQs
            </a>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <button className={`text-[16px] font-medium font-inter ${
            scrolled ? 'text-gray-800' : 'text-black'
          }`}>
            Sign in
          </button>
          <button className={`px-4 py-2 rounded-[24px] text-[16px] font-medium font-inter  border-[1.5px] transition-all ${
            scrolled 
              ? 'text-gray-800 border-gray-800 hover:bg-gray-100/30' 
              : 'text-black border-white hover:bg-white/20'
          }`}>
            Get Started
          </button>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className={`lg:hidden transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-lg border-b border-gray-200/30' 
          : 'bg-white/20 backdrop-blur-md border-b border-transparent'
      }`}>
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo Section */}
          <div className="w-181 h-36.98 items-center justify-center">
            <Image 
              src={assets.image1} 
              alt="logo"
              className={scrolled ? '' : 'filter brightness-0 invert'}
            />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X size={20} className={scrolled ? 'text-gray-800' : 'text-white'} />
            ) : (
              <Image
                src={assets.menu}
                alt="Menu"
                width={20}
                height={20}
                className={`w-5 h-5 ${scrolled ? '' : 'filter brightness-0 invert'}`}
              />
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className={`${scrolled ? 'bg-white/90' : 'bg-white/95'} backdrop-blur-xl border-t border-gray-200/30 shadow-lg`}>
            <div className="px-4 py-2 space-y-3">
              <a
                href="#"
                className="block py-2 text-gray-800 transition-colors hover:text-purple-600 text-[16px] font-medium"
              >
                About Us
              </a>
              <a
                href="#"
                className="block py-2 text-gray-800 transition-colors hover:text-purple-600 text-[16px] font-medium"
              >
                Pricing
              </a>
              <a
                href="#"
                className="block py-2 text-gray-800 transition-colors hover:text-purple-600 text-[16px] font-medium"
              >
                FAQs
              </a>
              <div className="pt-2 space-y-3 border-t border-gray-200/30">
                <button className="block w-full py-2 text-left text-gray-800 transition-colors hover:text-purple-600 text-[16px] font-medium">
                  Sign in
                </button>
                <button className="w-full px-4 py-2 text-black transition-colors bg-purple-600 rounded-md hover:bg-purple-700 text-[16px] font-medium">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;