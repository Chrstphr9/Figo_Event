import React from 'react';
import Image from 'next/image';
import {assets} from '@/assets/assets'

const Footer = () => {
  return (
    <footer className="bg-[#2E254D] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center mb-4 md:justify-start">
              <span className="font-manrope font-semibold md:font-semibold text-base leading-[150%] tracking-[0.32px] md:tracking-[0.32px] md:text-left text-center">
              <Image src={assets.image3} alt="logo"/>
              </span>
            </div>
            
            <div className="mb-6">
              <p className="text-[16px] font-manrope font-bold md:font-semibold text-base leading-[150%] tracking-[0.32px] text-center md:text-left mb-2">
                YOUR ULTIMATE EVENT SOLUTION.
              </p>
              <p className="font-manrope font-bold md:font-semibold text-base leading-[150%] tracking-[0.32px] text-center md:text-left">
                Power Up Your Events With Ease.
              </p>
              <p className="font-manrope font-bold md:font-semibold text-base leading-[150%] tracking-[0.32px] text-center md:text-left mt-2">
                Create and customize your events, sell tickets, and provide smart access control.
              </p>
            </div>

            <div className="text-center md:text-left">
              <p className="font-manrope font-bold md:font-semibold text-base leading-[150%] tracking-[0.32px] text-center md:text-left mb-3">
                Follow Us On:
              </p>
              <div className="flex justify-center space-x-4 md:justify-start">
                <a href="https://instagram.com/figoevents.app" target='_blank' className="flex items-center justify-center w-8 h-8 transition-colors rounded hover:bg-gray-600">
                <Image src={assets.instagram} alt="logo"/>
                </a>
                <a href="https://twitter.com/figoevents.app" target='_blank' className="flex items-center justify-center w-8 h-8 transition-colors rounded hover:bg-gray-600">
                <Image src={assets.x} alt="logo"/>
                </a>
                <a href="https://linkedin.com/figoevents.app" target='_blank' className="flex items-center justify-center w-8 h-8 transition-colors rounded hover:bg-gray-600">
                <Image src={assets.linkedin} alt="logo"/>
                </a>
                <a href="https://youtube.com/figoevents.app" target='_blank' className="flex items-center justify-center w-8 h-8 transition-colors rounded hover:bg-gray-600">
                <Image src={assets.youtube} alt="logo"/>
                </a>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="text-center md:text-left">
            <h3 className="font-manrope font-bold md:font-semibold text-base leading-[150%] tracking-[0.32px] text-center md:text-left mb-4">
              Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="font-manrope font-bold md:font-semibold text-base leading-[150%] tracking-[0.32px] text-center md:text-left hover:text-gray-300 transition-colors block">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="font-manrope font-bold md:font-semibold text-base leading-[150%] tracking-[0.32px] text-center md:text-left hover:text-gray-300 transition-colors block">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="font-manrope font-bold md:font-semibold text-base leading-[150%] tracking-[0.32px] text-center md:text-left hover:text-gray-300 transition-colors block">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="font-manrope font-bold md:font-semibold text-base leading-[150%] tracking-[0.32px] text-center md:text-left hover:text-gray-300 transition-colors block">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="text-center md:text-left">
            {/* <h3 className="font-manrope font-bold md:font-semibold text-base leading-[150%] tracking-[0.32px] text-center md:text-left mb-4">
              Support
            </h3> */}
            <ul className="space-y-3">
              <li>
                <a href="#" className="font-manrope font-bold md:font-semibold text-base leading-[150%] tracking-[0.32px] text-center md:text-left hover:text-gray-300 transition-colors block">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="font-manrope font-bold md:font-semibold text-base leading-[150%] tracking-[0.32px] text-center md:text-left hover:text-gray-300 transition-colors block">
                  hello@figoevents.com
                </a>
              </li>
              <li>
                <a href="#" className="font-manrope font-bold md:font-semibold text-base leading-[150%] tracking-[0.32px] text-center md:text-left hover:text-gray-300 transition-colors block">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="#" className="font-manrope font-bold md:font-semibold text-base leading-[150%] tracking-[0.32px] text-center md:text-left hover:text-gray-300 transition-colors block underline">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;