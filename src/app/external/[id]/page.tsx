"use client";
import { externalMenu } from '@/constants/menu'
import React from 'react'

const Page = ({ params }: {
  params: { id: string }
}) => {
  
  const currentMenu = externalMenu.find((menu: any) => {
    return menu.id === params.id
  });

  return (
    <div>
      <iframe 
        src={currentMenu?.externalLink} 
        className='w-full min-h-screen' 
        title="Iframe Example">

      </iframe>
    
    </div>
  )
}

export default Page