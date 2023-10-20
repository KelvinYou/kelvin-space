import React, { useState } from 'react';

type ProgressBarType = {
  percent: number,
  size: number,
}

const ProgressBar: React.FC<ProgressBarType> = (props) => {
  const { percent = 0, size = 72 } = props;

  const circumference = 2 * Math.PI * 120;

  const formattedPercent = parseFloat(percent.toFixed(2));

  return (
    <div className="flex items-center justify-center">
      <svg className={`transform -rotate-90 w-${size} h-${size}`}>
        <circle cx="145" cy="145" r="120" stroke="currentColor" strokeWidth="30" fill="transparent" className="text-gray-700" />

        <circle
          cx="145"
          cy="145"
          r="120"
          stroke="currentColor"
          strokeWidth="30"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - (percent / 100) * circumference}
          className="text-blue-500 transition-all duration-200"
        />
      </svg>
      <span className="absolute text-[48px]">{`${formattedPercent}%`}</span>
    </div>
  );
};

export default ProgressBar;
