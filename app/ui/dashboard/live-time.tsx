'use client';
import { useState, useEffect } from 'react';
import { formatTimeToLocal } from '@/app/lib/utils';
import { shimmer } from '../skeletons';

const LiveTime: React.FC<{ className?: string }> = ({ className }) => {
  const [isClient, setIsClient] = useState(false);
  const locale = 'en-US';
  const [currentTime, setCurrentTime] = useState(
    formatTimeToLocal(Date.now(), locale),
  );

  useEffect(() => {
    setIsClient(true);
  }, []);
  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(formatTimeToLocal(Date.now(), locale));
    }, 1000);

    return () => clearInterval(timerId);
  }, [locale]);

  if (!isClient)
    return (
      <div
        className={`relative mb-1 h-5 w-36 rounded-md bg-gray-200 ${shimmer}`}
      ></div>
    );
  return <h1 className={className}>{currentTime}</h1>;
};

export default LiveTime;
