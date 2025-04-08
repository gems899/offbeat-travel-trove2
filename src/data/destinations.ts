export interface Activity {
  id: string;
  name: string;
  icon: string;
}

export interface Accommodation {
  type: 'hotel' | 'resort' | 'homestay' | 'guesthouse' | 'campsite';
  name: string;
  description: string;
  priceRange: string; // e.g. "₹1500-3000"
  contact?: string;
}

export interface Transport {
  type: 'train' | 'bus' | 'flight' | 'taxi' | 'ferry';
  name: string;
  from: string;
  details: string;
  frequency?: string;
  duration?: string;
  fareRange?: string; // e.g. "₹800-1500"
}

export interface Destination {
  id: string;
  name: string;
  state: string;
  description: string;
  image: string;
  activities: string[];
  galleryImages?: string[];
  accommodation?: Accommodation[];
  transport?: Transport[];
}

export const activities: Activity[] = [
  { id: "hiking", name: "Hiking", icon: "map" },
  { id: "camping", name: "Camping", icon: "tent" },
  { id: "photography", name: "Photography", icon: "camera" },
  { id: "wildlife", name: "Wildlife Watching", icon: "bird" },
  { id: "kayaking", name: "Kayaking", icon: "droplets" },
  { id: "stargazing", name: "Stargazing", icon: "star" },
  { id: "history", name: "Historical Sites", icon: "landmark" },
  { id: "cycling", name: "Cycling", icon: "bike" },
  { id: "food", name: "Local Cuisine", icon: "utensils" },
  { id: "festivals", name: "Local Festivals", icon: "party-popper" },
  { id: "cave", name: "Cave Exploration", icon: "mountain-snow" },
  { id: "hotspring", name: "Hot Springs", icon: "flame" },
  { id: "trekking", name: "Trekking", icon: "footprints" },
  { id: "boating", name: "Boating", icon: "ship" },
  { id: "architecture", name: "Architecture", icon: "building" },
  { id: "waterfall", name: "Waterfall", icon: "waves" },
  { id: "snow", name: "Snow Activities", icon: "snowflake" },
  { id: "nature", name: "Nature Walks", icon: "leaf" },
  { id: "monastery", name: "Monastery Visits", icon: "heart" },
  { id: "scenic", name: "Scenic Views", icon: "mountain" },
  { id: "fishing", name: "Fishing", icon: "fish" },
  { id: "paragliding", name: "Paragliding", icon: "wind" },
  { id: "skiing", name: "Skiing", icon: "snowflake" },
  { id: "rural", name: "Rural Tourism", icon: "home" },
  { id: "beach", name: "Beach", icon: "waves" },
  { id: "spiritual", name: "Spiritual", icon: "heart" },
  { id: "tiger", name: "Tiger Safari", icon: "tiger" },
  { id: "village", name: "Village Tourism", icon: "home" },
  { id: "art", name: "Art & Culture", icon: "palette" },
  { id: "rhino", name: "Rhino Watching", icon: "shield" },
  { id: "tribal", name: "Tribal Culture", icon: "users" },
  { id: "rafting", name: "River Rafting", icon: "boat" },
  { id: "birding", name: "Bird Watching", icon: "bird" },
  { id: "craft", name: "Handicrafts", icon: "scissors" },
  { id: "tea", name: "Tea Gardens", icon: "coffee" },
];

export const destinations: Destination[] = [
  {
    id: "valley-of-flowers",
    name: "Valley of Flowers",
    state: "Uttarakhand",
    description: "A UNESCO World Heritage site nestled in the Western Himalayas, known for its meadows of endemic alpine flowers and diverse flora.",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    activities: ["hiking", "photography", "wildlife"],
    galleryImages: [
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    ],
    accommodation: [
      {
        type: "guesthouse",
        name: "Valley View Guesthouse",
        description: "Simple, clean accommodations with great views of the valley and surrounding mountains.",
        priceRange: "₹1200-2500",
        contact: "+91 9876543210"
      },
      {
        type: "campsite",
        name: "Alpine Meadows Camp",
        description: "Tented accommodations with basic facilities, perfect for nature lovers.",
        priceRange: "₹800-1500",
        contact: "+91 8765432109"
      }
    ],
    transport: [
      {
        type: "train",
        name: "Haridwar Express",
        from: "Delhi",
        details: "Train to Haridwar, then local transport to Valley of Flowers",
        duration: "6-7 hours + 8 hours local transport",
        fareRange: "₹300-1200"
      },
      {
        type: "bus",
        name: "GMOU Deluxe",
        from: "Rishikesh",
        details: "Bus to Govindghat, then trek to Valley of Flowers",
        frequency: "Daily morning departure",
        duration: "10-12 hours + 4 hour trek",
        fareRange: "₹400-600"
      }
    ]
  },
  {
    id: "majuli",
    name: "Majuli Island",
    state: "Assam",
    description: "The world's largest river island, home to unique Assamese culture, neo-Vaishnavite monasteries, and stunning landscapes.",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    activities: ["kayaking", "festivals", "history"],
    galleryImages: [
      "https://images.unsplash.com/photo-1504893524553-b855bce32c67?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    ],
    accommodation: [
      {
        type: "homestay",
        name: "Mishing Tribe Homestay",
        description: "Traditional bamboo cottages on stilts with authentic tribal meals and cultural performances.",
        priceRange: "₹800-1500",
        contact: "+91 9435067890"
      },
      {
        type: "guesthouse",
        name: "La Maison de Anand",
        description: "Comfortable guesthouse with river views, organic food and cultural tours.",
        priceRange: "₹1500-2500",
        contact: "+91 9435012345"
      }
    ],
    transport: [
      {
        type: "train",
        name: "Rajdhani/Shatabdi",
        from: "Delhi/Kolkata",
        details: "Train to Jorhat, then bus/taxi to Nimati Ghat, ferry to Majuli",
        duration: "20-30 hours + 1 hour + 1 hour ferry",
        fareRange: "₹1500-3000 + ₹100 + ₹15-30"
      },
      {
        type: "flight",
        name: "IndiGo/Air India",
        from: "Major cities",
        details: "Flight to Jorhat, taxi to Nimati Ghat, ferry to Majuli",
        frequency: "Daily flights",
        duration: "2-4 hours + 1 hour + 1 hour ferry",
        fareRange: "₹4000-10000 + ₹500 + ₹15-30"
      }
    ]
  },
  {
    id: "spiti-valley",
    name: "Spiti Valley",
    state: "Himachal Pradesh",
    description: "A cold desert mountain valley with breathtaking landscapes, ancient monasteries, and starry night skies.",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    activities: ["stargazing", "photography", "camping"],
    galleryImages: [
      "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1501286353178-1ec881214838?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    ],
    accommodation: [
      {
        type: "homestay",
        name: "Spiti Heritage Homestay",
        description: "Traditional mountain homestay with warm hospitality and home-cooked meals.",
        priceRange: "₹1200-2500",
        contact: "+91 9418273645"
      },
      {
        type: "hotel",
        name: "Himalayan Heights Hotel",
        description: "Comfortable rooms with panoramic mountain views and modern amenities.",
        priceRange: "₹3000-6000",
        contact: "+91 9876123456"
      }
    ],
    transport: [
      {
        type: "train",
        name: "Kalka-Shimla Train",
        from: "Delhi/Chandigarh",
        details: "Train to Shimla, then shared taxi to Spiti Valley",
        frequency: "Daily service",
        duration: "5-6 hours train + 10-12 hours road journey",
        fareRange: "₹300-700 + ₹2500-3500"
      },
      {
        type: "bus",
        name: "HRTC Deluxe",
        from: "Manali/Shimla",
        details: "Direct bus service to Kaza (Spiti Valley)",
        frequency: "Seasonal (Jun-Oct)",
        duration: "12-16 hours",
        fareRange: "₹500-1000"
      }
    ]
  },
  {
    id: "dholavira",
    name: "Dholavira",
    state: "Gujarat",
    description: "An archaeological site from the Indus Valley Civilization with remarkable water conservation systems and ancient urban planning.",
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    activities: ["history", "photography"],
    galleryImages: [
      "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1504893524553-b855bce32c67?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    ],
    accommodation: [
      {
        type: "guesthouse",
        name: "Dholavira Tourist Guesthouse",
        description: "Basic, clean accommodation near the archaeological site with helpful staff.",
        priceRange: "₹800-1500",
        contact: "+91 9427654321"
      },
      {
        type: "resort",
        name: "Rann Retreat",
        description: "Comfortable resort with traditional Kutchi decor and cultural experiences.",
        priceRange: "₹2500-5000",
        contact: "+91 9898765432"
      }
    ],
    transport: [
      {
        type: "train",
        name: "Gujarat Express",
        from: "Ahmedabad",
        details: "Train to Bhuj, then local transport to Dholavira",
        frequency: "Daily service",
        duration: "8-10 hours + 4 hours local transport",
        fareRange: "₹300-700 + ₹800-1200"
      },
      {
        type: "bus",
        name: "GSRTC Bus",
        from: "Bhuj",
        details: "Bus to Rapar, then local transport to Dholavira",
        frequency: "Daily morning service",
        duration: "3 hours + 2 hours local transport",
        fareRange: "₹150-300 + ₹500-800"
      }
    ]
  },
  {
    id: "khonoma",
    name: "Khonoma",
    state: "Nagaland",
    description: "India's first green village known for sustainable living, terraced agriculture, and rich Angami Naga cultural heritage.",
    image: "https://images.unsplash.com/photo-1501286353178-1ec881214838?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    activities: ["hiking", "food", "history"],
    galleryImages: [
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    ],
    accommodation: [
      {
        type: "homestay",
        name: "Khonoma Village Homestay",
        description: "Traditional Naga homestay with authentic cultural experiences and local cuisine.",
        priceRange: "₹1000-2000",
        contact: "+91 9436012345"
      },
      {
        type: "guesthouse",
        name: "Green Village Lodge",
        description: "Eco-friendly accommodation with stunning views of the terraced fields.",
        priceRange: "₹1500-3000",
        contact: "+91 8730123456"
      }
    ],
    transport: [
      {
        type: "train",
        name: "Nagaland Express",
        from: "Guwahati",
        details: "Train to Dimapur, then shared taxi to Kohima and Khonoma",
        frequency: "Tri-weekly service",
        duration: "7-8 hours + 4-5 hours road journey",
        fareRange: "₹400-900 + ₹1500-2000"
      },
      {
        type: "taxi",
        name: "Shared Sumo",
        from: "Kohima",
        details: "Direct shared taxi service to Khonoma",
        frequency: "Daily morning departures",
        duration: "1-1.5 hours",
        fareRange: "₹300-500"
      }
    ]
  },
  {
    id: "sandakphu",
    name: "Sandakphu",
    state: "West Bengal",
    description: "The highest peak in West Bengal offering stunning views of four of the five highest peaks in the world including Everest and Kanchenjunga.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    activities: ["hiking", "camping", "photography"],
    galleryImages: [
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    ],
    accommodation: [
      {
        type: "guesthouse",
        name: "Sandakphu Trekkers Hut",
        description: "Basic trekker's accommodation with warm bedding and meals.",
        priceRange: "₹800-1500",
        contact: "+91 9832123456"
      },
      {
        type: "homestay",
        name: "Mountain View Homestay",
        description: "Cozy homestay with stunning views and home-cooked meals.",
        priceRange: "₹1200-2500",
        contact: "+91 8348123456"
      }
    ],
    transport: [
      {
        type: "train",
        name: "Darjeeling Himalayan Railway",
        from: "New Jalpaiguri (NJP)",
        details: "Toy train to Darjeeling, then jeep to Manebhanjan and trek to Sandakphu",
        frequency: "Daily service",
        duration: "7-8 hours + 4 hours jeep + 8-10 hours trek",
        fareRange: "₹100-500 + ₹1500 + trekking costs"
      },
      {
        type: "jeep",
        name: "Shared Land Rover",
        from: "Manebhanjan",
        details: "4x4 vehicle service to Sandakphu summit",
        frequency: "Daily departures",
        duration: "4-5 hours",
        fareRange: "₹3000-5000 (full jeep)"
      }
    ]
  },
  {
    id: "gandikota",
    name: "Gandikota",
    state: "Andhra Pradesh",
    description: "Often called the 'Grand Canyon of India', featuring a spectacular gorge of the Pennar river, ancient fort, and temples.",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    activities: ["kayaking", "history", "photography"],
    galleryImages: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    ],
    accommodation: [
      {
        type: "hotel",
        name: "Haritha Resort",
        description: "Government-run resort with clean rooms and basic amenities.",
        priceRange: "₹1500-3000",
        contact: "+91 8555245755"
      },
      {
        type: "campsite",
        name: "Canyon Camping",
        description: "Riverside camping experience with breathtaking gorge views.",
        priceRange: "₹800-1200",
        contact: "+91 9876543210"
      }
    ],
    transport: [
      {
        type: "train",
        name: "Rayalaseema Express",
        from: "Bangalore/Chennai",
        details: "Train to Jammalamadugu, then local transport to Gandikota",
        frequency: "Daily service",
        duration: "8-10 hours + 1 hour local transport",
        fareRange: "₹400-1000 + ₹300-500"
      },
      {
        type: "bus",
        name: "APSRTC Bus",
        from: "Kadapa/Jammalamadugu",
        details: "Bus to Gandikota village",
        frequency: "Limited service",
        duration: "2-3 hours from Kadapa",
        fareRange: "₹100-200"
      }
    ]
  },
  {
    id: "mechuka",
    name: "Mechuka",
    state: "Arunachal Pradesh",
    description: "A secluded valley near the China border with pristine landscapes, Buddhist monasteries, and tribal culture.",
    image: "/images/mechuka1.jpg",
    activities: ["trekking", "photography", "camping"],
    galleryImages: [
      "/images/mechuka2.jpg",
      "/images/mechuka3.jpg",
      "/images/mechuka4.jpg",
      "/images/mechuka5.jpg"
    ],
    accommodation: [
      {
        type: "homestay",
        name: "Mechuka Valley Homestay",
        description: "Authentic tribal homestay with cultural experiences and local food.",
        priceRange: "₹800-1500",
        contact: "+91 9436701234"
      },
      {
        type: "guesthouse",
        name: "Circuit House",
        description: "Government guesthouse with basic facilities and mountain views.",
        priceRange: "₹1200-2000",
        contact: "+91 3791222555"
      }
    ],
    transport: [
      {
        type: "train",
        name: "Arunachal Express",
        from: "Guwahati",
        details: "Train to Naharlagun, then shared taxi to Along and Mechuka",
        frequency: "Daily service",
        duration: "12-14 hours + 10-12 hours road journey",
        fareRange: "₹400-900 + ₹2500-3500"
      },
      {
        type: "flight",
        name: "Alliance Air",
        from: "Guwahati/Kolkata",
        details: "Flight to Pasighat, then road journey to Mechuka",
        frequency: "Bi-weekly service",
        duration: "2 hours flight + 6-7 hours road journey",
        fareRange: "₹4000-8000 + ₹2500-3000"
      }
    ]
  },
  {
    id: "anini",
    name: "Anini",
    state: "Arunachal Pradesh",
    description: "The headquarters of the Dibang Valley district where the clouds come down to kiss the land. With much of its beauty peeking from behind the misty air, this unexplored town is the place to visit for pristine calmness.",
    image: "/images/anini1.jpg",
    activities: ["hiking", "photography", "nature"],
    galleryImages: [
      "/images/anini2.jpg",
      "/images/anini3.jpg",
      "/images/anini4.jpg",
      "/images/anini5.jpg"
    ]
  },
  {
    id: "sangti-valley",
    name: "Sangti Valley",
    state: "Arunachal Pradesh",
    description: "Known for its picturesque scenery and weather. The valley is also a tourist destination for trekkers. Sangti village is located onsite of valley and about 15 kilometres from Dirang.",
    image: "/images/sangti1.jpg",
    activities: ["trekking", "photography", "scenic"],
    galleryImages: [
      "/images/sangti2.jpg",
      "/images/sangti3.jpg",
      "/images/sangti4.jpg",
      "/images/sangti5.jpg"
    ]
  },
  {
    id: "mayodia",
    name: "MayoDia",
    state: "Arunachal Pradesh",
    description: "A high mountain pass situated at an altitude of approximately 2,655 meters above sea level, renowned for its heavy snowfall during winter months, making it a popular tourist spot for experiencing snow-capped landscapes.",
    image: "/images/mayodia1.jpg",
    activities: ["snow", "photography", "trekking"],
    galleryImages: [
      "/images/mayodia2.jpg",
      "/images/mayodia3.jpg",
      "/images/mayodia4.jpg",
      "/images/mayodia5.jpg"
    ]
  },
  {
    id: "namsai",
    name: "Namsai",
    state: "Arunachal Pradesh",
    description: "A small town renowned for its serene environment, picturesque landscapes, and rich cultural heritage. A key attraction is the 'Golden Pagoda Monastery' which is one of the largest Buddhist monasteries in Northeast India.",
    image: "/images/namsai1.jpg",
    activities: ["monastery", "history", "photography"],
    galleryImages: [
      "/images/namsai2.jpg",
      "/images/namsai3.jpg",
      "/images/namsai4.jpg",
      "/images/namsai5.jpg"
    ]
  },
  {
    id: "tirthan-valley",
    name: "Tirthan Valley",
    state: "Himachal Pradesh",
    description: "A hidden paradise perfect for nature lovers, offering serene landscapes and adventure activities like trekking and fishing. It's relatively untouched by mainstream tourism.",
    image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    activities: ["hiking", "fishing", "nature", "photography"],
    galleryImages: [
      "https://images.unsplash.com/photo-1480497490787-505ec076689f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1464278533981-50e57c2b7d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "chopta-valley",
    name: "Chopta Valley",
    state: "Himachal Pradesh",
    description: "Known as the 'Mini Switzerland of India,' Chopta is a tranquil spot with panoramic views of snow-capped peaks and lush meadows. It's ideal for trekkers seeking solitude away from crowds.",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    activities: ["trekking", "photography", "scenic", "nature"],
    galleryImages: [
      "https://images.unsplash.com/photo-1464278533981-50e57c2b7d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1476297820623-03984cf5cdbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1483442868018-7dc426768b21?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "barot-valley",
    name: "Barot Valley",
    state: "Himachal Pradesh",
    description: "Nestled in the Mandi district, Barot Valley is a peaceful retreat surrounded by dense forests, crystal-clear rivers, and quaint villages. It offers a perfect escape for nature lovers and offbeat travelers.",
    image: "https://images.unsplash.com/photo-1483442868018-7dc426768b21?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    activities: ["fishing", "camping", "photography", "nature"],
    galleryImages: [
      "https://images.unsplash.com/photo-1480497490787-505ec076689f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1476297820623-03984cf5cdbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "narkanda",
    name: "Narkanda",
    state: "Himachal Pradesh",
    description: "A charming hill station with stunning views of the Himalayas, Narkanda is less commercialized compared to Shimla, making it an excellent spot for skiing and nature walks.",
    image: "https://images.unsplash.com/photo-1478496372813-e2e1744e5e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    activities: ["skiing", "hiking", "photography", "scenic"],
    galleryImages: [
      "https://images.unsplash.com/photo-1476297820623-03984cf5cdbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1464278533981-50e57c2b7d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1467377791767-c929b5dc9a23?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "kangra-valley",
    name: "Kangra Valley",
    state: "Himachal Pradesh",
    description: "A blend of rich history and natural beauty, Kangra Valley is home to ancient temples, fortresses, and lush tea gardens, offering a quiet retreat away from the hustle and bustle.",
    image: "https://images.unsplash.com/photo-1467377791767-c929b5dc9a23?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    activities: ["history", "nature", "photography", "food"],
    galleryImages: [
      "https://images.unsplash.com/photo-1478496372813-e2e1744e5e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1483442868018-7dc426768b21?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "janjehli",
    name: "Janjehli",
    state: "Himachal Pradesh",
    description: "Tucked in the Sirmaur district, Janjehli is a peaceful hill station that offers scenic treks, apple orchards, and panoramic views of the surrounding mountains, making it a great offbeat destination.",
    image: "https://images.unsplash.com/photo-1477322524744-0eece9e79640?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    activities: ["hiking", "nature", "scenic", "photography"],
    galleryImages: [
      "https://images.unsplash.com/photo-1484318571209-661cf29a69c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1474224017046-182ece80b263?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1481207727306-1a9f151fca7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "kullu-raison",
    name: "Kullu's Raison",
    state: "Himachal Pradesh",
    description: "Located near Kullu, Raison is a quaint village that offers lush green landscapes, adventure sports like paragliding, and serene riverside camping, yet it remains largely unexplored.",
    image: "https://images.unsplash.com/photo-1484318571209-661cf29a69c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    activities: ["paragliding", "camping", "photography", "nature"],
    galleryImages: [
      "https://images.unsplash.com/photo-1477322524744-0eece9e79640?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1474224017046-182ece80b263?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1481207727306-1a9f151fca7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "shoja",
    name: "Shoja",
    state: "Himachal Pradesh",
    description: "Shoja is a small, picturesque village nestled in the Shivalik ranges, offering peaceful walks through oak forests, stunning views of the Himalayas, and a chance to experience the simple rural life of Himachal.",
    image: "https://images.unsplash.com/photo-1474224017046-182ece80b263?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    activities: ["hiking", "rural", "photography", "scenic"],
    galleryImages: [
      "https://images.unsplash.com/photo-1481207727306-1a9f151fca7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1477322524744-0eece9e79640?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1484318571209-661cf29a69c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "malana",
    name: "Malana",
    state: "Himachal Pradesh",
    description: "Known for its unique culture and isolation, Malana is a tiny village with ancient customs, beautiful landscapes, and its own form of democracy. Its rugged beauty and serene environment make it a hidden treasure.",
    image: "https://images.unsplash.com/photo-1481207727306-1a9f151fca7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    activities: ["hiking", "rural", "photography", "scenic"],
    galleryImages: [
      "https://images.unsplash.com/photo-1477322524744-0eece9e79640?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1474224017046-182ece80b263?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1484318571209-661cf29a69c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "sunderbans",
    name: "Sunderbans",
    state: "West Bengal",
    description: "A UNESCO World Heritage site, the Sunderbans is home to the famous Royal Bengal Tiger and an intricate network of waterways, offering an adventurous and peaceful experience for wildlife enthusiasts and nature lovers.",
    image: "https://images.unsplash.com/photo-1544998780-22c3f015e1a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    activities: ["wildlife", "boating", "photography", "tiger"],
    accommodation: [
      {
        type: "resort",
        name: "Sunderbans Tiger Camp",
        description: "Eco-friendly resort with boat safaris and wildlife viewing decks",
        priceRange: "₹5000-12000",
        contact: "+91 9831123456"
      },
      {
        type: "hotel",
        name: "Sajnekhali Tourist Lodge",
        description: "Government-run accommodation with basic amenities and great location",
        priceRange: "₹2000-4000",
        contact: "+91 3324732331"
      }
    ],
    transport: [
      {
        type: "train",
        name: "Canning Local",
        from: "Kolkata",
        details: "Train to Canning, then boat to Sunderbans",
        frequency: "Multiple departures daily",
        duration: "1.5 hours + 2 hour boat ride",
        fareRange: "₹20-40 + ₹250 for boat"
      },
      {
        type: "bus",
        name: "WBSTC Bus",
        from: "Kolkata",
        details: "Bus to Godkhali, then boat to Sunderbans",
        frequency: "Daily morning departures",
        duration: "3 hours + 1 hour boat ride",
        fareRange: "₹120-180 + ₹250 for boat"
      }
    ]
  },
  {
    id: "lambasingi",
    name: "Lambasingi",
    state: "Andhra Pradesh",
    description: "Known as the 'Kashmir of Andhra,' Lambasingi is a quaint hill station with cool weather year-round, lush greenery, and breathtaking views of the Eastern Ghats, ideal for nature lovers and adventure seekers.",
    image: "https://images.unsplash.com/photo-1513010072333-9fcd3735a59e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    activities: ["hiking", "photography", "nature", "scenic"],
    accommodation: [
      {
        type: "homestay",
        name: "Lambasingi Valley Stay",
        description: "Cozy homestay with local cuisine and warm hospitality",
        priceRange: "₹1500-3000",
        contact: "+91 9876543210"
      },
      {
        type: "campsite",
        name: "Eastern Ghats Camp",
        description: "Outdoor camping experience with beautiful night sky views",
        priceRange: "₹800-1500",
        contact: "+91 8765432109"
      }
    ],
    transport: [
      {
        type: "bus",
        name: "APSRTC Service",
        from: "Visakhapatnam",
        details: "Bus to Chintapalle, then local transport to Lambasingi",
        frequency: "Daily departures",
        duration: "3-4 hours",
        fareRange: "₹150-250"
      },
      {
        type: "taxi",
        name: "Shared/Private Taxi",
        from: "Visakhapatnam",
        details: "Direct taxi service to Lambasingi",
        duration: "2.5-3 hours",
        fareRange: "₹2000-3000"
      }
    ]
  },
  {
    id: "dzuko-valley",
    name: "Dzüko Valley",
    state: "Nagaland",
    description: "Known for its scenic beauty and the famous Dzüko Lily, this valley offers breathtaking views, trekking opportunities, and a peaceful environment, making it an offbeat haven for nature lovers and trekkers.",
    image: "https://images.unsplash.com/photo-1635316494338-26d0707529b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    activities: ["trekking", "photography", "nature", "scenic"],
    accommodation: [
      {
        type: "guesthouse",
        name: "Dzüko Valley Rest House",
        description: "Basic accommodation at the valley with essential amenities",
        priceRange: "₹800-1200",
        contact: "+91 9436123456"
      },
      {
        type: "campsite",
        name: "Trekkers' Camp",
        description: "Camping facilities with equipment rental available",
        priceRange: "₹500-900",
        contact: "+91 8732123456"
      }
    ],
    transport: [
      {
        type: "train",
        name: "Dimapur Express",
        from: "Guwahati",
        details: "Train to Dimapur, then taxi to Kohima and trek to Dzüko",
        frequency: "Daily service",
        duration: "6-7 hours + 2-3 hour trek",
        fareRange: "₹300-700 + ₹1500 for taxi"
      },
      {
        type: "taxi",
        name: "Shared Jeep",
        from: "Kohima",
        details: "Jeep to Viswema village, then trek to Dzüko Valley",
        frequency: "Morning departures",
        duration: "1.5 hours + 2-3 hour trek",
        fareRange: "₹400-600"
      }
    ]
  },
  {
    id: "chopta",
    name: "Chopta",
    state: "Uttarakhand",
    description: "Often referred to as the 'Mini Switzerland of India,' Chopta offers breathtaking views of snow-capped peaks and is a perfect spot for trekking and camping, without the heavy crowds of other hill stations.",
    image: "https://images.unsplash.com/photo-1627896157667-5b4f5aae4ae8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    activities: ["trekking", "camping", "photography", "scenic"],
    accommodation: [
      {
        type: "campsite",
        name: "Himalayan Eco Camp",
        description: "Eco-friendly camping with excellent views of Kedarnath range",
        priceRange: "₹1200-2500",
        contact: "+91 9897123456"
      },
      {
        type: "homestay",
        name: "Chopta Valley Homestay",
        description: "Comfortable rooms with home-cooked local cuisine",
        priceRange: "₹1500-3000",
        contact: "+91 7895123456"
      }
    ],
    transport: [
      {
        type: "bus",
        name: "Uttarakhand Roadways",
        from: "Rishikesh",
        details: "Bus to Ukhimath, then local taxi to Chopta",
        frequency: "Daily morning service",
        duration: "7-8 hours + 1 hour taxi",
        fareRange: "₹350-500 + ₹800 for taxi"
      },
      {
        type: "taxi",
        name: "Private Taxi",
        from: "Rishikesh/Dehradun",
        details: "Direct taxi service to Chopta",
        duration: "6-7 hours",
        fareRange: "₹4000-6000"
      }
    ]
  },
  {
    id: "saputara",
    name: "Saputara",
    state: "Gujarat",
    description: "A quiet hill station located on the Gujarat-Maharashtra border, Saputara offers picturesque landscapes, boating, and a rich cultural experience with tribal art and culture, perfect for a relaxing weekend getaway.",
    image: "https://images.unsplash.com/photo-1477322524744-0eece9e79640?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    activities: ["boating", "nature", "photography", "rural"],
    accommodation: [
      {
        type: "hotel",
        name: "Hotel Lake View",
        description: "Comfortable accommodation with views of Saputara Lake",
        priceRange: "₹2500-4500",
        contact: "+91 9427123456"
      },
      {
        type: "resort",
        name: "Saputara Hill Resort",
        description: "Luxury resort with modern amenities and recreational activities",
        priceRange: "₹4000-8000",
        contact: "+91 8329123456"
      }
    ],
    transport: [
      {
        type: "bus",
        name: "GSRTC Volvo",
        from: "Ahmedabad/Surat",
        details: "Direct bus service to Saputara",
        frequency: "Daily departures",
        duration: "5-6 hours from Surat, 8-9 hours from Ahmedabad",
        fareRange: "₹300-700"
      },
      {
        type: "train",
        name: "Billimora-Waghai Train",
        from: "Billimora Junction",
        details: "Train to Waghai, then taxi to Saputara",
        frequency: "Daily narrow gauge service",
        duration: "2 hours + 1.5 hour taxi",
        fareRange: "₹30-50 + ₹800 for taxi"
      }
    ]
  },
  {
    id: "majuli-island",
    name: "Majuli Island",
    state: "Assam",
    description: "The largest river island in the world, Majuli is a hub of Assamese culture, with ancient monasteries, traditional satras, and lush landscapes, offering a peaceful and spiritual experience far from the usual tourist spots.",
    image: "https://images.unsplash.com/photo-1631631480669-535cc43f2327?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    activities: ["boating", "rural", "spiritual", "photography"],
    accommodation: [
      {
        type: "homestay",
        name: "Mishing Tribal Homestay",
        description: "Authentic experience in traditional bamboo houses on stilts",
        priceRange: "₹800-1500",
        contact: "+91 9435123456"
      },
      {
        type: "guesthouse",
        name: "La Maison de Anand",
        description: "Boutique guesthouse with cultural experiences and river views",
        priceRange: "₹1500-3000",
        contact: "+91 9435987654"
      }
    ],
    transport: [
      {
        type: "ferry",
        name: "Government Ferry",
        from: "Jorhat (Nimati Ghat)",
        details: "Regular ferry service to Majuli",
        frequency: "Multiple daily departures",
        duration: "1-2 hours depending on water level",
        fareRange: "₹15-30"
      },
      {
        type: "train",
        name: "Rajdhani/Shatabdi",
        from: "Major cities",
        details: "Train to Jorhat, then ferry to Majuli",
        frequency: "Daily services to Jorhat",
        duration: "Varies + 1-2 hour ferry",
        fareRange: "₹800-3000 + ₹15-30 for ferry"
      }
    ]
  }
];

export const getActivityById = (id: string): Activity | undefined => {
  return activities.find(activity => activity.id === id);
};

export const states: string[] = Array.from(
  new Set(destinations.map(destination => destination.state))
).sort();

export const getDestinationsByState = (state: string): Destination[] => {
  return destinations.filter(destination => destination.state === state);
};
