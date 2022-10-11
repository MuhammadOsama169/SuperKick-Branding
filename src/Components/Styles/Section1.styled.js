import styled from "styled-components";


export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row ;
    width:100%;
    height:100vh;

    @media (max-width: 320px) {
        display: flex;
        flex-direction: column ;
        height:100vh;
    }

    @media (max-width: 600px) {
        display: flex;
        flex-direction: column ;
        height:100vh;
    }
    @media (max-width: 801px) {
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
    flex-direction: row ;
    padding-left:110px;
    padding-right:99px;
    @media (max-width: 700px) {
        display: flex;
        flex-direction: column ;
        padding-left:0px;
        padding-right:0px;
    }
`;

export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column ;
    margin-right:150px;
    @media (max-width: 700px) {
        display: flex;
        flex-direction: column ; 
        margin-right:0px;
        display: flex;
        justify-content: center;
        align-items: center;
    }   
`;


export const RightContainer = styled.div`
    display: flex;
    justify-content: center;
    width:100%;
    height:auto;
    @media (max-width: 700px) {
        display: flex;
        justify-content: center;
        align-items: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const CoverText = styled.div`
    font-family: 'Work Sans', sans-serif;
    font-size: 24px;
    font-style: regular;
    font-weight: 400;
    line-height: 28.15px;
    color: black;
    @media (max-width: 700px) {
        margin-top: 50px;
        padding: 0px;
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
    @media (max-width: 700px) {
        margin-top: 150px;
        padding-bottom: 0px;
    }

`;

export const Section = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height:100px;
    font-family: 'Work Sans';
    font-style: bold;
    font-weight: 700;
    font-size: 45px;
    line-height: 33px;
    color: #FFCD3D;
    background-color:black;
    padding: 50px; 
    @media (max-width: 700px) {
        margin-top: 50px;
        padding: 0px;
        font-size: 30px;
        height:100px;}

`;