
import React, { useState, useEffect } from 'react';
import { states, getDestinationsByState } from '@/data/destinations';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Map, Search, Heart, DownloadCloud } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { toast } from 'sonner';

import DestinationCard from './DestinationCard';
import StateFilter from './state/StateFilter';
import StateSearchBar from './state/StateSearchBar';
import StateToolbar from './state/StateToolbar';
import StateEmptyView from './state/StateEmptyView';

const StateGrid: React.FC = () => {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const filteredStates = states.filter(state => 
    searchQuery === '' || state.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const handleStateClick = (state: string) => {
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedState(state === selectedState ? null : state);
      setIsAnimating(false);
    }, 300);
  };
  
  const handleDownloadGuide = () => {
    toast.success("Travel guide is being prepared for download", {
      description: "Your guide for " + (selectedState || "all states") + " will be ready soon!",
      duration: 5000,
    });
    
    setTimeout(() => {
      toast.success("Download complete!", {
        description: "Your travel guide has been downloaded successfully.",
      });
    }, 3000);
  };

  const handleAddToWishlist = () => {
    toast.success("Added to your travel wishlist", {
      description: selectedState 
        ? `${selectedState} has been added to your travel wishlist!` 
        : "All featured destinations have been added to your wishlist!",
      duration: 5000,
      action: {
        label: "View Wishlist",
        onClick: () => toast.info("Wishlist feature coming soon!")
      },
    });
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
    if (showSearch) {
      setSearchQuery('');
    }
  };
  
  useEffect(() => {
    setIsAnimating(false);
  }, [selectedState]);
  
  return (
    <section id="destinations" className="py-16 sm:py-24 relative">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-50 to-white opacity-50 dark:from-gray-900 dark:to-black pointer-events-none"></div>
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-primary uppercase rounded-full bg-primary/10 animate-pulse">
            States & Territories
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold transition-all duration-700 hover:text-primary">Explore by State</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Select a state to discover its hidden gems and unexplored destinations
          </p>
        </div>
        
        <StateToolbar 
          selectedState={selectedState}
          showSearch={showSearch}
          toggleSearch={toggleSearch}
          handleAddToWishlist={handleAddToWishlist}
          handleDownloadGuide={handleDownloadGuide}
          clearSelection={() => setSelectedState(null)}
        />
        
        <StateSearchBar 
          showSearch={showSearch}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        
        <StateFilter 
          filteredStates={filteredStates}
          selectedState={selectedState}
          searchQuery={searchQuery}
          handleStateClick={handleStateClick}
        />
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedState || 'empty'}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
          >
            {(selectedState ? getDestinationsByState(selectedState) : []).map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <DestinationCard 
                  destination={destination} 
                  className="h-full hover:shadow-xl transition-all duration-500"
                />
              </motion.div>
            ))}
            
            {!selectedState && !isAnimating && (
              <StateEmptyView setSelectedState={setSelectedState} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default StateGrid;
