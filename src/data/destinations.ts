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
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
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
