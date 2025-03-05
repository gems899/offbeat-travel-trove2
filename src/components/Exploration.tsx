
import React, { useState } from 'react';
import { Camera, Map, MapPin, Mountain, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';

const ExplorationCard = ({ 
  icon: Icon, 
  title, 
  description,
  imagePath,
  colorClass
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
  imagePath: string;
  colorClass: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className="relative rounded-xl overflow-hidden shadow-lg transition-all duration-500 h-full"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={imagePath} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700"
          style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-${colorClass}/95 via-${colorClass}/70 to-${colorClass}/30 transition-opacity duration-300`} />
      </div>
      
      {/* Content */}
      <Card className="h-full bg-transparent border-0 relative z-10">
        <CardContent className="p-6 flex flex-col h-full">
          <div className={`h-12 w-12 rounded-full flex items-center justify-center mb-6 bg-white/20 backdrop-blur-sm`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
          
          <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
          
          <p className="text-white/90 flex-grow">
            {description}
          </p>
          
          <motion.div 
            className="mt-4 flex items-center text-white/80 font-medium text-sm"
            animate={{ x: isHovered ? 5 : 0 }}
            transition={{ duration: 0.2 }}
          >
            Discover more <ArrowRight className="ml-1 h-4 w-4" />
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Exploration: React.FC = () => {
  return (
    <section id="exploration" className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-12">
          <motion.span 
            className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-gradient-to-r from-pink-500 to-purple-500"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Travel Philosophy
          </motion.span>
          
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Beyond the Beaten Path
          </motion.h2>
          
          <motion.p 
            className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Embrace the spirit of discovery as you venture into lesser-known destinations
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <ExplorationCard 
            icon={MapPin} 
            title="Undiscovered Places" 
            description="Find hidden gems and secluded spots that most travelers miss, providing authentic experiences away from crowds."
            imagePath="/images/mechuka1.jpg"
            colorClass="blue-600"
          />
          
          <ExplorationCard 
            icon={Camera} 
            title="Capture Memories" 
            description="Document extraordinary landscapes, cultural encounters, and unique moments that tell a richer travel story."
            imagePath="/images/anini2.jpg"
            colorClass="pink-600"
          />
          
          <ExplorationCard 
            icon={Mountain} 
            title="Connect with Nature" 
            description="Immerse yourself in pristine natural environments and witness breathtaking landscapes untouched by mass tourism."
            imagePath="/images/mayodia1.jpg"
            colorClass="emerald-600"
          />
          
          <ExplorationCard 
            icon={Map} 
            title="Cultural Immersion" 
            description="Engage with local communities, traditions, and heritage for a deeper understanding of India's diverse cultures."
            imagePath="/images/mechuka3.jpg"
            colorClass="amber-600"
          />
        </div>
        
        {/* Interactive Quote Section with Parallax Effect */}
        <motion.div 
          className="mt-16 sm:mt-24 text-center relative py-16 px-4 rounded-2xl overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Background Image with Parallax Effect */}
          <div className="absolute inset-0 z-0">
            <motion.div
              initial={{ y: 0 }}
              whileInView={{ y: -20 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: false }}
              className="h-[120%] w-full"
            >
              <img 
                src="/images/mechuka5.jpg" 
                alt="Scenic landscape" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
            </motion.div>
          </div>
          
          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <blockquote className="relative max-w-3xl mx-auto">
                <svg className="absolute top-0 left-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-white/20" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="relative font-display text-2xl italic text-white">
                  The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.
                </p>
                <footer className="mt-4">
                  <p className="text-base font-medium text-white/80">Marcel Proust</p>
                </footer>
              </blockquote>
              
              <motion.button
                className="mt-8 inline-flex items-center px-6 py-3 border border-white/30 rounded-full text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore More Destinations
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Exploration;
