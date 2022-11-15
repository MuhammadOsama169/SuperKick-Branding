import React from 'react'
import {CoverText2,InnerContainer,CoverText3, LeftContainer, RightContainer,HeaderText2,Container } from '../../Components/Styles/ServicesPage/CoverBottom2.styled'



export default function CoverBottom2() {
  return (
    <>
    <Container>
      <InnerContainer>
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
      </InnerContainer>

    </Container>
    </>
  )
}