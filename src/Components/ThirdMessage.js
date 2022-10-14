import React from 'react'
import { LeftContainer, MainContainer, RightContainer,CoverText,MainHeader,ImageContainer,PinkFrame,Button } from './Styles/ThirdMessage.styled'
import ImgCover from "../assets/images/superkick-team-brainstorming 1.png";

export default function ThirdMessage() {
  return (
    <>
    <MainContainer>
        <LeftContainer>
            <MainHeader>monthly strategy sessions</MainHeader>
            <CoverText>
            Maximize the impact of your brand messaging.
            </CoverText>
            <CoverText>
            One-hour video/phone call
            </CoverText>
            <CoverText>
            Review of previous month’s results and strategies for future plans
            </CoverText>
            <CoverText>
            Tactical support related to advertising, brand visuals, and more.
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
