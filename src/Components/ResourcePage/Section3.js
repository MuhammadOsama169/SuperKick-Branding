import React from 'react';
import {
  MainContainer,
  InnerContainer,
  MainHeader,
  Button,
} from '../Styles/ResourcePage/Section3.styled';

export const Section3 = () => {
  return (
    <MainContainer>
      <InnerContainer>
        <MainHeader>
          Get branding tips and more delivered to your inbox.
        </MainHeader>
        <Button to="/contact">JOIN THE POSSE</Button>
      </InnerContainer>
    </MainContainer>
  );
};
