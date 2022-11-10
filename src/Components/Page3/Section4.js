import React from 'react'
import { MainContainer,InnerContainer, MainHeader,Text,Button } from '../Styles/Page3/Section4.styled'

export default function Section4() {
  return (
    <MainContainer>
        <InnerContainer>
            <MainHeader>get unstuck</MainHeader>
            <Text>Build a clearer brand message today.</Text>
            <Button to="/contact">LET'S WORK TOGETHER</Button>
        </InnerContainer>
    </MainContainer>
  )
}