import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    height:auto;
`;
export const InnerContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap:10px;
margin:auto;
background: #1F1F1F;
padding:2%;

@media screen and (max-width: 900px) {
    height:auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:10%;
}

`;

export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
 
export const CoverText2 = styled.div`

    font-family: 'Work Sans', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: #F5F5F5;


    @media screen and (max-width: 900px) {

        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
`;
export const CoverText3 = styled.div`

    font-family: 'Work Sans', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: #F5F5F5;

    @media screen and (max-width: 900px) {
        margin-top:20px;
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
`;

export const HeaderText2 = styled.div`
    font-family: 'Work Sans', sans-serif;
    font-style: bold;
    font-weight: 700;
    font-size: 45px;
    line-height: 28px;
    color: #FFCD3D;
    margin-top:25px;

    @media screen and (max-width: 900px) {
        margin-top:20px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
`;
