export interface RunClub {
  id: string;
  name: string;
  site?: string;
  category: string;
  phone?: string;
  full_address: string;
  borough?: string;
  street: string;
  city: string;
  postal_code: string;
  latitude: number;
  longitude: number;
  h3?: string;
  area_service: boolean;
  rating?: number;
  reviews: number;
  reviews_link?: string;
  reviews_tags?: string;
  photo?: string;
  business_status: string;
  about?: Record<string, unknown>;
  logo?: string;
  description?: string;
  location_link?: string;
  email_1?: string;
}

export interface Review {
  id: string;
  runClubId: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface SearchFilters {
  location?: string;
  category?: string;
  rating?: number;
  distance?: number;
}