
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/60 via-indigo-800/40 to-blue-900/70" />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="particles-container"></div>
      </div>

      {/* Content */}
      <div className="container relative z-20 px-4 sm:px-6 lg:px-8 mx-auto text-center">
        <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
          <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-gradient-to-r from-pink-500 to-purple-500 backdrop-blur-sm">
            Discover the Unexplored
          </span>
        </div>
        
        <h1 className="animate-fade-in opacity-0 text-4xl md:text-5xl lg:text-7xl font-bold text-white max-w-5xl mx-auto text-shadow-lg" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
          Explore India's Hidden 
          <span className="relative inline-block ml-2">
            <span className="relative z-10 text-white bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent px-1">Travel</span>
          </span>
          <span className="relative inline-block ml-2">
            <span className="relative z-10 text-white bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 bg-clip-text text-transparent px-1">Gems</span>
          </span>
        </h1>
        
        <p className="animate-fade-in opacity-0 mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto text-shadow" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
          Venture beyond the tourist trail and discover the secret wonders of each state across India
        </p>
        
        <div className="animate-fade-in opacity-0 mt-12" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
          <a 
            href="#destinations" 
            className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-amber-500 to-pink-500 text-white shadow-lg hover:shadow-xl h-12 px-8 py-3"
          >
            Discover Places
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#destinations"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce text-white hover:text-amber-400 transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-10 w-10" />
      </a>
    </section>
  );
};

export default Hero;
