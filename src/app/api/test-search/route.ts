import { getAllRunClubs } from '@/lib/runclubs';
import { searchRunClubs } from '@/utils/csvParser';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q') || '';
  
  try {
    const allRunClubs = getAllRunClubs();
    const results = searchRunClubs(allRunClubs, query);
    
    return NextResponse.json({
      success: true,
      query,
      totalClubs: allRunClubs.length,
      resultsCount: results.length,
      results: results.slice(0, 5).map(club => ({
        id: club.id,
        name: club.name,
        city: club.city,
        full_address: club.full_address
      })),
      sampleCities: allRunClubs.slice(0, 10).map(club => club.city)
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}