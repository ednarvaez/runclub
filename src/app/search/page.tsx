'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import SearchBar from '@/components/SearchBar';
import RunClubCard from '@/components/RunClubCard';
import { searchRunClubs } from '@/utils/csvParser';
import { RunClub } from '@/types/runclub';

function SearchContent() {
  const searchParams = useSearchParams();
  const [runClubs, setRunClubs] = useState<RunClub[]>([]);
  const [filteredClubs, setFilteredClubs] = useState<RunClub[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        // Fetch all run clubs from API
        const response = await fetch('/api/runclubs');
        if (!response.ok) {
          throw new Error('Failed to fetch run clubs');
        }
        const allClubs = await response.json();
        setRunClubs(allClubs);
        
        // Get initial search parameters
        const query = searchParams.get('q') || '';
        const city = searchParams.get('city') || '';
        
        const initialQuery = query || city;
        setSearchQuery(initialQuery);
        
        // Filter clubs based on initial query
        if (initialQuery) {
          const filtered = searchRunClubs(allClubs, initialQuery);
          setFilteredClubs(filtered);
        } else {
          setFilteredClubs(allClubs);
        }
      } catch (error) {
        console.error('Error loading run clubs:', error);
        setRunClubs([]);
        setFilteredClubs([]);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [searchParams]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = searchRunClubs(runClubs, query);
    setFilteredClubs(filtered);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading run clubs...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Find Run Clubs</h1>
          <SearchBar 
            onSearch={handleSearch}
            className="max-w-2xl"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Results Header */}
        <div className="mb-6">
          <h2 className="text-lg font-medium text-gray-900">
            {searchQuery ? (
              <>Showing {filteredClubs.length} results for &quot;{searchQuery}&quot;</>
            ) : (
              <>All Run Clubs ({filteredClubs.length} total)</>
            )}
          </h2>
        </div>

        {/* Results Grid */}
        {filteredClubs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredClubs.map((runClub) => (
              <RunClubCard key={runClub.id} runClub={runClub} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <div className="mb-4">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-gray-400 text-3xl">🏃</span>
                </div>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No run clubs found
              </h3>
              <p className="text-gray-600 mb-6">
                {searchQuery ? (
                  <>We couldn&apos;t find any run clubs matching &quot;{searchQuery}&quot;. Try searching with different keywords or locations.</>
                ) : (
                  <>No run clubs are currently available. Please check back later.</>
                )}
              </p>
              <SearchBar 
                onSearch={handleSearch}
                placeholder="Try a different search..."
                className="max-w-md mx-auto"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading run clubs...</p>
        </div>
      </div>
    }>
      <SearchContent />
    </Suspense>
  );
}