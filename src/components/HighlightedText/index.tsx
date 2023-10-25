import { escapeRegExp } from '@/utils/textUtils';
import React from 'react';

interface HighlightTextProps {
  text: string;
  highlightedText: string[] | undefined;
  className?: string;
}

const HighlightText: React.FC<HighlightTextProps> = ({ text, highlightedText, className }) => {
  if (!highlightedText || highlightedText.length === 0) {
    return <span>{text}</span>;
  }

  const escapedHighlightedText = highlightedText.map(escapeRegExp);
  const parts = text.split(new RegExp(`(${escapedHighlightedText.join('|')})`, 'gi'));

  return (
    <>
      {parts.map((part, index) => (
        highlightedText.includes(part) ? (
          <span key={index} className={`text-blue-500 font-bold ${className}`} >
            {part}
          </span>
        ) : (
          <span key={index}>{part}</span>
        )
      ))}
    </>
  );
};

export default HighlightText;
