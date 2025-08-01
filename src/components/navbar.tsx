'use client'
import { useState } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden lg:flex items-center justify-between px-6 h-12 w-full max-w-[1440px] mx-auto fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100/10">
        {/* Logo Section */}
        <div className="flex items-center space-x-8 pl-10">
          <div className="w-181 h-36.98 items-center justify-center">
            <Image src={assets.image1} alt="logo" />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center justify-center absolute left-0 right-0 mx-auto w-fit">
          <div className='flex items-center space-x-8'>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors text-[16px] font-normal">
              About Us
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors text-[16px] font-normal">
              Pricing
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors text-[16px] font-normal">
              FAQs
            </a>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <button className="text-black text-[16px] font-normal">
            Sign in
          </button>
          <button className="text-black px-4 py-2 rounded-[24px] text-[16px] font-normal border-[1.5px]">
            Get Started
          </button>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100/10">
        <div className="flex items-center justify-between px-4 h-12">
          {/* Logo Section */}
          <div className="w-181 h-36.98 items-center justify-center">
            <Image src={assets.image1} alt="logo" />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-700 hover:text-purple-600 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X size={20} />
            ) : (
              <Image
                src={assets.menu}
                alt="Menu"
                width={20}
                height={20}
                className="w-20 h-10"
              />
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="bg-white/90 backdrop-blur-md border-t border-gray-100/10 shadow-lg">
            <div className="px-4 py-2 space-y-2">
              <a href="#" className="block py-2 text-gray-700 hover:text-purple-600 transition-colors text-sm font-medium">
                About Us
              </a>
              <a href="#" className="block py-2 text-gray-700 hover:text-purple-600 transition-colors text-sm font-medium">
                Pricing
              </a>
              <a href="#" className="block py-2 text-gray-700 hover:text-purple-600 transition-colors text-sm font-medium">
                FAQs
              </a>
              <div className="pt-2 border-t border-gray-100/20 space-y-2">
                <button className="block w-full text-left py-2 text-gray-700 hover:text-purple-600 transition-colors text-sm font-medium">
                  Sign in
                </button>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
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