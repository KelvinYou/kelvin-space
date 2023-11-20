import CircularProgressBar from '@/components/ProgressBar/Circular'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import React from 'react'
import type { Metadata } from 'next'
import { COMPONENT_PATH, COMPONENT_PROGRESS_BAR_PATH, HOME_PATH } from '@/constants/menu'
import BreadCrumb from '@/components/BreadCrumb'
import DefaultProgressBar from '@/components/ProgressBar/Default'

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
            <div className='flex flex-col gap-4'>
              <DefaultProgressBar 
                value={80}
              />
              <DefaultProgressBar 
                value={80}
                isShowValue={true}
              />
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

      <div className='mt-4'>
        <Card>
          <CardHeader>
            <CardTitle>Demo Circular Progress Bar</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            Random size of circular progress bar
            <div  className='flex flex-wrap'>
              <CircularProgressBar percent={67} size={24}/>
              <CircularProgressBar percent={23.5} size={48}/>
              <CircularProgressBar percent={81} size={12}/>
              <CircularProgressBar percent={87} size={34}/>
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