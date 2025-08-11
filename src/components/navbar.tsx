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
      <nav className={`hidden lg:flex items-center justify-between px-6 h-[50px] w-full mx-auto transition-all duration-300 fixed top-0 left-0 right-0 z-50 ${scrolled
          ? 'bg-white/80 backdrop-blur-lg border-b border-gray-200/30 shadow-sm'
          : 'bg-white/20 backdrop-blur-md border-b border-transparent'
        }`}>
        {/* Logo Section */}
        <div className="flex items-center pl-10 space-x-8">
          <div className="w-40 h-36.98 items-center justify-center">
            <Image src={assets.image1} alt="logo" />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="absolute left-0 right-0 flex items-center justify-center mx-auto w-fit">
          <div className='flex items-center space-x-8'>
            <a href='#link' className={`transition-colors text-[16px] font-medium font-inter ${scrolled ? 'text-gray-800 hover:text-purple-600' : 'text-black hover:text-purple-300'
              }`}>
              About Us
            </a>
            <a href="#pricing" className={`transition-colors text-[16px] font-light font-inter ${scrolled ? 'text-gray-800 hover:text-purple-600' : 'text-black hover:text-purple-300'
              }`}>
              Pricing
            </a>
            <a href="#faq" className={`transition-colors text-[16px] font-light font-inter ${scrolled ? 'text-gray-800 hover:text-purple-600' : 'text-black hover:text-purple-300'
              }`}>
              FAQs
            </a>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <a href="https://app.figoevents.com/app/index" target="_blank" rel="noopener noreferrer">
            <button className={`text-[16px] font-medium font-inter cursor-pointer ${scrolled ? 'text-gray-800' : 'text-black'
              }`}>
              Sign in
            </button>
          </a>
          <a
            href="https://app.figoevents.com/app/signup"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={`px-4 py-2 rounded-[24px] text-[16px] font-medium font-inter border-[1.5px] transition-all cursor-pointer ${scrolled
                ? 'text-gray-800 border-gray-800 hover:bg-gray-100/30'
                : 'text-black border-white hover:bg-white/20'
              }`}>
              Get Started
            </button>
          </a>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className={`lg:hidden transition-all duration-300 fixed top-0 left-0 right-0 z-50 ${
  scrolled
    ? 'bg-white/80 backdrop-blur-lg border-b border-gray-200/30'
    : 'bg-white/20 backdrop-blur-md border-b border-transparent'
}`}>
  {/* Mobile Header */}
  <div className="flex items-center justify-between h-12 px-4">
    {/* Logo */}
    <div className="flex-shrink-0">
      <Image
        src={assets.image1}
        alt="logo"
        width={164}
        height={148}
        className={`h-8 w-auto ${scrolled ? '' : 'filter '}`}
      />
    </div>

    {/* Menu Toggle Button */}
    <button
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      className="p-2 transition-colors rounded-md hover:bg-white/10"
      aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
    >
      {isMobileMenuOpen ? (
        <X 
          size={20} 
          className={`transition-colors ${scrolled ? 'text-gray-800' : 'text-black'}`} 
        />
      ) : (
        <Image
          src={assets.menu}
          alt="Menu"
          width={20}
          height={20}
          className={`w-10 h-10 transition-all ${scrolled ? '' : 'filter '}`}
        />
      )}
    </button>
  </div>

  {/* Mobile Menu Dropdown */}
  <div className={`overflow-hidden transition-all duration-300 ${
    isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
  }`}>
    <div className={`${
      scrolled ? 'bg-white/90' : 'bg-white/95'
    } backdrop-blur-xl border-t border-gray-200/30 shadow-lg`}>
      <div className="px-4 py-4">
        {/* Navigation Links */}
        <div className="mb-4 space-y-1">
          {[
            { label: 'About Us', href: '#link' },
            { label: 'Pricing', href: '#pricing' },
            { label: 'FAQs', href: '#faqs' }
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block px-3 py-2 font-medium text-gray-800 transition-all rounded-md hover:text-purple-600 hover:bg-purple-50/50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="pt-4 space-y-3 border-t border-gray-200/30">
          <a 
          href="https://app.figoevents.com/app/index"
          target='_blank'>
          <button 
            className="w-full px-3 py-2 font-medium text-left text-gray-800 transition-all rounded-md hover:text-purple-600 hover:bg-purple-50/50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Sign in
          </button>
          </a>
        <a 
        href="https://app.figoevents.com/app/signup"
        target='_blank'>
        <button 
            className="w-full px-4 py-2.5 bg-[#553286] hover:bg-purple-700 text-white rounded-md transition-colors font-medium shadow-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Started
          </button>
        </a>
        </div>
      </div>
    </div>
  </div>
</nav>
    </>
  );
};

export default Navbar;