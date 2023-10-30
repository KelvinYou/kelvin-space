import { Card, CardContent } from '@/components/ui/card'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
import { formatNumberAsAbbreviation } from '@/utils/textUtils'
import { ChevronRight } from 'lucide-react'
import React, { FC } from 'react'

const gameCompetitors = [
  {
    id: 1,
    label: "Free Fire",
    mentionsValue: 6950,
    previousMentionsValue: 3456,
    sentimentValue: 3.26,
    previousSentimentValue: 2.13,
    tags: [
      {
        label: "Sun",
      },
      {
        label: "Late",
      },
      {
        label: "Freya",
      }
    ]
  }
]

const CompareCompetitors: FC = () => {
  return (
    <Card className='hover:shadow-lg w-full hover:cursor-pointer h-[500px]'>
      <CardContent className='p-5'>
        <div className='text-base font-bold flex gap-0'>
          Compare Competitors 
          <ChevronRight />
        </div>
        <Table className='mt-4'>
          <TableHeader>
            <TableRow>
              <TableHead>Game (Sort by DAU)</TableHead>
              <TableHead className='text-right'>Mentions</TableHead>
              <TableHead className='text-right'>Sentiment</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {gameCompetitors.map((competitor, index) => {
              const mentionsPercentage = ((competitor.mentionsValue - competitor.previousMentionsValue) / competitor.previousMentionsValue) * 100;
              const sentimentPercentage = ((competitor.sentimentValue - competitor.previousSentimentValue) / competitor.previousSentimentValue) * 100;
              
              return (
                <>
                  <TableRow key={index}>
                    <TableCell>
                      {competitor.label}
                      <div className='flex gap-1'>
                        {competitor.tags.map((tag, index) => {
                          return (
                            <div key={index} className='border-solid border-2 border-gray-500 rounded-md'>
                              {tag.label}
                            </div>
                          )
                        })}
                      </div>
                      
                    </TableCell>
                    <TableCell>
                      <div className='text-right text-sm text-black font-semibold'>
                        {formatNumberAsAbbreviation(
                          competitor.mentionsValue
                        )}
                      </div>
                      <div className='text-right text-gray-500 text-xs'>
                        {mentionsPercentage.toFixed(2)} %
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className='text-right text-sm text-black font-semibold'>
                        {formatNumberAsAbbreviation(
                          competitor.sentimentValue
                        )}
                      </div>
                      <div className='text-right text-gray-500 text-xs'>
                        {sentimentPercentage.toFixed(2)} %
                      </div>
                    </TableCell>


                  </TableRow>


                </>
              )
            })}

          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export default CompareCompetitors