'use client'
import { useState } from 'react'

const FAQ = () => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const faqs = [
        {
            id: 1,
            question: "Can I sell tickets for my event using your platform?",
            answer: "Yes, our platform allows you to sell tickets for your events with various pricing options and payment methods."
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
            question: "Can I host virtual events on your platform?",
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

    const toggleFAQ = (id: number) => {
        setOpenFAQ(prevId => prevId === id ? null : id);
    };

    return (
        <section className="w-full bg-gradient-to-b from-[#FFFFFFE5] to-[#FAF8FF] py-12 px-4 sm:py-16 md:py-20">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-8 text-center sm:mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 font-space sm:text-3xl md:text-4xl">
                        Frequently Asked Questions
                    </h2>
                </div>

                {/* FAQ Grid */}
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 sm:gap-6">
                    {faqs.map((faq) => (
                        <div 
                            key={faq.id}
                            className="transition-shadow bg-white rounded-lg shadow-sm hover:shadow-md"
                        >
                            <button
                                onClick={() => toggleFAQ(faq.id)}
                                className="w-full p-4 text-left rounded-lg sm:p-6"
                                aria-expanded={openFAQ === faq.id}
                                aria-controls={`faq-answer-${faq.id}`}
                            >
                                <div className="flex items-center justify-between">
                                    <h3 className="pr-4 text-sm font-medium text-gray-900 font-space sm:text-base">
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
                                            aria-hidden="true"
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
                                id={`faq-answer-${faq.id}`}
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                    openFAQ === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                                aria-hidden={openFAQ !== faq.id}
                            >
                                <div className="px-4 pb-4 sm:px-6 sm:pb-6">
                                    <p className="text-sm leading-relaxed text-gray-600 font-space sm:text-base">
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