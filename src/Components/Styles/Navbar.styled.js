import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
    width: 100%;
    height:80px;
    background-color: #1F1F1F;
    display: flex;
    flex-direction: column;
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
    margin-left: 200px; 
     

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
    &:hover {
        opacity: 0.9;
        transform: scale(0.98);
    }

`;





export const OuterContainer = styled.div`

`;