import React from 'react'
import { MainContainer,Card,LeftContainer,RightContainer,Logo,BoxHeader,CoverText,Button } from './Styles/Banner.styled'
import LogoImg from "../assets/images/Mascot02.png";
import ButtonImg from "../assets/images/Lockup_Black.png";

export default function Banner() {
  return (
    <MainContainer>
        <LeftContainer>
            <Logo ><img src={LogoImg}alt="Logo" /></Logo>
        </LeftContainer>
        <RightContainer>
            <BoxHeader>want to go your own way?</BoxHeader>
            <CoverText>No problem. Learn about branding, messaging,<br></br> and more through our Brand Outlaw content.</CoverText>
            <Button><Logo ><img src={ButtonImg}alt="Logo" /></Logo> Check out Brand Outlaw</Button>
        </RightContainer>
    </MainContainer>
  )
}
