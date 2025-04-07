
import React from 'react';
import { Cloud, ArrowUp, Wind, Thermometer, Mountain, Compass, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const WeatherPlaceholder: React.FC = () => {
  return (
    <motion.div 
      className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 rounded-lg p-8 text-center shadow-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative mb-8">
        <motion.div
          className="mx-auto h-20 w-20 text-blue-400 dark:text-blue-500"
          animate={{ 
            y: [0, -15, 0],
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
        
        {/* Mountain icon (fixed from Mountains) */}
        <motion.div 
          className="absolute -bottom-4 -left-2 text-indigo-400 dark:text-indigo-600"
          animate={{ 
            scale: [1, 1.05, 1],
            y: [0, -3, 0],
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Mountain className="h-8 w-8" />
        </motion.div>
        
        {/* Compass icon */}
        <motion.div 
          className="absolute top-1/4 right-0 text-amber-500 dark:text-amber-600"
          animate={{ 
            rotate: [0, 15, 0, -15, 0],
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Compass className="h-6 w-6" />
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
          <Wind className="h-7 w-7" />
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
          <Thermometer className="h-6 w-6" />
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
          <ArrowUp className="h-6 w-6" />
        </motion.div>
        
        <motion.div 
          className="absolute bottom-1/4 right-1/4 text-emerald-400 dark:text-emerald-500"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 10, 0],
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <MapPin className="h-6 w-6" />
        </motion.div>
      </div>
      
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
        Discover the Weather
      </h3>
      <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto mb-6">
        Search for a destination above or select from the popular destinations to check the current weather conditions and plan your perfect trip.
      </p>
      
      {/* Animated suggestions */}
      <div className="mt-6 space-y-3">
        <motion.div 
          className="text-blue-600 dark:text-blue-400 text-sm font-medium inline-block"
          animate={{ 
            opacity: [0.7, 1, 0.7],
            scale: [1, 1.02, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Try searching for "Tirthan Valley" or "Spiti Valley"
        </motion.div>
        
        <motion.div 
          className="block text-indigo-500 dark:text-indigo-400 text-sm font-medium"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.6, 1, 0.6],
            y: [3, 0, 3]
          }}
          transition={{ 
            duration: 3,
            delay: 0.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Or explore "Chopta Valley" - Mini Switzerland of India
        </motion.div>
        
        <motion.div 
          className="block text-emerald-500 dark:text-emerald-400 text-sm font-medium mt-1"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.6, 1, 0.6],
            y: [2, 0, 2]
          }}
          transition={{ 
            duration: 2.5,
            delay: 1,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Check weather for "Malana" - The ancient village
        </motion.div>
        
        <motion.div 
          className="block text-purple-500 dark:text-purple-400 text-sm font-medium mt-1"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.6, 1, 0.6],
            y: [2, 0, 2]
          }}
          transition={{ 
            duration: 3,
            delay: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Discover "Sunderbans" - Home of the Royal Bengal Tiger
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WeatherPlaceholder;
