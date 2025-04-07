export interface Activity {
  id: string;
  name: string;
  icon: string;
}

export interface Destination {
  id: string;
  name: string;
  state: string;
  description: string;
  image: string;
  activities: string[];
  galleryImages?: string[]; // Optional array of additional image URLs
}

export const activities: Activity[] = [
  { id: "hiking", name: "Hiking", icon: "map" },
  { id: "camping", name: "Camping", icon: "Camping" },
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
    activities: ["trekking", "history", "photography", "rural"],
    galleryImages: [
      "https://images.unsplash.com/photo-1484318571209-661cf29a69c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1474224017046-182ece80b263?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1477322524744-0eece9e79640?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    ]
  }
];

export const states = Array.from(new Set(destinations.map(dest => dest.state))).sort();

export const getActivityById = (id: string): Activity | undefined => {
  return activities.find(activity => activity.id === id);
};

export const getDestinationsByState = (state: string): Destination[] => {
  return destinations.filter(destination => destination.state === state);
};

export const getAllDestinations = (): Destination[] => {
  return destinations;
};
