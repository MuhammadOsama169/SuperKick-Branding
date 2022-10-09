import styled from "styled-components";

export const MainContainer = styled.div` 
background-color: #FF005C;
    display: flex;
    height:350px;
    width:100vw:
    @media (max-width: 700px) {
        display: flex;
        flex-direction: column;
        height:600px;
        width:100vw:
    }
`;

export const TopContainer = styled.div`
    display: flex;
    flex-direction: column ;
    align-items: center;
    margin-left:50px;
    @media (max-width: 700px) {
        margin-left:0px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const BottomContainer = styled.div`
    width: 100vw;
    height: 168px;
    background: #1F1F1F;
    display: flex;
    flex-direction: row;
    @media (max-width: 700px) {
        flex-direction: column ;
        height:100vh;
        width:100vw:
    }
    
`;
export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex:50%;
    margin-top:30px;
    @media (max-width: 700px) {
        flex:100%;
        margin-top:0px;
    }
`;
export const RightContainer = styled.div`
    display: flex;
    flex:50%;
    @media (max-width: 700px) {
        flex:100%;
        margin:0px;
    }
`;
 
export const CoverText = styled.div`
    margin-top:19px;
    margin-left:70px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Work Sans', sans-serif;
    font-style: regular;
    font-weight: 200;
    font-size: 28px;
    line-height: 33px;
    color: #F5F5F5;
    @media (max-width: 700px) {
        margin-top:0px;
        margin-left:0px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
`;
export const CoverText2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Work Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #F5F5F5;
    margin-left:120px;
    margin-right:200px;
    @media (max-width: 700px) {
        margin:0px;
        
    }
`;
export const CoverText3 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Work Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #F5F5F5;
    margin-right:250px;
    @media (max-width: 700px) {
        margin:0px;
        padding:0px;
    }
`;

export const HeaderText = styled.div`
    margin-top:77px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Bebas Neue', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 64px;
    color: #FFCD3D;
    text-transform: uppercase;
    @media (max-width: 700px) {
        margin-top:0px;
        margin-left:0px;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
export const HeaderText2 = styled.div`
    display: flex;
    font-family: 'Work Sans', sans-serif;
    font-style: bold;
    font-weight: 700;
    font-size: 45px;
    line-height: 28px;
    color: #FFCD3D;
    margin-left:120px;
    margin-top:20px;
    @media (max-width: 700px) {
        margin:0px;

    }
`;


