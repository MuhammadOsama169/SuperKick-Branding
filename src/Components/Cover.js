import React from 'react'
import { RightContainer,LeftContainer,MainContainer,Button,CoverText } from './Styles/Cover.styled'
import Img from "../assets/images/Blend 1.png";
import ImgCover from "../assets/images/team-photo5.png";


export default function Cover() {
  return (
    <MainContainer>
        <LeftContainer>
            <img src={Img}alt="img" />
            <CoverText>We design clear brand messaging <br></br> to help your business stand out</CoverText>
            <Button>TAKE A BRAND HEALTH QUIZ</Button>
        </LeftContainer>

        <RightContainer>
            <img src={ImgCover}alt="Logo" />
        </RightContainer>
    </MainContainer>
  )
}
