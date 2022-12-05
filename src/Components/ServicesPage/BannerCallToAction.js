import React from 'react';
import {
  MainContainer,
  InnerContainer,
  BoxHeader,
  Button,
  ButtonContainer,
} from '../Styles/ServicesPage/BannerCallToAction.styled';

export const BannerCallToAction = () => {
  return (
    <MainContainer>
      <InnerContainer>
        <BoxHeader>QUESTIONS?</BoxHeader>
        <ButtonContainer>
          <Button to="/contact"> CONTACT SUPERKICK</Button>
        </ButtonContainer>
      </InnerContainer>
    </MainContainer>
  );
};
