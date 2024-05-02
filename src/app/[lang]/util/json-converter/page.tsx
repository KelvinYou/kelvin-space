import BreadCrumb from '@/components/BreadCrumb';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { HOME_PATH, UTIL_PATH, UTIL_JSON_PATH } from '@/constants/menu';
import { Metadata } from 'next';
import React from 'react';
import JsonConverter from './JsonConverter';

export const metadata: Metadata = {
  title: 'JSON Converter | Kelvin You\'s Space',
  description: '',
}

const breadcrumbItems = [
  { label: 'Home', link: HOME_PATH },
  { label: 'Util', link: UTIL_PATH },
  { label: 'JSON Converter', link: UTIL_JSON_PATH  },
];

const StringToJsonPage = () => {


  return (
    <div className='p-4'>
      <BreadCrumb items={breadcrumbItems} />

      <Card className='mt-4'>
        <CardHeader>
          <CardTitle>JSON Data</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <JsonConverter />
        </CardContent>
      </Card>
    </div>
  )
}

export default StringToJsonPage
