import React from 'react'
import { TopContainer,MainContainer,CoverText,HeaderText,CoverText2,CoverText3, LeftContainer, RightContainer,HeaderText2,Container } from './Styles/Cover2.styled'



export default function Cover2() {
  return (
    <>
    <MainContainer>
        <TopContainer>
            <HeaderText>Superkick services</HeaderText>
            <CoverText>Plant your flag. Lead your industry.</CoverText>
        </TopContainer>
    </MainContainer>
    <Container>
        <LeftContainer>        
            <CoverText2>
            You have a killer product, one you know the public will love.
            </CoverText2>
            <HeaderText2>So what?</HeaderText2>
        </LeftContainer>
        <RightContainer>
            <CoverText3>
            If you don't know what only you do better than everyone else, how will potential customers know? Superkick helps brands build clarity so they can top their market.
            </CoverText3>
        </RightContainer>
    </Container>
    </>
  )
}