import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Destination } from '@/data/destinations';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Maximize2, 
  Minimize2, 
  Info, 
  Heart, 
  Share, 
  Download, 
  Map, 
  Star, 
  Train, 
  BadgePercent,
  Hotel,
  Locate
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';

interface ImageGalleryProps {
  destination: Destination;
  isOpen: boolean;
  onClose: () => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ 
  destination, 
  isOpen, 
  onClose 
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [showInfo, setShowInfo] = useState(true);
  const [showTrainOptions, setShowTrainOptions] = useState(false);
  const [showHotelOptions, setShowHotelOptions] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  // Create an array with all images
  const allImages = [
    destination.imageUrl,
    ...(destination.additionalImages || [])
  ].filter(Boolean);

  // Helper functions for image navigation
  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === allImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? allImages.length - 1 : prevIndex - 1
    );
  };

  // Function to toggle fullscreen
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
    setShowInfo(!isFullscreen);
  };

  // Reset state when dialog closes
  useEffect(() => {
    if (!isOpen) {
      setCurrentImageIndex(0);
      setIsFullscreen(false);
      setShowInfo(true);
      setShowTrainOptions(false);
      setShowHotelOptions(false);
      setLoadedImages(new Set());
    }
  }, [isOpen]);

  // Function to handle image load
  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => {
      const updated = new Set(prev);
      updated.add(index);
      return updated;
    });

    if (index === currentImageIndex) {
      setLoading(false);
    }
  };

  // Update loading state when current image changes
  useEffect(() => {
    setLoading(!loadedImages.has(currentImageIndex));
  }, [currentImageIndex, loadedImages]);

  // Function to handle likes
  const handleLike = () => {
    setIsLiked(!isLiked);
    if (!isLiked) {
      toast.success("Added to your favorites!", {
        description: `You've added ${destination.name} to your favorites.`
      });
    } else {
      toast.info("Removed from your favorites", {
        description: `You've removed ${destination.name} from your favorites.`
      });
    }
  };

  // Function to share destination
  const handleShare = () => {
    // In a real application, this would use the Web Share API
    const shareText = `Check out this amazing offbeat destination: ${destination.name} in ${destination.state}!`;
    
    if (navigator.share) {
      navigator.share({
        title: `Discover ${destination.name}`,
        text: shareText,
        url: window.location.href,
      }).catch(err => {
        console.error('Error sharing:', err);
        toast.error("Couldn't share this destination", {
          description: "There was an error sharing this content."
        });
      });
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard.writeText(`${shareText} ${window.location.href}`).then(() => {
        toast.success("Copied to clipboard!", {
          description: "Share the link with your friends and family."
        });
      }).catch(() => {
        toast.error("Couldn't copy to clipboard", {
          description: "Try selecting the URL in the address bar instead."
        });
      });
    }
  };

  // Function to handle image download
  const handleDownload = () => {
    const currentImage = allImages[currentImageIndex];
    const link = document.createElement('a');
    link.href = currentImage;
    link.download = `${destination.name.replace(/\s+/g, '-').toLowerCase()}-${currentImageIndex + 1}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success("Image downloaded!", {
      description: "The image has been saved to your downloads folder."
    });
  };

  // Function to show map location
  const handleShowMap = () => {
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(destination.name + ", " + destination.state + ", India")}`;
    window.open(mapUrl, '_blank');
    
    toast.info("Opening map in a new tab", {
      description: "Google Maps will help you locate this destination."
    });
  };

  // Keyboard navigation for the gallery
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          if (isFullscreen) {
            setIsFullscreen(false);
            setShowInfo(true);
            // Don't close the dialog, just exit fullscreen
            e.preventDefault(); // Prevent default ESC behavior
          } else {
            // Only close if we're NOT in fullscreen mode
            // Otherwise leave it to the parent component to handle
            if (showTrainOptions) {
              setShowTrainOptions(false);
              e.preventDefault();
            } else if (showHotelOptions) {
              setShowHotelOptions(false);
              e.preventDefault();
            }
          }
          break;
        case 'ArrowRight':
          goToNextImage();
          break;
        case 'ArrowLeft':
          goToPrevImage();
          break;
        case 'f':
          toggleFullscreen();
          break;
        default:
          break;
      }
    };
    
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, goToNextImage, goToPrevImage, isFullscreen, toggleFullscreen, showTrainOptions, showHotelOptions]);

  // Mock train data
  const trainOptions = [
    {
      name: "Express to Wonder",
      from: "Delhi",
      to: destination.name,
      departureTime: "06:30 AM",
      arrivalTime: "12:45 PM",
      duration: "6h 15m",
      price: "₹1,250",
      availability: "Available"
    },
    {
      name: "Heritage Explorer",
      from: "Mumbai",
      to: destination.name,
      departureTime: "10:15 PM",
      arrivalTime: "08:20 AM",
      duration: "10h 05m",
      price: "₹1,850",
      availability: "Few Seats Left"
    },
    {
      name: "Mountain Voyager",
      from: "Kolkata",
      to: destination.name,
      departureTime: "02:45 PM",
      arrivalTime: "05:10 AM",
      duration: "14h 25m",
      price: "₹2,100",
      availability: "Available"
    }
  ];
  
  // Mock hotel data
  const hotelOptions = [
    {
      name: "Mountain Retreat Resort",
      type: "Luxury Resort",
      price: "₹8,500",
      rating: 4.7,
      amenities: ["Swimming Pool", "Spa", "Restaurant", "Room Service", "Free WiFi"],
      discount: "15% OFF"
    },
    {
      name: "Riverside Cottage",
      type: "Boutique Hotel",
      price: "₹5,200",
      rating: 4.5,
      amenities: ["Room Service", "Free WiFi", "Restaurant"],
      discount: "10% OFF"
    },
    {
      name: "Cozy Homestay",
      type: "Homestay",
      price: "₹2,800",
      rating: 4.3,
      amenities: ["Free Breakfast", "Free WiFi", "Local Guide"],
      discount: "Book 3 nights, Get 1 FREE"
    },
    {
      name: "Adventure Camp",
      type: "Camping",
      price: "₹1,500",
      rating: 4.2,
      amenities: ["Bonfire", "Adventure Activities", "Meals Included"],
      discount: "20% OFF for groups"
    }
  ];

  // Handle booking a train
  const handleBookTrain = (train: any) => {
    toast.success(`Train booking initiated!`, {
      description: `Booking ${train.name} from ${train.from} to ${destination.name}. Redirecting to payment...`,
      duration: 5000,
    });
    
    // Close the train options panel
    setTimeout(() => {
      setShowTrainOptions(false);
      setShowInfo(true);
    }, 3000);
  };

  // Handle booking a hotel
  const handleBookHotel = (hotel: any) => {
    toast.success(`Hotel booking initiated!`, {
      description: `Booking ${hotel.name} at ${destination.name}. Redirecting to payment...`,
      duration: 5000,
    });
    
    // Close the hotel options panel
    setTimeout(() => {
      setShowHotelOptions(false);
      setShowInfo(true);
    }, 3000);
  };

  // Render the image gallery
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className={cn(
          "p-0 overflow-hidden transition-all duration-300 bg-black text-white",
          isFullscreen ? "max-w-screen h-screen rounded-none" : "max-w-6xl h-[90vh] sm:h-[80vh]"
        )}
      >
        {/* Main gallery container */}
        <div className="relative flex flex-col h-full">
          {/* Close button - always visible */}
          {!isFullscreen && (
            <button
              onClick={onClose}
              className="absolute top-2 right-2 z-50 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-all"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          )}
          
          {/* Fullscreen toggle - always visible */}
          <button
            onClick={toggleFullscreen}
            className="absolute top-2 right-10 z-50 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-all"
            aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
          >
            {isFullscreen ? <Minimize2 className="h-5 w-5" /> : <Maximize2 className="h-5 w-5" />}
          </button>
          
          {/* Navigation buttons - wrap in AnimatePresence for animation */}
          <AnimatePresence>
            {(showInfo || isFullscreen) && (
              <>
                <motion.button
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  onClick={goToPrevImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 z-30 p-3 rounded-full bg-black/30 hover:bg-black/50 transition-all"
                  aria-label="Previous"
                >
                  <ChevronLeft className="h-6 w-6" />
                </motion.button>
                
                <motion.button
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2 }}
                  onClick={goToNextImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 z-30 p-3 rounded-full bg-black/30 hover:bg-black/50 transition-all"
                  aria-label="Next"
                >
                  <ChevronRight className="h-6 w-6" />
                </motion.button>
              </>
            )}
          </AnimatePresence>
          
          {/* Image container */}
          <div className="relative flex-1 flex items-center justify-center overflow-hidden">
            {/* Loading spinner */}
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-20">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
              </div>
            )}
            
            {/* Image slides */}
            {allImages.map((image, index) => (
              <div
                key={`image-${index}`}
                className={cn(
                  "absolute inset-0 flex items-center justify-center transition-opacity duration-500",
                  index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                )}
              >
                <img
                  src={image}
                  alt={`${destination.name} - Image ${index + 1}`}
                  className={cn(
                    "max-h-full max-w-full object-contain transition-transform duration-300",
                    isFullscreen ? "scale-100" : "scale-95"
                  )}
                  onLoad={() => handleImageLoad(index)}
                />
              </div>
            ))}
          </div>
          
          {/* Information and control panel - only visible when not in fullscreen or info is toggled */}
          <AnimatePresence>
            {showInfo && !showTrainOptions && !showHotelOptions && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className={cn(
                  "relative z-40 p-4 bg-gradient-to-t from-black/80 to-transparent text-white",
                  isFullscreen ? "pb-12" : ""
                )}
              >
                {/* Destination title and description */}
                <div className="mb-4">
                  <h2 className="text-2xl font-bold">{destination.name}</h2>
                  <p className="text-sm text-gray-300">{destination.state}, India</p>
                </div>
                
                {/* Action buttons */}
                <div className="flex flex-wrap justify-between items-center">
                  <div className="flex space-x-2 sm:space-x-4">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-white hover:bg-white/10"
                      onClick={handleLike}
                    >
                      <Heart className={cn("h-4 w-4 mr-1", isLiked ? "fill-red-500 text-red-500" : "")} />
                      <span className="hidden sm:inline">Favorite</span>
                    </Button>
                    
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-white hover:bg-white/10"
                      onClick={handleShare}
                    >
                      <Share className="h-4 w-4 mr-1" />
                      <span className="hidden sm:inline">Share</span>
                    </Button>
                    
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-white hover:bg-white/10"
                      onClick={handleDownload}
                    >
                      <Download className="h-4 w-4 mr-1" />
                      <span className="hidden sm:inline">Download</span>
                    </Button>
                    
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-white hover:bg-white/10"
                      onClick={handleShowMap}
                    >
                      <Map className="h-4 w-4 mr-1" />
                      <span className="hidden sm:inline">View Map</span>
                    </Button>
                  </div>
                  
                  <div className="flex mt-2 sm:mt-0 space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-white/30 text-white hover:bg-white/10"
                      onClick={() => {
                        setShowInfo(false);
                        setShowTrainOptions(true);
                        setShowHotelOptions(false);
                      }}
                    >
                      <Train className="h-4 w-4 mr-2" />
                      Find Trains
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-white/30 text-white hover:bg-white/10"
                      onClick={() => {
                        setShowInfo(false);
                        setShowTrainOptions(false);
                        setShowHotelOptions(true);
                      }}
                    >
                      <Hotel className="h-4 w-4 mr-2" />
                      Book Stay
                    </Button>
                  </div>
                </div>
                
                {/* Caption and controls for the image */}
                <div className="mt-4 flex justify-between items-center">
                  <p className="text-sm text-gray-300 line-clamp-1">
                    {destination.description}
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <span>Image {currentImageIndex + 1} of {allImages.length}</span>
                    <div className="flex space-x-2">
                      <span className="text-xs bg-white/20 px-2 py-1 rounded-full">Use arrow keys to navigate</span>
                      <span className="text-xs bg-white/20 px-2 py-1 rounded-full hidden sm:inline-block">Press Esc to exit fullscreen</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Train options panel */}
          <AnimatePresence>
            {showTrainOptions && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 right-0 z-40 bg-black/90 text-white p-6 max-h-[70vh] overflow-y-auto"
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold flex items-center">
                    <Train className="h-5 w-5 mr-2" />
                    Train Options to {destination.name}
                  </h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white hover:bg-white/10"
                    onClick={() => {
                      setShowTrainOptions(false);
                      setShowInfo(true);
                    }}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 gap-4">
                  {trainOptions.map((train, index) => (
                    <div 
                      key={`train-${index}`}
                      className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-700/50 transition-all"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-bold text-lg">{train.name}</h3>
                          <p className="text-sm text-gray-300">{train.from} to {train.to}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-lg">{train.price}</p>
                          <p className="text-xs text-green-400">{train.availability}</p>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center mb-4 border-t border-b border-gray-700 py-2 my-2">
                        <div className="text-center">
                          <p className="text-sm font-bold">{train.departureTime}</p>
                          <p className="text-xs text-gray-400">Departure</p>
                        </div>
                        
                        <div className="flex-1 px-4">
                          <div className="relative flex items-center justify-center">
                            <div className="border-t border-dashed border-gray-600 w-full"></div>
                            <span className="absolute bg-gray-800 px-2 text-xs">{train.duration}</span>
                          </div>
                        </div>
                        
                        <div className="text-center">
                          <p className="text-sm font-bold">{train.arrivalTime}</p>
                          <p className="text-xs text-gray-400">Arrival</p>
                        </div>
                      </div>
                      
                      <Button 
                        variant="default" 
                        className="w-full bg-blue-600 hover:bg-blue-700"
                        onClick={() => handleBookTrain(train)}
                      >
                        Book This Train
                      </Button>
                    </div>
                  ))}
                </div>
                
                <div className="text-center mt-4 text-sm text-gray-400">
                  <p>All train timings are subject to change. Please verify before booking.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Hotel options panel */}
          <AnimatePresence>
            {showHotelOptions && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 right-0 z-40 bg-black/90 text-white p-6 max-h-[70vh] overflow-y-auto"
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold flex items-center">
                    <Hotel className="h-5 w-5 mr-2" />
                    Stay Options in {destination.name}
                  </h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white hover:bg-white/10"
                    onClick={() => {
                      setShowHotelOptions(false);
                      setShowInfo(true);
                    }}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {hotelOptions.map((hotel, index) => (
                    <div 
                      key={`hotel-${index}`}
                      className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-700/50 transition-all"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-bold text-lg">{hotel.name}</h3>
                          <p className="text-sm text-gray-300">{hotel.type}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-lg">{hotel.price}</p>
                          <div className="flex items-center justify-end">
                            <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                            <span className="text-xs ml-1">{hotel.rating}/5</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mb-3">
                        {hotel.amenities.map((amenity, i) => (
                          <span 
                            key={`amenity-${i}`} 
                            className="text-xs bg-gray-700 px-2 py-1 rounded-full"
                          >
                            {amenity}
                          </span>
                        ))}
                      </div>
                      
                      <div className="bg-gradient-to-r from-pink-600/30 to-purple-600/30 rounded p-2 mb-3 flex items-center">
                        <BadgePercent className="h-4 w-4 mr-2 text-pink-400" />
                        <span className="text-xs text-pink-200">{hotel.discount}</span>
                      </div>
                      
                      <Button 
                        variant="default" 
                        className="w-full bg-purple-600 hover:bg-purple-700"
                        onClick={() => handleBookHotel(hotel)}
                      >
                        Book This Stay
                      </Button>
                    </div>
                  ))}
                </div>
                
                <div className="text-center mt-4 text-sm text-gray-400">
                  <p>Prices are per night and may vary based on season. Taxes not included.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageGallery;
