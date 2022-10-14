import styled from "styled-components";

export const MainContainer = styled.div` 
    background-color: #FF005C;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row ;
    width:100%;

    @media screen and (max-width:700px) {
        display: flex;
        flex-direction: column ;
        padding:2%;
    }

`;

export const InnerContainer = styled.div`
    margin:auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row ;
    @media screen and (max-width: 700px) {
        display: flex;
        flex-direction: column ;
`;
export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column ;
    align-items: center;
    justify-content: center;
`;

export const RightContainer = styled.div`

`;
export const CoverText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Work Sans', sans-serif;
    font-style: regular;
    font-weight: 200;
    font-size: 28px;
    line-height: 33px;
    color: #F5F5F5;
    @media screen and (max-width: 900px) {
        margin-top:20px;
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const Button = styled.div`
    margin-top:50px;
    width: 300px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #3D6FFF;
    border-radius: 63px;
    font-family: 'Work Sans', sans-serif;
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    color: #FFCD3D;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    &:hover {
        opacity: 0.9;
        transform: scale(0.98);
    }
    @media screen and (max-width: 700px) {
        margin-top:20px;
        margin-bottom:20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    
`;