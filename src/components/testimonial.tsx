'use client'
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const TestimonialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "Using FigoEvents for our conference was a game-changer. The mobile app kept me connected to every aspect of the event, and the contactless check-in feature ensured a safe and smooth experience for our attendees.",
      name: "Amaka",
      title: "Conference Coordinator",
      avatar: "/t1.png" // Replace with your actual image path
    },
    {
      id: 2,
      quote: "“Using FigoEvents for our conference was a game-changer. The mobile app kept me connected to every aspect of the event, and the contactless check-in feature ensured a safe and smooth experience for our attendees.”",
      name: "John Doe",
      title: "Event Manager",
      avatar: "/t1.png" // Replace with your actual image path
    },
    {
      id: 3,
      quote: "As a wellness coach, I needed a mobile platform to manage my workshops seamlessly. FigoEvents exceeded my expectations with its user-friendly interface. It's now my go-to solution for all my events.",
      name: "Sarah",
      title: "Wellness Coach",
      avatar: "/t2.png" // Replace with your actual image path
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="w-full px-4 py-12 overflow-hidden bg-gray-50 md:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Carousel Container */}
        <div className="relative flex justify-center">
          {/* Navigation Buttons - Positioned at bottom */}
          <button
            onClick={prevSlide}
            className="absolute bottom-0 left-0 z-20 flex items-center justify-center w-10 h-10 transition-shadow duration-200 bg-white rounded-full shadow-lg md:left-8 md:w-12 md:h-12 hover:shadow-xl"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600 md:w-6 md:h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute bottom-0 right-0 z-20 flex items-center justify-center w-10 h-10 transition-shadow duration-200 bg-white rounded-full shadow-lg md:right-8 md:w-12 md:h-12 hover:shadow-xl"
          >
            <ChevronRight className="w-5 h-5 text-gray-600 md:w-6 md:h-6" />
          </button>

          {/* Parent Card Container - 874px width, 306px height */}
          <div 
            className="relative mx-4 overflow-hidden md:mx-0"
            style={{
              width: '100%',
              maxWidth: '874px',
              height: '306px'
            }}
          >
            {/* Left Blur Overlay */}
            <div className="absolute top-0 bottom-0 left-0 z-10 hidden w-20 pointer-events-none md:w-32 bg-gradient-to-r from-gray-50 via-gray-50/90 to-transparent md:block"></div>
            
            {/* Right Blur Overlay */}
            <div className="absolute top-0 bottom-0 right-0 z-10 w-20 pointer-events-none md:w-32 bg-gradient-to-l from-gray-50 via-gray-50/90 to-transparent"></div>

            {/* Sliding Container */}
            <div 
              className="flex h-full transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 340}px)`, // 320px card width + 20px gap
                width: `${testimonials.length * 340}px`
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0 mr-5 "
                  style={{
                    width: '320px',
                    height: '306px'
                  }}
                >
                  <div 
                    className="relative flex flex-col justify-between h-full bg-white shadow-sm"
                    style={{
                      borderRadius: '24px',
                      padding: '16px'
                    }}
                  >
                    {/* Testimonial Content */}
                    <div className="flex flex-col justify-between flex-1 pt-8">
                      {/* Quote Section */}
                      <div className="flex-1">
                        <blockquote 
                          className="mb-4 text-gray-800"
                          style={{
                            fontFamily: 'Space Grotesk, sans-serif',
                            fontWeight: '400',
                            fontSize: '16px',
                            lineHeight: '150%',
                            letterSpacing: '0.32px'
                          }}
                        >
                          {testimonial.quote}
                        </blockquote>
                      </div>

                      {/* Author Section */}
                      <div className="flex items-center gap-3 mt-4">
                        <div className="flex-shrink-0 w-12 h-12 overflow-hidden rounded-full">
                          <Image
                            src={testimonial.avatar}
                            alt={`${testimonial.name}'s profile`}
                            width={48}
                            height={48}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div>
                          <div 
                            className="text-sm font-semibold text-gray-900"
                            style={{
                              fontFamily: 'Space Grotesk, sans-serif',
                              fontWeight: '600'
                            }}
                          >
                            {testimonial.name}
                          </div>
                          <div 
                            className="text-xs text-gray-600"
                            style={{
                              fontFamily: 'Space Grotesk, sans-serif',
                              fontWeight: '400'
                            }}
                          >
                            {testimonial.title}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;