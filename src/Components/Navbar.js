import React, { useState } from "react";
import {NavbarContainer,
    InnerContainer,OuterContainer,
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
                <Logo ><img src={LogoImg}alt="Logo" /></Logo>
                <NavbarLinkContainer>
                    <NavbarLink > WHO WE ARE </NavbarLink>
                    <NavbarLink > SERVICES </NavbarLink>
                    <NavbarLink > RESOURCES </NavbarLink>
                    <NavbarLink > LETS TALK </NavbarLink>
                    <HamburgerButton 
                        onClick={() => {
                            setExtendNavbar((curr) => !curr);
                         }}>
                        {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
                    </HamburgerButton>
                    </NavbarLinkContainer>
                    <Button 
                        type="button"
                         href="/contact"
                    >
                        LET'S WORK TOGETHER
                    </Button>
            </InnerContainer>

            {extendNavbar && (<OuterContainer>
            <NavbarLinkExtended > WHO WE ARE </NavbarLinkExtended>
            <NavbarLinkExtended > SERVICES </NavbarLinkExtended>
            <NavbarLinkExtended > RESOURCES </NavbarLinkExtended>
            <NavbarLinkExtended > LETS TALK </NavbarLinkExtended>
            </OuterContainer>)}

        </NavbarContainer>
    </> 
  )
}

export default Navbar