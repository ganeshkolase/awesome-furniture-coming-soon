import { useState, useEffect, useCallback } from 'react';
import { CarouselImage } from '../types/index';

export const useCarousel = (images: CarouselImage[], autoAdvanceInterval: number = 5000) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < images.length) {
      setCurrentIndex(index);
    }
  }, [images.length]);

  const pauseAutoPlay = useCallback(() => {
    setIsPaused(true);
  }, []);

  const resumeAutoPlay = useCallback(() => {
    setIsPaused(false);
  }, []);

  const toggleAutoPlay = useCallback(() => {
    setIsAutoPlaying((prev) => !prev);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying || isPaused || images.length <= 1) {
      return;
    }

    const interval = setInterval(goToNext, autoAdvanceInterval);
    return () => clearInterval(interval);
  }, [isAutoPlaying, isPaused, goToNext, autoAdvanceInterval, images.length]);

  useEffect(() => {
    if (currentIndex >= images.length && images.length > 0) {
      setCurrentIndex(0);
    }
  }, [images.length, currentIndex]);

  return {
    currentIndex,
    isAutoPlaying,
    isPaused,
    goToNext,
    goToPrevious,
    goToSlide,
    pauseAutoPlay,
    resumeAutoPlay,
    toggleAutoPlay,
    totalSlides: images.length,
    currentImage: images[currentIndex] || null,
  };
};