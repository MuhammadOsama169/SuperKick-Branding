import React from 'react';
import {
  RightContainer,
  LeftContainer,
  MainContainer,
  InnerContainer,
  Button,
  CoverText,
  ImageContainer,
} from '../Styles/HomePage/Cover.styled';
import Img from '../../assets/images/logo-blend-in.png';

export const Cover = () => {
  return (
    <MainContainer>
      <InnerContainer>
        <LeftContainer>
          <img src={Img} alt="img" />
          <CoverText>
            We design clear brand messaging to help your business stand out
          </CoverText>
          <Button to="/contact">LET&apos;S WORK TOGETHER </Button>
        </LeftContainer>

        <RightContainer>
          <ImageContainer></ImageContainer>
        </RightContainer>
      </InnerContainer>
    </MainContainer>
  );
};
