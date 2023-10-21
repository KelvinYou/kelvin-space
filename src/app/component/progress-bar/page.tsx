import ProgressBar from '@/components/ProgressBar'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import React from 'react'

const Page = () => {
  return (
    <>
      <div className='mt-4'>
        <Card>
          <CardHeader>
            <CardTitle>Demo Progress Bar</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <div className='w-24 h-24'>
              <ProgressBar percent={50} size={24}/>

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
    </>
  )
}

export default Page