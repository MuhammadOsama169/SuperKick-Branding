import styled from "styled-components";


export const MainContainer = styled.div`
    display: flex;
        @media (max-width: 700px) {
            display: flex;
            flex-direction: column ;
        }
`;

export const LeftContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column ;
    flex: 60%;
    align-items: flex-start;
    padding-left:190px;
    padding-right:120px;
    @media (max-width: 700px) {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left:10px;
        padding-right:10px;
    }
`;

export const RightContainer = styled.div`
    flex: 40%;
    padding: 10px; 
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
    justify-content: center;
    align-items: flex-start;
    font-family: 'Work Sans';
    font-style: bold;
    font-weight: 700;
    font-size: 45px;
    line-height: 33px;
    color: #FF005C;
    padding-bottom: 20px; 
    @media (max-width: 700px) {
        margin-top: 50px;
        padding: 0px;}

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