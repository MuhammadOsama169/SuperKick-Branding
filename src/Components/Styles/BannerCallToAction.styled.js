import styled from "styled-components";

export const MainContainer = styled.div` 
    width: 100vw;
    height: 220px;
    background: #1F1F1F;
    display: grid;
    grid-template-row: repeat(2, 1fr);
    margin-bottom:183px;
    @media (max-width: 700px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column ;
        width: auto;
        height: 800px;
        margin-top:1400px;
    }
`;

export const BoxHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    line-height: 64px;
    text-transform: uppercase;
    color: #F5F5F5;
    @media (max-width: 700px) {
        margin-top: 50px;
        padding: 0px;
    }
`;
export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Button = styled.div`
    width: 420px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #3D6FFF;
    border-radius: 63px;
    font-family: 'Work Sans', sans-serif;
    font-size: 29px;
    font-style: normal;
    font-weight: 700;
    color: #FFCD3D;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    &:hover {
        opacity: 0.9;
        transform: scale(0.98);
      }
`;