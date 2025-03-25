
import React, { useState } from 'react';
import { Cloud, CloudRain, Sun, Umbrella, Wind, CloudSnow, Thermometer, Droplets } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type WeatherCondition = 'sunny' | 'cloudy' | 'rainy' | 'snowy' | 'windy';

interface WeatherData {
  location: string;
  condition: WeatherCondition;
  temperature: number;
  humidity: number;
  windSpeed: number;
  forecast: Array<{
    day: string;
    condition: WeatherCondition;
    highTemp: number;
    lowTemp: number;
  }>;
}

// Mock weather data for different locations
const weatherDatabase: Record<string, WeatherData> = {
  'Mechuka, Arunachal Pradesh': {
    location: 'Mechuka, Arunachal Pradesh',
    condition: 'cloudy',
    temperature: 15,
    humidity: 78,
    windSpeed: 12,
    forecast: [
      { day: 'Today', condition: 'cloudy', highTemp: 15, lowTemp: 8 },
      { day: 'Tomorrow', condition: 'rainy', highTemp: 14, lowTemp: 9 },
      { day: 'Wednesday', condition: 'cloudy', highTemp: 16, lowTemp: 7 },
      { day: 'Thursday', condition: 'sunny', highTemp: 18, lowTemp: 10 },
      { day: 'Friday', condition: 'rainy', highTemp: 13, lowTemp: 6 }
    ]
  },
  'Anini, Arunachal Pradesh': {
    location: 'Anini, Arunachal Pradesh',
    condition: 'rainy',
    temperature: 12,
    humidity: 85,
    windSpeed: 15,
    forecast: [
      { day: 'Today', condition: 'rainy', highTemp: 12, lowTemp: 5 },
      { day: 'Tomorrow', condition: 'rainy', highTemp: 13, lowTemp: 6 },
      { day: 'Wednesday', condition: 'cloudy', highTemp: 14, lowTemp: 7 },
      { day: 'Thursday', condition: 'cloudy', highTemp: 15, lowTemp: 8 },
      { day: 'Friday', condition: 'sunny', highTemp: 16, lowTemp: 9 }
    ]
  },
  'Sangti Valley, Arunachal Pradesh': {
    location: 'Sangti Valley, Arunachal Pradesh',
    condition: 'sunny',
    temperature: 20,
    humidity: 60,
    windSpeed: 8,
    forecast: [
      { day: 'Today', condition: 'sunny', highTemp: 20, lowTemp: 12 },
      { day: 'Tomorrow', condition: 'cloudy', highTemp: 18, lowTemp: 11 },
      { day: 'Wednesday', condition: 'sunny', highTemp: 21, lowTemp: 13 },
      { day: 'Thursday', condition: 'sunny', highTemp: 22, lowTemp: 14 },
      { day: 'Friday', condition: 'cloudy', highTemp: 19, lowTemp: 12 }
    ]
  },
  'Mayodia, Arunachal Pradesh': {
    location: 'Mayodia, Arunachal Pradesh',
    condition: 'snowy',
    temperature: 3,
    humidity: 90,
    windSpeed: 20,
    forecast: [
      { day: 'Today', condition: 'snowy', highTemp: 3, lowTemp: -2 },
      { day: 'Tomorrow', condition: 'snowy', highTemp: 2, lowTemp: -3 },
      { day: 'Wednesday', condition: 'cloudy', highTemp: 5, lowTemp: -1 },
      { day: 'Thursday', condition: 'snowy', highTemp: 1, lowTemp: -4 },
      { day: 'Friday', condition: 'cloudy', highTemp: 4, lowTemp: -2 }
    ]
  },
  'Namsai, Arunachal Pradesh': {
    location: 'Namsai, Arunachal Pradesh',
    condition: 'cloudy',
    temperature: 22,
    humidity: 75,
    windSpeed: 10,
    forecast: [
      { day: 'Today', condition: 'cloudy', highTemp: 22, lowTemp: 15 },
      { day: 'Tomorrow', condition: 'rainy', highTemp: 20, lowTemp: 14 },
      { day: 'Wednesday', condition: 'rainy', highTemp: 21, lowTemp: 15 },
      { day: 'Thursday', condition: 'cloudy', highTemp: 23, lowTemp: 16 },
      { day: 'Friday', condition: 'sunny', highTemp: 25, lowTemp: 17 }
    ]
  },
  'Ziro, Arunachal Pradesh': {
    location: 'Ziro, Arunachal Pradesh',
    condition: 'sunny',
    temperature: 18,
    humidity: 65,
    windSpeed: 7,
    forecast: [
      { day: 'Today', condition: 'sunny', highTemp: 18, lowTemp: 11 },
      { day: 'Tomorrow', condition: 'sunny', highTemp: 19, lowTemp: 12 },
      { day: 'Wednesday', condition: 'cloudy', highTemp: 17, lowTemp: 10 },
      { day: 'Thursday', condition: 'rainy', highTemp: 16, lowTemp: 9 },
      { day: 'Friday', condition: 'cloudy', highTemp: 17, lowTemp: 10 }
    ]
  },
  'Majuli, Assam': {
    location: 'Majuli, Assam',
    condition: 'cloudy',
    temperature: 24,
    humidity: 80,
    windSpeed: 5,
    forecast: [
      { day: 'Today', condition: 'cloudy', highTemp: 24, lowTemp: 18 },
      { day: 'Tomorrow', condition: 'rainy', highTemp: 23, lowTemp: 17 },
      { day: 'Wednesday', condition: 'rainy', highTemp: 22, lowTemp: 17 },
      { day: 'Thursday', condition: 'cloudy', highTemp: 25, lowTemp: 19 },
      { day: 'Friday', condition: 'sunny', highTemp: 26, lowTemp: 20 }
    ]
  },
  'Gandikota, Andhra Pradesh': {
    location: 'Gandikota, Andhra Pradesh',
    condition: 'sunny',
    temperature: 32,
    humidity: 45,
    windSpeed: 15,
    forecast: [
      { day: 'Today', condition: 'sunny', highTemp: 32, lowTemp: 24 },
      { day: 'Tomorrow', condition: 'sunny', highTemp: 33, lowTemp: 25 },
      { day: 'Wednesday', condition: 'sunny', highTemp: 34, lowTemp: 26 },
      { day: 'Thursday', condition: 'cloudy', highTemp: 31, lowTemp: 23 },
      { day: 'Friday', condition: 'cloudy', highTemp: 30, lowTemp: 22 }
    ]
  },
  'Dholavira, Gujarat': {
    location: 'Dholavira, Gujarat',
    condition: 'sunny',
    temperature: 35,
    humidity: 30,
    windSpeed: 18,
    forecast: [
      { day: 'Today', condition: 'sunny', highTemp: 35, lowTemp: 27 },
      { day: 'Tomorrow', condition: 'sunny', highTemp: 36, lowTemp: 28 },
      { day: 'Wednesday', condition: 'windy', highTemp: 34, lowTemp: 26 },
      { day: 'Thursday', condition: 'sunny', highTemp: 35, lowTemp: 27 },
      { day: 'Friday', condition: 'sunny', highTemp: 37, lowTemp: 29 }
    ]
  },
  'Chitkul, Himachal Pradesh': {
    location: 'Chitkul, Himachal Pradesh',
    condition: 'cloudy',
    temperature: 8,
    humidity: 75,
    windSpeed: 12,
    forecast: [
      { day: 'Today', condition: 'cloudy', highTemp: 8, lowTemp: 1 },
      { day: 'Tomorrow', condition: 'snowy', highTemp: 6, lowTemp: -1 },
      { day: 'Wednesday', condition: 'snowy', highTemp: 5, lowTemp: -2 },
      { day: 'Thursday', condition: 'cloudy', highTemp: 7, lowTemp: 0 },
      { day: 'Friday', condition: 'sunny', highTemp: 10, lowTemp: 2 }
    ]
  },
  'Dzukou Valley, Nagaland': {
    location: 'Dzukou Valley, Nagaland',
    condition: 'cloudy',
    temperature: 15,
    humidity: 82,
    windSpeed: 8,
    forecast: [
      { day: 'Today', condition: 'cloudy', highTemp: 15, lowTemp: 9 },
      { day: 'Tomorrow', condition: 'rainy', highTemp: 14, lowTemp: 8 },
      { day: 'Wednesday', condition: 'rainy', highTemp: 13, lowTemp: 7 },
      { day: 'Thursday', condition: 'cloudy', highTemp: 16, lowTemp: 10 },
      { day: 'Friday', condition: 'sunny', highTemp: 18, lowTemp: 11 }
    ]
  },
  'Munsiyari, Uttarakhand': {
    location: 'Munsiyari, Uttarakhand',
    condition: 'sunny',
    temperature: 12,
    humidity: 60,
    windSpeed: 10,
    forecast: [
      { day: 'Today', condition: 'sunny', highTemp: 12, lowTemp: 5 },
      { day: 'Tomorrow', condition: 'cloudy', highTemp: 11, lowTemp: 4 },
      { day: 'Wednesday', condition: 'sunny', highTemp: 13, lowTemp: 6 },
      { day: 'Thursday', condition: 'sunny', highTemp: 14, lowTemp: 7 },
      { day: 'Friday', condition: 'cloudy', highTemp: 12, lowTemp: 5 }
    ]
  },
  'Sandakphu, West Bengal': {
    location: 'Sandakphu, West Bengal',
    condition: 'windy',
    temperature: 7,
    humidity: 65,
    windSpeed: 25,
    forecast: [
      { day: 'Today', condition: 'windy', highTemp: 7, lowTemp: 0 },
      { day: 'Tomorrow', condition: 'cloudy', highTemp: 8, lowTemp: 1 },
      { day: 'Wednesday', condition: 'windy', highTemp: 6, lowTemp: -1 },
      { day: 'Thursday', condition: 'cloudy', highTemp: 9, lowTemp: 2 },
      { day: 'Friday', condition: 'sunny', highTemp: 11, lowTemp: 3 }
    ]
  }
};

// Default popular destinations for quick search
const popularDestinations = [
  'Mechuka, Arunachal Pradesh',
  'Sandakphu, West Bengal',
  'Chitkul, Himachal Pradesh',
  'Majuli, Assam',
  'Dzukou Valley, Nagaland'
];

const WeatherForecast: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [bestTimeToVisit, setBestTimeToVisit] = useState<string | null>(null);

  const weatherData = selectedLocation ? weatherDatabase[selectedLocation] : null;

  const handleSearch = () => {
    const query = searchQuery.trim();
    if (!query) {
      toast.error('Please enter a location');
      return;
    }

    // Find a matching location (case insensitive)
    const matchingLocation = Object.keys(weatherDatabase).find(
      location => location.toLowerCase().includes(query.toLowerCase())
    );

    if (matchingLocation) {
      setSelectedLocation(matchingLocation);
      calculateBestTimeToVisit(matchingLocation);
      toast.success(`Weather found for ${matchingLocation}`);
    } else {
      toast.error('Location not found. Try one of the popular destinations!');
    }
  };

  const handleQuickSearch = (location: string) => {
    setSearchQuery(location);
    setSelectedLocation(location);
    calculateBestTimeToVisit(location);
  };

  const calculateBestTimeToVisit = (location: string) => {
    // This is just a simple mock calculation
    // In a real app, this would be based on historical data
    const data = weatherDatabase[location];
    switch (location) {
      case 'Mechuka, Arunachal Pradesh':
        setBestTimeToVisit('October to April');
        break;
      case 'Anini, Arunachal Pradesh':
        setBestTimeToVisit('March to June');
        break;
      case 'Sangti Valley, Arunachal Pradesh':
        setBestTimeToVisit('September to May');
        break;
      case 'Mayodia, Arunachal Pradesh':
        setBestTimeToVisit('December to February for snow');
        break;
      case 'Namsai, Arunachal Pradesh':
        setBestTimeToVisit('November to March');
        break;
      case 'Ziro, Arunachal Pradesh':
        setBestTimeToVisit('September to March');
        break;
      case 'Majuli, Assam':
        setBestTimeToVisit('November to March');
        break;
      case 'Gandikota, Andhra Pradesh':
        setBestTimeToVisit('October to March');
        break;
      case 'Dholavira, Gujarat':
        setBestTimeToVisit('November to February');
        break;
      case 'Chitkul, Himachal Pradesh':
        setBestTimeToVisit('May to October');
        break;
      case 'Dzukou Valley, Nagaland':
        setBestTimeToVisit('June to September');
        break;
      case 'Munsiyari, Uttarakhand':
        setBestTimeToVisit('March to June and September to November');
        break;
      case 'Sandakphu, West Bengal':
        setBestTimeToVisit('October to December and March to April');
        break;
      default:
        setBestTimeToVisit('Varies seasonally');
        break;
    }
  };

  const getWeatherIcon = (condition: WeatherCondition, size = 24) => {
    switch (condition) {
      case 'sunny':
        return <Sun size={size} className="text-amber-500" />;
      case 'cloudy':
        return <Cloud size={size} className="text-gray-500" />;
      case 'rainy':
        return <CloudRain size={size} className="text-blue-500" />;
      case 'snowy':
        return <CloudSnow size={size} className="text-blue-200" />;
      case 'windy':
        return <Wind size={size} className="text-teal-500" />;
      default:
        return <Cloud size={size} className="text-gray-500" />;
    }
  };

  return (
    <section id="weather" className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-blue-600 uppercase rounded-full bg-blue-100 dark:bg-blue-900 dark:text-blue-200">
            Plan Your Trip
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Weather Forecast
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Check the weather conditions at your destination to plan the perfect trip
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
          <div className="p-6">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Input
                type="text"
                placeholder="Search for a destination..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1"
              />
              <Button onClick={handleSearch} className="bg-blue-600 hover:bg-blue-700">
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
                    onClick={() => handleQuickSearch(location)}
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

            {weatherData ? (
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6"
              >
                <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
                  <div className="text-center sm:text-left mb-4 sm:mb-0">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {weatherData.location}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">Current Conditions</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-md">
                      {getWeatherIcon(weatherData.condition, 36)}
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

                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">5-Day Forecast</h4>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {weatherData.forecast.map((day) => (
                    <div key={day.day} className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm text-center">
                      <p className="font-medium text-gray-900 dark:text-white mb-2">{day.day}</p>
                      <div className="flex justify-center mb-2">
                        {getWeatherIcon(day.condition)}
                      </div>
                      <div className="flex justify-center items-center gap-2 text-sm">
                        <span className="font-medium text-gray-900 dark:text-white">{day.highTemp}°</span>
                        <span className="text-gray-500 dark:text-gray-400">{day.lowTemp}°</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg p-4">
                  <h4 className="flex items-center gap-2 text-blue-700 dark:text-blue-300 font-medium mb-2">
                    <Thermometer className="h-4 w-4" /> 
                    Travel Tip
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {weatherData.condition === 'sunny' && 'Pack sunscreen, sunglasses, and light clothing. Stay hydrated!'}
                    {weatherData.condition === 'cloudy' && 'Pack a light jacket and consider layers for changing conditions.'}
                    {weatherData.condition === 'rainy' && 'Pack a waterproof jacket, umbrella, and waterproof footwear.'}
                    {weatherData.condition === 'snowy' && 'Pack warm layers, waterproof boots, gloves, and a heavy jacket.'}
                    {weatherData.condition === 'windy' && 'Pack windproof clothing and secure any loose items during your trip.'}
                  </p>
                </div>
              </motion.div>
            ) : (
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 text-center">
                <Cloud className="mx-auto h-16 w-16 text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  No weather data selected
                </h3>
                <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                  Search for a destination above or select from the popular destinations to check the current weather conditions and forecast.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeatherForecast;
