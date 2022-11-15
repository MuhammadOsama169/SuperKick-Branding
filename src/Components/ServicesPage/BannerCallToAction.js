import React from 'react'
import { MainContainer,InnerContainer,BoxHeader,Button,ButtonContainer } from '../../Components/Styles/ServicesPage/BannerCallToAction.styled'


export default function BannerCallToAction() {
  return (
    <MainContainer>
      <InnerContainer>
        <BoxHeader>QUESTIONS?</BoxHeader>
        <ButtonContainer>
          <Button to="/contact"> CONTACT SUPERKICK</Button>
        </ButtonContainer>
      </InnerContainer>
    </MainContainer>
  )
}
