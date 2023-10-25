import ProgressBar from '@/components/ProgressBar'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import React from 'react'
import type { Metadata } from 'next'
import { COMPONENT_PATH, COMPONENT_PROGRESS_BAR_PATH, HOME_PATH } from '@/constants/menu'
import BreadCrumb from '@/components/BreadCrumb'

export const metadata: Metadata = {
  title: 'Progress Bar | Kelvin You\'s Space',
  description: 'A space that to record my love',
}

const breadcrumbItems = [
  { label: 'Home', link: HOME_PATH },
  { label: 'Component', link: COMPONENT_PATH },
  { label: 'Progress Bar', link: COMPONENT_PROGRESS_BAR_PATH },
];

const Page = () => {
  return (
    <div className='p-4'>
      <BreadCrumb items={breadcrumbItems} />

      <div className='mt-4'>
        <Card>
          <CardHeader>
            <CardTitle>Demo Progress Bar</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            Random size of circular progress bar
            <div  className='flex flex-wrap'>
              <ProgressBar percent={67} size={24}/>
              <ProgressBar percent={23.5} size={48}/>
              <ProgressBar percent={81} size={12}/>
              <ProgressBar percent={87} size={34}/>
            </div>

          </CardContent>
          <CardFooter>
            {/* <p>Reference: 
              <a href="https://echarts.apache.org/examples/en/index.html" target="_blank">
                https://echarts.apache.org/examples/en/index.html
              </a>
            </p> */}
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default Page