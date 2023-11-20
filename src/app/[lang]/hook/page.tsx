"use client";
import BreadCrumb from '@/components/BreadCrumb';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { HOME_PATH, HOOK_ITEM_PATH, HOOK_PATH } from '@/constants/menu';
import { CUSTOM_HOOKS } from '@/hooks';
import { useSearchParams } from 'next/navigation';
import React from 'react'

const Page = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id') || '';

  const showCase = CUSTOM_HOOKS[id];

  const breadcrumbItems = showCase ? [
    { label: 'Home', link: HOME_PATH },
    { label: 'Hook', link: HOOK_PATH },
    { label: id, link: HOOK_ITEM_PATH + id },
  ] : [
    { label: 'Home', link: HOME_PATH },
    { label: 'Hook', link: HOOK_PATH },
  ];
  
  return (
    <div className='p-4'>
      <BreadCrumb items={breadcrumbItems} />

    </div>

  )
}

export default Page