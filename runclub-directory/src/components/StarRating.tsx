'use client';

import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  showNumber?: boolean;
  size?: 'sm' | 'md' | 'lg';
  readonly?: boolean;
  onRatingChange?: (rating: number) => void;
}

export default function StarRating({ 
  rating, 
  showNumber = false, 
  size = 'md',
  readonly = true,
  onRatingChange 
}: StarRatingProps) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  const handleStarClick = (starRating: number) => {
    if (!readonly && onRatingChange) {
      onRatingChange(starRating);
    }
  };

  return (
    <div className="flex items-center">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => {
          const isFilled = star <= rating;
          const isHalfFilled = star - 0.5 <= rating && star > rating;
          
          return (
            <button
              key={star}
              type="button"
              onClick={() => handleStarClick(star)}
              disabled={readonly}
              className={`${readonly ? 'cursor-default' : 'cursor-pointer hover:scale-110'} transition-transform`}
            >
              <Star
                className={`${sizeClasses[size]} ${
                  isFilled 
                    ? 'text-yellow-400 fill-current' 
                    : isHalfFilled
                    ? 'text-yellow-400 fill-current opacity-50'
                    : 'text-gray-300'
                }`}
              />
            </button>
          );
        })}
      </div>
      
      {showNumber && (
        <span className={`ml-2 font-medium text-gray-900 ${textSizeClasses[size]}`}>
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}