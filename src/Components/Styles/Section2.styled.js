import styled from "styled-components";


export const MainContainer = styled.div` 
    width: 100vw;
    height: 100vh;


`;

export const CardRight = styled.div`

    width: 400px;
    height: 400px;
    background-color: black;

`;

export const TopContainer = styled.div`
    display: grid;
    grid-template-columns: 400px 400px;
    grid-gap: 100px;
    margin-top:50px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 700px) {
        display: flex;
        flex-direction: column ;}
    
`;

export const BottomContainer = styled.div`
    display: grid;
    grid-template-columns: 400px 400px;
    grid-gap: 100px;
    margin-top:50px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 700px) {
        display: flex;
        flex-direction: column ;}
    
    
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
    padding: 15px; 
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
    font-style: italic;
    font-weight: 700;
    font-size: 29px;
    line-height: 33px;
    color: #FFCD3D;
    padding: 15px; 
    @media (max-width: 700px) {
        margin-top: 50px;
        padding: 0px;

    ;

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
    background:black;
    width:400px;
    height:50px;
    position: absolute;
    margin-top:300px;
    @media (max-width: 700px) {
        margin-top: 50px;
        padding: 0px;

    ;

`;
export const Button = styled.div`
    margin-top:50px;
    margin-left:600px;
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