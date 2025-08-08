'use client'
import { useState } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const VideoSection = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  return (
    <section className="w-full bg-[#FAF8FF] py-8 px-4 sm:py-12 md:py-16">
      <div className="max-w-6xl mx-auto">
        
        {/* Video Section (unchanged) */}
        <div className="mb-8 sm:mb-12 md:mb-16">
      <div className="p-[4px] rounded-2xl sm:rounded-3xl bg-[linear-gradient(135deg,#F047FF,#FE7D50,#D68F30,#FD5059,#FF4A68,#FA59CD,#9747FF4D,#626262)]">
        <div className="relative bg-[#FAF8FF] rounded-[inherit] p-6 sm:p-8 md:p-12">
          <div className="text-center">
            <h3 className="mb-2 text-lg font-bold text-gray-900 font-space sm:text-xl md:text-2xl sm:mb-4">
              See How We&apos;re Redefining Events
            </h3>
            <p className="mb-6 text-xs text-gray-600 font-space sm:text-sm sm:mb-8">
              Watch our Quick Intro
            </p>
            
            <div className="relative flex items-center justify-center w-24 h-24 mx-auto mb-4 border-black rounded-full border-3 sm:w-32 sm:h-32">
              <button 
                onClick={openModal}
                className="absolute w-18 h-18 sm:w-26 sm:h-26 bg-[#553286] hover:bg-purple-700 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl group"
                aria-label="Play video"
              >
                <svg 
                  className="w-12 h-12 ml-1 text-white transition-transform duration-200 sm:w-18 sm:h-18 group-hover:scale-110" 
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

      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={closeModal}
              className="absolute right-0 p-2 text-white -top-10 hover:text-gray-300"
              aria-label="Close video"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-64 sm:h-96 md:h-[500px]"
                src="https://www.youtube.com/embed/w4P8lOH6I-Q?autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>

        {/* Upcoming Events Section - Manual Listing */}
        <div>
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <div>
              <h4 className="text-lg font-bold text-gray-900 font-space sm:text-xl md:text-2xl">
                Upcoming Events
              </h4>
              <p className="mt-1 text-xs text-gray-600 font-space sm:text-sm">
                Near You
              </p>
            </div>
            <button className="flex items-center text-sm font-medium text-black cursor-pointer font-inter sm:text-base">
              View All
              <svg 
                className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Events Grid - Manually Listed */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
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
                  <h5 className="font-inter font-bold text-black text-[14px] sm:text-[20px] sm:text-base mt-[10px] sm:mt-[15px] ">
                    IFEADE 2025
                  </h5>
                  <p className="font-inter text-[12px] sm:text-[16px] sm:text-sm text-black mt-[5px] sm:mt-[15px] truncate font-medium">
                    @ Saphyr Events
                  </p>
                  <p className="font-inter text-[12px] sm:text-[16px] font-semibold text-[#000000]/70 mt-[25px] sm:mt-[40px]">
                    <span className='text-red-800'>LIVE</span> Today, 11:00 AM
                  </p>
                </div>
              </div>
            </div>

            {/* Event 2 */}
            <div className="p-4 rounded-xl sm:p-5 group">
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
                <h5 className="font-inter font-bold text-black text-[14px] sm:text-[20px] sm:text-base mt-[10px] sm:mt-[15px] ">
                    IRIS WINESTAND
                  </h5>
                  <p className="font-inter text-[12px] sm:text-[16px] sm:text-sm text-black mt-[5px] sm:mt-[15px] truncate font-medium">
                    Iris Vineyard
                  </p>
                  <p className="font-inter text-[12px] sm:text-[16px]  sm:font-normal text-[#000000]/70 mt-[25px] sm:mt-[40px]">
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