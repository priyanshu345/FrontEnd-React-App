import React from 'react'
import HeroSection from '../../HeroSection'
import {homeObjOne, homeObjFour, homeObjThree, homeObjTwo} from './Data'
import Pricing from '../../Pricing'

function Services() {
  return (
      <>
      <Pricing/>
      <HeroSection {...homeObjOne}/>
      </>
  )
}

export default Services