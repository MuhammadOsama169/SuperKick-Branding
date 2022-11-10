import React from 'react'
import { LeftContainer,MainContainer, StyledFooter,NavbarLinkExtended, OuterContainer,ImageContainer} from './Styles/Footer.styled'


export default function Footer() {
  return (
    <MainContainer>
        <LeftContainer>
            <ImageContainer ></ImageContainer>
        </LeftContainer>
        <OuterContainer>
            <NavbarLinkExtended to="/contact"> WHO WE ARE </NavbarLinkExtended>
            <NavbarLinkExtended to="/services"> SERVICES </NavbarLinkExtended>
            <NavbarLinkExtended to="/linkedin"> linkedin </NavbarLinkExtended>
            <NavbarLinkExtended to="/LETS TALK"> LETS TALK </NavbarLinkExtended>
            <NavbarLinkExtended to="/Videos"> Videos </NavbarLinkExtended>
            <NavbarLinkExtended to="/Podcast"> Podcast </NavbarLinkExtended>
            <NavbarLinkExtended to="/blog"> blog </NavbarLinkExtended>
            <NavbarLinkExtended to="/bookshop"> bookshop </NavbarLinkExtended> 
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

