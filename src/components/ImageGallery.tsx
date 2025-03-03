
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Destination } from '@/data/destinations';
import { ChevronLeft, ChevronRight, X, Share2, Download, Heart } from 'lucide-react';

interface ImageGalleryProps {
  destination: Destination | null;
  isOpen: boolean;
  onClose: () => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ destination, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
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

  const toggleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };
  
  if (!destination) return null;

  // Determine gallery background gradient based on state name (for visual variety)
  const getGradient = (stateName: string) => {
    const firstChar = stateName.charAt(0).toLowerCase();
    
    if (firstChar <= 'g') return 'from-pink-900/90 to-indigo-900/90';
    if (firstChar <= 'm') return 'from-amber-900/90 to-purple-900/90';
    if (firstChar <= 's') return 'from-blue-900/90 to-teal-900/90';
    return 'from-emerald-900/90 to-blue-900/90';
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-5xl p-0 overflow-hidden bg-gradient-to-br from-gray-900 to-black border-none">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 z-50 rounded-full p-2 bg-black/50 text-white hover:bg-black/70 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
        
        <div className="flex flex-col items-center">
          {/* Main Image Container */}
          <div className="relative w-full h-[70vh] flex items-center justify-center bg-gradient-to-br from-gray-800 to-black bg-opacity-80">
            <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-gray-900 to-black" />
            
            <img 
              src={allImages[currentImageIndex]} 
              alt={destination.name}
              className="max-h-full max-w-full object-contain mx-auto relative z-10"
            />
            
            {/* Navigation Arrows */}
            {allImages.length > 1 && (
              <>
                <button 
                  onClick={handlePrev}
                  className="absolute left-4 p-3 rounded-full bg-black/50 text-white hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-600 transition-all hover:scale-105"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                
                <button 
                  onClick={handleNext}
                  className="absolute right-4 p-3 rounded-full bg-black/50 text-white hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-600 transition-all hover:scale-105"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}
          </div>
          
          {/* Caption and Controls */}
          <div className={`w-full p-5 bg-gradient-to-r ${getGradient(destination.state)} text-white`}>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-semibold mb-1">{destination.name}</h2>
                <p className="text-white/80 text-sm">{destination.state}</p>
              </div>
              <div className="flex space-x-3">
                <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                  <Share2 className="h-5 w-5" />
                </button>
                <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                  <Download className="h-5 w-5" />
                </button>
                <button 
                  onClick={toggleLike}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Heart className={`h-5 w-5 ${isLiked ? "fill-pink-500 text-pink-500" : ""}`} />
                </button>
              </div>
            </div>
            
            {/* Thumbnail Navigation */}
            {allImages.length > 1 && (
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
                  >
                    <img src={img} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
            
            {/* Counter */}
            <div className="text-sm text-white/70 mt-2 flex justify-between items-center">
              <span>Image {currentImageIndex + 1} of {allImages.length}</span>
              <span className="text-xs bg-white/20 px-2 py-1 rounded-full">Use arrow keys to navigate</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageGallery;
