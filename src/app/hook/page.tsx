"use client";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CUSTOM_HOOKS } from '@/hooks';
import { useSearchParams } from 'next/navigation';
import React from 'react'

const Page = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id') || '';

  const showCase = CUSTOM_HOOKS[id];

  return (
    <div className='mt-4'>
      <Card>
        <CardHeader>
          <CardTitle>{showCase.id}</CardTitle>
          <CardDescription>{showCase.description}</CardDescription>
        </CardHeader>
        <hr />
        <CardContent className='mt-4'>
          {showCase && showCase.demo && showCase.demo}
          {!showCase && "Not found"}
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
  )
}

export default Page