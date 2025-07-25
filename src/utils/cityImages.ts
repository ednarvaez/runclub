// City-specific images using Unsplash with consistent seeds for each city
export const getCityImage = (cityName: string): string => {
  const cityImageMap: Record<string, string> = {
    'new york': 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=500&fit=crop&crop=entropy&auto=format&q=80', // NYC skyline
    'brooklyn': 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=800&h=500&fit=crop&crop=entropy&auto=format&q=80', // Brooklyn Bridge
    'bronx': 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=500&fit=crop&crop=entropy&auto=format&q=80', // Bronx cityscape
    'hoboken': 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&h=500&fit=crop&crop=entropy&auto=format&q=80', // Hoboken waterfront
    'jersey city': 'https://images.unsplash.com/photo-1583422451804-a4c0c4d9fcc0?w=800&h=500&fit=crop&crop=entropy&auto=format&q=80', // Jersey City skyline
    'mineola': 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=500&fit=crop&crop=entropy&auto=format&q=80', // Long Island suburban
    'plainview': 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&h=500&fit=crop&crop=entropy&auto=format&q=80', // Long Island landscape
    'middle village': 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=500&fit=crop&crop=entropy&auto=format&q=80', // Queens neighborhood
    'long island city': 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=800&h=500&fit=crop&crop=entropy&auto=format&q=80', // LIC skyline
    'jamaica': 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=500&fit=crop&crop=entropy&auto=format&q=80', // Queens area
  };

  const normalizedCity = cityName.toLowerCase().trim();
  
  return cityImageMap[normalizedCity] || 
    `https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=500&fit=crop&crop=entropy&auto=format&q=80`; // Default city skyline
};

// Get a fallback gradient for loading states
export const getCityGradient = (index: number): string => {
  const gradients = [
    'from-blue-500 to-purple-600',
    'from-orange-500 to-red-600', 
    'from-green-500 to-blue-600',
    'from-purple-500 to-pink-600',
    'from-yellow-500 to-orange-600',
    'from-teal-500 to-green-600',
    'from-red-500 to-pink-600',
    'from-indigo-500 to-purple-600'
  ];
  
  return gradients[index % gradients.length];
};