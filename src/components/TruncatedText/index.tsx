// TruncatedText.tsx
import React from 'react';
import { truncateText } from '@/utils/textUtils';

interface TruncatedTextProps {
  text: string;
  maxLength: number;
}

const TruncatedText: React.FC<TruncatedTextProps> = ({ text, maxLength }) => {
  const truncatedText = truncateText(text, maxLength);

  return (
    <div className="overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer hover:whitespace-normal">
      {truncatedText}
    </div>
  );
};

export default TruncatedText;
