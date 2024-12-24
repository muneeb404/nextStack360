import MobileHeader from '@/app/Components/MobileHeader'
import MobileServices from '@/app/Components/MobileServices'
import MobileStack from '@/app/Components/MobileStack'
import React from 'react'

function page() {
  return (
    <div>
        <MobileHeader/>
        <MobileServices/>
        <MobileStack/>
    </div>
  )
}

export default page