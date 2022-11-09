import React from 'react'
import { MainContainer,ImageContainer,RightContainer,BoxHeader,CoverText,Button,InnerContainer,LogoImageContainer } from '../../Components/Styles/HomePage/Banner.styled'


export default function Banner() {
  return (
    <MainContainer>
      <InnerContainer>
        <ImageContainer></ImageContainer>
        <RightContainer>
            <BoxHeader>want to go your own way?</BoxHeader>
            <CoverText>No problem. Learn about branding, messaging, and more through our Brand Outlaw content.</CoverText>
            <Button><LogoImageContainer></LogoImageContainer> Check out Brand Outlaw</Button>
        </RightContainer>
      </InnerContainer>
    </MainContainer>
  )
}
