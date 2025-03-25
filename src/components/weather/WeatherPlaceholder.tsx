
import React from 'react';
import { Cloud } from 'lucide-react';

const WeatherPlaceholder: React.FC = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 text-center">
      <Cloud className="mx-auto h-16 w-16 text-gray-400 mb-4" />
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        No weather data selected
      </h3>
      <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
        Search for a destination above or select from the popular destinations to check the current weather conditions and forecast.
      </p>
    </div>
  );
};

export default WeatherPlaceholder;
