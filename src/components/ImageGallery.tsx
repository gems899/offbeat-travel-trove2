
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Destination } from '@/data/destinations';
import { ChevronLeft, ChevronRight, X, Share2, Download, Heart, Info, ZoomIn } from 'lucide-react';
import { toast } from "sonner";

interface ImageGalleryProps {
  destination: Destination | null;
  isOpen: boolean;
  onClose: () => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ destination, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const allImages = destination ? [destination.image, ...(destination.galleryImages || [])] : [];
  
  // Reset current image index when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
      setShowInfo(false);
      setIsZoomed(false);
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
    toast(isLiked ? "Removed from favorites" : "Added to favorites", {
      position: "bottom-center",
      duration: 2000,
    });
  };

  const toggleInfo = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowInfo(!showInfo);
  };

  const toggleZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsZoomed(!isZoomed);
  };
  
  const handleDownload = async (e: React.MouseEvent) => {
    e.stopPropagation();
    
    try {
      const currentImage = allImages[currentImageIndex];
      const response = await fetch(currentImage);
      const blob = await response.blob();
      
      // Create a temporary anchor element
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      
      // Extract filename from path or set a default
      const filename = currentImage.split('/').pop() || `${destination?.name.toLowerCase().replace(/\s+/g, '-')}-${currentImageIndex + 1}.jpg`;
      link.download = filename;
      
      // Trigger download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast("Image downloaded successfully", {
        position: "bottom-center",
        duration: 2000,
      });
    } catch (error) {
      console.error("Download failed:", error);
      toast("Failed to download image", {
        position: "bottom-center",
        variant: "destructive",
        duration: 3000,
      });
    }
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
      <DialogContent className="sm:max-w-5xl p-0 overflow-hidden bg-gradient-to-br from-gray-900 to-black border-none" aria-labelledby="gallery-title">
        <DialogTitle id="gallery-title" className="sr-only">
          {destination.name} Image Gallery
        </DialogTitle>
        
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 z-50 rounded-full p-2 bg-black/50 text-white hover:bg-black/70 transition-colors"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
        
        <div className="flex flex-col items-center">
          {/* Main Image Container */}
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
                className={`max-h-[70vh] max-w-full object-contain mx-auto transition-opacity duration-300 ${showInfo ? 'opacity-40' : 'opacity-100'}`}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80';
                }}
              />
            </div>
            
            {/* Info overlay */}
            {showInfo && (
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <div className="bg-black/70 p-6 rounded-lg max-w-md text-white backdrop-blur-sm animate-fade-in">
                  <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
                  <p className="mb-4 text-sm italic">{destination.state}</p>
                  <p className="text-white/90">{destination.description}</p>
                </div>
              </div>
            )}
            
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
          
          {/* Caption and Controls */}
          <div className={`w-full p-5 bg-gradient-to-r ${getGradient(destination.state)} text-white`}>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-semibold mb-1">{destination.name}</h2>
                <p className="text-white/80 text-sm">{destination.state}</p>
              </div>
              <div className="flex space-x-3">
                <button 
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors group relative"
                  onClick={toggleInfo}
                  aria-label="Show information"
                >
                  <Info className="h-5 w-5" />
                  <span className="absolute bottom-full right-0 mb-2 hidden group-hover:block bg-black/70 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    {showInfo ? 'Hide info' : 'Show info'}
                  </span>
                </button>
                <button 
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors group relative"
                  onClick={(e) => {
                    e.stopPropagation();
                    toast("Share functionality coming soon!", {
                      position: "bottom-center",
                    });
                  }}
                  aria-label="Share"
                >
                  <Share2 className="h-5 w-5" />
                  <span className="absolute bottom-full right-0 mb-2 hidden group-hover:block bg-black/70 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    Share
                  </span>
                </button>
                <button 
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors group relative"
                  onClick={handleDownload}
                  aria-label="Download"
                >
                  <Download className="h-5 w-5" />
                  <span className="absolute bottom-full right-0 mb-2 hidden group-hover:block bg-black/70 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    Download
                  </span>
                </button>
                <button 
                  onClick={toggleLike}
                  className={`p-2 rounded-full ${isLiked ? 'bg-pink-600/30' : 'bg-white/10'} hover:bg-white/20 transition-colors group relative`}
                  aria-label={isLiked ? "Remove from favorites" : "Add to favorites"}
                >
                  <Heart className={`h-5 w-5 ${isLiked ? "fill-pink-500 text-pink-500" : ""} transition-colors`} />
                  <span className="absolute bottom-full right-0 mb-2 hidden group-hover:block bg-black/70 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    {isLiked ? 'Remove from favorites' : 'Add to favorites'}
                  </span>
                </button>
                <button 
                  onClick={toggleZoom}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors group relative"
                  aria-label={isZoomed ? "Zoom out" : "Zoom in"}
                >
                  <ZoomIn className="h-5 w-5" />
                  <span className="absolute bottom-full right-0 mb-2 hidden group-hover:block bg-black/70 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    {isZoomed ? 'Zoom out' : 'Zoom in'}
                  </span>
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
            )}
            
            {/* Counter and Instructions */}
            <div className="text-sm text-white/70 mt-2 flex justify-between items-center">
              <span>Image {currentImageIndex + 1} of {allImages.length}</span>
              <div className="flex space-x-2">
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">Use arrow keys to navigate</span>
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full hidden sm:inline-block">Press Esc to close</span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageGallery;
