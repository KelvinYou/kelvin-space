import BreadCrumb from '@/components/BreadCrumb';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { HOME_PATH, UTIL_CRYPTO_PATH, UTIL_PATH } from '@/constants/menu';
import { Metadata } from 'next';
import React from 'react'
import Ciphers from './Ciphers';
import CryptoDemo from './CryptoDemo';

export const metadata: Metadata = {
  title: 'Crypto | Kelvin You\'s Space',
  description: '',
}

const breadcrumbItems = [
  { label: 'Home', link: HOME_PATH },
  { label: 'Util', link: UTIL_PATH },
  { label: 'Crypto', link: UTIL_CRYPTO_PATH  },
];

const CryptoPage = () => {


  return (
    <div className='p-4'>

      <BreadCrumb items={breadcrumbItems} />

      <Card className='mt-4'>
        <CardHeader>
          <CardTitle>Crypto Demo</CardTitle>
          <CardDescription>I{'\''}m using AES as an example of encryption and describing</CardDescription>
        </CardHeader>
        <CardContent>
          <CryptoDemo />
        </CardContent>
        <CardFooter>
        </CardFooter>
      </Card>

      <Card className='mt-4'>
        <CardHeader>
          <CardTitle>Ciphers</CardTitle>
          <CardDescription>The Cipher Algorithms from https://cryptojs.gitbook.io/docs/</CardDescription>
        </CardHeader>
        <CardContent>
          <Ciphers />

        </CardContent>
        <CardFooter>
        </CardFooter>
      </Card>
    </div>
  )
}

export default CryptoPage