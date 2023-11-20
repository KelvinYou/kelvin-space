import React from 'react'
import Watermark from './Watermark'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'

const Page = () => {
  return (
    <div className='p-4'>
      <div className='mt-4'>
        <Card>
          <CardHeader>
            <CardTitle>Watermark</CardTitle>
            <CardDescription>Still searching the best way and improve...</CardDescription>
          </CardHeader>
          <CardContent>
            <Watermark />

          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default Page