import React from 'react';
import {
  MainContainer,
  ImageContainer,
  InnerContainer,
  StyledFooter,
} from '../Styles/ResourcePage/Banner.styled';

function Banner() {
  return (
    <MainContainer>
      <InnerContainer>
        <ImageContainer></ImageContainer>
        <StyledFooter>
          <ul>
            <li>who we are</li>
            <li>services</li>
            <li>Let’s talk</li>
            <li>linkedin</li>
          </ul>
          <ul>
            <li>Videos</li>
            <li>Podcast</li>
            <li>blog</li>
            <li>bookshop</li>
          </ul>
        </StyledFooter>
      </InnerContainer>
    </MainContainer>
  );
}
export default Banner;
