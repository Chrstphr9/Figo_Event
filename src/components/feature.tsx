import { features } from '@/assets/assets'
import Image from 'next/image'


const feature = () => {
  return (
    <div>
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFFFFFE5] to-[#FAF8FF]">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-16 ">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 font-space sm:text-5xl lg:text-6xl">
            Why Event Organizers
          </h1>
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
            <span className="gradient-text">
              Love Our Platform
            </span>
          </h2>
          <p className="max-w-2xl text-lg text-gray-600 font-space sm:text-xl">
            We&apos;ve reimagined event networking from the ground up. Here&apos;s what makes us different.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-gradient-to-b from-[#FFFFFFE5] to-[#FAF8FF]  rounded-xl">
  {features.map((feature, index) => (
    <div
      key={index}
      className={`
        relative p-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1
        ${feature.highlighted 
          ? 'bg-white border-2 border-dashed border-white shadow-md' 
          : 'bg-white shadow-sm hover:shadow-md'
        }
      `}
    >
      {/* Icon */}
      <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 text-2xl rounded-xl">
      <Image
        src={feature.iconPlaceholder}
        alt={feature.title}
        width={48}
        height={48}
        className="object-contain "
      />
      </div>

      {/* Content */}
      <div className="text-center">
        <h3 className="text-xl font-bold text-gray-900 font-space fontmb-4">
          {feature.title}
        </h3>
        <p className="leading-relaxed text-gray-600 font-space">
          {feature.description}
        </p>
      </div>
    </div>
  ))}
</div>

      </div>
    </div>
    </div>

    
  )
}

export default feature