'use client'
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const TestimonialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(1); // Start at 1 to show real first slide
  const [isTransitioning, setIsTransitioning] = useState(false);

  const testimonials = [
    {
      id: 1,
      quote: "Using FigoEvents for our conference was a game-changer. The mobile app kept me connected to every aspect of the event, and the contactless check-in feature ensured a safe and smooth experience for our attendees.",
      name: "Amaka",
      title: "Conference Coordinator",
      avatar: "/t1.png"
    },
    {
      id: 2,
      quote: "It's amazing how easy it was to administer my birthday event using FigoEvents. From registration to check-ins. Really cool stuff.",
      name: " Wiilams",
      title: "Event Manager",
      avatar: "/t3.jpeg"
    },
    {
      id: 3,
      quote: "As a webinar host, I needed a reliable platform to manage registrations and ensure a smooth experience for attendees. FigoEvents exceeded my expectations with it is user-friendly interface. Its now my go-to solution for all my webinar events.",
      name: "Ify",
      title: "GapX",
      avatar: "/t2.png"
    },
  ];

  // Create extended array for seamless infinite scroll
  const extendedTestimonials = [
    testimonials[testimonials.length - 1], // Last item at beginning
    ...testimonials,
    testimonials[0] // First item at end
  ];

  const nextSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    if (currentSlide === testimonials.length) {
      // At the last real slide, go to duplicate first slide
      setCurrentSlide(testimonials.length + 1);
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(1); // Jump back to real first slide without animation
      }, 500);
    } else {
      setCurrentSlide((prev) => prev + 1);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    if (currentSlide === 1) {
      // At the first real slide, go to duplicate last slide
      setCurrentSlide(0);
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(testimonials.length); // Jump to real last slide without animation
      }, 500);
    } else {
      setCurrentSlide((prev) => prev - 1);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  // Get the transform value - center the current card with next card visible
  const getTransform = () => {
    const cardWidth = 340;
    const containerWidth = 874;
    const centerOffset = (containerWidth - 320) / 2; // Center the main card
    return `translateX(${centerOffset - (currentSlide * cardWidth)}px)`;
  };

  return (
    <section className="w-full px-4 py-12 overflow-hidden bg-gray-50 md:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Carousel Container */}
        <div className="relative flex justify-center">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="absolute bottom-0 left-0 z-20 flex items-center justify-center w-10 h-10 transition-all duration-200 bg-white rounded-full shadow-lg md:left-8 md:w-12 md:h-12 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600 md:w-6 md:h-6" />
          </button>

          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="absolute bottom-0 right-0 z-20 flex items-center justify-center w-10 h-10 transition-all duration-200 bg-white rounded-full shadow-lg md:right-8 md:w-12 md:h-12 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-5 h-5 text-gray-600 md:w-6 md:h-6" />
          </button>

          {/* Parent Card Container */}
          <div 
            className="relative mx-4 overflow-hidden md:mx-0"
            style={{
              width: '100%',
              maxWidth: '874px',
              height: '406px'
            }}
          >
            {/* Left Blur Overlay */}
            <div className="absolute top-0 bottom-0 left-0 z-10 w-16 pointer-events-none md:w-24 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent"></div>
            
            {/* Right Blur Overlay */}
            <div className="absolute top-0 bottom-0 right-0 z-10 w-16 pointer-events-none md:w-24 bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent"></div>

            {/* Sliding Container */}
            <div 
              className={`flex h-full ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
              style={{
                transform: getTransform(),
                width: `${extendedTestimonials.length * 340}px`
              }}
            >
              {extendedTestimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${index}`}
                  className="flex-shrink-0 mr-5"
                  style={{
                    width: '320px',
                    height: '306px'
                  }}
                >
                  <div 
                    className="relative flex flex-col justify-between h-full bg-white shadow-sm"
                    style={{
                      borderRadius: '24px',
                      padding: '6px'
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