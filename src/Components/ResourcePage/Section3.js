import React from 'react'
import { MainContainer,InnerContainer, MainHeader,Button } from '../../Components/Styles/ResourcePage/Section3.styled'

export default function Section3() {
  return (
    <MainContainer>
        <InnerContainer>
            <MainHeader>Get branding tips and more delivered to your inbox.</MainHeader>
            <Button to="/contact">JOIN THE POSSE</Button>
        </InnerContainer>
    </MainContainer>
  )
}
