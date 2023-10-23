import React from 'react'
import moment from 'moment'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import FormatDates from './FormatDates';
import { Metadata } from 'next';
import BreadCrumb from '@/components/BreadCrumb';
import { HOME_PATH, UTIL_MOMENT_PATH, UTIL_PATH } from '@/constants/menu';

export const metadata: Metadata = {
  title: 'Moment | Kelvin You\'s Space',
  description: '',
}

const breadcrumbItems = [
  { label: 'Home', link: HOME_PATH },
  { label: 'Util', link: UTIL_PATH },
  { label: 'Moment', link: UTIL_MOMENT_PATH  },
];


const Page = () => {
  const dateTime = moment().format('MMMM Do YYYY, h:mm:ss a');
  const isNew = moment().diff(moment('2023-10-09'), "day") <= 10;
  return (
    <div className='p-4'>
      <BreadCrumb items={breadcrumbItems} />

      <div className='mt-4'>
        <Card>
          <CardHeader>
            <CardTitle>Format Dates</CardTitle>
            <CardDescription>All the format I current have with dates</CardDescription>
          </CardHeader>
          <CardContent>
            <FormatDates />
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      </div>

      {/* <div className='mt-4'>
        <Card>
          <CardHeader>
            <CardTitle>Bar Chart</CardTitle>
            <CardDescription>I use the Apache ECharts as my primary chart</CardDescription>
          </CardHeader>
          <CardContent>
            {moment().format('MMMM Do YYYY, h:mm:ss a')}
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      </div> */}

      {/* <div className='mt-4'>
        <Card>
          <CardHeader>
            <CardTitle>Bar Chart</CardTitle>
            <CardDescription>I use the Apache ECharts as my primary chart</CardDescription>
          </CardHeader>
          <CardContent>
            {moment().format('MMMM Do YYYY, h:mm:ss a')}
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      </div> */}
    </div>
    
  )
}

export default Page