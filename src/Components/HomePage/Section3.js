import React from 'react';
import {
  MainContainer,
  MainHeader,
  Text,
  Button,
} from '../Styles/HomePage/Section3.styled';

export const Section3 = () => {
  return (
    <MainContainer>
      <MainHeader>get unstuck</MainHeader>
      <Text>Build a clearer brand message today.</Text>
      <Button to="contact">LET&apos;S WORK TOGETHER</Button>
    </MainContainer>
  );
};
