import TruncatedText from '@/components/TruncatedText'
import React from 'react'

import { Metadata } from 'next';
import { HOME_PATH, UTIL_PATH, UTIL_TEXT_PATH } from '@/constants/menu';
import BreadCrumb from '@/components/BreadCrumb';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Moment | Kelvin You\'s Space',
  description: '',
}

const breadcrumbItems = [
  { label: 'Home', link: HOME_PATH },
  { label: 'Util', link: UTIL_PATH },
  { label: 'Text', link: UTIL_TEXT_PATH  },
];

const TextUtilPage = () => {
  return (
    <div className='p-4'>
      <BreadCrumb items={breadcrumbItems} />

      <Card className='mt-4'>
        <CardHeader>
          <CardTitle>Format Dates</CardTitle>
          <CardDescription>All the format I current have with dates</CardDescription>
        </CardHeader>
        <CardContent>
          still searching the way to improve
          <TruncatedText text='usdfghudhfvicneewuchwehcechuwechcihw' maxLength={10}/>
    
        </CardContent>
        <CardFooter>
        </CardFooter>
      </Card>
    </div>
  )
}

export default TextUtilPage