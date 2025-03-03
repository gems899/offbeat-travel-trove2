
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
];

export const destinations: Destination[] = [
  {
    id: "valley-of-flowers",
    name: "Valley of Flowers",
    state: "Uttarakhand",
    description: "A UNESCO World Heritage site nestled in the Western Himalayas, known for its meadows of endemic alpine flowers and diverse flora.",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    activities: ["hiking", "photography", "wildlife"],
  },
  {
    id: "majuli",
    name: "Majuli Island",
    state: "Assam",
    description: "The world's largest river island, home to unique Assamese culture, neo-Vaishnavite monasteries, and stunning landscapes.",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    activities: ["kayaking", "festivals", "history"],
  },
  {
    id: "spiti-valley",
    name: "Spiti Valley",
    state: "Himachal Pradesh",
    description: "A cold desert mountain valley with breathtaking landscapes, ancient monasteries, and starry night skies.",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    activities: ["stargazing", "photography", "camping"],
  },
  {
    id: "dholavira",
    name: "Dholavira",
    state: "Gujarat",
    description: "An archaeological site from the Indus Valley Civilization with remarkable water conservation systems and ancient urban planning.",
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    activities: ["history", "photography"],
  },
  {
    id: "khonoma",
    name: "Khonoma",
    state: "Nagaland",
    description: "India's first green village known for sustainable living, terraced agriculture, and rich Angami Naga cultural heritage.",
    image: "https://images.unsplash.com/photo-1501286353178-1ec881214838?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    activities: ["hiking", "food", "history"],
  },
  {
    id: "sandakphu",
    name: "Sandakphu",
    state: "West Bengal",
    description: "The highest peak in West Bengal offering stunning views of four of the five highest peaks in the world including Everest and Kanchenjunga.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    activities: ["hiking", "camping", "photography"],
  },
  {
    id: "gandikota",
    name: "Gandikota",
    state: "Andhra Pradesh",
    description: "Often called the 'Grand Canyon of India', featuring a spectacular gorge of the Pennar river, ancient fort, and temples.",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    activities: ["kayaking", "history", "photography"],
  },
  {
    id: "mechuka",
    name: "Mechuka",
    state: "Arunachal Pradesh",
    description: "A secluded valley near the China border with pristine landscapes, Buddhist monasteries, and tribal culture.",
    image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    activities: ["cycling", "camping", "festivals"],
  },
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
