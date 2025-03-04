
import React from 'react';

interface GalleryThumbnailsProps {
  allImages: string[];
  currentImageIndex: number;
  setCurrentImageIndex: (index: number) => void;
}

const GalleryThumbnails: React.FC<GalleryThumbnailsProps> = ({
  allImages,
  currentImageIndex,
  setCurrentImageIndex
}) => {
  if (allImages.length <= 1) return null;
  
  return (
    <div className="flex space-x-2 overflow-x-auto py-3 scrollbar-thin">
      {allImages.map((img, idx) => (
        <button 
          key={idx}
          onClick={(e) => {
            e.stopPropagation();
            setCurrentImageIndex(idx);
          }}
          className={`relative flex-shrink-0 h-16 w-24 rounded-md overflow-hidden transition-all hover:scale-105 ${
            currentImageIndex === idx 
              ? 'ring-2 ring-white ring-offset-2 ring-offset-black scale-105' 
              : 'opacity-70 hover:opacity-100'
          }`}
          aria-label={`View image ${idx + 1}`}
        >
          <img 
            src={img} 
            alt="" 
            className="h-full w-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80';
            }}
          />
        </button>
      ))}
    </div>
  );
};

export default GalleryThumbnails;
