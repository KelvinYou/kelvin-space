import BreadCrumb from '@/components/BreadCrumb'
import { HOME_PATH, UTIL_PATH } from '@/constants/menu';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: 'Utils | Kelvin You\'s Space',
  description: '',
}

const breadcrumbItems = [
  { label: 'Home', link: HOME_PATH },
  { label: 'Util', link: UTIL_PATH },
];

const UtilPage = () => {
  return (
    <div className='p-4'>
      <BreadCrumb items={breadcrumbItems} />
    </div>
  )
}

export default UtilPage