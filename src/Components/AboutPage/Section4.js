import React from 'react';
import {
  MainContainer,
  InnerContainer,
  MainHeader,
  Text,
  Button,
} from '../Styles/AboutPage/Section4.styled';

export const Section4 = () => {
  return (
    <MainContainer>
      <InnerContainer>
        <MainHeader>get unstuck</MainHeader>
        <Text>Build a clearer brand message today.</Text>
        <Button to="/contact">LET`&apos;`S WORK TOGETHER</Button>
      </InnerContainer>
    </MainContainer>
  );
};
