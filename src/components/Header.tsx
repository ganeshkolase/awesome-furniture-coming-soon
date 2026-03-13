import React from 'react';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Logo />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <span className="text-sm text-gray-600 font-medium">Coming Soon</span>
          </nav>
        </div>
      </div>
    </header>
  );
};