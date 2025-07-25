import { parseCSVToRunClubs } from '@/utils/csvParser';
import { RunClub } from '@/types/runclub';

// This will be populated at build time
let runClubsCache: RunClub[] | null = null;

export function getAllRunClubs(): RunClub[] {
  if (runClubsCache) {
    return runClubsCache;
  }

  // In production, this should be pre-loaded
  if (typeof window === 'undefined') {
    // Server-side: load from file system
    try {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const fs = require('fs');
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const path = require('path');
      const csvPath = path.join(process.cwd(), 'data', 'runclub-Outscraper-20250622.xlsx.csv');
      const csvText = fs.readFileSync(csvPath, 'utf-8');
      runClubsCache = parseCSVToRunClubs(csvText);
      return runClubsCache;
    } catch (error) {
      console.error('Error loading run clubs data:', error);
      return [];
    }
  } else {
    // Client-side: return cached data or empty array
    return runClubsCache || [];
  }
}

export function getRunClubById(id: string): RunClub | undefined {
  const runClubs = getAllRunClubs();
  return runClubs.find(club => club.id === id);
}

export function getRunClubsByCity(city: string): RunClub[] {
  const runClubs = getAllRunClubs();
  return runClubs.filter(club => 
    club.city.toLowerCase() === city.toLowerCase()
  );
}

export function getMajorCities(): { city: string; count: number; state?: string }[] {
  const runClubs = getAllRunClubs();
  const cityCount: { [key: string]: { count: number; state?: string } } = {};

  runClubs.forEach(club => {
    const cityKey = club.city.toLowerCase();
    if (!cityCount[cityKey]) {
      cityCount[cityKey] = { count: 0 };
      // Extract state from address if available
      const addressParts = club.full_address.split(',');
      if (addressParts.length >= 2) {
        const stateZip = addressParts[addressParts.length - 1].trim();
        const state = stateZip.split(' ')[0];
        cityCount[cityKey].state = state;
      }
    }
    cityCount[cityKey].count++;
  });

  return Object.entries(cityCount)
    .map(([city, data]) => ({
      city: city.charAt(0).toUpperCase() + city.slice(1),
      count: data.count,
      state: data.state
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 8); // Top 8 cities
}