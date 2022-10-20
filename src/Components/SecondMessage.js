import React from 'react'
import { LeftContainer, MainContainer,InnerContainer,TextContainer, RightContainer,CoverText,MainHeader,ImageContainer,Button } from './Styles/SecondMessage.styled'


export default function SecondMessage() {
  return (
    <>
    <MainContainer>
      <InnerContainer>
        <LeftContainer>
          <TextContainer>
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
