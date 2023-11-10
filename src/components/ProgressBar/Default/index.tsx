import React, { FC } from 'react';

type ProgressBarProps = {
  value: number;
  isShowValue?: boolean;
};

const DefaultProgressBar: FC<ProgressBarProps> = ({ value, isShowValue = false }) => {
  return (
    <div>
      <span id="ProgressLabel" className="sr-only">
        Loading
      </span>

      <span
        role="progressbar"
        aria-labelledby="ProgressLabel"
        aria-valuenow={value}
        className="block rounded-full bg-gray-200"
      >
        <span
          className="block h-4 rounded-full bg-blue-500 text-center text-[10px]/4"
          style={{ width: `${value}%` }}
        >
          {isShowValue && (
            <span className="font-bold text-white"> {value}% </span>
          )}
        </span>
      </span>
    </div>
  );
};

export default DefaultProgressBar;
