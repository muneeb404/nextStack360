import React from 'react'
import Autobluffy from './Autobluffy'
import CoachCatalyst from './CoachCatalyst'
import Micro from './Micro'
import DuroLabs from './DuroLabs'

function CaseBody() {
  return (
    <div className='w-full px-20 pt-16 poppins
    mobile:max-lgmobile:px-10'>
        <Autobluffy/>
        <CoachCatalyst/>
        <Micro/>
        <DuroLabs/>
    </div>
  )
}

export default CaseBody