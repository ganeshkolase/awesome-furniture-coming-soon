import React from 'react';
import { useCarousel } from '../hooks/useCarousel';
import { getStoredSettings } from '../utils/storage';
import { CarouselSlide } from './CarouselSlide';
import { CarouselControls } from './CarouselControls';

export const ImageCarousel: React.FC = () => {
  const settings = getStoredSettings();
  const {
    currentIndex,
    isAutoPlaying,
    isPaused,
    goToNext,
    goToPrevious,
    goToSlide,
    pauseAutoPlay,
    resumeAutoPlay,
    toggleAutoPlay,
    totalSlides,
    currentImage,
  } = useCarousel(settings.carouselImages, 5000);

  if (!settings.carouselImages.length) {
    return null;
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Preview Our Collection
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get a glimpse of the beautiful furniture pieces that will be available in our store
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div 
            className="relative overflow-hidden rounded-2xl shadow-2xl bg-gray-100"
            onMouseEnter={pauseAutoPlay}
            onMouseLeave={resumeAutoPlay}
          >
            <div className="aspect-w-16 aspect-h-10 sm:aspect-h-9">
              <div 
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {settings.carouselImages.map((image, index) => (
                  <CarouselSlide
                    key={image.id}
                    image={image}
                    isActive={index === currentIndex}
                  />
                ))}
              </div>
            </div>

            <CarouselControls
              onPrevious={goToPrevious}
              onNext={goToNext}
              canGoPrevious={totalSlides > 1}
              canGoNext={totalSlides > 1}
            />

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="flex space-x-2">
                {settings.carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentIndex
                        ? 'bg-white shadow-lg'
                        : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="absolute top-4 right-4">
              <button
                onClick={toggleAutoPlay}
                className="bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200"
                aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
              >
                {isAutoPlaying && !isPaused ? (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div className="text-center mt-6">
            <div className="text-sm text-gray-500">
              {currentIndex + 1} of {totalSlides}
            </div>
            {currentImage && (
              <div className="text-lg font-medium text-gray-900 mt-2">
                {currentImage.alt}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};