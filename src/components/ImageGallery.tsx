
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Destination } from '@/data/destinations';
import { X } from 'lucide-react';
import { toast } from "sonner";
import GalleryViewer from './gallery/GalleryViewer';
import GalleryFooter from './gallery/GalleryFooter';

interface ImageGalleryProps {
  destination: Destination | null;
  isOpen: boolean;
  onClose: () => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ destination, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [showInfo, setShowInfo] = useState(true); // Show info by default
  const [isZoomed, setIsZoomed] = useState(false);
  const [allImages, setAllImages] = useState<string[]>([]);
  
  // Set up images and handle error fallbacks
  useEffect(() => {
    if (destination) {
      // Default fallback image if all images fail to load
      const fallbackImage = 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80';
      
      // Create image array with main image first, then gallery images
      const images = [
        destination.image || fallbackImage,
        ...(destination.galleryImages || [])
      ];
      
      // For each image, preload to test if it works
      const preloadedImages = images.map(src => {
        // If src is empty or invalid, use fallback
        if (!src || src.includes('undefined') || src === "") {
          return fallbackImage;
        }
        return src;
      });
      
      setAllImages(preloadedImages);
    }
  }, [destination]);
  
  // Reset current image index when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
      setShowInfo(true); // Show info by default
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
        duration: 3000,
      });
    }
  };
  
  if (!destination) return null;
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-5xl p-0 overflow-hidden bg-gradient-to-br from-gray-900 to-black border-none">
        <DialogTitle className="sr-only">{destination.name} Image Gallery</DialogTitle>
        <DialogDescription className="sr-only">
          View images of {destination.name} in {destination.state}
        </DialogDescription>
        
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 z-50 rounded-full p-2 bg-black/50 text-white hover:bg-black/70 transition-colors"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
        
        <div className="flex flex-col items-center">
          {/* Main Image Container */}
          <GalleryViewer 
            destination={destination}
            allImages={allImages}
            currentImageIndex={currentImageIndex}
            showInfo={showInfo}
            isZoomed={isZoomed}
            handleNext={handleNext}
            handlePrev={handlePrev}
            toggleZoom={toggleZoom}
          />
          
          {/* Caption and Controls */}
          <GalleryFooter 
            destination={destination}
            allImages={allImages}
            currentImageIndex={currentImageIndex}
            isLiked={isLiked}
            showInfo={showInfo}
            isZoomed={isZoomed}
            setCurrentImageIndex={setCurrentImageIndex}
            toggleLike={toggleLike}
            toggleInfo={toggleInfo}
            toggleZoom={toggleZoom}
            handleDownload={handleDownload}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageGallery;
