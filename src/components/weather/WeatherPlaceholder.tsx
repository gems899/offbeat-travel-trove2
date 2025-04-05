
import React from 'react';
import { Cloud, ArrowUp, Wind, Thermometer } from 'lucide-react';
import { motion } from 'framer-motion';

const WeatherPlaceholder: React.FC = () => {
  return (
    <motion.div 
      className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative mb-6">
        <motion.div
          className="mx-auto h-16 w-16 text-blue-400 dark:text-blue-500"
          animate={{ 
            y: [0, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Cloud className="h-full w-full" />
        </motion.div>
        
        {/* Animated weather elements */}
        <motion.div 
          className="absolute top-0 right-1/3 text-blue-300 dark:text-blue-600"
          animate={{ 
            rotate: [0, 10, 0, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Wind className="h-6 w-6" />
        </motion.div>
        
        <motion.div 
          className="absolute bottom-0 left-1/3 text-amber-400 dark:text-amber-500"
          animate={{ 
            y: [0, 5, 0],
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Thermometer className="h-5 w-5" />
        </motion.div>
        
        <motion.div 
          className="absolute top-1/2 left-1/4 text-sky-400 dark:text-sky-500"
          animate={{ 
            y: [0, -8, 0],
            x: [0, 5, 0, -5, 0],
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ArrowUp className="h-5 w-5" />
        </motion.div>
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        No weather data selected
      </h3>
      <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
        Search for a destination above or select from the popular destinations to check the current weather conditions and forecast.
      </p>
      
      {/* Animated pulsing hint */}
      <motion.div 
        className="mt-6 text-blue-500 dark:text-blue-400 text-sm font-medium inline-block"
        animate={{ 
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.02, 1]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        Try searching for "Mechuka" or "Sangti Valley"
      </motion.div>
    </motion.div>
  );
};

export default WeatherPlaceholder;
