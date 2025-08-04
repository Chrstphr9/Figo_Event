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
    <section className="w-full px-4 py-12 bg-gray-50 sm:py-16 md:py-20">
      <div className="max-w-6xl mx-auto">
        {/* Main Title */}
        <div className="mb-8 text-center sm:mb-12">
          <h2 className="text-2xl font-bold text-gray-900 font-space spacemb-8 sm:text-3xl md:text-4xl sm:mb-12">
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
                    className="p-3 text-center transition-shadow duration-200 bg-white rounded-lg shadow-sm cursor-pointer hover:shadow-md group"
                  >
                    <span className="text-xs font-medium text-gray-700 transition-colors group-hover:text-gray-900">
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
                    className="p-3 text-center transition-shadow duration-200 bg-white rounded-lg shadow-sm cursor-pointer hover:shadow-md group"
                  >
                    <span className="text-xs font-medium text-gray-700 transition-colors group-hover:text-gray-900">
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
                    <span className="text-xs font-medium text-gray-700 transition-colors group-hover:text-gray-900">
                      {eventType}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop Layout - 4 columns */}
            <div className="hidden gap-4 sm:grid sm:grid-cols-4 sm:gap-6 md:gap-8">
              {eventTypes.map((eventType, index) => (
                <div 
                  key={index}
                  className="p-4 text-center transition-shadow duration-200 bg-white rounded-lg shadow-sm cursor-pointer md:p-6 hover:shadow-md group"
                >
                  <span className="font-space text-[24px] md:text-base font-bold text-black group-hover:text-gray-900 transition-colors">
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
  <div className="flex-1 hidden max-w-2xl lg:flex">
    <div>
      <h3 className="mb-4 text-xl font-bold leading-tight text-gray-900 font-space sm:text-2xl md:text-3xl lg:text-4xl sm:mb-6">
        Start creating memorable events with instant networking today
      </h3>
      
      <p className="mb-6 text-sm leading-relaxed text-gray-600 font-space sm:text-base md:text-lg sm:mb-8">
        Join thousands of event organizers who are already using our platform to create more engaging, connected experiences for their attendees.
      </p>
      
      <button className="font-inter bg-gradient-to-r from-[#2A2438] to-[#1E1B2BCC]/80 hover:from-[#2A2438]/90 hover:to-[#1E1B2BCC]/90 text-white px-6 py-3 rounded-full font-medium text-sm sm:text-base transition-colors duration-200 inline-flex items-center group">
        Get Started
        <svg 
          className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" 
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
  <div className="flex-shrink-0 hidden text-center lg:flex lg:text-right">
    <div className="p-4 sm:p-6 ">
      <p className="mb-1 text-xs font-medium text-gray-500 sm:text-sm">
        Trusted by
      </p>
      <p className="text-lg font-bold text-gray-900 font-inter sm:text-xl md:text-2xl">
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