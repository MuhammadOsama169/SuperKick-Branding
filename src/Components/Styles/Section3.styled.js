import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 600px;
    background: #F0F0F0;
    @media (max-width: 700px) {
        display: flex;
        flex-direction: column ;
        width: 100vw;
        height: 100vh;
    }

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
    text-transform: uppercase;
    color: #FF005C;
    padding: 20px; 
    @media (max-width: 700px) {
        margin-top: 50px;
        padding: 0px;

    ;

`;
export const Text = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Work Sans';
    font-style: bold;
    font-weight: 700;
    font-size: 28px;
    line-height: 33px;
    text-transform: uppercase;
    color: #000000;
    padding: 20px; 
    @media (max-width: 700px) {
        margin-top: 50px;
        padding: 0px;
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;}

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
    font-size: 18px;
    color: #FFCD3D;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    &:hover {
        opacity: 0.9;
        transform: scale(0.98);
      }
    
`;