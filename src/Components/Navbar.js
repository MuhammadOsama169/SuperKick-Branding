import React, { useState } from "react";
import { Spring } from "react-spring";
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
                <Logo ><img src={LogoImg}alt="Logo" /></Logo>
                <NavbarLinkContainer>
                    <NavbarLink to="/"> WHO WE ARE </NavbarLink>
                    <NavbarLink to="/SERVICES"> SERVICES </NavbarLink>
                    <NavbarLink to="/RESOURCES"> RESOURCES </NavbarLink>
                    <NavbarLink to="/LETS TALK"> LETS TALK </NavbarLink>
                    <HamburgerButton 
                        onClick={() => {
                            setExtendNavbar((curr) => !curr);
                         }}>
                        {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
                    </HamburgerButton>
                    </NavbarLinkContainer>
                    <Button>TAKE A BRAND HEALTH QUIZ</Button>
            </InnerContainer>

            <Spring 
                from={{opacity:0}}
                to={{opacity:1}}
            >
                {props=> (
                    <div style={props}>
                        {extendNavbar && (<OuterContainer>
                        <NavbarLinkExtended to="/"> WHO WE ARE </NavbarLinkExtended>
                        <NavbarLinkExtended to="/products"> SERVICES </NavbarLinkExtended>
                        <NavbarLinkExtended to="/contact"> RESOURCES </NavbarLinkExtended>
                        <NavbarLinkExtended to="/about"> LETS TALK </NavbarLinkExtended>
                        </OuterContainer>)}
                    </div>
                )}
            </Spring>


        </NavbarContainer>
    </> 
  )
}

export default Navbar