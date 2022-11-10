import React from 'react'
import { MainContainer,TopContainer,ImageContainer2,CardRight,MainHeader,CoverText,BoxHeader,BoxHeader2,Button, EndContainer,InnerContainer,ImageContainer,ImageContainer3 } from '../../Components/Styles/HomePage/Section2.styled'
import { useNavigate } from 'react-router-dom'

export default function Section2() {
    const navigate=useNavigate();
    const navigateToContacts =() =>{
        navigate('/contact');
    };

  return (
    <>
    <MainContainer>
        <TopContainer>
            <InnerContainer>
                <CardRight>
                    <MainHeader>Why should people choose you over competitors?</MainHeader>
                    <CoverText>If potential customers can’t answer that question, your business can’t grow.</CoverText>
                    <CoverText>We’ll help you define your differentiation point. Then we’ll develop brand messaging to clearly communicate that to potential customers.</CoverText>
                    <CoverText>Click on a service to learn more.</CoverText>
                </CardRight>
            </InnerContainer>
            <InnerContainer>
                <BoxHeader>brand diagnostic</BoxHeader>
                <ImageContainer ></ImageContainer>
            </InnerContainer> 
            <InnerContainer>
                <BoxHeader>messaging Workshop</BoxHeader>
                <ImageContainer2></ImageContainer2>
            </InnerContainer>
            <InnerContainer>
                <BoxHeader2>monthly strategy sessions</BoxHeader2>
                <ImageContainer3></ImageContainer3>
            </InnerContainer>
        </TopContainer>
        <EndContainer>
            <Button onClick={navigateToContacts}
            >LET'S WORK TOGETHER</Button>
        </EndContainer>
    </MainContainer>



    </>
  )
}
