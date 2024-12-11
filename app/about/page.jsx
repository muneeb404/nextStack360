import React from 'react'
import AboutHero from './components/AboutHero'
import HeroLogo from '../Components/HeroLogo'
import SecondCTA from '../Components/SecondCTA'
import AboutGoal from './components/AboutGoal'

function Page() {
  return (
    <div>
        <AboutHero/>
        <HeroLogo/>
        <SecondCTA/>
        <AboutGoal/>
    </div>
  )
}

export default Page