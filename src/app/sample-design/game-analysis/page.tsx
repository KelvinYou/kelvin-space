
import React from 'react'
import KeyMetricSection from './KeyMetricSection'
import MentionsSentiment from './MentionsSentiment'
import CompareCompetitors from './CompareCompetitors'

const dummyData = [
  {
    label: "Mentions",
    value: 1260,
    compareValue: 2031,
    description: "Summary of the number of Reviews (Posts & Comments). This includes all reviews of the game in the Game Store, as well as reviews captured on Social Media through monitor keywords and official accounts."
  },
  {
    label: "Account Posts",
    value: 12,
    compareValue: 4,
    description: "Summary of the number of Account posts on social media."
  },
  {
    label: "Engagement",
    value: 25710,
    compareValue: 25710,
    description: "Summary of Likes, Comments and Shares of all Reviews (Posts & Comments)."
  },
  {
    label: "Sentiment",
    value: 2.96,
    compareValue: 4,
    description: "Sentiment score is used to score the sentiment tendency of each comment through NLP algorithm and sentiment analysis, on a scale of 1-5. Sentiment score greater than 3.5 is positive, score lower than 2.5 is negative, and score between 2.5-3.5 is neutral."
  },
  {
    label: "Non Negative %",
    value: 0.92,
    compareValue: 0.34,
    description: "The proportion of Positive and Neutral sentiment Reviews in total Reviews (Posts & Comments)."
  },
  {
    label: "Lifetime User Score",
    value: 4.3,
    compareValue: 4,
    description: "Within the selected date range, DataBrain take the Region/Country's latest User Score, and then average the scores of these different Regions/Countries. (Excluding countries that lack Lifetime User Score on this day; Filters other than country and date do not take effect). \nThe countries displayed in Google Play reviews are obtained by crawling through the Google Play scores for each language and then mapping the language to the country."
  },
]

const GameAnalysisPage = () => {
  return (
    <div>
      <div className='bg-white dark:bg-gray-900 text-lg p-4 font-bold shadow-lg'>
        Performance
      </div>
      <div className='flex pt-5 pb-3 font-bold text-base'>
        <div className='pl-4'>
          Key Metrics
        </div>
      </div>

      <KeyMetricSection dummyData={dummyData} />

      <section className="mt-5 px-4 grid grid-cols-1 gap-4 xl:grid-cols-5 lg:gap-4">
        <div className="xl:col-span-3">
          <MentionsSentiment />
        </div>
        <div className="xl:col-span-2">
          <CompareCompetitors />
        </div>
      </section>
    </div>
  )
}

export default GameAnalysisPage