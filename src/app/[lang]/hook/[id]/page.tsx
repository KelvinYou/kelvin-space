"use client";
import BreadCrumb from '@/components/BreadCrumb';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { HOME_PATH, HOOK_ITEM_PATH, HOOK_PATH, externalMenu } from '@/constants/menu'
import { CUSTOM_HOOKS } from '@/hooks';
import React from 'react'

const Page = ({ params }: {
  params: { id: string }
}) => {

  const { id } = params;
  
  const showCase = CUSTOM_HOOKS[id];

  const breadcrumbItems = showCase ? [
    { label: 'Home', link: HOME_PATH },
    { label: 'Hook', link: HOOK_PATH },
    { label: id, link: HOOK_ITEM_PATH + id },
  ] : [
    { label: 'Home', link: HOME_PATH },
    { label: 'Hook', link: HOOK_PATH },
  ];

  const currentMenu = externalMenu.find((menu: any) => {
    return menu.id === params.id
  });

  return (
    <div className='p-4'>
      <BreadCrumb items={breadcrumbItems} />
      
      {
        showCase &&  <div className='mt-4'>
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
      }
    
    </div>
  )
}

export default Page