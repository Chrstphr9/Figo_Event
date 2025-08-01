import { assets } from '@/assets/assets';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="w-full h-[800px] relative bg-gradient-to-b from-white to-gray-600">
  {/* Main content centered */}
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 pb-[250px]">
    <h1 className="text-[145.25px] font-bold text-[#553286] mb-4 relative whitespace-nowrap">
      Link Devices
      <div className="absolute -top-[30px] left-[380px] transform -translate-x-1/2 w-482 h-126">
        <Image src={assets.wrist} alt="Wristband" layout="fill" objectFit="contain" />
      </div>
    </h1>
  </div>

  {/* Paragraph at bottom left */}
  <div className="absolute bottom-[60px] left-[80px]">
      <p  className="text-white mb-4 tracking-widest font-bold text-[24px]">Wearables that connects you instantly</p>
      <p  className="text-[24px] tracking-widest font-light text-white">No phone. No awkward intro. Just a tap</p>
  </div>

  {/* Buttons at bottom right */}
  <div className="absolute bottom-[110px] right-[80px] flex space-x-4">
    <button className=" w-[134px] h-[51px] bg-[#5E688980] font-medium text-[20px] text-[#111111] rounded-[25px]">View Shop</button>
    <button className="w-[184px] h-[51px] bg-[#ffffff33]  text-[#111111] font-medium text-[20px]  rounded-[25px] border-[1px] border-[#ffffff66]">Learn More</button>
  </div>
</div>
  );
}