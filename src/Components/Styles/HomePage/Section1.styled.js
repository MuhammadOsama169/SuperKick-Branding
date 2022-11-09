import styled from "styled-components";
import ImgCover from "../../../assets/images/women-walking.png";

export const ImageContainer = styled.div`
    background-image: url(${ImgCover});
    background-size:contain;
    background-repeat: no-repeat;
    width: 450px;
    height: 450px;
    @media screen and (max-width: 900px) {
        width:350px ;
        height: 350px;
    }
    
`;
export const MainContainer = styled.div`
    width:100%;
    height:70vh;
    align-items: center;
    @media screen and (max-width: 900px) {
        display: flex;
        flex-direction: column ;
        height:100vh;
    }

`;
export const InnerContainer = styled.div`
    margin:auto;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width:1024px;
    padding-top:3%;
    padding-bottom:5%;
    @media screen and (max-width: 900px) {
        padding-top:0.1%;
        padding-bottom:0.1%;
        display: flex;
        flex-direction: column ;
        padding-left:0px;
        padding-right:0px;
    }
`;
export const OuterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFCD3D;
    background-color:black;
    padding: 50px;
    width:100%;
    height:auto;
`;

export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column ;
    margin-right:150px;
    @media screen and  (max-width: 900px) {
        display: flex;
        flex-direction: column ; 
        margin:0 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }   
`;


export const RightContainer = styled.div`
    display: flex;
    justify-content: center;
    width:200%;
    height:auto;
    
    @media screen and (max-width: 900px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column ; 
        width:100%;
        height:auto;
    }
`;

export const CoverText = styled.div`
    font-family: 'Work Sans', sans-serif;
    font-size: 20px;
    font-style: regular;
    font-weight: 10px;
    line-height: 28.15px;
    color: black;
    @media screen and (max-width: 900px) {
        padding: 10px;
        font-size: 22px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column ; 
    ;
    @media screen and (max-width: 500px) {
        padding: 10px;
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column ; 
    ;

`;
export const MainHeader = styled.div`
    display: flex;
    font-family: 'Bebas Neue', cursive;
    align-items: flex-start;
    font-style: normal;
    font-weight: 500;
    font-size: 64px;
    line-height: 64px;
    color: #FF005C;
    padding-bottom: 20px;
    @media screen and (max-width: 900px) {
        padding: 1%;
        font-size: 64px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column ; 
    ;
    @media screen and (max-width: 500px) {
        padding: 10px;
        font-size: 54px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column ; 
    ;

`;

export const Section = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Work Sans';
    font-style: bold;
    font-weight: 700;
    font-size: 45px;
    line-height: 33px;
    @media (max-width: 900px) {
        font-size: 30px;
    } 
    @media screen and (max-width: 500px) {
        font-size: 24px;
    }
    @media screen and (max-width: 400px) {
        font-size: 20px;
    }

`;
