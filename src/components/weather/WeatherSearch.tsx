
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { popularDestinations } from '@/data/weatherData';
import { cn } from '@/lib/utils';

interface WeatherSearchProps {
  searchQuery: string;
  selectedLocation: string | null;
  onSearchQueryChange: (query: string) => void;
  onSearch: () => void;
  onQuickSearch: (location: string) => void;
}

const WeatherSearch: React.FC<WeatherSearchProps> = ({
  searchQuery,
  selectedLocation,
  onSearchQueryChange,
  onSearch,
  onQuickSearch
}) => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <Input
          type="text"
          placeholder="Search for a destination..."
          value={searchQuery}
          onChange={(e) => onSearchQueryChange(e.target.value)}
          className="flex-1"
        />
        <Button onClick={onSearch} className="bg-blue-600 hover:bg-blue-700">
          Check Weather
        </Button>
      </div>

      <div className="mb-6">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Popular destinations:</p>
        <div className="flex flex-wrap gap-2">
          {popularDestinations.map((location) => (
            <Button
              key={location}
              variant="outline"
              size="sm"
              onClick={() => onQuickSearch(location)}
              className={cn(
                "text-xs border-gray-200 dark:border-gray-700",
                selectedLocation === location && "bg-blue-50 border-blue-200 text-blue-700 dark:bg-blue-900/30 dark:border-blue-800 dark:text-blue-300"
              )}
            >
              {location.split(',')[0]}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherSearch;
