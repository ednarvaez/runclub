import Papa from 'papaparse';
import { RunClub } from '@/types/runclub';

export function parseCSVToRunClubs(csvText: string): RunClub[] {
  const result = Papa.parse(csvText, {
    header: true,
    skipEmptyLines: true,
    transform: (value, field) => {
      // Convert string numbers to actual numbers
      if (field === 'latitude' || field === 'longitude' || field === 'rating') {
        const num = parseFloat(value);
        return isNaN(num) ? 0 : num;
      }
      if (field === 'reviews') {
        const num = parseInt(value);
        return isNaN(num) ? 0 : num;
      }
      if (field === 'area_service') {
        return value?.toLowerCase() === 'true';
      }
      return value || '';
    }
  });

  return (result.data as Record<string, unknown>[]).map((row: Record<string, unknown>, index: number) => ({
    id: `runclub-${index + 1}`,
    name: row.name || '',
    site: row.site,
    category: row.category || 'Run Club',
    phone: row.phone,
    full_address: row.full_address || '',
    borough: row.borough,
    street: row.street || '',
    city: row.city || '',
    postal_code: row.postal_code || '',
    latitude: row.latitude || 0,
    longitude: row.longitude || 0,
    h3: row.h3,
    area_service: row.area_service || false,
    rating: row.rating,
    reviews: row.reviews || 0,
    reviews_link: row.reviews_link,
    reviews_tags: row.reviews_tags,
    photo: row.photo,
    business_status: row.business_status || 'OPERATIONAL',
    about: row.about ? JSON.parse(String(row.about) || '{}') : {},
    logo: row.logo,
    description: row.description,
    location_link: row.location_link,
    email_1: row.email_1,
  })) as RunClub[];
}

export function searchRunClubs(runClubs: RunClub[], query: string): RunClub[] {
  if (!query.trim()) return runClubs;
  
  const searchTerm = query.toLowerCase();
  
  return runClubs.filter(club => 
    club.name.toLowerCase().includes(searchTerm) ||
    club.city.toLowerCase().includes(searchTerm) ||
    club.full_address.toLowerCase().includes(searchTerm) ||
    club.postal_code.includes(searchTerm) ||
    club.category.toLowerCase().includes(searchTerm)
  );
}

export function getRunClubsByCity(runClubs: RunClub[], city: string): RunClub[] {
  return runClubs.filter(club => 
    club.city.toLowerCase() === city.toLowerCase()
  );
}

export function getFeaturedRunClubs(runClubs: RunClub[], limit: number = 6): RunClub[] {
  return runClubs
    .filter(club => club.rating && club.rating >= 4.0)
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, limit);
}