
import React, { useState, useEffect } from 'react';
import { Destination, getActivityById } from '@/data/destinations';
import { MapPin, Heart } from 'lucide-react';
import ActivityTag from './ActivityTag';
import { cn } from '@/lib/utils';
import ImageGallery from './ImageGallery';

interface DestinationCardProps {
  destination: Destination;
  className?: string;
  style?: React.CSSProperties;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination, className, style }) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(destination.image);
  
  // Handle image loading and fallbacks
  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.onerror = () => {
      // If image fails to load, try a fallback
      setImageSrc('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80');
    };
    img.src = destination.image;
  }, [destination.image]);
  
  const openGallery = () => {
    setIsGalleryOpen(true);
  };

  const toggleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  // Determine gradient based on state name (for visual variety)
  const getGradient = (stateName: string) => {
    const firstChar = stateName.charAt(0).toLowerCase();
    
    if (firstChar <= 'g') return 'from-pink-500 to-purple-600';
    if (firstChar <= 'm') return 'from-amber-500 to-pink-500';
    if (firstChar <= 's') return 'from-blue-500 to-teal-500';
    return 'from-emerald-500 to-blue-600';
  };

  return (
    <>
      <div 
        className={cn(
          "group relative overflow-hidden rounded-xl hover-scale cursor-pointer",
          "transition-all duration-500 ease-out shadow-md hover:shadow-xl",
          "bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900",
          className
        )}
        style={style}
        onClick={openGallery}
      >
        {/* Like Button */}
        <button 
          onClick={toggleLike}
          className="absolute top-3 right-3 z-30 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-md transition-transform hover:scale-110"
        >
          <Heart 
            className={cn(
              "h-5 w-5 transition-colors", 
              isLiked ? "fill-pink-500 text-pink-500" : "text-gray-600"
            )} 
          />
        </button>

        {/* Image Container with Overlay */}
        <div className="aspect-[4/3] w-full overflow-hidden relative">
          <img 
            src={imageSrc} 
            alt={destination.name}
            className="w-full h-full object-cover transition duration-700 ease-in-out group-hover:scale-110"
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          {/* State Badge */}
          <div className={`absolute top-3 left-3 inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getGradient(destination.state)} text-white`}>
            <MapPin className="mr-1 h-3 w-3 text-white" />
            {destination.state}
          </div>
        </div>
        
        {/* Content */}
        <div className="p-4 sm:p-5">
          <h3 className="text-xl font-bold mb-2 text-balance bg-gradient-to-br from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">{destination.name}</h3>
          
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
            {destination.description}
          </p>
          
          {/* Activities */}
          <div className="flex flex-wrap gap-2">
            {destination.activities.slice(0, 3).map((activityId) => {
              const activity = getActivityById(activityId);
              return activity ? (
                <ActivityTag key={activityId} activity={activity} />
              ) : null;
            })}
            {destination.activities.length > 3 && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-800 dark:text-purple-300">
                +{destination.activities.length - 3} more
              </span>
            )}
          </div>

          {/* View Gallery Button - visible on hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 backdrop-blur-sm">
            <span className="px-4 py-2 bg-white/90 dark:bg-black/80 rounded-full text-sm font-semibold text-gray-800 dark:text-white shadow-lg">
              View Gallery
            </span>
          </div>
        </div>
      </div>
      
      {/* Image Gallery Modal */}
      <ImageGallery 
        destination={destination}
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
      />
    </>
  );
};

export default DestinationCard;
