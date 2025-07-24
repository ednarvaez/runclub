import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, MapPin, Clock, Users, Globe, Phone, Mail, Star, ExternalLink } from 'lucide-react';
import { getRunClubById, getAllRunClubs } from '@/lib/runclubs';
import StarRating from '@/components/StarRating';
import RunClubCard from '@/components/RunClubCard';
import { getRunClubImage } from '@/utils/imageUtils';

interface RunClubDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function RunClubDetailPage({ params }: RunClubDetailPageProps) {
  const { id } = await params;
  const runClub = getRunClubById(id);
  
  if (!runClub) {
    notFound();
  }

  // Get similar run clubs (same city, different club)
  const allRunClubs = getAllRunClubs();
  const similarRunClubs = allRunClubs
    .filter(club => 
      club.city.toLowerCase() === runClub.city.toLowerCase() && 
      club.id !== runClub.id
    )
    .slice(0, 4);

  const imageUrl = getRunClubImage(runClub);
  const hasRating = runClub.rating && runClub.rating > 0;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 py-4 text-sm">
            <Link href="/" className="text-green-600 hover:text-green-700">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <Link href="/search" className="text-green-600 hover:text-green-700">
              Run Clubs
            </Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <Link href={`/search?city=${encodeURIComponent(runClub.city)}`} className="text-green-600 hover:text-green-700">
              {runClub.city}
            </Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-gray-900 font-medium">{runClub.name}</span>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{runClub.name}</h1>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>{runClub.full_address}</span>
                  </div>
                  {hasRating && (
                    <div className="flex items-center">
                      <StarRating rating={runClub.rating || 0} showNumber size="md" />
                      {runClub.reviews > 0 && (
                        <span className="ml-2 text-gray-600">
                          ({runClub.reviews} reviews)
                        </span>
                      )}
                    </div>
                  )}
                </div>
                <div className="flex space-x-2">
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-md flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Save
                  </button>
                  <button className="bg-blue-50 hover:bg-blue-100 text-blue-700 px-4 py-2 rounded-md flex items-center">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Share
                  </button>
                </div>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
              <div className="relative h-96 bg-gray-200">
                <Image
                  src={imageUrl}
                  alt={runClub.name}
                  fill
                  className="object-cover"
                  unoptimized={false}
                />
              </div>
            </div>

            {/* About Section */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About this run club</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    Category
                  </h3>
                  <p className="text-gray-600">{runClub.category}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    Status
                  </h3>
                  <p className="text-gray-600">
                    {runClub.business_status === 'OPERATIONAL' ? 'Active' : runClub.business_status}
                  </p>
                </div>
              </div>

              {runClub.description && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
                  <p className="text-gray-600 leading-relaxed">{runClub.description}</p>
                </div>
              )}
            </div>

            {/* Reviews Section */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Reviews</h2>
                {runClub.reviews_link && (
                  <Link 
                    href={runClub.reviews_link} 
                    target="_blank"
                    className="text-blue-600 hover:text-blue-700 text-sm flex items-center"
                  >
                    See all reviews
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </Link>
                )}
              </div>
              
              {hasRating && (
                <div className="text-center py-8 border-2 border-dashed border-gray-200 rounded-lg">
                  <div className="flex justify-center mb-2">
                    <StarRating rating={runClub.rating || 0} size="lg" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-1">
                    {runClub.rating?.toFixed(1) || '0.0'}
                  </div>
                  <div className="text-gray-600">
                    {runClub.reviews} reviews
                  </div>
                  {runClub.reviews_link && (
                    <Link 
                      href={runClub.reviews_link} 
                      target="_blank"
                      className="inline-block mt-4 text-blue-600 hover:text-blue-700 text-sm"
                    >
                      View on Google →
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                {runClub.phone && (
                  <a 
                    href={`tel:${runClub.phone}`}
                    className="block w-full bg-gray-900 hover:bg-gray-800 text-white text-center py-3 rounded-md font-medium"
                  >
                    Call Now
                  </a>
                )}
                
                <button className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-900 text-center py-3 rounded-md font-medium">
                  Join Group
                </button>
                
                {runClub.location_link && (
                  <a 
                    href={runClub.location_link}
                    target="_blank"
                    className="block w-full border border-gray-300 hover:border-gray-400 text-gray-700 text-center py-3 rounded-md font-medium"
                  >
                    Get Directions
                  </a>
                )}
              </div>

              <div className="mt-6 space-y-3">
                {runClub.phone && (
                  <div className="flex items-center text-sm text-gray-600">
                    <Phone className="h-4 w-4 mr-3" />
                    <span>{runClub.phone}</span>
                  </div>
                )}
                
                {runClub.email_1 && (
                  <div className="flex items-center text-sm text-gray-600">
                    <Mail className="h-4 w-4 mr-3" />
                    <a href={`mailto:${runClub.email_1}`} className="hover:text-blue-600">
                      {runClub.email_1}
                    </a>
                  </div>
                )}
                
                {runClub.site && (
                  <div className="flex items-center text-sm text-gray-600">
                    <Globe className="h-4 w-4 mr-3" />
                    <a 
                      href={runClub.site} 
                      target="_blank" 
                      className="hover:text-blue-600 truncate"
                    >
                      Visit Website
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Similar Run Clubs */}
        {similarRunClubs.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Similar run clubs in {runClub.city}
            </h2>
            <p className="text-gray-600 mb-6">
              Explore other highly-rated run club options with similar characteristics in your area.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {similarRunClubs.map((club) => (
                <RunClubCard key={club.id} runClub={club} />
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link 
                href={`/search?city=${encodeURIComponent(runClub.city)}`}
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                Show all run clubs in {runClub.city}
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}