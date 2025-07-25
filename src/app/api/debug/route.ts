import { getAllRunClubs } from '@/lib/runclubs';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const runClubs = getAllRunClubs();
    
    return NextResponse.json({
      success: true,
      count: runClubs.length,
      firstFew: runClubs.slice(0, 3).map(club => ({
        id: club.id,
        name: club.name,
        city: club.city
      })),
      sampleIds: runClubs.slice(0, 5).map(club => club.id)
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    });
  }
}