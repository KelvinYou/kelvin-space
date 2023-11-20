import React from 'react'
import { Metadata } from 'next';
import { COMPONENT_PATH, HOME_PATH } from '@/constants/menu';
import BreadCrumb from '@/components/BreadCrumb';

export const metadata: Metadata = {
  title: 'Components | Kelvin You\'s Space',
  description: '',
}

const breadcrumbItems = [
  { label: 'Home', link: HOME_PATH },
  { label: 'Component', link: COMPONENT_PATH },
];
const ComponentPage = () => {
  return (
    <div className='p-4'>
      <BreadCrumb items={breadcrumbItems} />
    </div>
  )
}

export default ComponentPage