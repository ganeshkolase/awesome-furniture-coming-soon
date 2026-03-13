import React from 'react';

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
          <svg
            className="w-5 h-5 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM2 8v6a2 2 0 002 2h12a2 2 0 002-2V8H2zm8 3a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold text-gray-900 leading-tight">
            Awesome Furniture
          </span>
          <span className="text-xs text-gray-500 leading-tight">
            Premium Home Furnishing
          </span>
        </div>
      </div>
    </div>
  );
};