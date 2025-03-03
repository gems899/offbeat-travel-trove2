
import React, { useState } from 'react';
import { states, getDestinationsByState } from '@/data/destinations';
import DestinationCard from './DestinationCard';
import { cn } from '@/lib/utils';

const StateGrid: React.FC = () => {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  
  const handleStateClick = (state: string) => {
    setSelectedState(state === selectedState ? null : state);
  };
  
  return (
    <section id="destinations" className="py-16 sm:py-24">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-primary uppercase rounded-full bg-primary/10">
            States & Territories
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold">Explore by State</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Select a state to discover its hidden gems and unexplored destinations
          </p>
        </div>
        
        {/* State selector */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {states.map((state) => (
            <button
              key={state}
              onClick={() => handleStateClick(state)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                "border hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/30",
                selectedState === state
                  ? "bg-primary text-white border-transparent"
                  : "bg-white text-gray-800 border-gray-200 hover:border-primary/50"
              )}
            >
              {state}
            </button>
          ))}
        </div>
        
        {/* Destinations Grid */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
        >
          {(selectedState ? getDestinationsByState(selectedState) : []).map((destination) => (
            <DestinationCard 
              key={destination.id} 
              destination={destination} 
              className="animate-scale-in opacity-0"
              style={{ animationFillMode: 'forwards', animationDelay: `${Math.random() * 0.5}s` }}
            />
          ))}
          
          {/* Show message if no state is selected */}
          {!selectedState && (
            <div className="col-span-full flex flex-col items-center justify-center text-center p-8 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
              <div className="mb-4 p-4 rounded-full bg-primary/10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Select a state above</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Choose from the list of states to see offbeat destinations in that region
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default StateGrid;
