
import React, { useState, useEffect } from 'react';
import { states, getDestinationsByState } from '@/data/destinations';
import DestinationCard from './DestinationCard';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Map, Search, Download } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { toast } from 'sonner';

const StateGrid: React.FC = () => {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Filter states based on search query
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
    // This would typically create and download a PDF or other document
    toast.success("Travel guide is being prepared for download", {
      description: "Your guide for " + (selectedState || "all states") + " will be ready soon!",
      duration: 5000,
    });
    
    // Simulate download delay
    setTimeout(() => {
      toast.success("Download complete!", {
        description: "Your travel guide has been downloaded successfully.",
      });
    }, 3000);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
    if (showSearch) {
      setSearchQuery('');
    }
  };
  
  // This would create a download file for the website code
  const handleDownloadCode = () => {
    toast.info("This website's code can be downloaded from GitHub", {
      description: "Check README.md for instructions on running this project locally.",
      duration: 8000,
      action: {
        label: "Learn More",
        onClick: () => window.open("https://github.com/your-username/offbeat-travel-trove", "_blank")
      },
    });
  };
  
  // Reset animation state if selectedState changes
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
        
        {/* Search and filter controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={toggleSearch}
              className="flex items-center gap-2"
            >
              <Search size={16} />
              {showSearch ? "Hide Search" : "Search States"}
            </Button>
            
            <Button 
              variant="outline" 
              size="sm"
              className="flex items-center gap-2"
              onClick={() => setSelectedState(null)}
              disabled={!selectedState}
            >
              <Filter size={16} />
              {selectedState ? "Clear Filter" : "All States"}
            </Button>
          </div>
          
          <div className="flex items-center gap-2">
            <Button 
              variant="default" 
              size="sm"
              className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white"
              onClick={handleDownloadGuide}
              disabled={!selectedState}
            >
              <Download size={16} />
              Download Travel Guide
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-500 hover:text-primary"
              onClick={handleDownloadCode}
            >
              <Map size={16} className="mr-2" />
              Get Website Code
            </Button>
          </div>
        </div>
        
        {/* Search input (conditionally rendered) */}
        <AnimatePresence>
          {showSearch && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-6 overflow-hidden"
            >
              <Input
                type="text"
                placeholder="Search for a state..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="max-w-md mx-auto"
              />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* State selector with enhanced animations */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {filteredStates.map((state) => (
            <motion.button
              key={state}
              onClick={() => handleStateClick(state)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                "border hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/30",
                selectedState === state
                  ? "bg-primary text-white border-transparent"
                  : "bg-white text-gray-800 border-gray-200 hover:border-primary/50 hover:scale-105"
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {state}
            </motion.button>
          ))}
          
          {filteredStates.length === 0 && (
            <p className="text-gray-500 italic mt-4">No states found matching "{searchQuery}"</p>
          )}
        </div>
        
        {/* Destinations Grid with improved animations */}
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
            
            {/* Show message if no state is selected */}
            {!selectedState && !isAnimating && (
              <motion.div 
                className="col-span-full flex flex-col items-center justify-center text-center p-8 rounded-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-6 p-4 rounded-full bg-primary/10 animate-float">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, 0, -5, 0],
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                  >
                    <Map className="h-12 w-12 text-primary" />
                  </motion.div>
                </div>
                <h3 className="text-xl font-bold mb-2">Select a state above</h3>
                <p className="text-gray-600 dark:text-gray-300 max-w-md">
                  Choose from the list of states to see offbeat destinations in that region.
                  Each state has its own unique hidden gems waiting to be explored!
                </p>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="mt-6 group"
                  onClick={() => {
                    // Randomly select a state
                    const randomState = states[Math.floor(Math.random() * states.length)];
                    setSelectedState(randomState);
                  }}
                >
                  <span className="mr-2 group-hover:translate-x-1 transition-transform">Surprise Me</span>
                  <span className="group-hover:rotate-45 transition-transform inline-block">→</span>
                </Button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default StateGrid;
