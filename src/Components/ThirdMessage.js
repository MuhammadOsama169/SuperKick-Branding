import React from 'react'
import { LeftContainer, MainContainer,InnerContainer,TextContainer, RightContainer,CoverText,MainHeader,ImageContainer,Button } from './Styles/ThirdMessage.styled'

export default function ThirdMessage() {
  return (
    <>
    <MainContainer>
      <InnerContainer>
        <LeftContainer>
          <TextContainer>
            <MainHeader>monthly strategy sessions</MainHeader>
            <CoverText>
            Maximize the impact of your brand messaging. One-hour video/phone call
            </CoverText>
            <CoverText>
            Review of previous month’s results and strategies for future plans
            </CoverText>
            <CoverText>
            Tactical support related to advertising, brand visuals, and more.
            </CoverText>
          </TextContainer>
        </LeftContainer>
        <RightContainer>
          <ImageContainer></ImageContainer>
          <Button>I’m interested in this service</Button>
        </RightContainer>
      </InnerContainer>

    </MainContainer>
    </>
  )
}
