import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const VideoSection = () => {
  return (
    <section className="w-full bg-[#FAF8FF] py-8 px-4 sm:py-12 md:py-16">
      <div className="max-w-6xl mx-auto">
        
        {/* Video Section (unchanged) */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <div className="p-[4px] rounded-2xl sm:rounded-3xl bg-[linear-gradient(135deg,#F047FF,#FE7D50,#D68F30,#FD5059,#FF4A68,#FA59CD,#9747FF4D,#626262)]">
            <div className="relative bg-[#FAF8FF] rounded-[inherit] p-6 sm:p-8 md:p-12">
              <div className="text-center">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-4">
                  See How We're Redefining Events
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-6 sm:mb-8">
                  Watch our Quick Intro
                </p>
                
                <div className="relative flex items-center justify-center mb-4 border-3 border-black rounded-full w-24 h-24 sm:w-32 sm:h-32 mx-auto">
                  <button className="absolute w-18 h-18 sm:w-26 sm:h-26 bg-[#553286] hover:bg-purple-700 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl group">
                    <svg 
                      className="w-12 h-12 sm:w-18 sm:h-18 text-white ml-1 group-hover:scale-110 transition-transform duration-200" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Events Section - Manual Listing */}
        <div>
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <div>
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                Upcoming Events
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Near You
              </p>
            </div>
            <button className="text-sm sm:text-base text-black font-medium flex items-center cursor-pointer">
              View All
              <svg 
                className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Events Grid - Manually Listed */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Event 1 */}
            <div className="p-4 sm:p-5">
              <div className="flex items-start space-x-4">
                <div className="relative w-[101px] h-[101px] sm:w-[150px] sm:h-[150px] rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 flex-shrink-0 overflow-hidden">
                  <Image
                    src={assets.event1}
                    alt="PERFUME 2024"
                    width={150}
                    height={150}
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h5 className="font-bold text-black text-[14px] sm:text-[20px] sm:text-base mt-[10px] sm:mt-[15px] ">
                    IFEADE 2025
                  </h5>
                  <p className=" text-[12px] sm:text-[16px] sm:text-sm text-black mt-[5px] sm:mt-[15px] truncate font-medium">
                    @ Saphyr Events
                  </p>
                  <p className="text-[12px] sm:text-[16px] font-semibold text-[#000000]/70 mt-[25px] sm:mt-[40px]">
                    <span className='text-red-800'>LIVE</span>. Today, 11:00 AM
                  </p>
                </div>
              </div>
            </div>

            {/* Event 2 */}
            <div className="rounded-xl p-4 sm:p-5 group">
              <div className="flex items-start space-x-4">
              <div className="relative w-[101px] h-[101px] sm:w-[150px] sm:h-[150px] rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 flex-shrink-0 overflow-hidden">
                  <Image
                    src={assets.event2}
                    alt="HIS WIFETASTING"
                    width={150}
                    height={150}
                    className="object-cover "
                  />
                </div>
                <div className="flex-1 min-w-0">
                <h5 className="font-bold text-black text-[14px] sm:text-[20px] sm:text-base mt-[10px] sm:mt-[15px] ">
                    IRIS WINESTAND
                  </h5>
                  <p className=" text-[12px] sm:text-[16px] sm:text-sm text-black mt-[5px] sm:mt-[15px] truncate font-medium">
                    Iris Vineyard
                  </p>
                  <p className="text-[12px] sm:text-[16px] font-semibold text-[#000000]/70 mt-[25px] sm:mt-[40px]">
                    Tomorrow, 4:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;