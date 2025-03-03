
import React from 'react';
import { Destination, getActivityById } from '@/data/destinations';
import { MapPin } from 'lucide-react';
import ActivityTag from './ActivityTag';
import { cn } from '@/lib/utils';

interface DestinationCardProps {
  destination: Destination;
  className?: string;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination, className }) => {
  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-xl hover-scale",
        "transition-all duration-500 ease-out shadow-md hover:shadow-xl",
        "bg-white dark:bg-gray-800",
        className
      )}
    >
      {/* Image Container with Overlay */}
      <div className="aspect-[4/3] w-full overflow-hidden relative">
        <img 
          src={destination.image} 
          alt={destination.name}
          className="w-full h-full object-cover transition duration-700 ease-in-out group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        {/* State Badge */}
        <div className="absolute top-3 left-3 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white/90 text-gray-800">
          <MapPin className="mr-1 h-3 w-3 text-primary" />
          {destination.state}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4 sm:p-5">
        <h3 className="text-xl font-bold mb-2 text-balance">{destination.name}</h3>
        
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
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300">
              +{destination.activities.length - 3} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
