import React from 'react'
import { LeftContainer, MainContainer, RightContainer,CoverText,MainHeader,ImageContainer,PinkFrame,Button } from './Styles/SecondMessage.styled'
import ImgCover from "../assets/images/team-photo_1_478x318.png";

export default function Section1() {
  return (
    <>
    <MainContainer>
        <LeftContainer>
            <MainHeader>messaging Workshop</MainHeader>
            <CoverText>
            Build your brand’s persona and messaging to clearly communicate and connect with customers.
            </CoverText>
            <CoverText>
            Discussion of brand diagnostic and business goals
            </CoverText>
            <CoverText>
            Determinination of your brand personality, the basis for all future messaging
            </CoverText>
            <CoverText>
            Clarification of your target audience, their problem and how your brand solves it, and more
            </CoverText>
            <CoverText>
            Messaging guide to keep everyone on your team consistently speaking the same brand language
            </CoverText>
            <CoverText>
            Strategies for implementing your new brand personality and messaging
            </CoverText>
        </LeftContainer>
        <RightContainer>
            <ImageContainer><img src={ImgCover}alt="img" /></ImageContainer>
            <PinkFrame></PinkFrame>
            <Button>I’m interested in this service</Button>
        </RightContainer>
    </MainContainer>
    </>
  )
}
