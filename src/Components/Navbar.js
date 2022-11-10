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
import { BrowserRouter as  Route } from 'react-router-dom'
import {useNavigate} from 'react-router-dom';



function Navbar() {
    const [extendNavbar, setExtendNavbar] = useState(false);

    const navigate = useNavigate();
    const navigateToContacts = () => {
      navigate('/contact');
      };

   
    
  return (

    <>
        <NavbarContainer extendNavbar={extendNavbar}>
            <InnerContainer>
                <Logo to="/" ><img src={LogoImg}alt="Logo" /></Logo>
                <NavbarLinkContainer>
                    <NavbarLink to="/who" > WHO WE ARE </NavbarLink>
                    <NavbarLink to="/services"> SERVICES </NavbarLink>
                    <NavbarLink > RESOURCES </NavbarLink>
                    <NavbarLink to="/contact" > LETS TALK </NavbarLink>
                    <HamburgerButton 
                        onClick={() => {
                            setExtendNavbar((curr) => !curr);
                         }}>
                        {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
                    </HamburgerButton>
                    </NavbarLinkContainer>
                    <Button onClick={navigateToContacts} >
                        LET'S WORK TOGETHER
                    </Button>
            </InnerContainer>

            {extendNavbar && (<OuterContainer>
            <NavbarLinkExtended to="/who"> WHO WE ARE </NavbarLinkExtended>
            <NavbarLinkExtended to="/services"> SERVICES </NavbarLinkExtended>
            <NavbarLinkExtended > RESOURCES </NavbarLinkExtended>
            <NavbarLinkExtended to="/contact"> LETS TALK </NavbarLinkExtended>
            </OuterContainer>)}

        </NavbarContainer>
    </> 
  )
}

export default Navbar