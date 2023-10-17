"use client";
import { customHooks } from '@/hooks';
import { useSearchParams } from 'next/navigation';
import React from 'react'

const Page = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id') || '';

  const showCase = customHooks[id];

  return (
    <div>
      {showCase && showCase.demo && showCase.demo}

      {!showCase && "Not found"}
    </div>
  )
}

export default Page