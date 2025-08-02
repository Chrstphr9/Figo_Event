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
    <section className="w-full bg-gray-50 py-12 px-4 sm:py-16 md:py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pricing plans
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">
            Choose the best plan for your needs
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          
          {/* Pay-Per-Event Plan */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 relative]">
            {/* Plan Header */}
            <div className="bg-[#A947FF]/20 rounded-xl p-4 mb-6">
              <h3 className=" bg-white rounded-4xl text-lg sm:text-xl font-semibold text-gray-900 mb-8 px-4 py-2 w-[190px]">
                Pay-Per-Event
              </h3>
              <div className="flex items-baseline gap-1">
                <span className="text-lg sm:text-xl font-bold text-green-600">Free</span>
                <span className="text-[17px] text-black font-medium">for up to 20 attendees</span>
              </div>
            </div>

            <p className="text-sm text-black mb-6 font-medium">
              Best for Solo Organizers and Intimate Events
            </p>

            <button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 px-6 rounded-full font-medium text-sm sm:text-base transition-colors duration-200 mb-8 flex items-center justify-center group">
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

            {/* Features List */}
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 relative">
            {/* Plan Header */}
            <div className="rounded-xl p-4 mb-6 bg-gradient-to-r from-[#A947FF33] to-[#FA59CD33]">
            <h3 className=" bg-white rounded-4xl text-lg sm:text-xl font-semibold text-gray-900 mb-8 px-4 py-2 w-[190px]">
                Enterprise Plan
              </h3>
              <div className="flex items-baseline gap-1">
                <span className="text-lg sm:text-xl font-medium text-gray-900">Unlimited attendees</span>
              </div>
            </div>

            <p className="text-sm text-[#000000]/90 mb-6 font-bold">
              Best for Professional Event Planners
            </p>

            <button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 px-6 rounded-full font-medium text-sm sm:text-base transition-colors duration-200 mb-8 flex items-center justify-center group">
              Contact Sales
              <svg 
                className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Features List */}
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">{feature}</span>
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