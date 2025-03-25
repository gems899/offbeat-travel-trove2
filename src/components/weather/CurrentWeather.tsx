
import React from 'react';
import { Droplets, Wind, Umbrella } from 'lucide-react';
import { WeatherData } from '@/data/weatherData';
import WeatherIcon from './WeatherIcon';

interface CurrentWeatherProps {
  weatherData: WeatherData;
  bestTimeToVisit: string;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ weatherData, bestTimeToVisit }) => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {weatherData.location}
          </h3>
          <p className="text-gray-500 dark:text-gray-400">Current Conditions</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-md">
            <WeatherIcon condition={weatherData.condition} size={36} />
          </div>
          <div className="text-4xl font-bold text-gray-900 dark:text-white">
            {weatherData.temperature}°C
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm flex items-center gap-3">
          <Droplets className="text-blue-500" />
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Humidity</p>
            <p className="font-medium">{weatherData.humidity}%</p>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm flex items-center gap-3">
          <Wind className="text-teal-500" />
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Wind Speed</p>
            <p className="font-medium">{weatherData.windSpeed} km/h</p>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm flex items-center gap-3">
          <Umbrella className="text-purple-500" />
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Best Time to Visit</p>
            <p className="font-medium">{bestTimeToVisit}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
