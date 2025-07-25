import { getAllRunClubs } from '@/lib/runclubs';
import { searchRunClubs } from '@/utils/csvParser';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q') || '';
  
  try {
    const allRunClubs = getAllRunClubs();
    
    if (query) {
      const results = searchRunClubs(allRunClubs, query);
      return NextResponse.json(results);
    }
    
    return NextResponse.json(allRunClubs);
  } catch (error) {
    console.error('Error fetching run clubs:', error);
    return NextResponse.json(
      { error: 'Failed to fetch run clubs' },
      { status: 500 }
    );
  }
}