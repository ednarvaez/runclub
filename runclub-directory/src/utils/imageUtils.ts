// Utility functions for handling run club images

// Use Picsum Photos for reliable placeholder images with different seeds for variety
const runningImages = [
  'https://picsum.photos/seed/running1/800/500', // Placeholder 1
  'https://picsum.photos/seed/running2/800/500', // Placeholder 2  
  'https://picsum.photos/seed/running3/800/500', // Placeholder 3
  'https://picsum.photos/seed/running4/800/500', // Placeholder 4
  'https://picsum.photos/seed/running5/800/500', // Placeholder 5
  'https://picsum.photos/seed/running6/800/500', // Placeholder 6
  'https://picsum.photos/seed/running7/800/500', // Placeholder 7
  'https://picsum.photos/seed/running8/800/500', // Placeholder 8
  'https://picsum.photos/seed/running9/800/500', // Placeholder 9
  'https://picsum.photos/seed/running10/800/500', // Placeholder 10
  'https://picsum.photos/seed/running11/800/500', // Placeholder 11
  'https://picsum.photos/seed/running12/800/500', // Placeholder 12
  'https://picsum.photos/seed/running13/800/500', // Placeholder 13
  'https://picsum.photos/seed/running14/800/500', // Placeholder 14
  'https://picsum.photos/seed/running15/800/500', // Placeholder 15
  'https://picsum.photos/seed/running16/800/500', // Placeholder 16
  'https://picsum.photos/seed/running17/800/500', // Placeholder 17
  'https://picsum.photos/seed/running18/800/500', // Placeholder 18
  'https://picsum.photos/seed/running19/800/500', // Placeholder 19
  'https://picsum.photos/seed/running20/800/500', // Placeholder 20
];

export function getRandomRunningImage(seed?: string): string {
  // Use a seed (like run club ID) to ensure consistent images for each club
  let index = 0;
  
  if (seed) {
    // Simple hash function to convert seed to number
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
      const char = seed.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    index = Math.abs(hash) % runningImages.length;
  } else {
    index = Math.floor(Math.random() * runningImages.length);
  }
  
  return runningImages[index];
}

export function getRunClubImage(runClub: { id: string; photo?: string; name: string }): string {
  // If the run club has a photo and it's a valid, accessible URL, use it
  if (runClub.photo && isValidAccessibleUrl(runClub.photo)) {
    return runClub.photo;
  }
  
  // Otherwise, return a consistent random image based on the run club ID
  return getRandomRunningImage(runClub.id);
}

export function hasValidPhoto(photo?: string): boolean {
  return !!(photo && isValidAccessibleUrl(photo));
}

export function isValidAccessibleUrl(url?: string): boolean {
  if (!url || !url.startsWith('http')) {
    return false;
  }
  
  // Filter out known problematic Google Photos URLs that return 403 errors
  const problematicPatterns = [
    '/gps-cs-s/',  // Google Places Service URLs - always return 403
    '/AAAAAAAAAAI/',  // Google profile photos - often restricted
  ];
  
  // Also check for specific problematic domains/patterns
  const restrictedDomains = [
    'lh3.googleusercontent.com/gps-cs-s',
    'lh4.googleusercontent.com/gps-cs-s', 
    'lh5.googleusercontent.com/gps-cs-s'
  ];
  
  // Check for problematic patterns
  if (problematicPatterns.some(pattern => url.includes(pattern))) {
    return false;
  }
  
  // Check for restricted domains  
  if (restrictedDomains.some(domain => url.includes(domain))) {
    return false;
  }
  
  return true;
}