
import React from 'react';
import { Share2, Download, Heart, Info, ZoomIn } from 'lucide-react';
import { toast } from "sonner";

interface GalleryControlsProps {
  isLiked: boolean;
  showInfo: boolean;
  isZoomed: boolean;
  toggleLike: (e: React.MouseEvent) => void;
  toggleInfo: (e: React.MouseEvent) => void;
  toggleZoom: (e: React.MouseEvent) => void;
  handleDownload: (e: React.MouseEvent) => void;
}

const GalleryControls: React.FC<GalleryControlsProps> = ({
  isLiked,
  showInfo,
  isZoomed,
  toggleLike,
  toggleInfo,
  toggleZoom,
  handleDownload
}) => {
  return (
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
  );
};

export default GalleryControls;
