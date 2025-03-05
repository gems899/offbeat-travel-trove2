
import React from 'react';
import { Destination } from '@/data/destinations';
import GalleryControls from './GalleryControls';
import GalleryThumbnails from './GalleryThumbnails';

interface GalleryFooterProps {
  destination: Destination;
  allImages: string[];
  currentImageIndex: number;
  isLiked: boolean;
  showInfo: boolean;
  isZoomed: boolean;
  setCurrentImageIndex: (index: number) => void;
  toggleLike: (e: React.MouseEvent) => void;
  toggleInfo: (e: React.MouseEvent) => void;
  toggleZoom: (e: React.MouseEvent) => void;
  handleDownload: (e: React.MouseEvent) => void;
}

const GalleryFooter: React.FC<GalleryFooterProps> = ({
  destination,
  allImages,
  currentImageIndex,
  isLiked,
  showInfo,
  isZoomed,
  setCurrentImageIndex,
  toggleLike,
  toggleInfo,
  toggleZoom,
  handleDownload
}) => {
  // Determine gallery background gradient based on state name (for visual variety)
  const getGradient = (stateName: string) => {
    const firstChar = stateName.charAt(0).toLowerCase();
    
    if (firstChar <= 'g') return 'from-pink-900/90 to-indigo-900/90';
    if (firstChar <= 'm') return 'from-amber-900/90 to-purple-900/90';
    if (firstChar <= 's') return 'from-blue-900/90 to-teal-900/90';
    return 'from-emerald-900/90 to-blue-900/90';
  };

  return (
    <div className={`w-full p-5 bg-gradient-to-r ${getGradient(destination.state)} text-white`}>
      <div className="flex flex-col sm:flex-row justify-between items-start mb-4">
        <div className="mb-3 sm:mb-0 max-w-2xl">
          <h2 className="text-2xl font-semibold mb-1">{destination.name}</h2>
          <p className="text-white/80 text-sm mb-2">{destination.state}</p>
          {showInfo && (
            <p className="text-white/90 text-sm leading-relaxed border-l-2 border-white/30 pl-3 mb-3">
              {destination.description}
            </p>
          )}
        </div>
        <GalleryControls 
          isLiked={isLiked}
          showInfo={showInfo}
          isZoomed={isZoomed}
          toggleLike={toggleLike}
          toggleInfo={toggleInfo}
          toggleZoom={toggleZoom}
          handleDownload={handleDownload}
        />
      </div>
      
      {/* Thumbnail Navigation */}
      <GalleryThumbnails 
        allImages={allImages}
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
      />
      
      {/* Counter and Instructions */}
      <div className="text-sm text-white/70 mt-2 flex justify-between items-center">
        <span>Image {currentImageIndex + 1} of {allImages.length}</span>
        <div className="flex space-x-2">
          <span className="text-xs bg-white/20 px-2 py-1 rounded-full">Use arrow keys to navigate</span>
          <span className="text-xs bg-white/20 px-2 py-1 rounded-full hidden sm:inline-block">Press Esc to close</span>
        </div>
      </div>
    </div>
  );
};

export default GalleryFooter;
