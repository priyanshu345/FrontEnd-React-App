import React from 'react'
import HeroSection from '../../HeroSection'
import {homeObjOne, homeObjFour, homeObjThree, homeObjTwo} from './Data'
import Pricing from '../../Pricing'

function Home() {
  return (
      <>
      <HeroSection {...homeObjOne}/>
      <HeroSection {...homeObjThree}/>
      <HeroSection {...homeObjTwo}/>
      <Pricing/>
      <HeroSection {...homeObjFour}/>
      </>
  )
}

export default Home