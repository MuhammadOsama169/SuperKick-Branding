import styled from "styled-components";
import img from "../../assets/images/superkick-team 1.png";

export const MainContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    margin-top:150px;
    margin-right:30px;
    margin-left:30px;
    margin-bottom:150px;
    width:auto;
    height:769px;
    border: 5px solid #1F1F1F;
        @media (max-width: 700px) {
            display: flex;
            flex-direction: column ;
        }
`;

export const LeftContainer = styled.div`
    padding-top:34px;
    padding-left:65px;


    @media (max-width: 700px) {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left:10px;
        padding-right:10px;
    }
`;

export const RightContainer = styled.div`
    padding-top:34px;
`;

export const CoverText = styled.div`
    font-family: 'Work Sans', sans-serif;
    font-size: 24px;
    font-style: regular;
    font-weight: 400;
    line-height: 28px;
    color: black;
    padding-left:65px;
    padding-right:65px;
    padding-top:30px;
    @media (max-width: 700px) {
        margin-top: 50px;
        padding: 0px;
    ;

`;
export const MainHeader = styled.div`
    padding-left:65px;
    font-family: 'Work Sans';
    font-style: bold;
    font-weight: 700;
    font-size: 45px;
    line-height: 33px;
    color: #FF005C;
    padding-bottom: 20px;
    text-transform: uppercase; 
    @media (max-width: 700px) {
        margin-top: 50px;
        padding: 0px;}

`;

export const Section = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height:100px;
    font-family: 'Work Sans';
    font-style: bold;
    font-weight: 700;
    font-size: 45px;
    line-height: 33px;
    color: #FFCD3D;
    background-color:black;
    padding: 50px; 
    @media (max-width: 700px) {
        margin-top: 50px;
        padding: 0px;
        font-size: 30px;
        height:100px;}

`;

// export const PinkFrame=styled.div`
//     position: absolute;
//     width: 478px;
//     height: 318px;
//     left: 825px;
//     top: 797px;
//     background: #FF005C;
// `
export const ImageContainer=styled.div`
    position: relative;
    width: 478px;
    height: 318px;
    background-image: url(${img});
`
export const Button = styled.div`
    margin-top:100px;
    width: 474px;
    height: 69px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #00FFA3;
    border-radius: 63px;
    font-family: 'Work Sans', sans-serif;
    font-size: 31px;
    font-style: normal;
    font-weight: 700;
    color: #FF005C;
    text-align: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    &:hover {
        opacity: 0.9;
        transform: scale(0.98);
      }
    
`;