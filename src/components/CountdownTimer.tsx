import React from 'react';
import { useCountdown } from '../hooks/useCountdown';

interface CountdownTimerProps {
  targetDate: Date;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const { timeRemaining, isExpired } = useCountdown(targetDate);

  if (isExpired) {
    return (
      <div className="text-center">
        <div className="inline-flex items-center px-6 py-3 bg-green-100 border border-green-200 rounded-lg">
          <svg className="w-6 h-6 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-lg font-semibold text-green-800">We're Live!</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-center space-x-4 sm:space-x-6">
        <div className="text-center">
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 sm:p-6 min-w-[80px] sm:min-w-[100px]">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1">
              {String(timeRemaining.days).padStart(2, '0')}
            </div>
            <div className="text-xs sm:text-sm text-gray-600 font-medium uppercase tracking-wide">
              Days
            </div>
          </div>
        </div>
        
        <div className="text-2xl sm:text-3xl text-gray-400 font-light">:</div>
        
        <div className="text-center">
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 sm:p-6 min-w-[80px] sm:min-w-[100px]">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1">
              {String(timeRemaining.hours).padStart(2, '0')}
            </div>
            <div className="text-xs sm:text-sm text-gray-600 font-medium uppercase tracking-wide">
              Hours
            </div>
          </div>
        </div>
        
        <div className="text-2xl sm:text-3xl text-gray-400 font-light">:</div>
        
        <div className="text-center">
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 sm:p-6 min-w-[80px] sm:min-w-[100px]">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1">
              {String(timeRemaining.minutes).padStart(2, '0')}
            </div>
            <div className="text-xs sm:text-sm text-gray-600 font-medium uppercase tracking-wide">
              Minutes
            </div>
          </div>
        </div>
        
        <div className="text-2xl sm:text-3xl text-gray-400 font-light">:</div>
        
        <div className="text-center">
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 sm:p-6 min-w-[80px] sm:min-w-[100px]">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-600 mb-1">
              {String(timeRemaining.seconds).padStart(2, '0')}
            </div>
            <div className="text-xs sm:text-sm text-gray-600 font-medium uppercase tracking-wide">
              Seconds
            </div>
          </div>
        </div>
      </div>
      
      <p className="text-sm text-gray-500 mt-4 text-center">
        Until our grand opening
      </p>
    </div>
  );
};