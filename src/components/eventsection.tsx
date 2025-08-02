import React from 'react'

const eventsection = () => {

    const eventTypes = [
        'BIRTHDAYS',
        'PRIVATE', 
        'VIRTUAL',
        'WEDDINGS',
        'NON-PROFIT',
        'CORPORATE',
        'BEACH-PARTY',
        'REUNIONS'
      ];

  return (
    <section className="w-full bg-gray-50 py-12 px-4 sm:py-16 md:py-20">
      <div className="max-w-6xl mx-auto">
        {/* Main Title */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12">
            Events You Can Create
          </h2>
          
          {/* Event Types Grid */}
          <div className="mb-12 sm:mb-16">
            {/* Mobile Layout - Custom Grid */}
            <div className="block sm:hidden">
              {/* First row - 3 items */}
              <div className="grid grid-cols-3 gap-3 mb-3">
                {eventTypes.slice(0, 3).map((eventType, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer group text-center"
                  >
                    <span className="text-xs font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                      {eventType}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Second row - 3 items */}
              <div className="grid grid-cols-3 gap-3 mb-3">
                {eventTypes.slice(3, 6).map((eventType, index) => (
                  <div 
                    key={index + 3}
                    className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer group text-center"
                  >
                    <span className="text-xs font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                      {eventType}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Third row - 2 items centered */}
              <div className="flex justify-center gap-3">
                {eventTypes.slice(6, 8).map((eventType, index) => (
                  <div 
                    key={index + 6}
                    className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer group text-center w-[calc(33.333%-0.5rem)]"
                  >
                    <span className="text-xs font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                      {eventType}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop Layout - 4 columns */}
            <div className="hidden sm:grid sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {eventTypes.map((eventType, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer group text-center"
                >
                  <span className="text-[24px] md:text-base font-bold text-black group-hover:text-gray-900 transition-colors">
                    {eventType}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12  pb-8 border-b-1 md:border-b-3 border-[#000000]/90">
  {/* Left Content - Hidden on mobile, visible on lg+ */}
  <div className="hidden lg:flex flex-1 max-w-2xl">
    <div>
      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
        Start creating memorable events with instant networking today
      </h3>
      
      <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
        Join thousands of event organizers who are already using our platform to create more engaging, connected experiences for their attendees.
      </p>
      
      <button className="bg-gradient-to-r from-[#2A2438] to-[#1E1B2BCC]/80 hover:from-[#2A2438]/90 hover:to-[#1E1B2BCC]/90 text-white px-6 py-3 rounded-full font-medium text-sm sm:text-base transition-colors duration-200 inline-flex items-center group">
        Get Started
        <svg 
          className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>

  {/* Right Content - Hidden on mobile, visible on lg+ */}
  <div className="hidden lg:flex flex-shrink-0 text-center lg:text-right">
    <div className="p-4 sm:p-6 ">
      <p className="text-xs sm:text-sm font-medium text-gray-500 mb-1">
        Trusted by
      </p>
      <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
        500+ Event Organizers
      </p>
    </div>
  </div>
</div>
      </div>
    </section>
  )
}

export default eventsection