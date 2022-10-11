import React from 'react'
import { MainContainer,TopContainer,BottomContainer,CardRight,MainHeader,CoverText,BoxHeader,BoxHeader2,Button, EndContainer } from './Styles/Section2.styled'
import Img1 from "../assets/images/Mask-group.png";
import Img2 from "../assets/images/Group-4.png";
import Img3 from "../assets/images/Group-7.png";


export default function Section2() {
  return (
    <>
    <MainContainer>
        <TopContainer>
            <CardRight>
                <MainHeader>Why should people choose you over competitors?</MainHeader>
                <CoverText>If potential customers can’t answer that question, your business can’t grow.</CoverText>
                <CoverText>We’ll help you define your differentiation point. Then we’ll develop brand messaging to clearly communicate that to potential customers.</CoverText>
                <CoverText>Click on a service to learn more.</CoverText>
            </CardRight>  
            <CardRight>
                <BoxHeader>brand diagnostic</BoxHeader>
                <img src={Img1}alt="img" />
            </CardRight>   
        </TopContainer>
        <BottomContainer>
            <CardRight>
                <BoxHeader>messaging Workshop</BoxHeader>
                <img src={Img2}alt="img" />
            </CardRight>  
            <CardRight>
                <BoxHeader2>monthly strategy sessions</BoxHeader2>
                <img src={Img3}alt="img" />
            </CardRight>
        </BottomContainer>
        <EndContainer>
            <Button>TAKE A BRAND HEALTH QUIZ</Button>
        </EndContainer>
    </MainContainer>



    </>
  )
}
