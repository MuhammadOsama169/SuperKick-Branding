import styled from "styled-components";


export const MainContainer = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
        @media (max-width: 700px) {
            display: flex;
            flex-direction: column ;}

`;

export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column ;
    flex: 60%;
    padding: 10px;
    align-items: center;
    @media (max-width: 700px) {
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }


`;

export const RightContainer = styled.div`
    flex: 40%;
    padding: 10px; 
`;

export const CoverText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Work Sans';
    font-style: medium;
    font-weight: 500;
    font-size: 28px;
    line-height: 33px;
    color: black;
    padding: 20px; 
    margin-right: 150px;
    margin-left: 150px;
    @media (max-width: 700px) {
        margin-top: 50px;
        padding: 0px;
        margin-right: 10px;
        margin-left: 10px;

    ;

`;
export const MainHeader = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Work Sans';
    font-style: bold;
    font-weight: 700;
    font-size: 45px;
    line-height: 33px;
    color: #FF005C;
    padding: 50px; 
    @media (max-width: 700px) {
        margin-top: 50px;
        padding: 0px;

    ;

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
        height:100px;

    ;

`;