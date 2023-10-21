"use client";
import { externalMenu } from '@/constants/menu'
import React from 'react'

const Page = ({ params } : { params: any}) => {
  
  
  const currentMenu = externalMenu.find((menu: any) => {
    return menu.id === params.id
  });

  return (
    <div className='h-full'>
      <iframe src={currentMenu?.externalLink} className='w-full h-full' title="Iframe Example"></iframe>
    
    </div>
  )
}

export default Page