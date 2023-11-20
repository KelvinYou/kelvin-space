"use client"
import LineChart from '@/components/Chart/LineChart';
import moment from 'moment';
import React from 'react'

const DemoChart = () => {
  const generateDummyData = (days: number, daysBeforeToday: number = 0) => {
    const dummyData: any = {};
  
    for (let i = 0; i < days; i++) {
      const currentDate = moment().subtract(i + daysBeforeToday, 'days').format('YYYY-MM-DD');
      dummyData[currentDate] = {
        revenue: (Math.random() * 10000).toFixed(2), // Generating a random revenue value
        user: Math.floor(Math.random() * 50), // Generating a random user value
      };
    }
  
    // Sort the data by date in descending order
    const sortedDummyData: any = Object.fromEntries(
      Object.entries(dummyData).sort(([a], [b]) => moment(a, 'YYYY-MM-DD').diff(moment(b, 'YYYY-MM-DD')))
    );
  
    return sortedDummyData;
  };
  
  // Example usage:
  const numberOfDays = 30;
  const dummyData = generateDummyData(numberOfDays);
  const dummyData2 = generateDummyData(numberOfDays, numberOfDays);
  
  // Convert dummyData into the format expected by LineChart component
  const formattedDummyData: any = {
    id: 'echart',
    legendData: ['This Month', 'Last Month'],
    xAxisData: Object.keys(dummyData),
    seriesData: [
      {
        name: 'This Month',
        type: 'line',
        data: Object.keys(dummyData).map(date => dummyData[date].revenue),
      },
      {
        name: 'Last Month',
        type: 'line',
        data: Object.keys(dummyData2).map(date => dummyData2[date].revenue),
      },
    ],
  };

  return (
    <>
      <LineChart 
        // id={"demo"}
        {...formattedDummyData}
      />
    </>
  )
}

export default DemoChart