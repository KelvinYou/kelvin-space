"use client"
import React, { useEffect, useState } from 'react';

interface ProgressBarProps {
  percent: number;
  size?: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percent = 0, size = 45 }) => {
  const [percentTextSize, setPercentTextSize] = useState<number>(size);

  const radius = (size / 2.4).toString();
  const circumference = 2 * Math.PI * parseFloat(radius);
  const strokeWidth = size / 9.6;
  const formattedPercent = parseFloat(percent.toFixed(2));

  useEffect(() => {
    // Update text size when the size prop changes
    setPercentTextSize(size);
  }, [size]);

  return (
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
          className="text-blue-500 transition-all duration-200"
        />
      </svg>
      <span className="absolute" style={{ fontSize: `${percentTextSize}px` }}>{`${formattedPercent}%`}</span>
    </div>
  );
};

export default ProgressBar;
