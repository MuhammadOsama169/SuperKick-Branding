import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
    width: 100%;
    height: ${(props) => (props.extendNavbar ? "50vh" : "80px")};
    background-color: #1F1F1F;
    display: flex;
    flex-direction: column;
    
    @media (min-width: 700px) {
      height: 80px;
`;


export const InnerContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.div`
  max-width: 180px;
  height: auto;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
  justify-content: space-between ;
  padding:50px;
`;


export const NavbarLink = styled(Link)`
  font-family: 'Bebas Neue', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: white;
  color: #F5F5F5;
  text-decoration: none;
  padding-left: 20px;
  &:hover {
    color:  #FFCD3D;
    transform: scale(0.98);
  }
  @media (max-width: 700px) {
    display: none;
  }
`;
export const NavbarLinkExtended = styled(Link)`
  font-family: 'Bebas Neue', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: white;
  text-decoration: none;
  padding-top: 20px;
  &:hover {
    color:  #FFCD3D;
    transform: scale(0.98);
  }
`;

export const Button = styled.div`
    font-family: 'Work Sans', sans-serif;
    font-size: 15px;
    line-height: 33px;
    width: 250px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #3D6FFF;
    border-radius: 63px;
    color: #FFCD3D;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  @media (max-width: 700px) {
    display: none;
  }
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);

  }

`;

export const HamburgerButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;
  @media (min-width: 700px) {
    display: none;
  }
`;

export const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  @media (min-width: 700px) {
    display: none;
  }
`;