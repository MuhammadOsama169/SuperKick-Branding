import styled from "styled-components";
import Img1 from "../../../assets/images/Mascot02.png";
import Img2 from "../../../assets/images/Lockup_Black.png";
import { Link } from "react-router-dom";

export const MainContainer = styled.div` 
    width: 100%;
    margin:100px auto 100px auto;
    height: 200px;
    background: #FFCD3D;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column ;
    @media screen and (max-width: 900px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column ;
        height: 500px;
    }
`;

export const ImageContainer = styled.div`

    background-image: url(${Img1});
    background-size:contain;
    width: 350px;
    height: 350px;
    background-repeat: no-repeat;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    @media screen and (max-width: 900px) {
        width: 300px;
        height: 280px;
        display: flex;
        flex-direction: column ;
        justify-content: center;
        align-items: center;
    }
    
`;

export const RightContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column ;
    @media screen and (max-width: 900px) {
        display: flex;
        flex-direction: column ;
        justify-content: center;
        align-items: center;

    }
`;

export const BoxHeader = styled.div`
    font-family: 'Bebas Neue', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    line-height: 77px;
    text-transform: uppercase;
    color: #FFCD3D;

    @media screen and (max-width: 1015px) {
        font-size: 48px;
        margin-top: 0.5%;
        padding: 0px;
    }
    @media screen and (max-width: 900px) {
        font-size: 44px;
        margin-top: 2%;
        padding: 0px;
    }
    @media screen and (max-width: 600px) {
        font-size: 34px;
        margin-top: 2%;
        padding: 0px;
    }
`;

export const CoverText = styled.div`
    font-family: 'Work Sans', sans-serif;
    font-size: 20px;
    font-style: regular;
    line-height: 28.15px;
    color: white;
    padding-top:1%;
    text-align: center;

    @media screen and (max-width: 1015px) {
        font-size: 18px;
        font-style: regular;
        font-weight: 200;
        line-height: 28.15px;
        display: flex;
        flex-direction: column ;
        justify-content: center;
        align-items: center;
        padding-top:1%;
    }

    
`;

export const Button = styled(Link)`
    font-family: 'Work Sans', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    margin-top:3%;
    width: 400px;
    height: 60px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F5F5F5;
    border-radius: 47.5px;
    text-transform: uppercase;
    color: #FF005C;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    border: 1px solid #FF005C;
    text-decoration:none;

    @media screen and (max-width: 900px) {
        font-size: 15px;
        display: flex;
        justify-content: center;
        width: 300px;
        height: 60px;
    }
    @media screen and (max-width: 500px) {
        font-size: 13px;
        display: flex;
        justify-content: center;
        width: 300px;
        height: 60px;
    }
    &:hover {
        opacity: 0.9;
        transform: scale(0.98);
      }
    
`;
export const InnerContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr ;
    grid-gap: 10px;
    margin-left:12%;
    margin-right:12%;
    

    @media screen and (max-width: 900px) {
        display: flex;
        flex-direction: column ;
        justify-content: center;
        align-items: center;
        grid-gap: 5px;
        grid-template-rows: repeat(2, 350px);   
    }
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
    color: black;
  ul {
    list-style-type: none;
    padding: 10px;
  }

  ul li {
    margin-bottom: 20px;
    text-transform: uppercase;
    &:hover {
    color: #FF005C;
    }
    
  }

  p {
    text-align: right;
  }
  @media screen and (max-width: 900px) {

    text-align: center;
    font-style: bold;
    font-weight: 700;
    font-size: 18px;
    padding-left:0px;
    padding: 0
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