import React from 'react';
import {
  MainContainer,
  ImageContainer,
  RightContainer,
  BoxHeader,
  CoverText,
  Button,
  InnerContainer,
  LogoImageContainer,
} from '../Styles/HomePage/Banner.styled';

export const Banner = () => {
  return (
    <MainContainer>
      <InnerContainer>
        <ImageContainer></ImageContainer>
        <RightContainer>
          <BoxHeader>want to go your own way?</BoxHeader>
          <CoverText>
            No problem. Learn about branding, messaging, and more through our
            Brand Outlaw content.
          </CoverText>
          <Button to="/contact">
            <LogoImageContainer></LogoImageContainer>
            Check out Brand Outlaw
          </Button>
        </RightContainer>
      </InnerContainer>
    </MainContainer>
  );
};
