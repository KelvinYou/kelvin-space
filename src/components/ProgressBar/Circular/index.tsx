"use client"

import React, { useEffect, useState } from 'react';

interface ProgressBarProps {
  percent: number;
  size?: number;
  className?: string;
}

const CircularProgressBar: React.FC<ProgressBarProps> = ({ percent = 0, size = 24, className }) => {
  const [percentTextSize, setPercentTextSize] = useState<number>(size);

  const radius = (size / 2.4).toString();
  const circumference = 2 * Math.PI * parseFloat(radius);
  const strokeWidth = size / 9.6;
  const formattedPercent = parseFloat(percent.toFixed(2));

  useEffect(() => {
    // Update text size when the size prop changes
    setPercentTextSize(size);
  }, [size]);

  const containerStyle = {
    width: `${size * 4}px`,
    height: `${size * 4}px`,
  };

  return (
    <div className="relative" style={containerStyle}>
      <div className="flex items-center justify-center">
        <svg viewBox={`0 0 ${size} ${size}`} className="transform -rotate-90 w-full h-full">
          <circle
            cx={(size / 2).toString()}
            cy={(size / 2).toString()}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth.toString()}
            fill="transparent"
            className="text-gray-700"
          />

          <circle
            cx={(size / 2).toString()}
            cy={(size / 2).toString()}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth.toString()}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (percent / 100) * circumference}
            className={`text-blue-500 transition-all duration-200 ${className}`}
          />
        </svg>
        <span className="absolute" style={{ fontSize: `${percentTextSize}px` }}>{`${formattedPercent}%`}</span>
      </div>
    </div>
  );
};

export default CircularProgressBar;
