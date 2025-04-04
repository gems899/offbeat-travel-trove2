
import React from 'react';
import { Camera, Map, MapPin, Mountain } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ExplorationCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  imageSrc: string;
}

const ExplorationCard = ({ 
  icon: Icon, 
  title, 
  description,
  imageSrc
}: ExplorationCardProps) => (
  <Card className="overflow-hidden bg-white dark:bg-gray-800 rounded-xl shadow-md hover-scale transition-all duration-300 hover:shadow-xl">
    <div className="relative h-48 overflow-hidden">
      <img 
        src={imageSrc} 
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <div className="absolute bottom-4 left-4">
        <div className="h-10 w-10 bg-primary/80 backdrop-blur-sm rounded-full flex items-center justify-center">
          <Icon className="h-5 w-5 text-white" />
        </div>
      </div>
    </div>
    <CardHeader className="pb-2">
      <CardTitle className="text-xl font-bold">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-gray-600 dark:text-gray-300">
        {description}
      </CardDescription>
    </CardContent>
  </Card>
);

const Exploration: React.FC = () => {
  return (
    <section id="exploration" className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-primary uppercase rounded-full bg-primary/10">
            Travel Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold">Beyond the Beaten Path</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Embrace the spirit of discovery as you venture into lesser-known destinations
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <ExplorationCard 
            icon={MapPin} 
            title="Undiscovered Places" 
            description="Find hidden gems and secluded spots that most travelers miss, providing authentic experiences away from crowds."
            imageSrc="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
          />
          
          <ExplorationCard 
            icon={Camera} 
            title="Capture Memories" 
            description="Document extraordinary landscapes, cultural encounters, and unique moments that tell a richer travel story."
            imageSrc="https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
          />
          
          <ExplorationCard 
            icon={Mountain} 
            title="Connect with Nature" 
            description="Immerse yourself in pristine natural environments and witness breathtaking landscapes untouched by mass tourism."
            imageSrc="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
          />
          
          <ExplorationCard 
            icon={Map} 
            title="Cultural Immersion" 
            description="Engage with local communities, traditions, and heritage for a deeper understanding of India's diverse cultures."
            imageSrc="https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
          />
        </div>
        
        {/* Quote Section */}
        <div className="mt-16 sm:mt-24 text-center">
          <blockquote className="relative max-w-3xl mx-auto">
            <svg className="absolute top-0 left-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-gray-100 dark:text-gray-800" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <p className="relative font-display text-2xl italic text-gray-900 dark:text-gray-100">
              The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.
            </p>
            <footer className="mt-4">
              <p className="text-base font-medium text-gray-600 dark:text-gray-300">Marcel Proust</p>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Exploration;
