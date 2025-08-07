'use client'
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { Fade } from 'react-awesome-reveal'

const HeroSection = () => {
    const carousel1Ref = useRef<HTMLDivElement>(null);
    const carousel2Ref = useRef<HTMLDivElement>(null);

    // First 4 carousel images (left column)
    const carousel1Images = [
        assets.carousel_1,
        assets.carousel_2,
        assets.carousel_3,
        assets.carousel_4
    ];

    // Last 4 carousel images (right column)
    const carousel2Images = [
        assets.carousel_5,
        assets.carousel_6,
        assets.carousel_7,
        assets.carousel_8
    ];

    useEffect(() => {
        const carousel1 = carousel1Ref.current;
        const carousel2 = carousel2Ref.current;

        if (!carousel1 || !carousel2) return;

        let animationId1: number;
        let animationId2: number;

        const scrollSpeed = 1; // pixels per frame (adjust for faster/slower scrolling)

        const autoScroll1 = () => {
            if (carousel1) {
                carousel1.scrollTop += scrollSpeed;

                // Reset to beginning when reaching the end of first set
                if (carousel1.scrollTop >= carousel1.scrollHeight / 3) {
                    carousel1.scrollTop = 0;
                }
            }
            animationId1 = requestAnimationFrame(autoScroll1);
        };

        const autoScroll2 = () => {
            if (carousel2) {
                carousel2.scrollTop -= scrollSpeed;

                // Reset to end when reaching the beginning (since scrolling up)
                if (carousel2.scrollTop <= 0) {
                    carousel2.scrollTop = carousel2.scrollHeight / 3;
                }
            }
            animationId2 = requestAnimationFrame(autoScroll2);
        };

        // Initialize scroll positions
        carousel1.scrollTop = 0;
        carousel2.scrollTop = carousel2.scrollHeight / 3;

        // Start auto-scrolling
        autoScroll1();
        autoScroll2();

        // Pause on hover
        const handleMouseEnter = () => {
            cancelAnimationFrame(animationId1);
            cancelAnimationFrame(animationId2);
        };

        const handleMouseLeave = () => {
            autoScroll1();
            autoScroll2();
        };

        carousel1.addEventListener('mouseenter', handleMouseEnter);
        carousel1.addEventListener('mouseleave', handleMouseLeave);
        carousel2.addEventListener('mouseenter', handleMouseEnter);
        carousel2.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            cancelAnimationFrame(animationId1);
            cancelAnimationFrame(animationId2);
            if (carousel1) {
                carousel1.removeEventListener('mouseenter', handleMouseEnter);
                carousel1.removeEventListener('mouseleave', handleMouseLeave);
            }
            if (carousel2) {
                carousel2.removeEventListener('mouseenter', handleMouseEnter);
                carousel2.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);

    return (
        <div className="mt-16 bg-white sm:mt-0">
            {/* Desktop Version */}
            <div className="items-center justify-between hidden px-6 mx-auto md:flex max-w-7xl ">
                {/* Left Content */}
                <div className="flex-1 max-w-lg">
                    {/* <Fade direction='down' delay={0.5}> */}
                    <div className="font-space w-70 h-10 py-3 px-4 text-[16px] bg-[#C9B6FF40] font-medium text-black uppercase tracking-wide mb-4 rounded-full">
                        AI POWERED EVENT PLATFORM
                    </div>
                    {/* </Fade> */}

                    <h1 className="mb-6 text-5xl font-bold leading-tight font-space">
                        Run <span className="gradient-text">Smarter</span> Events,<br />
                        <span className="gradient-text">Connect</span> Every Guest
                    </h1>

                    <p className="font-space text-gray-600 text-[20px] mb-8 leading-relaxed font-normal">
                        Guests skip the awkward intros with smart digital cards, while you
                        stay in full control of your event and our AI-powered assistant
                        does the heavy lifting for everyone.
                    </p>

                    <button className="font-inter bg-gradient-to-r from-[#2A2438] to-[#1E1B2BCC]/80 hover:from-[#2A2438]/90 hover:to-[#1E1B2BCC]/90 text-white px-8 py-3 text-[20px] rounded-[25px] font-semibold transition-all duration-300 mb-8">
                        Create Your First Event
                    </button>

                    <div className="flex items-center space-x-3">
                        <div className="flex -space-x-2">
                            <div className="w-8 h-8 bg-gray-300 border-2 border-white rounded-full">
                                <Image src={assets.ellipse17} alt='ys' />
                            </div>
                            <div className="w-8 h-8 bg-gray-400 border-2 border-white rounded-full">
                                <Image src={assets.ellipse18} alt='ys' />
                            </div>
                            <div className="w-8 h-8 bg-gray-500 border-2 border-white rounded-full">
                                <Image src={assets.ellipse19} alt='ys' />
                            </div>
                            <div className="w-8 h-8 bg-gray-500 border-2 border-white rounded-full">
                                <Image src={assets.ellipse20} alt='ys' />
                            </div>
                        </div>
                        <span className="text-sm text-gray-600 font-space ">
                            Join the <span className="gradient-text">thousands</span> of event pros who swear by us
                        </span>
                    </div>
                </div>

                {/* Right Carousel Container - Desktop with Auto-Scrolling */}
                <div className="flex-shrink-0 ml-12 h-[800px] w-[425px] relative overflow-hidden">
                    {/* First Column - Auto scrolling down */}
                    <div
                        ref={carousel1Ref}
                        className="absolute left-0 w-[200px] h-full overflow-hidden"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        <div className="space-y-4">
                            {/* Triple the images for seamless infinite scroll */}
                            {[...carousel1Images, ...carousel1Images, ...carousel1Images].map((img, index) => (
                                <div key={index} className="w-[200px] h-[350px] bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                                    <Image
                                        src={img}
                                        alt={`Carousel 1 Image ${index % 4 + 1}`}
                                        className="w-[200px] h-[350px] object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Second Column - Auto scrolling up */}
                    <div
                        ref={carousel2Ref}
                        className="absolute right-0 w-[200px] h-full overflow-hidden"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        <div className="space-y-4">
                            {/* Triple the images for seamless infinite scroll */}
                            {[...carousel2Images, ...carousel2Images, ...carousel2Images].map((img, index) => (
                                <div key={index} className="w-[200px] h-[350px] bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                                    <Image
                                        src={img}
                                        alt={`Carousel 2 Image ${index % 4 + 1}`}
                                        className="w-[200px] h-[350px] object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Version */}
            <div className="px-4 py-18 md:hidden">
                {/* Header */}
                <div className="mb-8 text-center">
                <div className="font-space w-fit h-10 py-3 px-4 text-[14px] bg-[#C9B6FF40] font-medium text-black uppercase tracking-wide mb-8 rounded-full mx-auto">
                        AI POWERED EVENT PLATFORM
                    </div>

                    <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl">
                        Run <span className="gradient-text">Smarter</span> Events,<br />
                        <span className="gradient-text">Connect</span> Every Guest
                    </h1>

                    <p className="max-w-sm mx-auto mb-6 text-base leading-relaxed text-gray-600">
                        While you stay in full control of your event,
                        let our AI assistant handle the hard work and
                        awkward networking.
                    </p>

                    <a
                        href="https://figoevents.com/app/signup"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="mb-28 bg-gradient-to-r from-[#2A2438] to-[#1E1B2BCC]/80 hover:from-[#2A2438]/90 hover:to-[#1E1B2BCC]/90 text-white px-8 py-3 text-[20px] rounded-[25px] font-semibold transition-all duration-300 cursor-pointer">
                            Create Your First Event
                        </button>
                    </a>
                </div>

                {/* Mobile Carousel - Single Row with 4 Images */}
                <div className="flex justify-center mb-8">
                    <div className="grid w-full max-w-sm grid-cols-4 gap-2">
                        <div className="w-[85.71px] h-[120px] bg-gray-200 rounded-lg overflow-hidden">
                            <Image src={assets.carousel_1} alt='img1' className="w-[85.71px] h-[120px] object-cover" />
                        </div>
                        <div className="w-[85.71px] h-[120px] bg-gray-200 rounded-lg overflow-hidden">
                            <Image src={assets.carousel_2} alt='img2' className="w-[85.71px] h-[120px] object-cover" />
                        </div>
                        <div className="w-[85.71px] h-[120px] bg-gray-200 rounded-lg overflow-hidden">
                            <Image src={assets.carousel_3} alt='img3' className="w-[85.71px] h-[120px] object-cover" />
                        </div>
                        <div className="w-[85.71px] h-[120px] bg-gray-200 rounded-lg overflow-hidden">
                            <Image src={assets.carousel_4} alt='img4' className="w-[85.71px] h-[120px] object-cover" />
                        </div>
                        <div className="w-[85.71px] h-[120px] bg-gray-200 rounded-lg overflow-hidden">
                            <Image src={assets.carousel_5} alt='img5' className="w-[85.71px] h-[120px] object-cover" />
                        </div>
                        <div className="w-[85.71px] h-[120px] bg-gray-200 rounded-lg overflow-hidden">
                            <Image src={assets.carousel_6} alt='img6' className="w-[85.71px] h-[120px] object-cover" />
                        </div>
                        <div className="w-[85.71px] h-[120px] bg-gray-200 rounded-lg overflow-hidden">
                            <Image src={assets.carousel_7} alt='img7' className="w-[85.71px] h-[120px] object-cover" />
                        </div>
                        <div className="w-[85.71px] h-[120px] bg-gray-200 rounded-lg overflow-hidden">
                            <Image src={assets.carousel_8} alt='img8' className="w-[85.71px] h-[120px] object-cover" />
                        </div>
                    </div>
                </div>

                {/* Mobile Bottom Section */}
                <div className="text-center">
                    <div className="flex items-center justify-center space-x-3">
                        <div className="flex -space-x-2">
                            <div className="w-6 h-6 bg-gray-300 border-2 border-white rounded-full">
                            <Image src={assets.ellipse17} alt='ys' />
                            </div>
                            <div className="w-6 h-6 bg-gray-400 border-2 border-white rounded-full">
                            <Image src={assets.ellipse18} alt='ys' />
                            </div>
                            <div className="w-6 h-6 bg-gray-500 border-2 border-white rounded-full">
                            <Image src={assets.ellipse19} alt='ys' />
                            </div>
                            <div className="w-6 h-6 bg-gray-500 border-2 border-white rounded-full">
                            <Image src={assets.ellipse20} alt='ys' />
                            </div>
                        </div>
                        <span className="text-xs text-gray-600">
                            Join the <span className="font-medium text-pink-500">thousands</span> of event pros who swear by us
                        </span>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    );
};

export default HeroSection;