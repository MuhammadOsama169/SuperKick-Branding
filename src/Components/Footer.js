import React from 'react';
import { SocialIcons } from './SocialIcons';
import {
  Container,
  MainContainer,
  RContainer,
  LContainer,
  NavbarLinkExtended,
  OuterContainer,
  ImageContainer,
  VisibleContainer,
} from './Styles/Footer.styled';

export const Footer = () => {
  return (
    <MainContainer>
      <Container>
        <ImageContainer></ImageContainer>
        <SocialIcons />
      </Container>
      <VisibleContainer>
        <RContainer>
          <NavbarLinkExtended to="/who"> WHO WE ARE </NavbarLinkExtended>
          <NavbarLinkExtended to="/services"> SERVICES </NavbarLinkExtended>
          <NavbarLinkExtended to="/resources"> RESOURCES </NavbarLinkExtended>
          <NavbarLinkExtended to="/contact"> LETS TALK </NavbarLinkExtended>
        </RContainer>
        <LContainer>
          <NavbarLinkExtended to="https://thebrandoutlaw.com/videos/">
            VIDEOS
          </NavbarLinkExtended>
          <NavbarLinkExtended to="https://thebrandoutlaw.com/podcast/">
            PODCAST
          </NavbarLinkExtended>
          <NavbarLinkExtended to="https://bookshop.org/shop/superkickbrand">
            BOOKSHOP
          </NavbarLinkExtended>
        </LContainer>
      </VisibleContainer>

      <OuterContainer>
        <NavbarLinkExtended to="/who"> WHO WE ARE </NavbarLinkExtended>
        <NavbarLinkExtended to="/services"> SERVICES </NavbarLinkExtended>
        <NavbarLinkExtended to="/contact"> LETS TALK </NavbarLinkExtended>
        <NavbarLinkExtended to="https://thebrandoutlaw.com/videos/">
          VIDEOS
        </NavbarLinkExtended>
        <NavbarLinkExtended to="https://thebrandoutlaw.com/podcast/">
          PODCAST
        </NavbarLinkExtended>
        <NavbarLinkExtended to="https://bookshop.org/shop/superkickbrand">
          BOOKSHOP
        </NavbarLinkExtended>
      </OuterContainer>
    </MainContainer>
  );
};
