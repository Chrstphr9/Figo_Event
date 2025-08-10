import React from 'react'

const pricing = () => {

    const features = [
        "Create Unlimited Events",
        "Customize your Events",
        "Event Registration Link",
        "RSVP",
        "Sell Tickets",
        "Bulk Attendees Registration",
        "Tickets via WhatsApp (For paid events)",
        "QR Code and NFC Check-ins",
        "Selfie Photo Check-in Support",
        "Free Attendee Business Cards",
        "Reports and Analytics",
        "Lifetime Updates"
      ];


  return (
    <section id='pricing' className="w-full px-4 py-12 bg-gray-50 sm:py-16 md:py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center sm:mb-16 ">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 font-space sm:text-3xl md:text-4xl">
            Pricing plans
          </h2>
          <p className="text-sm text-gray-600 font-space sm:text-base md:text-lg">
            Choose the best plan for your needs
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid max-w-5xl grid-cols-1 gap-6 mx-auto lg:grid-cols-2 lg:gap-8">
          
          {/* Pay-Per-Event Plan */}
          <div className="p-6 text-center bg-white border border-gray-100 shadow-sm rounded-2xl sm:p-8">
            {/* Plan Header */}
            <div className="bg-[#A947FF]/20 rounded-xl p-4 mb-6 flex flex-col items-center">
              <h3 className="font-space bg-white rounded-4xl text-lg sm:text-xl font-semibold text-gray-900 mb-8 px-4 py-2 w-[190px] ">
                Pay-Per-Event
              </h3>
              <div className="flex items-baseline gap-1">
                <span className="text-lg font-bold text-green-600 sm:text-xl">Free</span>
                <span className="text-[17px] text-black font-medium">for up to 20 attendees</span>
              </div>
            </div>

            <p className="mb-6 text-sm font-medium text-black font-space">
              Best for Solo Organizers and Intimate Events
            </p>

            <a href="https://app.figoevents.com/app/signup" target="_blank" rel="noopener noreferrer">
            <button className="flex items-center justify-center w-full px-6 py-3 mb-8 text-sm font-medium text-white transition-colors duration-200 bg-gray-900 rounded-full font-space hover:bg-gray-800 sm:text-base group">
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
            </a>

            {/* Features List */}
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700 font-space">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="relative p-6 bg-white border border-gray-100 shadow-sm rounded-2xl sm:p-8">
            {/* Plan Header */}
            <div className="rounded-xl p-4 mb-6 bg-gradient-to-r from-[#A947FF33] to-[#FA59CD33] flex flex-col items-center">
            <h3 className="font-space bg-white rounded-4xl text-lg sm:text-xl font-semibold text-gray-900 mb-8 px-4 py-2 w-[190px]">
                Enterprise Plan
              </h3>
              <div className="flex items-baseline gap-1 text-center">
                <span className="text-lg font-medium text-gray-900 font-space sm:text-xl">Unlimited attendees</span>
              </div>
            </div>

            <p className="font-space text-center text-sm text-[#000000]/90 mb-6 font-medium">
              Best for Professional Event Planners
            </p>

            <a href="mailto:hello@figoevents.com" className="block w-full">
  <button className="flex items-center justify-center w-full px-6 py-3 mb-8 text-sm font-medium text-white transition-colors duration-200 bg-gray-900 rounded-full font-space hover:bg-gray-800 sm:text-base group">
    Contact Sales
    <svg 
      className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </button>
</a>

            {/* Features List */}
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700 font-space">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default pricing