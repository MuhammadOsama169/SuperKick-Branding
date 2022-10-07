import styled from "styled-components";

export const MainContainer = styled.div` 
    display: flex;
    margin-top:400px;
    width: 100vw;
    height: 300px;
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
    margin-left:250px;
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
        display: flex;
        flex-direction: column ;
        padding-top:10px;
    }
`;
export const Logo = styled.div`
  display: flex;
  max-width: 300px;
  height: auto;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column ;
    width: auto;
    height: auto;
}
`;


export const BoxHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 29px;
    line-height: 44px;
    text-transform: uppercase;
    color: #FFCD3D;
    @media (max-width: 700px) {
        margin-top: 50px;
        padding: 0px;
    }
`;

export const CoverText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Work Sans';
    font-weight: 400;
    font-size: 24px;
    line-height: 34px;
    color: #F5F5F5;
    padding-top: 10px;
    @media (max-width: 700px) {
        margin-top: 50px;
        padding: 0px;
        margin-right: 10px;
        margin-left: 10px;

    ;

`;

export const Button = styled.div`
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
    &:hover {
        opacity: 0.9;
        transform: scale(0.98);
      }
    
`;