"use client";
import { customHooks } from '@/hooks';
import React from 'react'

const Page = () => {
  const demoHook = "useKeyPress";

  const showCase = customHooks[demoHook];

  return (
    <div>
      {showCase.demo}
    </div>
  )
}

export default Page