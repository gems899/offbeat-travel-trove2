
import React, { useState } from 'react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { weatherDatabase, getBestTimeToVisit } from '@/data/weatherData';
import WeatherSearch from './weather/WeatherSearch';
import CurrentWeather from './weather/CurrentWeather';
import WeatherForecast5Day from './weather/WeatherForecast5Day';
import WeatherTravelTip from './weather/WeatherTravelTip';
import WeatherPlaceholder from './weather/WeatherPlaceholder';

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
      setBestTimeToVisit(getBestTimeToVisit(matchingLocation));
      toast.success(`Weather found for ${matchingLocation}`);
    } else {
      toast.error('Location not found. Try one of the popular destinations!');
    }
  };

  const handleQuickSearch = (location: string) => {
    setSearchQuery(location);
    setSelectedLocation(location);
    setBestTimeToVisit(getBestTimeToVisit(location));
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="weather" className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black relative overflow-hidden">
      {/* Animated Weather Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="absolute top-10 left-10 w-32 h-32 rounded-full bg-blue-500/5"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 10, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-indigo-500/5"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -15, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-10 w-40 h-40 rounded-full bg-purple-500/5"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -5, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-blue-600 uppercase rounded-full bg-blue-100 dark:bg-blue-900 dark:text-blue-200">
            Plan Your Trip
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Weather Forecast
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Check the weather conditions at your destination to plan the perfect trip
          </p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div 
            className="p-6"
            variants={item}
          >
            <WeatherSearch 
              searchQuery={searchQuery}
              selectedLocation={selectedLocation}
              onSearchQueryChange={setSearchQuery}
              onSearch={handleSearch}
              onQuickSearch={handleQuickSearch}
            />

            {weatherData ? (
              <motion.div 
                className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <CurrentWeather 
                  weatherData={weatherData} 
                  bestTimeToVisit={bestTimeToVisit || 'Not available'} 
                />
                
                <WeatherForecast5Day forecast={weatherData.forecast} />
                
                <WeatherTravelTip condition={weatherData.condition} />
              </motion.div>
            ) : (
              <WeatherPlaceholder />
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WeatherForecast;
