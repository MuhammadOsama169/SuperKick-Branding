import styled from "styled-components";
import ImgCover from "../../../assets/images/Nick-and-Matt.jpeg";
import { Link } from "react-router-dom";

export const MainContainer = styled.section`
    width:100%;

    @media screen and (max-width: 900px) {
        display: flex;
        flex-direction: column ;
        height:auto;
    }
`;
export const InnerContainer = styled.div`
    margin:auto;
    padding:20px;
    max-width:1088px;
    flex-direction: row;
    display: flex;
    justify-content: center;
    align-items: center;

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
export const LeftContainer = styled.div`
    width: 80%;
    height: auto;

    @media screen and (max-width: 900px) {
        padding-top:20px;
    }
`;
export const RightContainer = styled.div`

    width: 30%;
    height: auto;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: space-between;

    @media screen and (max-width: 900px) {
 
    }
`;
export const TextContainer = styled.div`
margin-left:10px;
margin-right:60px;
padding:5px;

@media screen and (max-width: 1025px) {
    margin-left:50px;
    margin-right:50px;
}
@media screen and (max-width: 409px) {
    margin-left:10px;
    margin-right:10px;
}


`;
export const CoverText = styled.div`
font-family: 'Work Sans', sans-serif;
    font-style: regular;
    font-weight: 500;
    color: black;
    font-size: 22px;
    line-height: 1.5em;

    padding-bottom:20px;

    @media screen and (max-width: 569px) {
        font-size: 18px;
    }
    
`;
export const SubText = styled.div`

font-family: 'Work Sans', sans-serif;
    font-style: regular;
    font-weight: 400;
    font-size: 13px;
    color: #666;
    display:flex;
    text-align:center;
    padding-top:10px;

    @media screen and (max-width: 569px) {
        font-size: 13px;
    }
`;
export const BoldTextPink = styled.div`

font-family: 'Bebas Neue', cursive;
    font-style: regular;
    font-weight: 500;
    font-size: 40px;
    line-height: 1.1em;
    color: #FF005C;
    display:flex;
    text-align:center;
    padding-top:10px;

    @media screen and (max-width: 569px) {
        font-size: 30px;
    }
    @media screen and (max-width: 450px) {
        font-size: 25px;
    }
`;
export const BoldText = styled.div`

font-family: 'Work Sans', sans-serif;
    font-style: regular;
    font-weight: 650;
    font-size: 27px;
    color: black;
    display:flex;
    text-align:center;
    word-wrap: break-word;
    padding-top:10px;
    padding-bottom:10px;
    @media screen and (max-width: 569px) {
        font-size: 15px;
        word-wrap: normal;
    }
`;
export const ImageContainer = styled.div`
    background-image: url(${ImgCover});
    background-size:contain;
    background-repeat: no-repeat;
    width: 400px;
    height: 380px;
    border-radius: 10px;

    @media screen and (max-width: 900px) {
        width:350px ;
        height: 350px;
    }

`;
export const Button = styled(Link)`

    width: 350px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #3D6FFF;
    border-radius: 63px;
    font-family: 'Work Sans', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    color: #FFCD3D;
    text-decoration:none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    cursor: pointer;

    @media screen and (max-width: 900px) {
        margin-top: 10px;
        padding: 0px;
        font-size: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 250px;
        height: 40px;
        text-align:center;
    }
    &:hover {
        opacity: 0.9;
        transform: scale(0.98);
      }
`;