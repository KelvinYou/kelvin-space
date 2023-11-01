import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { formatNumberAsAbbreviation } from '@/utils/textUtils';
import { ArrowUp, ArrowDown } from 'lucide-react';

type KeyMetricCardProps = {
  cardContext: {
    label: string;
    value: number;
    compareValue: number;
    description: string;
  };
};

const KeyMetricCard: React.FC<KeyMetricCardProps> = ({ cardContext }) => {
  const percentage = ((cardContext.value - cardContext.compareValue) / cardContext.value) * 100;

  return (
    <Card className='hover:shadow-lg min-w-[160px] sm:w-auto hover:cursor-pointer 
    bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-gray-100 to-gray-300
    dark:from-gray-700 dark:via-gray-900 dark:to-black'>
      <CardContent className='p-5'>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className='text-sm font-bold'>{cardContext.label}</div>
          </TooltipTrigger>
          <TooltipContent className='max-w-[300px]'>
            <p>{cardContext.label}: {cardContext.description}</p>
          </TooltipContent>
        </Tooltip>

        <div className='text-2xl my-[6px]'>
          {formatNumberAsAbbreviation(cardContext.value)}
        </div>

        <div className='flex gap-2'>
          <span className='text-xs text-gray-500 font-bold'>Dod</span>
          <span className={`text-xs ${
            percentage > 0 ? 'text-green-500' : percentage < 0 ? 'text-red-500' : 'text-gray-500'
          } font-bold`}>
            {percentage === 0 ? '-' : `${percentage.toFixed(2)} %`}
          </span>
          {percentage !== 0 && (
            <span className={`text-xs ${percentage > 0 ? 'text-green-500' : 'text-red-500'} font-bold`}>
              {percentage > 0 ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};



const KeyMetricSection: React.FC<any> = (props) => {
  const { dummyData } = props;

  return (
    <section className="px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
      {dummyData.map((dummy: any, index: number) => {
        return (
          <KeyMetricCard key={index} cardContext={dummy}/>
        );
      })}
    </section>
  )
}

export default KeyMetricSection;
