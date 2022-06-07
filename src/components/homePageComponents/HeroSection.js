import React from 'react'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP} from './HeroElements'
import Video from './car.mp4'

function HeroSection() {
  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>Wypożyczalnia samochodów</HeroH1>
            <HeroP>Mamy dla Ciebie samochód</HeroP>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection