
import React from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface PlaceholderImageProps {
  text?: string;
  aspectRatio?: 'video' | 'square' | 'portrait' | 'auto';
  className?: string;
}

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({ 
  text = 'Add Image Here', 
  aspectRatio = 'video',
  className = ''
}) => {
  const aspectClasses = {
    video: 'aspect-video',
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
    auto: 'h-full w-full'
  };

  return (
    <div 
      className={`bg-[#e2e8f0] border-2 border-dashed border-[#94a3b8] flex flex-col items-center justify-center rounded-lg overflow-hidden group transition-all duration-300 hover:bg-[#cbd5e1] ${aspectClasses[aspectRatio]} ${className}`}
    >
      <ImageIcon className="w-10 h-10 text-[#94a3b8] mb-2 group-hover:scale-110 transition-transform" />
      <span className="text-[#64748b] font-medium text-sm text-center px-4">{text}</span>
      {/* 
        DEVELOPER NOTE: To replace this placeholder, swap this <div> 
        for an <img> tag with your source. 
      */}
    </div>
  );
};

export default PlaceholderImage;
