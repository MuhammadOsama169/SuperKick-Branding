import React, { useState } from 'react';
import { BrowserRouter as Route, useNavigate } from 'react-router-dom';
import {
  NavbarContainer,
  InnerContainer,
  OuterContainer,
  Logo,
  NavbarLinkContainer,
  NavbarLink,
  Button,
  HamburgerButton,
  NavbarLinkExtended,
} from './Styles/Navbar.styled';

import LogoImg from '../assets/images/Logo.png';

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
          <Logo to="/">
            <img src={LogoImg} alt="Logo" />
          </Logo>
          <NavbarLinkContainer>
            <NavbarLink to="/who"> WHO WE ARE </NavbarLink>
            <NavbarLink to="/services"> SERVICES </NavbarLink>
            <NavbarLink to="/resources"> RESOURCES </NavbarLink>
            <NavbarLink to="/contact"> LET&apos;S TALK </NavbarLink>
            <HamburgerButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </HamburgerButton>
          </NavbarLinkContainer>
          <Button onClick={navigateToContacts}>LET&apos;S WORK TOGETHER</Button>
        </InnerContainer>

        {extendNavbar && (
          <OuterContainer>
            <NavbarLinkExtended to="/who"> WHO WE ARE </NavbarLinkExtended>
            <NavbarLinkExtended to="/services"> SERVICES </NavbarLinkExtended>
            <NavbarLinkExtended to="/resources"> RESOURCES </NavbarLinkExtended>
            <NavbarLinkExtended to="/contact"> LETS TALK </NavbarLinkExtended>
          </OuterContainer>
        )}
      </NavbarContainer>
    </>
  );
}

export default Navbar;
