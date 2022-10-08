import styled from "styled-components";


export const MainContainer = styled.div` 
    width: 100vw;
    height: 100vh;
    @media (max-width: 700px) {
        display: flex;
        flex-direction: column ;
        width: 100vw;
        height: 100vh;
    }
    
`;

export const CardRight = styled.div`
    width: 400px;
    height: 400px;
    background-color: black;
    &:hover {
        opacity: 0.9;
        transform: scale(0.98);}
`

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
    font-weight: 200;
    font-size: 24px;
    line-height: 34px;
    color: #F5F5F5;
    padding: 5px; 
    @media (max-width: 700px) {
        margin: auto;
        width: 95%;
        font-size: 19.3px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0px;}
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
    padding: 10px; 
    @media (max-width: 700px) {
        margin: auto;
        width: 100%;
        margin-top: 20px;
        margin-bottom: 20px;
        padding-right: 5px;
        padding-left: 5px;
        padding-top: 0px;
        padding-bottom: 0px;
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
    background:black;
    width:400px;
    height:50px;
    position: absolute;
    margin-top:300px;
    @media (max-width: 700px) {
        margin-top: 300px;
        padding: 0px;}

`;
export const BoxHeader2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 44px;
    text-transform: uppercase;
    color: #FFCD3D;
    background:black;
    width:400px;
    height:50px;
    position: absolute;
    margin-top:300px;
    @media (max-width: 700px) {
        margin-top: 300px;
        padding: 0px;}

`;
export const Button = styled.div`
    margin-top:100px;
    margin-left:600px;
    width: 300px;
    height: 50px;
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
    
`;