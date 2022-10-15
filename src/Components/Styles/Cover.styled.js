import styled from "styled-components";
import ImgCover from "../../assets/images/team-photo5.png";


export const MainContainer = styled.div` 
    background-color: #FF005C;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row ;
    width:100%;
    height:auto;

    @media screen and (max-width:700px) {
        display: flex;
        flex-direction: column ;
        padding:2%;
    }
    @media screen and (max-width:800px) {
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
        flex-direction: column-reverse;
`;
export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column ;
    align-items: center;
    justify-content: center;
`;

export const RightContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding:2%;
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
export const ImageContainer = styled.div`
    background-image: url(${ImgCover});
    background-size:contain;
    background-repeat: no-repeat;
    
    width: 550px;
    height: 370px;
    @media screen and (max-width: 900px) {
        width:350px ;
        height: 250px;
    }
    @media screen and (max-width: 700px) {
        width:450px ;
        height: 300px;
    }
    @media screen and (max-width: 500px) {
        width:300px ;
        height: 200px;
    }
    
`;