import { useState, useEffect } from 'react';
import { CountdownTime } from '../types/index';
import { calculateTimeRemaining } from '../utils/dateUtils';

export const useCountdown = (targetDate: Date) => {
  const [timeRemaining, setTimeRemaining] = useState<CountdownTime>(() => 
    calculateTimeRemaining(targetDate)
  );
  const [isExpired, setIsExpired] = useState<boolean>(false);

  useEffect(() => {
    const updateCountdown = () => {
      const remaining = calculateTimeRemaining(targetDate);
      setTimeRemaining(remaining);
      
      const expired = remaining.days === 0 && 
                     remaining.hours === 0 && 
                     remaining.minutes === 0 && 
                     remaining.seconds === 0;
      setIsExpired(expired);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return {
    timeRemaining,
    isExpired,
  };
};