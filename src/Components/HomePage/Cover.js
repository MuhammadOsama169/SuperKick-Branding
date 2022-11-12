import React from 'react'
import { RightContainer,LeftContainer,MainContainer,InnerContainer,Button,CoverText,ImageContainer } from '../../Components/Styles/HomePage/Cover.styled'
import Img from "../../assets/images/Blend 1.png";




export default function Cover() {
  return (
    <MainContainer>
      <InnerContainer>
        <LeftContainer>
          <img src={Img}alt="img" />
          <CoverText>We design clear brand messaging  to help your business stand out</CoverText>
          <Button to="/contact">LET'S WORK TOGETHER </Button>
        </LeftContainer>

        <RightContainer>
          <ImageContainer></ImageContainer>
        </RightContainer>
      </InnerContainer>

    </MainContainer>
  )
}