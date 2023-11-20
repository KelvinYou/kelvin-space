"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import React, { FC, useState } from 'react'

const buttonItems = [
  {
    value: 1,
    label: "Mentions & Sentiment Trends",
  },
  {
    value: 2,
    label: "Mentions & DAU REV DLS",
  },
  {
    value: 3,
    label: "Sentiment & DAU REV DLS",
  },
];

const MentionsSentiment: FC = () => {
  const [selectedButton, setSelectedButton] = useState<number | null>(buttonItems[0].value);

  const handleButtonClick = (value: number) => {
    setSelectedButton(value);
  };

  return (
    <Card className='hover:shadow-lg w-full hover:cursor-pointer h-[500px]'>
      <CardContent className='p-5'>
        <div className='text-base font-bold'>Mentions & Sentiment</div>
        
        <div className='flex bg-gray-100 dark:bg-gray-700 p-1 gap-1 rounded-lg mt-2'>
          {buttonItems.map((item) => (
            <button 
              key={item.value} 
              className={`flex-grow text-xs font-bold rounded-md transition-colors  py-1 ${
                selectedButton === item.value ? 'bg-[#326ff0] text-white' : 'hover:bg-[#e1e1e1] dark:hover:bg-[#595959]'
              }`}
              onClick={() => handleButtonClick(item.value)}>
              {item.label}
            </button>
          ))}
        </div>

        <div className=''>
          Chart will be done soon
        </div>
      </CardContent>
    </Card>
  );
};

export default MentionsSentiment;
