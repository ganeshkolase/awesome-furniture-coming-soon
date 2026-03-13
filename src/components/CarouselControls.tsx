import React from 'react';

interface CarouselControlsProps {
  onPrevious: () => void;
  onNext: () => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
}

export const CarouselControls: React.FC<CarouselControlsProps> = ({
  onPrevious,
  onNext,
  canGoPrevious,
  canGoNext,
}) => {
  return (
    <>
      <button
        onClick={onPrevious}
        disabled={!canGoPrevious}
        className={`absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full transition-all duration-200 ${
          canGoPrevious
            ? 'bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 shadow-lg hover:shadow-xl'
            : 'bg-gray-300 bg-opacity-50 text-gray-400 cursor-not-allowed'
        }`}
        aria-label="Previous image"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={onNext}
        disabled={!canGoNext}
        className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full transition-all duration-200 ${
          canGoNext
            ? 'bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 shadow-lg hover:shadow-xl'
            : 'bg-gray-300 bg-opacity-50 text-gray-400 cursor-not-allowed'
        }`}
        aria-label="Next image"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </>
  );
};