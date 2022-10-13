import styled from "styled-components";
import Img1 from "../../assets/images/Mascot02.png";
import Img2 from "../../assets/images/Lockup_Black.png";


export const MainContainer = styled.div` 
    width: 100%;
    margin:auto;
    height: auto;
    background: #1F1F1F;
    @media screen and (max-width: 900px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column ;
    }
`;

export const ImageContainer = styled.div`
    background-image: url(${Img1});
    background-size:contain;
    width: 317px;
    height: 307px;
    background-repeat: no-repeat;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    @media screen and (max-width: 900px) {
        width: 200px;
        height: 200px;
        display: flex;
        flex-direction: column ;
        justify-content: center;
        align-items: center;
    }
`;
export const LogoImageContainer = styled.div`
    background-image: url(${Img2});
    background-size:contain;
    background-repeat: no-repeat;
    width: 81px;
    height: 81px;
    @media screen and (max-width: 900px) {
        width: 71px;
        height: 71px;
    }
`;
export const RightContainer = styled.div`
    display: flex;
    flex-direction: column ;
    justify-content: center;
    align-items: center;
    margin:auto;
    @media screen and (max-width: 900px) {
        display: flex;
        flex-direction: column ;
        justify-content: center;
        align-items: center;
        padding:5%;
    }
`;

export const BoxHeader = styled.div`
    font-family: 'Bebas Neue', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 77px;
    text-transform: uppercase;
    color: #FFCD3D;

    @media (max-width: 700px) {
        margin-top: 50px;
        padding: 0px;
    }
    @media screen and (max-width: 900px) {
        font-size: 54px;
        margin-top: 2%;
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
    font-size: 24px;
    font-style: regular;
    font-weight: 200;
    line-height: 28.15px;
    color: #F5F5F5;
    padding-top:5%;

    @media screen and (max-width: 900px) {
        font-size: 20px;
        font-style: regular;
        font-weight: 200;
        line-height: 28.15px;
        display: flex;
        flex-direction: column ;
        justify-content: center;
        align-items: center;
    }

    
`;

export const Button = styled.div`
    font-family: 'Work Sans', sans-serif;
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    margin-top:50px;
    width: 400px;
    height: 60px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F5F5F5;
    border-radius: 47.5px;
    text-transform: uppercase;
    font-size: 20px;
    color: #FF005C;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    cursor: pointer;

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
    grid-template-columns: 1fr 1fr ;
    grid-gap: 10px;
    margin-left:12%;
    margin-right:12%;

    @media screen and (max-width: 900px) {
        display: flex;
        flex-direction: column ;
        justify-content: center;
        align-items: center;
        grid-gap: 30px;
        grid-template-columns: repeat(2,350px) ;
        grid-template-rows: repeat(2, 350px);   
    }
`;