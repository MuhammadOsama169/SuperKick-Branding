import styled from "styled-components";
import ImgCover from "../../../assets/images/Dude-1.png";

export const MainContainer = styled.div` 
    display:flex;
    width:100%;
    height:65vh;
    margin:auto;
    background-color: #FF005C;

    @media screen and (max-width:800px) {
        height:85vh;
    }
`;

export const TopContainer = styled.div`
    position: absolute;
    left: 118px;
    top: 177px;
    padding:2%;
    
    @media screen and (max-width:900px) {
        display: flex;
        flex-direction: column ;
        left: 80px;
        top: 80px;
        
    }
    @media screen and (max-width:490px) {
        left: auto;
        top: 10%;
    }
`;
export const ImageContainer = styled.div`
    background-image: url(${ImgCover});
    background-size: auto 100%;
    background-position: right -50px bottom 0px;
    width:100%;
    height: auto;
    background-repeat: no-repeat;
    background-color: #FF005C;
    @media screen and (max-width: 900px) {
        background-size: auto 80%;
        height: auto;
        display: flex;
        align-items: flex-end;

    }
    @media screen and (max-width: 650px) {
        background-size: auto 50%;
        height: auto;
        display: flex;
        align-items: flex-end;

    }
    @media screen and (max-width: 500px) {
        background-size: auto 50%;
        height: auto;
        display: flex;
        align-items: flex-end;

    }
    
`;

export const CoverText = styled.div`

    font-family: 'Work Sans', sans-serif;
    font-style: regular;
    font-weight: 200;
    font-size: 28px;
    line-height: 33px;
    color: #F5F5F5;

    @media screen and (max-width: 900px) {

    }
    
`;
export const HeaderText = styled.div`
    font-family: 'Bebas Neue', cursive;
    font-style: normal;
    font-weight: 700;
    font-size: 70px;
    color: #FFCD3D;
    text-transform: uppercase;

    @media screen and (max-width: 900px) {

    }
`;




