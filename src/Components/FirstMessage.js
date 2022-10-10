import React from 'react'
import { LeftContainer, MainContainer, RightContainer,CoverText,MainHeader,ImageContainer,PinkFrame,Button } from './Styles/FirstMessage.styled'
import ImgCover from "../assets/images/superkick-team 1.png";

export default function Section1() {
  return (
    <>
    <MainContainer>
        <LeftContainer>
            <MainHeader>brand diagnostic</MainHeader>
            <CoverText>
            Doctors don’t prescribe treatment without diagnosing symptons. Neither do we. Before recommending actions, we thoroughly evaluate your brand messaging.
            </CoverText>
            <CoverText>
            Critical review of current written and visual messaging, focusing on clarity, brand personality, positioning, and differentiation.
            </CoverText>
            <CoverText>
            Competitive analysis measuring how well your brand stands out in its market.
            </CoverText>
            <CoverText>
            SWOT analysis, pinpointing your brand’s strengths, weaknesses, opportunities, and threats.
            </CoverText>
            <CoverText>
            Road map for success with action recommendations
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
