import React, { useState } from "react";
import {NavbarContainer,
    InnerContainer,OuterContainer,
    LeftContainer,
    RightContainer,
    Logo,
    NavbarLinkContainer,
    NavbarLink,
    Button,
    HamburgerButton,
    NavbarLinkExtended} from './Styles/Navbar.styled';
    
import LogoImg from "../assets/images/Logo.png";


function Navbar() {
    const [extendNavbar, setExtendNavbar] = useState(false);
  return (
    <>
        <NavbarContainer extendNavbar={extendNavbar}>
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
                        <HamburgerButton 
                            onClick={() => {
                                setExtendNavbar((curr) => !curr);
                            }}>
                            {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
                        </HamburgerButton>
                    </NavbarLinkContainer>
                    <Button>TAKE A BRAND HEALTH QUIZ</Button>
                </RightContainer>
            </InnerContainer>

            {extendNavbar && (<OuterContainer>
                    <NavbarLinkExtended to="/"> WHO WE ARE </NavbarLinkExtended>
                    <NavbarLinkExtended to="/products"> SERVICES </NavbarLinkExtended>
                    <NavbarLinkExtended to="/contact"> RESOURCES </NavbarLinkExtended>
                    <NavbarLinkExtended to="/about"> LETS TALK </NavbarLinkExtended>
            </OuterContainer>)}

        </NavbarContainer>
    </>
  )
}

export default Navbar