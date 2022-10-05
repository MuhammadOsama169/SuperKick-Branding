import React from 'react'
import { LeftContainer, MainContainer, RightContainer,CoverText,MainHeader,Section } from './Styles/Section1.styled'
import ImgCover from "../assets/images/women-walking.png";

export default function Section1() {
  return (
    <>
    <MainContainer>
        <LeftContainer>
            <MainHeader>LEAD YOUR INDUSTRY</MainHeader>
            <CoverText>

You have a solid business with a killer product. But that won’t matter if your brand messaging confuses customers or blends in with competitors. <br></br>Superkick helps you develop a clear message about what your brand does and who it’s for. Messaging that stands out will take you from the middle of the pack to the top of your industry.</CoverText>
        </LeftContainer>
        <RightContainer>
            <img src={ImgCover}alt="img" />
        </RightContainer>
    </MainContainer>
    <Section>HOW WE GET YOU THERE</Section>
    </>
  )
}
