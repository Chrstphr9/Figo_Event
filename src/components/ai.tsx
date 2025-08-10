import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const AskAIButton = () => {

  return (
    <button
      className="fixed z-50 px-6 py-3 transition-all duration-300 rounded-full shadow-lg bottom-6 right-6 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300 active:scale-95"
      style={{
        background: 'linear-gradient(135deg, #7A5FFF 0%, #42E3C4 100%)',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        fontSize: '14px',
        fontWeight: '500',
        color: 'white',
        border: 'none',
        cursor: 'pointer'
      }}
    >
      <div className="flex items-center gap-2">
      <Image src={assets.star} alt='ys' />
        Ask AI
      </div>
    </button>
  );
};

export default AskAIButton;