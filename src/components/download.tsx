import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const EventCheckInApp = () => {
  return (
    <div className="flex items-center justify-center w-full px-4 py-10 md:py-0">
      <div 
        className="flex flex-col items-center w-full gap-5 px-5 py-8 md:flex-row md:gap-15 md:px-35 md:py-0 max-w-7xl"
        style={{
          minHeight: '300px',
          height: 'auto'
        }}
      >
        
        {/* Content Section */}
        <div className="flex-1 max-w-lg text-center md:text-left">
          <h1 className="mb-6 text-2xl font-bold leading-tight tracking-normal text-gray-800 md:mb-10 md:text-3xl md:leading-none font-space">
            Download Our Event Check-In App<br />
            & Provide Secure Access Into Your Events
          </h1>
          
          <div className="flex flex-col justify-center gap-3 sm:flex-row md:justify-start sm:gap-5">
            {/* Google Play Button */}
            <a 
              href="#" 
              className="inline-flex items-center justify-center gap-3 px-4 py-3 text-sm font-semibold text-white transition-opacity sm:px-6 sm:text-base rounded-xl hover:opacity-90"
            >
              <Image 
                src={assets.google} 
                alt='Download on Google Play Store' 
                className="w-auto h-8 sm:h-10"
              />
            </a>
            
            {/* App Store Button */}
            <a 
              href="#" 
              className="inline-flex items-center justify-center gap-3 px-4 py-3 text-sm font-semibold text-white transition-opacity sm:px-6 sm:text-base rounded-xl hover:opacity-90"
            >
              <Image 
                src={assets.apple} 
                alt='Download on Apple App Store' 
                className="w-auto h-8 sm:h-10"
              />
            </a>
          </div>
        </div>
        
        {/* Phone Mockup Section - Hidden on mobile */}
        <div className="flex-1 hidden max-w-md md:flex">
          <div className="flex items-center justify-center w-full h-full text-lg font-medium text-white">
            <Image 
              src={assets.qr} 
              alt='QR Code Scanner Interface' 
              className="w-full h-auto max-w-sm"
            />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default EventCheckInApp;