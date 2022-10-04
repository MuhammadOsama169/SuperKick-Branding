import React from 'react'
import {NavbarContainer,
    InnerContainer,OuterContainer,
    LeftContainer,
    RightContainer,
    Logo,
    NavbarLinkContainer,
    NavbarLink,
    Button} from './Styles/Navbar.styled';
import LogoImg from "../assets/images/Logo.png";


function Navbar() {
  return (
    <>
        <NavbarContainer>
            <InnerContainer>
                <LeftContainer>
                    <Logo ><img src={LogoImg}alt="Logo" /></Logo>
                </LeftContainer>
                <RightContainer>
                    <NavbarLinkContainer>
                        <NavbarLink to="/"> WHO WE ARE </NavbarLink>
                        <NavbarLink to="/products"> SERVICES </NavbarLink>
                        <NavbarLink to="/contact"> RESOURCES </NavbarLink>
                        <NavbarLink to="/about"> LETS TALK </NavbarLink>
                    </NavbarLinkContainer>
                    <Button>TAKE A BRAND HEALTH QUIZ</Button>
                </RightContainer>
            </InnerContainer>
            <OuterContainer></OuterContainer>
        </NavbarContainer>
    </>
  )
}

export default Navbar