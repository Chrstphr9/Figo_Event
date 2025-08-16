'use client'
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const TestimonialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [cardWidth, setCardWidth] = useState(320);
  const [gap, setGap] = useState(20);

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
      name: "Wiilams",
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

  const extendedTestimonials = [
    testimonials[testimonials.length - 1],
    ...testimonials,
    testimonials[0]
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardWidth(260);
        setGap(16);
      } else {
        setCardWidth(320);
        setGap(20);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide(prev => prev + 1);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide(prev => prev - 1);
  };

  useEffect(() => {
    if (!isTransitioning) return;

    const timer = setTimeout(() => {
      if (currentSlide > testimonials.length) {
        setCurrentSlide(1);
        setIsTransitioning(false);
      } else if (currentSlide < 1) {
        setCurrentSlide(testimonials.length);
        setIsTransitioning(false);
      } else {
        setIsTransitioning(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [currentSlide, isTransitioning]);

  const getTransform = () => {
    const totalWidth = cardWidth + gap;
    const centerPosition = -currentSlide * totalWidth;
    
    if (typeof window !== 'undefined') {
      const containerWidth = window.innerWidth < 768 ? window.innerWidth - 32 : 874;
      const centerOffset = (containerWidth - cardWidth) / 2;
      return `translateX(${centerPosition + centerOffset}px)`;
    }
    
    return `translateX(${centerPosition}px)`;
  };

  return (
    <section className="w-full px-4 py-12 overflow-hidden bg-gray-50 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="relative flex justify-center">
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

          <div 
            className="relative overflow-hidden"
            style={{
              width: '100%',
              maxWidth: '874px',
              height: 'auto',
              minHeight: '380px'
            }}
          >
            <div 
              className={`flex h-full ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
              style={{
                transform: getTransform(),
                width: `${extendedTestimonials.length * (cardWidth + gap)}px`,
                gap: `${gap}px`
              }}
            >
              {extendedTestimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${index}`}
                  style={{
                    width: `${cardWidth}px`,
                    flexShrink: 0
                  }}
                >
                  <div className="relative flex flex-col justify-between h-full p-6 bg-white rounded-3xl shadow-sm min-h-[360px]">
                    <div className="flex flex-col justify-between h-full">
                      <div className="mb-4">
                        <blockquote className="text-gray-800" style={{
                          fontFamily: 'Space Grotesk, sans-serif',
                          fontWeight: '400',
                          fontSize: '16px',
                          lineHeight: '150%',
                          letterSpacing: '0.32px'
                        }}>
                          {testimonial.quote}
                        </blockquote>
                      </div>

                      <div className="mt-auto">
                        <div className="flex items-center gap-3">
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
                            <div className="text-sm font-semibold text-gray-900" style={{
                              fontFamily: 'Space Grotesk, sans-serif',
                              fontWeight: '600'
                            }}>
                              {testimonial.name}
                            </div>
                            <div className="text-xs text-gray-600" style={{
                              fontFamily: 'Space Grotesk, sans-serif',
                              fontWeight: '400'
                            }}>
                              {testimonial.title}
                            </div>
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