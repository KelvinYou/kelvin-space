import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { ArrowDown, ArrowUp } from 'lucide-react'
import React from 'react'

const dummyData = [
  {
    label: "Mentions",
    value: 1260,
    compareValue: 2031,
  },
  {
    label: "Account Posts",
    value: 12,
    compareValue: 4,
  },
  {
    label: "Engagement",
    value: 25710,
    compareValue: 41780,
  },
  {
    label: "Sentiment",
    value: 2.96,
    compareValue: 4,
  },
  {
    label: "Non Negative %",
    value: 0.92,
    compareValue: 0.34,
  },
  {
    label: "Lifetime User Score",
    value: 4.3,
    compareValue: 4,
  },
]

const GameAnalysisPage = () => {
  return (
    <div>
      <div className='bg-white dark:bg-gray-900 text-lg p-4 font-bold shadow-lg'>
        Performance
      </div>
      <div className='flex py-5 font-bold text-base'>
        <div className='pl-4'>
          Key Metrics
        </div>
        

      </div>


      <section className="px-4 flex flex-wrap gap-5">
        {dummyData.map((dummy, index) => {
          const percentage = ((dummy.value - dummy.compareValue) / dummy.value) * 100;

          return (
            <Card
              key={index + dummy.label}
              className='hover:shadow-lg min-w-[180px] flex-grow sm:w-auto hover:cursor-pointer'
            >
              <CardContent className='p-5'>
                <div className='text-sm font-bold'>
                  {dummy.label}
                </div>
                <div className='text-2xl my-[6px]'>
                  {dummy.value}
                </div>
                <div className='flex gap-2'>
                  <span className='text-xs text-gray-500 font-bold'>Dod</span> 
                  <span className={`text-xs ${
                    percentage > 0 ? 'text-green-500' : 'text-red-500'
                  } font-bold`}>
                    {percentage.toFixed(2)} %
                  </span> 
                  {percentage > 0 ?
                  <ArrowUp size={14} className='text-green-500'/> 
                  : 
                  <ArrowDown size={14}  className='text-red-500'/>
                  }
                  
                  
                </div>
              </CardContent>
            </Card>
          );
        })}
      </section>


    </div>
  )
}

export default GameAnalysisPage