
import React, { useState, useEffect } from 'react';
import { ChevronDown, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const backgroundImages = [
    '/images/mechuka3.jpg',
    '/images/mayodia1.jpg',
    '/images/anini1.jpg'
  ];
  
  // Auto rotate background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % backgroundImages.length);
    }, 7000);
    
    return () => clearInterval(interval);
  }, []);
  
  const handleExploreClick = () => {
    toast.success("Let's explore hidden gems of India!", {
      description: "Scroll down to discover amazing destinations",
      position: "top-center",
    });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <motion.div
            key={image}
            className="absolute inset-0 bg-cover bg-center"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: currentImageIndex === index ? 1 : 0,
              scale: currentImageIndex === index ? 1 : 1.1
            }}
            transition={{ 
              opacity: { duration: 1.5 },
              scale: { duration: 8 }
            }}
            style={{
              backgroundImage: `url('${image}')`,
              zIndex: currentImageIndex === index ? 1 : 0
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/60 via-indigo-800/40 to-blue-900/70" style={{ zIndex: 2 }} />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="particles-container"></div>
      </div>

      {/* Featured Locations */}
      <div className="absolute top-1/4 left-8 z-20 hidden md:block">
        <div className="space-y-4">
          {['Mechuka', 'Mayodia', 'Anini'].map((location, index) => (
            <motion.div 
              key={location}
              className={`flex items-center space-x-2 cursor-pointer
                ${currentImageIndex === index ? 'text-white' : 'text-white/60'}`}
              whileHover={{ x: 5, color: '#ffffff' }}
              onClick={() => setCurrentImageIndex(index)}
            >
              <MapPin className={`h-4 w-4 ${currentImageIndex === index ? 'text-rose-400' : 'text-white/60'}`} />
              <span className="font-medium">{location}</span>
              {currentImageIndex === index && (
                <motion.div 
                  className="h-0.5 w-6 bg-rose-400 ml-1"
                  layoutId="locationIndicator"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-20 px-4 sm:px-6 lg:px-8 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-gradient-to-r from-pink-500 to-purple-500 backdrop-blur-sm">
            Discover the Unexplored
          </span>
        </motion.div>
        
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-7xl font-bold text-white max-w-5xl mx-auto text-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Explore India's Hidden 
          <motion.span 
            className="relative inline-block ml-2"
            whileHover={{ scale: 1.05 }}
          >
            <span className="relative z-10 text-white bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent px-1">Travel</span>
          </motion.span>
          <motion.span 
            className="relative inline-block ml-2"
            whileHover={{ scale: 1.05 }}
          >
            <span className="relative z-10 text-white bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 bg-clip-text text-transparent px-1">Gems</span>
          </motion.span>
        </motion.h1>
        
        <motion.p 
          className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto text-shadow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Venture beyond the tourist trail and discover the secret wonders of each state across India
        </motion.p>
        
        <motion.div 
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <motion.a 
            href="#destinations" 
            className="inline-flex items-center justify-center rounded-full text-sm font-medium bg-gradient-to-r from-amber-500 to-pink-500 text-white shadow-lg h-12 px-8 py-3"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            whileTap={{ scale: 0.95 }}
            onClick={handleExploreClick}
          >
            Discover Places
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.a
        href="#destinations"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 text-white hover:text-amber-400 transition-colors"
        aria-label="Scroll down"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
      >
        <ChevronDown className="h-10 w-10" />
      </motion.a>
    </section>
  );
};

export default Hero;
