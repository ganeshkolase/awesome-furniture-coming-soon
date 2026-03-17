import React from 'react';
import { CountdownTimer } from './CountdownTimer';
import { getStoredSettings } from '../utils/storage';

export const HeroSection: React.FC = () => {
  const settings = getStoredSettings();

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Something Amazing
            <span className="block text-amber-600">Is Coming Soon</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            We're crafting the perfect furniture shopping experience. 
            Get ready to transform your home with our curated collection of ultra premium furniture.
          </p>
          
          <div className="mb-12">
            <p className="text-lg text-gray-700 mb-4 font-medium">
              Launch Date: {settings.launchDate.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
            <CountdownTimer targetDate={settings.launchDate} />
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center space-x-2 text-gray-600">
              <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Premium Quality</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Free Delivery</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Expert Design</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-white bg-opacity-50 pointer-events-none"></div>
    </section>
  );
};