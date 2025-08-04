'use client'
import { useState } from 'react'

const FAQ = () => {

    const [openFAQ, setOpenFAQ] = useState(null);

    const faqs = [
        {
          id: 1,
          question: "Can I sell tickets for my event using your platform?",
          answer: ""
        },
        {
          id: 2,
          question: "Can I track attendance and gather data for my event?",
          answer: ""
        },
        {
          id: 3,
          question: "How does the check-in process work for attendees?",
          answer: ""
        },
        {
          id: 4,
          question: "Can I host virtual event on your platform?",
          answer: ""
        },
        {
          id: 5,
          question: "Can I create different types of events such as conferences, workshops and concerts?",
          answer: ""
        },
        {
          id: 6,
          question: "Do you offer customer support for event organizers?",
          answer: ""
        }
      ];
    
      const toggleFAQ = (id) => {
        setOpenFAQ(openFAQ === id ? null : id);
      };

  return (
    <section className="w-full bg-gradient-to-b from-[#FFFFFFE5] to-[#FAF8FF] py-12 px-4 sm:py-16 md:py-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
  {faqs.map((faq) => (
    <div 
      key={faq.id}
      className="bg-white rounded-lg"
    >
      <button
        onClick={() => toggleFAQ(faq.id)}
        className="w-full text-left p-4 sm:p-6"
      >
        <div className="flex items-center justify-between">
          <h3 className="text-sm sm:text-base font-medium text-gray-900 whitespace-nowrap overflow-hidden text-ellipsis pr-4">
            {faq.question}
          </h3>
          <div className="flex-shrink-0 ml-2">
            <svg
              className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                openFAQ === faq.id ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </button>
      
      {/* Answer */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          openFAQ === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 sm:px-6 pb-4 sm:pb-6">
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>
      </div>
    </section>
  )
}

export default FAQ