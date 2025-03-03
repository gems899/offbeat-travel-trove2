
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
            backgroundImage: `url('https://images.unsplash.com/photo-1496275068113-fff8c90750d1?ixlib=rb-1.2.1&auto=format&fit=crop&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="particles-container"></div>
      </div>

      {/* Content */}
      <div className="container relative z-20 px-4 sm:px-6 lg:px-8 mx-auto text-center">
        <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
          <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-primary/80 backdrop-blur-sm">
            Discover the Unexplored
          </span>
        </div>
        
        <h1 className="animate-fade-in opacity-0 text-4xl md:text-5xl lg:text-7xl font-bold text-white max-w-5xl mx-auto text-shadow-lg" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
          Explore India's Hidden <span className="text-primary">Travel Gems</span>
        </h1>
        
        <p className="animate-fade-in opacity-0 mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto text-shadow" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
          Venture beyond the tourist trail and discover the secret wonders of each state across India
        </p>
        
        <div className="animate-fade-in opacity-0 mt-12" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
          <a 
            href="#destinations" 
            className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-12 px-8 py-3"
          >
            Discover Places
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#destinations"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce text-white hover:text-primary transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-10 w-10" />
      </a>
    </section>
  );
};

export default Hero;
