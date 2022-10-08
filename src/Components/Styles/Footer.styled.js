import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 216px;
    background: #FF005C;
    @media (max-width: 700px) {
        display: flex;
        flex-direction: column ;
        height: auto;
    
    }
`;

export const LeftContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    @media (max-width: 700px) {
        max-width: 200px;
        height: auto;}
`;

export const Logo = styled.div`
  max-width: 300px;
  height: auto;
`;


export const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Work Sans';
    font-style: bold;
    font-weight: 700;
    font-size: 18px;
    padding-left:200px;
    color: #fff;
  ul {
    list-style-type: none;
    padding: 50px;

  }

  ul li {
    margin-bottom: 20px;
    text-transform: uppercase;
    &:hover {
      opacity: 0.9;
      transform: scale(0.98);
    }
    
  }

  p {
    text-align: right;
  }
  
  @media (max-width: 700px) {
    display: none;
    text-align: center;
    font-style: bold;
    font-weight: 500;
    font-size: 18px;
    padding-left:0px;
    ul {
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    p {
      text-align: center;
    }
  }
`
export const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  font-family: 'Bebas Neue', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 29px;
  color: white;
  color: #F5F5F5;
  text-decoration: none;
  padding: 5px;
  &:hover {
    color:  #FFCD3D;
    transform: scale(0.98);
  }

`;
