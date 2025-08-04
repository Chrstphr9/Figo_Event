import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const EventCheckInApp = () => {
  return (
    <div 
      className="flex items-center justify-center" 
      style={{
        width: '1440px',
        height: '420px',
        top: '6257px',
        left: '2px',
        transform: 'rotate(0deg)',
        opacity: 1
      }}
    >
      <div className="w-full h-full flex flex-row items-center gap-15  px-35 rounded-3xl shadow-2xl">
        
        {/* Content Section */}
        <div className="flex-1 max-w-lg text-left ">
          <h1 className="font-bold text-3xl leading-none tracking-normal mb-10 text-gray-800">
            Download Our Event Check-In App &<br />
            Provide Secure Access Into Your Events
          </h1>
          
          <div className="flex flex-row gap-5 justify-start">
            {/* Google Play Button */}
            <a 
              href="#" 
              className="inline-flex items-center gap-3 px-6 py-3  text-white rounded-xl font-semibold text-base"
            >
             <Image src={assets.google} alt='ys' />
            </a>
            
            {/* App Store Button */}
            <a 
              href="#" 
              className="inline-flex items-center gap-3 px-6 py-3  text-white rounded-xl font-semibold text-base"
            >
              <Image src={assets.apple} alt='ys' />
            </a>
          </div>
        </div>
        
        {/* Phone Mockup Section */}
        <div className="flex-1 max-w-md">
          <div className="w-full h-full flex items-center justify-center text-white text-lg font-medium">
          <Image src={assets.qr} alt='ys' />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default EventCheckInApp;