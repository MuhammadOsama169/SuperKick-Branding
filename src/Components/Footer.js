import React from 'react'
import { LeftContainer,MainContainer, StyledFooter,NavbarLinkExtended, OuterContainer} from './Styles/Footer.styled'
import LogoImg from "../assets/images/Logo-black.png";
import { Logo } from './Styles/Banner.styled';

export default function Footer() {
  return (
    <MainContainer>
        <LeftContainer>
            <Logo ><img src={LogoImg}alt="Logo" /></Logo>
        </LeftContainer>
        <OuterContainer>
            <NavbarLinkExtended to="/"> WHO WE ARE </NavbarLinkExtended>
            <NavbarLinkExtended to="/products"> SERVICES </NavbarLinkExtended>
            <NavbarLinkExtended to="/contact"> linkedin </NavbarLinkExtended>
            <NavbarLinkExtended to="/about"> LETS TALK </NavbarLinkExtended>
            <NavbarLinkExtended to="/"> Videos </NavbarLinkExtended>
            <NavbarLinkExtended to="/products"> Podcast </NavbarLinkExtended>
            <NavbarLinkExtended to="/contact"> blog </NavbarLinkExtended>
            <NavbarLinkExtended to="/about"> bookshop </NavbarLinkExtended> 
        </OuterContainer>
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
    </MainContainer>
  )
}

