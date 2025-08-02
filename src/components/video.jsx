import React from 'react'
import Image from 'next/image';

const VideoSection = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "PERFUME 2024",
      subtitle: "@ Seun Event",
      time: "4 WE . Today, 11:00 AM",
      image: "/event1.jpg", // Make sure these images exist in your public folder
      category: "Event"
    },
    {
      id: 2,
      title: "HIS WIFETASTING",
      subtitle: "@ His Majesty",
      time: "Tomorrow, 2:00 PM",
      image: "/event2.jpg", // Make sure these images exist in your public folder
      category: "Event"
    }
  ];

  return (
    <section className="w-full bg-[#FAF8FF] py-8 px-4 sm:py-12 md:py-16">
      <div className="max-w-6xl mx-auto">
        
        {/* Video Section */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <div className="p-[4px] rounded-2xl sm:rounded-3xl bg-[linear-gradient(135deg,#F047FF,#FE7D50,#D68F30,#FD5059,#FF4A68,#FA59CD,#9747FF4D,#626262)]">
            <div className="relative bg-[#FAF8FF] rounded-[inherit] p-6 sm:p-8 md:p-12">
              {/* Video Content */}
              <div className="text-center">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-4">
                  See How We're Redefining Events
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-6 sm:mb-8">
                  Watch our Quick Intro
                </p>
                
                {/* Play Button */}
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

        {/* Upcoming Events Section */}
        <div>
          {/* Section Header */}
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <div>
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                Upcoming Events
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Near You
              </p>
            </div>
            <button className="text-sm sm:text-base text-purple-600 hover:text-purple-700 font-medium flex items-center transition-colors duration-200 group">
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

          {/* Events Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {upcomingEvents.map((event) => (
              <div 
                key={event.id} 
                className="bg-white rounded-xl border border-gray-100 hover:border-gray-200 p-4 sm:p-5 hover:shadow-md transition-all duration-200 cursor-pointer group"
              >
                <div className="flex items-start space-x-4">
                  {/* Event Image */}
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 flex-shrink-0 overflow-hidden">
                    <Image
                      src={event.image} 
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                  
                  {/* Event Details */}
                  <div className="flex-1 min-w-0">
                    <h5 className="font-bold text-gray-900 text-sm sm:text-base mb-1 truncate group-hover:text-purple-600 transition-colors duration-200">
                      {event.title}
                    </h5>
                    <p className="text-xs sm:text-sm text-gray-600 mb-2 truncate">
                      {event.subtitle}
                    </p>
                    <p className="text-xs text-gray-500">
                      {event.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoSection