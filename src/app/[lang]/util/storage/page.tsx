import BreadCrumb from '@/components/BreadCrumb';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { HOME_PATH, UTIL_PATH, UTIL_STORAGE_PATH } from '@/constants/menu';
import React from 'react'
import CookieStorage from './CookieStorage';

const breadcrumbItems = [
  { label: 'Home', link: HOME_PATH },
  { label: 'Util', link: UTIL_PATH },
  { label: 'Storage', link: UTIL_STORAGE_PATH  },
];

const StoragePage = () => {
  return (
    <div className='p-4'>
      <BreadCrumb items={breadcrumbItems} />

      <section className='mt-4'>
        <Card>
          <CardHeader>
            <CardTitle>Cookie</CardTitle>
            <CardDescription>Cookie</CardDescription>
          </CardHeader>
          <CardContent>
            <CookieStorage />
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      </section>

      <section className='mt-4'>
        <Card>
          <CardHeader>
            <CardTitle>Reference</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <div>
              https://nextjs.org/docs/app/api-reference/functions/cookies

              NextJS official website
            </div>
            
            <div>
              {/* https://www.youtube.com/watch?v=HhLa-D0SXlI

              NextJS makes a clear distinction between what code runs on the client and the server, causing a lot of problems
              Learned how to implement dynamic SSR and how to solve routing problems */}
            </div>
            
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      </section>
    </div>
  )
}

export default StoragePage