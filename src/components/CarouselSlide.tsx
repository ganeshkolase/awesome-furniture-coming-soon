import React from 'react';
import { CarouselImage } from '../types/index';

interface CarouselSlideProps {
  image: CarouselImage;
  isActive: boolean;
}

export const CarouselSlide: React.FC<CarouselSlideProps> = ({ image, isActive }) => {
  return (
    <div className="w-full h-full flex-shrink-0 relative">
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover"
        loading={isActive ? 'eager' : 'lazy'}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black from-opacity-20 to-transparent"></div>
    </div>
  );
};