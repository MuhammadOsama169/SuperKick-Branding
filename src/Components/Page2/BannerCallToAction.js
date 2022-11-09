import React from 'react'
import { MainContainer,InnerContainer,BoxHeader,Button,ButtonContainer } from '../../Components/Styles/Page2/BannerCallToAction.styled'


export default function BannerCallToAction() {
  return (
    <MainContainer>
      <InnerContainer>
        <BoxHeader>QUESTIONS?</BoxHeader>
        <ButtonContainer>
          <Button> CONTACT SUPERKICK</Button>
        </ButtonContainer>
      </InnerContainer>
    </MainContainer>
  )
}
