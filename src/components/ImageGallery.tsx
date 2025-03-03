
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Destination } from '@/data/destinations';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface ImageGalleryProps {
  destination: Destination | null;
  isOpen: boolean;
  onClose: () => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ destination, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = destination?.galleryImages || [];
  
  // Add the main image to the gallery
  const allImages = destination ? [destination.image, ...(destination.galleryImages || [])] : [];
  
  // Reset current image index when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
    }
  }, [isOpen, destination]);
  
  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };
  
  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };
  
  if (!destination) return null;
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-4xl p-0 overflow-hidden bg-black/95 border-none">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 z-50 rounded-full p-2 bg-black/50 text-white hover:bg-black/70 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
        
        <div className="flex flex-col items-center">
          {/* Main Image Container */}
          <div className="relative w-full h-[70vh] flex items-center justify-center">
            <img 
              src={allImages[currentImageIndex]} 
              alt={destination.name}
              className="max-h-full max-w-full object-contain mx-auto"
            />
            
            {/* Navigation Arrows */}
            {allImages.length > 1 && (
              <>
                <button 
                  onClick={handlePrev}
                  className="absolute left-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                
                <button 
                  onClick={handleNext}
                  className="absolute right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}
          </div>
          
          {/* Caption and Controls */}
          <div className="w-full p-4 bg-black text-white">
            <h2 className="text-xl font-semibold mb-1">{destination.name}</h2>
            <p className="text-gray-300 text-sm mb-2">{destination.state}</p>
            
            {/* Thumbnail Navigation */}
            {allImages.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto py-2 scrollbar-thin">
                {allImages.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`relative flex-shrink-0 h-14 w-20 rounded overflow-hidden border-2 
                     ${currentImageIndex === idx ? 'border-primary' : 'border-transparent'}`}
                  >
                    <img src={img} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
            
            {/* Counter */}
            <div className="text-sm text-gray-400 mt-2">
              {currentImageIndex + 1} / {allImages.length}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageGallery;
