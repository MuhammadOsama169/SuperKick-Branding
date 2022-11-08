import styled from "styled-components";
import ImgCover from "../../../assets/images/fistbump-3-1.png";


export const MainContainer = styled.div` 
    display:flex;
    width:100%;
    height:90vh;
    margin:auto;

    @media screen and (max-width:900px) {
        height:50vh;
    }
    @media screen and (max-width:600px) {
        height:40vh;
    }
`;

export const TopContainer = styled.div`
    position: absolute;
    width:100%;
    padding-top:60px;
    margin:auto;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-item: center;
text-align:center;

    @media screen and (max-width: 900px) {
        height:25vh;
        display: flex;
        padding-top:5px;

    }
`;
export const ImageContainer = styled.div`
    background-image: url(${ImgCover});
    background-size: 100%;
    background-position: center bottom 0px;
    width:100%;
    height: auto;
    background-repeat: no-repeat;
    background-color: #FF005C;


    @media screen and (max-width: 900px) {
        background-size: contain;
        display: flex;
        align-items: flex-start;

    }
    @media screen and (max-width: 650px) {
        background-size: contain;
        display: flex;
        align-items: flex-start;

    }
    
`;

export const HeaderText = styled.div`
    font-family: 'Bebas Neue', cursive;
    font-style: normal;
    font-weight: 500;
    font-size: 70px;
    line-height: 1.1em;;
    color: #FFCD3D;
    text-transform: uppercase;

    @media screen and (max-width: 900px) {
        font-size: 64px;
    }
    @media screen and (max-width: 490px) {
        font-size: 44px;
    }
`;

export const Text = styled.div`
    font-family: 'Work Sans', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 1.1em;;
    color: #FFFFFF;

    @media screen and (max-width: 900px) {
        font-size: 28px;
    }
    @media screen and (max-width: 490px) {
        font-size: 25px;
    }
`;
