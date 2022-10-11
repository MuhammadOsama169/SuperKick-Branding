import styled from "styled-components";

export const MainContainer = styled.div` 
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:400px;
    width: 100%;
    height: 330px;
    background: #1F1F1F;
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

export const LeftContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 700px) {
        display: flex;
        flex-direction: column ;
        width: auto;
        height: auto;
        margin-left:0px;
    }

`;
export const RightContainer = styled.div`
    width: 100vw;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column ;
    @media (max-width: 700px) {
        padding-top:10px;
    }
`;
export const Logo = styled.div`
  display: flex;
  max-width: 450px;
  height: auto;
  margin-left:103px;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column ;
    width: auto;
    height: auto;
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
`;

export const CoverText = styled.div`
    display: flex;
    font-family: 'Work Sans';
    font-weight: 400;
    font-size: 24px;
    line-height: 34px;
    color: #F5F5F5;
    padding-top: 10px;
    margin-right:125px;
    @media (max-width: 700px) {
        margin-top: 50px;
        padding: 0px;
        margin-right: 10px;
        margin-left: 30px;}
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
    @media (max-width: 700px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 400px;
        height: 60px;
    }
    &:hover {
        opacity: 0.9;
        transform: scale(0.98);
      }
    
`;
export const InnerContainer = styled.div`
    margin:auto;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 700px) {
        display: flex;
        flex-direction: column ;
        padding-left:0px;
        padding-right:0px;
    }
`;