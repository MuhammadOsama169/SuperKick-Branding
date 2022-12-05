import React from 'react';
import {
  MainContainer,
  TopContainer,
  ImageContainer,
  CoverText,
  HeaderText,
} from '../Styles/ServicesPage/Cover2.styled';

export const Cover2 = () => {
  return (
    <MainContainer>
      <ImageContainer>
        <TopContainer>
          <HeaderText>Superkick services</HeaderText>
          <CoverText>Plant your flag. Lead your industry.</CoverText>
        </TopContainer>
      </ImageContainer>
    </MainContainer>
  );
};
