import React from 'react'
import { cookies } from 'next/headers'

const CookieStorage = () => {
  const cookiesList = cookies()
  const hasCookie = cookiesList.has('name')


  console.log("cookiesList: ", hasCookie)

  return (
    <div>

    </div>
  )
}

export default CookieStorage