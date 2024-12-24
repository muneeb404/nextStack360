import WebHeader from '@/app/Components/WebHeader'
import WebServices from '@/app/Components/WebServices'
import WebStack from '@/app/Components/WebStack'
import React from 'react'

function page() {
  return (
    <div>
        <WebHeader/>
        <WebServices/>
        <WebStack/>
    </div>
  )
}

export default page