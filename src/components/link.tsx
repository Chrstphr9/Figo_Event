import { assets } from '@/assets/assets';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden min-h-10 bg-gradient-to-b from-white to-gray-600">
      {/* Mobile Layout (shown on lg breakpoint and below) */}
      <div 
  className="relative flex flex-col h-screen px-4 py-8 lg:hidden"
  style={{
    background: 'linear-gradient(to top, #D7CBE5, #FAF8FF)'
  }}
>
  {/* Header Section */}
  <div className="relative flex flex-col items-center justify-center flex-1 text-center">
    {/* Main Title */}
    <div className="relative mb-8">
      <h1 className="text-[40px] sm:text-5xl md:text-6xl font-bold text-[#553286] leading-tight">
        Link Devices
      </h1>
    </div>

    {/* Subtitle */}
    <div className="mb-8">
      <p className="text-sm font-medium text-gray-600 sm:text-base md:text-lg">
        No phone. No awkward intro. Just a tap
      </p>
    </div>

    {/* Product Images */}
    <div className="flex items-center justify-center mb-8 space-x-4 sm:space-x-6 md:space-x-8">
      {/* Wristband */}
      <div className="relative w-25 h-25 sm:w-20 sm:h-16 md:w-24 md:h-20">
        <Image 
          src={assets.wristband} 
          alt="Wristband device" 
          fill
          className="object-contain"
        />
      </div>
      
      {/* Cards */}
      <div className="flex space-x-2">
        <div className="relative rounded w-25 h-25 sm:w-16 sm:h-10 md:w-20 md:h-12">
          <Image 
            src={assets.card} 
            alt="Gold card" 
            fill
            className="object-contain rounded"
          />
        </div>
      </div>
      
      {/* Ring */}
      <div className="relative w-25 h-25 sm:w-20 sm:h-16 md:w-24 md:h-20">
        <Image 
          src={assets.ring} 
          alt="Smart ring" 
          fill
          className="object-contain"
        />
      </div>
    </div>
  </div>

  {/* Bottom Section */}

    {/* Action Buttons */}
    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
    <button className="
    absolute 
    right-8         /* Align to left edge */
    bottom-15       /* Align to bottom edge */
    bg-[#553286] /* Your semi-transparent color */
    text-white 
    px-7 py-2 
    rounded-full 
    font-medium
    hover:bg-[#5E6869CC]
    transition-colors
  ">
    View Shop
  </button>
    </div>
</div>

      {/* Desktop Layout (shown on lg breakpoint and above) */}
      <div className="hidden h-screen lg:block">
        {/* Main content centered */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 w-full max-w-[90vw]">
          <h1 className="font-space text-6xl sm:text-7xl md:text-8xl lg:text-[8rem] xl:text-[145.25px] font-bold text-[#553286] mb-4 relative mx-auto whitespace-nowrap">
            Link Devices
            <div className="absolute top-10 right-10 w-[20vw] max-w-[200px] h-auto aspect-[482/126]">
              <Image 
                src={assets.wrist} 
                alt="Wristband" 
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100px, 200px"
              />
            </div>
          </h1>
        </div>

        {/* Paragraph at bottom left */}
        <div className="absolute bottom-[60px] left-[5%] max-w-[50%]">
          <p className="mb-4 text-xl font-bold tracking-widest text-white md:text-2xl">
            Wearables that connects you instantly
          </p>
          <p className="text-xl font-light tracking-widest text-white md:text-2xl">
            No phone. No awkward intro. Just a tap
          </p>
        </div>

        {/* Buttons at bottom right */}
        <div className="absolute bottom-[110px] right-[5%] flex space-x-4">
          <button className="px-6 py-3 bg-[#5E688980] font-medium text-base md:text-lg text-[#111111] rounded-full min-w-[134px]">
            View Shop
          </button>
          <button className="px-6 py-3 bg-[#ffffff33] text-[#111111] font-medium text-base md:text-lg rounded-full border border-[#ffffff66] min-w-[184px]">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}