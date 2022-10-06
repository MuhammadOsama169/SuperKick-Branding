import styled from "styled-components";

export const MainContainer = styled.div` 
background-color: #FF005C;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 700px) {
        display: flex;
        flex-direction: column ;

`;

export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column ;
    flex: 50%;
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
    flex: 50%;
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
    color: #F5F5F5;

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