import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import FormatDates from './FormatDates';
import { Metadata } from 'next';
import BreadCrumb from '@/components/BreadCrumb';
import { HOME_PATH, UTIL_DATE_PATH, UTIL_PATH } from '@/constants/menu';

export const metadata: Metadata = {
  title: 'Date Util | Kelvin You\'s Space',
  description: '',
}

const breadcrumbItems = [
  { label: 'Home', link: HOME_PATH },
  { label: 'Util', link: UTIL_PATH },
  { label: 'Date', link: UTIL_DATE_PATH  },
];


const Page = () => {
  return (
    <div className='p-4'>
      <BreadCrumb items={breadcrumbItems} />

      <Card className='mt-4'>
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
    
  )
}

export default Page