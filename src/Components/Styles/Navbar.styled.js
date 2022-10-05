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
`;
export const LeftContainer = styled.div`
    display: flex;
    align-items: center;
    padding-left: 50px;

`;
export const Logo = styled.div`
  margin: 10px;
  max-width: 180px;
  height: auto;
`;
export const RightContainer = styled.div`
    flex: 70%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 5%;
`;
export const NavbarLinkContainer = styled.div`
  display: flex;
  justify-content: space-between ;
  padding:50px;
`;


export const NavbarLink = styled(Link)`

  color: white;
  font-family: 'Bebas+Neue';
  font-style: normal;
  font-weight: 20;
  font-size: 20px;
  line-height: 24px;
  color: #F5F5F5;
  text-decoration: none;
  margin-left: 20px;
  @media (max-width: 700px) {
    display: none;
  }
`;
export const NavbarLinkExtended = styled(Link)`

  color: white;
  font-family: 'Bebas+Neue';
  font-style: normal;
  font-weight: 20;
  font-size: 20px;
  line-height: 24px;
  color: #F5F5F5;
  text-decoration: none;
  padding: 5px;
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);

  }
`;

export const Button = styled.div`
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