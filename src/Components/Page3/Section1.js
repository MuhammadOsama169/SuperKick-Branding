import React from 'react'
import { MainContainer,InnerContainer,LeftContainer,RightContainer,TextContainer,CoverText,ImageContainer,SubText,BoldTextPink,BoldText,Button } from '../Styles/Page3/Section1.styled'

export default function Section1() {
  return (
    <MainContainer>
        <InnerContainer>
            <LeftContainer>
                <TextContainer>
                    <CoverText>From graphic designer to digital marketing director to CEO, we’ve been working in branding and marketing for years. And we love it.</CoverText>
                    <CoverText>What we don’t love is seeing business owners stuck in the same old practices: Using ‘60s advertising tactics in a 21st century economy or treating employees like machine parts instead of people.</CoverText>
                    <CoverText>But … What can you do?</CoverText>
                    <CoverText>Well, we could have kept complaining. But that’s not our style. Instead, we created Superkick to drive the business world forward.</CoverText>
                    <CoverText>Through our Brand Outlaw podcast and videos, we deliver advice, guidance, and tough love. And in Superkick workshops, we help entrepreneurs know that proudly planting your flag might feel scary, but blending in is just plain terrifying.</CoverText>
                </TextContainer>
            </LeftContainer>
            <RightContainer>
                <ImageContainer></ImageContainer>
                <SubText>Superkick founders Nick Coleman and Matt Reno</SubText>
                <BoldTextPink>Get unstuck.</BoldTextPink>
                <BoldText>Build a clearer brand message today.</BoldText>
                <Button to="/contact">GET A BRAND DIAGNOSTIC</Button>
            </RightContainer>
        </InnerContainer>
    </MainContainer>
  )
}
