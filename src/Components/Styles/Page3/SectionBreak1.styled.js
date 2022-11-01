
import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100%;
    @media (max-width: 700px) {
        display: flex;
        flex-direction: column ;
        height: auto;
    }

`;
export const InnerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin:auto;
    padding-top: 27px; 
    padding-bottom: 27px; 
`;

export const MainHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Bebas Neue', cursive;
    font-style: normal;
    font-weight: 500;
    font-size: 55px;
    line-height: 1.1em;
    text-transform: uppercase;
    color: #FF005C;

    @media screen and (max-width: 900px) {
        font-weight: 500;
        font-size: 45px;
        padding: 10px; 
    }

`;
export const Text = styled.div`
    margin-top:20px;
    margin-bottom:20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Work Sans', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 33px;
    text-align: center;
    color: #000000;
    word-wrap: break-word;

    @media (max-width: 700px) {
        padding-left: 10px;
        padding-right: 10px;  
        font-size: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

`;
