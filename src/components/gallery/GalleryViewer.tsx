
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Destination } from '@/data/destinations';

interface GalleryViewerProps {
  destination: Destination;
  allImages: string[];
  currentImageIndex: number;
  showInfo: boolean;
  isZoomed: boolean;
  handleNext: (e: React.MouseEvent) => void;
  handlePrev: (e: React.MouseEvent) => void;
  toggleZoom: (e: React.MouseEvent) => void;
}

const GalleryViewer: React.FC<GalleryViewerProps> = ({
  destination,
  allImages,
  currentImageIndex,
  showInfo,
  isZoomed,
  handleNext,
  handlePrev,
  toggleZoom,
}) => {
  return (
    <div className="relative w-full h-[70vh] flex items-center justify-center bg-gradient-to-br from-gray-800 to-black bg-opacity-80 overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-gray-900 to-black" />
      
      {/* Main image with zoom effect */}
      <div 
        className={`relative z-10 max-h-full max-w-full transition-all duration-300 ${
          isZoomed ? "scale-150 cursor-zoom-out" : "cursor-zoom-in"
        }`}
        onClick={toggleZoom}
      >
        <img 
          src={allImages[currentImageIndex]} 
          alt={`${destination.name} - Image ${currentImageIndex + 1}`}
          className="max-h-[70vh] max-w-full object-contain mx-auto transition-opacity duration-300"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80';
          }}
        />
      </div>
      
      {/* Navigation Arrows */}
      {allImages.length > 1 && (
        <>
          <button 
            onClick={handlePrev}
            className="absolute left-4 p-3 rounded-full bg-black/50 text-white hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-600 transition-all hover:scale-105"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-4 p-3 rounded-full bg-black/50 text-white hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-600 transition-all hover:scale-105"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}
    </div>
  );
};

export default GalleryViewer;
