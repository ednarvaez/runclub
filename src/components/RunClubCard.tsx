'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Star, Calendar, Globe } from 'lucide-react';
import { RunClub } from '@/types/runclub';
import { getRunClubImage } from '@/utils/imageUtils';

interface RunClubCardProps {
  runClub: RunClub;
  showDistance?: boolean;
  distance?: number;
}

export default function RunClubCard({ runClub, showDistance, distance }: RunClubCardProps) {
  const imageUrl = getRunClubImage(runClub);
  const hasRating = runClub.rating && runClub.rating > 0;

  return (
    <Link href={`/runclub/${runClub.id}`} className="block">
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden">
        {/* Image */}
        <div className="relative h-48 bg-gradient-to-br from-blue-400 via-purple-500 to-orange-500">
          <Image
            src={imageUrl}
            alt={runClub.name}
            fill
            className="object-cover"
            unoptimized={false}
          />
          
          {/* Text overlay for when image fails */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <span className="text-white text-4xl font-bold">
              {runClub.name.charAt(0)}
            </span>
          </div>
          
          {/* Status Badge */}
          {runClub.business_status === 'OPERATIONAL' && (
            <div className="absolute top-3 left-3">
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                Active
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-semibold text-lg text-gray-900 mb-1 line-clamp-2">
            {runClub.name}
          </h3>

          {/* Location */}
          <div className="flex items-center text-gray-600 text-sm mb-2">
            <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
            <span className="line-clamp-1">
              {runClub.city}, {runClub.postal_code?.slice(0, 5)}
            </span>
          </div>

          {/* Category */}
          <div className="text-sm text-gray-500 mb-3">
            {runClub.category}
          </div>

          {/* Rating and Reviews */}
          {hasRating && (
            <div className="flex items-center mb-3">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="ml-1 text-sm font-medium text-gray-900">
                  {runClub.rating?.toFixed(1) || '0.0'}
                </span>
              </div>
              {runClub.reviews > 0 && (
                <span className="ml-2 text-sm text-gray-500">
                  ({runClub.reviews} reviews)
                </span>
              )}
            </div>
          )}

          {/* Features */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              {runClub.site && (
                <div className="flex items-center">
                  <Globe className="h-4 w-4 mr-1" />
                  <span>Website</span>
                </div>
              )}
              {runClub.phone && (
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Contact</span>
                </div>
              )}
            </div>

            {/* Distance */}
            {showDistance && distance && (
              <span className="text-sm text-gray-500">
                {distance.toFixed(1)} mi
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}