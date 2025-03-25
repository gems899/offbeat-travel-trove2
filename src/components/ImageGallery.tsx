
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Destination } from '@/data/destinations';
import { X, ChevronLeft, ChevronRight, Share2, Download, Heart, Info, ZoomIn, TrainFront, Hotel } from 'lucide-react';
import { toast } from "sonner";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface ImageGalleryProps {
  destination: Destination | null;
  isOpen: boolean;
  onClose: () => void;
}

interface TrainInfo {
  name: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: string;
  availability: string;
}

interface HotelInfo {
  name: string;
  type: string;
  priceRange: string;
  rating: number;
  amenities: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ destination, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [showInfo, setShowInfo] = useState(true); // Show info by default
  const [isZoomed, setIsZoomed] = useState(false);
  const [allImages, setAllImages] = useState<string[]>([]);
  const [showTrainInfo, setShowTrainInfo] = useState(false);
  const [showHotelInfo, setShowHotelInfo] = useState(false);
  
  // Dummy train data from Delhi
  const trainData: Record<string, TrainInfo[]> = {
    "Mechuka": [
      { name: "Dibrugarh Rajdhani Express", departureTime: "16:10", arrivalTime: "Next day 10:30", duration: "18h 20m", price: "₹1,950 - ₹3,500", availability: "Available" },
      { name: "Northeast Express", departureTime: "19:40", arrivalTime: "Next day 15:20", duration: "19h 40m", price: "₹1,200 - ₹2,800", availability: "Available" },
      { name: "Arunachal Pradesh Express", departureTime: "07:50", arrivalTime: "Next day 06:15", duration: "22h 25m", price: "₹1,100 - ₹2,600", availability: "Waitlist" }
    ],
    "Anini": [
      { name: "North East Express", departureTime: "19:40", arrivalTime: "Next day 14:30", duration: "18h 50m", price: "₹1,800 - ₹3,200", availability: "Available" },
      { name: "Dibrugarh Rajdhani Express", departureTime: "16:10", arrivalTime: "Next day 10:30", duration: "18h 20m", price: "₹1,950 - ₹3,500", availability: "Limited" }
    ],
    "Sangti Valley": [
      { name: "Shatabdi Express to Guwahati", departureTime: "06:15", arrivalTime: "14:45", duration: "8h 30m", price: "₹1,200 - ₹2,100", availability: "Available" },
      { name: "Northeast Express", departureTime: "19:40", arrivalTime: "Next day 12:20", duration: "16h 40m", price: "₹1,300 - ₹2,400", availability: "Available" }
    ],
  };

  // Dummy hotel data
  const hotelData: Record<string, HotelInfo[]> = {
    "Mechuka": [
      { name: "Mountain View Resort", type: "Resort", priceRange: "₹2,500 - ₹4,500/night", rating: 4.5, amenities: ["Free WiFi", "Restaurant", "Mountain Views"] },
      { name: "Mechuka Homestay", type: "Homestay", priceRange: "₹1,200 - ₹1,800/night", rating: 4.3, amenities: ["Traditional Meals", "Local Guide", "Cultural Experience"] },
      { name: "Valley Retreat", type: "Hotel", priceRange: "₹3,200 - ₹5,500/night", rating: 4.7, amenities: ["Room Service", "Spa", "Trekking Tours"] },
      { name: "Buddha's Peace Lodge", type: "Lodge", priceRange: "₹1,800 - ₹2,500/night", rating: 4.2, amenities: ["Garden", "Meditation Area", "Local Cuisine"] }
    ],
    "Anini": [
      { name: "Dibang Valley Resort", type: "Resort", priceRange: "₹2,200 - ₹3,800/night", rating: 4.1, amenities: ["River View", "Local Guide", "Campfire"] },
      { name: "Anini Guest House", type: "Guest House", priceRange: "₹1,000 - ₹1,500/night", rating: 3.9, amenities: ["Basic Amenities", "Home Cooked Meals"] },
      { name: "Hillside Retreat", type: "Homestay", priceRange: "₹1,500 - ₹2,200/night", rating: 4.3, amenities: ["Cultural Tours", "Trekking", "Local Food"] }
    ],
    "Sangti Valley": [
      { name: "Pine Forest Resort", type: "Resort", priceRange: "₹3,000 - ₹5,000/night", rating: 4.6, amenities: ["Forest View", "Restaurant", "Bird Watching"] },
      { name: "Sangti River Lodge", type: "Lodge", priceRange: "₹2,000 - ₹3,500/night", rating: 4.4, amenities: ["River Access", "Bonfire", "Wildlife Tours"] },
      { name: "Mountain Heritage Homestay", type: "Homestay", priceRange: "₹1,800 - ₹2,500/night", rating: 4.5, amenities: ["Organic Food", "Cultural Experience", "Guided Walks"] }
    ],
  };
  
  // Set up images and handle error fallbacks
  useEffect(() => {
    if (destination) {
      // Default fallback image if all images fail to load
      const fallbackImage = 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80';
      
      // Create image array with main image first, then gallery images
      const images = [
        destination.image || fallbackImage,
        ...(destination.galleryImages || [])
      ];
      
      // For each image, preload to test if it works
      const preloadedImages = images.map(src => {
        // If src is empty or invalid, use fallback
        if (!src || src.includes('undefined') || src === "") {
          return fallbackImage;
        }
        return src;
      });
      
      setAllImages(preloadedImages);
    }
  }, [destination]);
  
  // Reset current image index when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
      setShowInfo(true); // Show info by default
      setIsZoomed(false);
      setShowTrainInfo(false);
      setShowHotelInfo(false);
    }
  }, [isOpen, destination]);
  
  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };
  
  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  const toggleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
    toast(isLiked ? "Removed from favorites" : "Added to favorites", {
      position: "bottom-center",
      duration: 2000,
    });
  };

  const toggleInfo = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowInfo(!showInfo);
    toast(showInfo ? "Description hidden" : "Description shown", {
      position: "bottom-center",
      duration: 1500,
    });
  };

  const toggleZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsZoomed(!isZoomed);
  };
  
  const handleDownload = async (e: React.MouseEvent) => {
    e.stopPropagation();
    
    try {
      const currentImage = allImages[currentImageIndex];
      const response = await fetch(currentImage);
      const blob = await response.blob();
      
      // Create a temporary anchor element
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      
      // Extract filename from path or set a default
      const filename = currentImage.split('/').pop() || `${destination?.name.toLowerCase().replace(/\s+/g, '-')}-${currentImageIndex + 1}.jpg`;
      link.download = filename;
      
      // Trigger download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast("Image downloaded successfully", {
        position: "bottom-center",
        duration: 2000,
      });
    } catch (error) {
      console.error("Download failed:", error);
      toast("Failed to download image", {
        position: "bottom-center",
        duration: 3000,
      });
    }
  };

  const toggleTrainInfo = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowTrainInfo(!showTrainInfo);
    if (showHotelInfo) setShowHotelInfo(false);
  };

  const toggleHotelInfo = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowHotelInfo(!showHotelInfo);
    if (showTrainInfo) setShowTrainInfo(false);
  };
  
  // Determine gallery background gradient based on state name (for visual variety)
  const getGradient = (stateName: string) => {
    const firstChar = stateName.charAt(0).toLowerCase();
    
    if (firstChar <= 'g') return 'from-pink-900/90 to-indigo-900/90';
    if (firstChar <= 'm') return 'from-amber-900/90 to-purple-900/90';
    if (firstChar <= 's') return 'from-blue-900/90 to-teal-900/90';
    return 'from-emerald-900/90 to-blue-900/90';
  };
  
  // Star rating component
  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'} mr-1`} 
               fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        ))}
        <span className="ml-1 text-xs text-gray-400">{rating.toFixed(1)}</span>
      </div>
    );
  };
  
  if (!destination) return null;
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-5xl max-h-[90vh] p-0 overflow-hidden bg-gradient-to-br from-gray-900 to-black border-none">
        <DialogTitle className="sr-only">{destination.name} Image Gallery</DialogTitle>
        <DialogDescription className="sr-only">
          View images of {destination.name} in {destination.state}
        </DialogDescription>
        
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 z-50 rounded-full p-2 bg-black/50 text-white hover:bg-black/70 transition-colors"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
        
        <div className="flex flex-col items-center max-h-[90vh] overflow-y-auto">
          {/* Main Image Container */}
          <div className="relative w-full h-[50vh] flex items-center justify-center bg-gradient-to-br from-gray-800 to-black bg-opacity-80 overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-gray-900 to-black" />
            
            {/* Main image with zoom effect */}
            <div 
              className={`relative z-10 max-h-full max-w-full transition-all duration-300 ${
                isZoomed ? "scale-150 cursor-zoom-out" : "cursor-zoom-in"
              }`}
              onClick={toggleZoom}
            >
              <img 
                src={allImages[currentImageIndex]} 
                alt={`${destination.name} - Image ${currentImageIndex + 1}`}
                className="max-h-[50vh] max-w-full object-contain mx-auto transition-opacity duration-300"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80';
                }}
              />
            </div>
            
            {/* Navigation Arrows */}
            {allImages.length > 1 && (
              <>
                <button 
                  onClick={handlePrev}
                  className="absolute left-4 p-3 rounded-full bg-black/50 text-white hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-600 transition-all hover:scale-105"
                  aria-label="Previous"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                
                <button 
                  onClick={handleNext}
                  className="absolute right-4 p-3 rounded-full bg-black/50 text-white hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-600 transition-all hover:scale-105"
                  aria-label="Next"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}
          </div>
          
          {/* Footer with Caption and Controls */}
          <div className={`w-full p-5 bg-gradient-to-r ${getGradient(destination.state)} text-white`}>
            <div className="flex flex-col sm:flex-row justify-between items-start mb-4">
              <div className="mb-3 sm:mb-0 max-w-2xl">
                <h2 className="text-2xl font-semibold mb-1">{destination.name}</h2>
                <p className="text-white/80 text-sm mb-2">{destination.state}</p>
                {showInfo && (
                  <p className="text-white/90 text-sm leading-relaxed border-l-2 border-white/30 pl-3 mb-3">
                    {destination.description}
                  </p>
                )}
              </div>
              <div className="flex space-x-3">
                <button 
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors group relative"
                  onClick={toggleInfo}
                  aria-label="Show information"
                >
                  <Info className="h-5 w-5" />
                  <span className="absolute bottom-full right-0 mb-2 hidden group-hover:block bg-black/70 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    {showInfo ? 'Hide info' : 'Show info'}
                  </span>
                </button>
                <button 
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors group relative"
                  onClick={(e) => {
                    e.stopPropagation();
                    toast("Share functionality coming soon!", {
                      position: "bottom-center",
                    });
                  }}
                  aria-label="Share"
                >
                  <Share2 className="h-5 w-5" />
                  <span className="absolute bottom-full right-0 mb-2 hidden group-hover:block bg-black/70 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    Share
                  </span>
                </button>
                <button 
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors group relative"
                  onClick={handleDownload}
                  aria-label="Download"
                >
                  <Download className="h-5 w-5" />
                  <span className="absolute bottom-full right-0 mb-2 hidden group-hover:block bg-black/70 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    Download
                  </span>
                </button>
                <button 
                  onClick={toggleLike}
                  className={`p-2 rounded-full ${isLiked ? 'bg-pink-600/30' : 'bg-white/10'} hover:bg-white/20 transition-colors group relative`}
                  aria-label={isLiked ? "Remove from favorites" : "Add to favorites"}
                >
                  <Heart className={`h-5 w-5 ${isLiked ? "fill-pink-500 text-pink-500" : ""} transition-colors`} />
                  <span className="absolute bottom-full right-0 mb-2 hidden group-hover:block bg-black/70 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    {isLiked ? 'Remove from favorites' : 'Add to favorites'}
                  </span>
                </button>
                <button 
                  onClick={toggleZoom}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors group relative"
                  aria-label={isZoomed ? "Zoom out" : "Zoom in"}
                >
                  <ZoomIn className="h-5 w-5" />
                  <span className="absolute bottom-full right-0 mb-2 hidden group-hover:block bg-black/70 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    {isZoomed ? 'Zoom out' : 'Zoom in'}
                  </span>
                </button>
              </div>
            </div>
            
            {/* Thumbnail Navigation */}
            {allImages.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto py-3 scrollbar-thin">
                {allImages.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(idx);
                    }}
                    className={`relative flex-shrink-0 h-16 w-24 rounded-md overflow-hidden transition-all hover:scale-105 ${
                      currentImageIndex === idx 
                        ? 'ring-2 ring-white ring-offset-2 ring-offset-black scale-105' 
                        : 'opacity-70 hover:opacity-100'
                    }`}
                    aria-label={`View image ${idx + 1}`}
                  >
                    <img 
                      src={img} 
                      alt="" 
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80';
                      }}
                    />
                  </button>
                ))}
              </div>
            )}
            
            {/* Travel & Stay Options */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button
                onClick={toggleTrainInfo}
                className={`flex-1 p-4 rounded-xl transition-all bg-black/40 hover:bg-black/60 border ${showTrainInfo ? 'border-pink-500' : 'border-transparent'} flex items-center justify-center gap-2`}
              >
                <TrainFront className="h-5 w-5 text-pink-400" />
                <span className="font-medium">Trains from Delhi</span>
              </button>
              
              <button
                onClick={toggleHotelInfo}
                className={`flex-1 p-4 rounded-xl transition-all bg-black/40 hover:bg-black/60 border ${showHotelInfo ? 'border-pink-500' : 'border-transparent'} flex items-center justify-center gap-2`}
              >
                <Hotel className="h-5 w-5 text-pink-400" />
                <span className="font-medium">Hotels & Stays</span>
              </button>
            </div>
            
            {/* Train Information */}
            {showTrainInfo && (
              <div className="mt-4 bg-black/30 rounded-xl p-4 animate-fadeIn">
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-3">
                  <TrainFront className="h-5 w-5 text-pink-400" />
                  Trains from Delhi to {destination.state}
                </h3>
                <p className="text-sm mb-4">You'll need to take a train to the nearest major station and then continue by road transport.</p>
                
                <div className="grid grid-cols-1 gap-4">
                  {(trainData[destination.name] || []).map((train, idx) => (
                    <Card key={idx} className="bg-white/5 border-0">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base font-semibold flex justify-between">
                          <span>{train.name}</span>
                          <span className="text-sm font-normal px-2 py-1 rounded bg-green-500/20 text-green-300">
                            {train.availability}
                          </span>
                        </CardTitle>
                        <CardDescription className="text-white/70">
                          Delhi to nearest station
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0 pb-2">
                        <div className="flex justify-between mb-1">
                          <div>
                            <p className="text-lg font-medium">{train.departureTime}</p>
                            <p className="text-xs text-white/60">Delhi</p>
                          </div>
                          <div className="flex items-center px-3">
                            <div className="h-[1px] w-12 sm:w-20 bg-white/20 relative">
                              <div className="absolute -top-[9px] -right-1 w-2 h-2 rotate-45 border-t border-r border-white/20"></div>
                            </div>
                            <p className="text-xs mx-2 text-white/60">{train.duration}</p>
                            <div className="h-[1px] w-12 sm:w-20 bg-white/20 relative">
                              <div className="absolute -top-[9px] -right-1 w-2 h-2 rotate-45 border-t border-r border-white/20"></div>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-medium">{train.arrivalTime}</p>
                            <p className="text-xs text-white/60">Destination</p>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="text-sm">
                        <div className="w-full flex justify-between items-center">
                          <span className="text-white/80">{train.price}</span>
                          <a href="#" className="text-xs px-3 py-1 rounded-full bg-pink-500/80 hover:bg-pink-500 transition-colors">
                            Check Availability
                          </a>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                
                <p className="text-xs text-white/70 mt-4">
                  * Prices are approximate. Further road travel will be required to reach {destination.name}.
                </p>
              </div>
            )}
            
            {/* Hotel Information */}
            {showHotelInfo && (
              <div className="mt-4 bg-black/30 rounded-xl p-4 animate-fadeIn">
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-3">
                  <Hotel className="h-5 w-5 text-pink-400" />
                  Places to Stay in {destination.name}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(hotelData[destination.name] || []).map((hotel, idx) => (
                    <Card key={idx} className="bg-white/5 border-0 overflow-hidden">
                      <CardHeader className="pb-1">
                        <CardTitle className="text-base font-semibold">{hotel.name}</CardTitle>
                        <CardDescription className="text-white/70 flex justify-between">
                          <span>{hotel.type}</span>
                          <StarRating rating={hotel.rating} />
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <p className="text-sm mb-2 font-medium text-pink-300">{hotel.priceRange}</p>
                        <div className="flex flex-wrap gap-1">
                          {hotel.amenities.map((amenity, i) => (
                            <span key={i} className="text-xs px-2 py-1 rounded-full bg-white/10">
                              {amenity}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="pt-0">
                        <div className="w-full flex justify-end">
                          <a href="#" className="text-xs px-3 py-1 rounded-full bg-pink-500/80 hover:bg-pink-500 transition-colors">
                            Book Now
                          </a>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                
                <p className="text-xs text-white/70 mt-4">
                  * Prices may vary by season. Booking in advance is recommended as accommodation options are limited.
                </p>
              </div>
            )}
            
            {/* Counter and Instructions */}
            <div className="text-sm text-white/70 mt-6 flex justify-between items-center border-t border-white/10 pt-4">
              <span>Image {currentImageIndex + 1} of {allImages.length}</span>
              <div className="flex space-x-2">
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">Use arrow keys to navigate</span>
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full hidden sm:inline-block">Press Esc to close</span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageGallery;
