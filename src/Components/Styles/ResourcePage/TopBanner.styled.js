import styled from "styled-components";


export const MainContainer = styled.section`
    width:100%;
    background-color:#3D6FFF;

    @media screen and (max-width: 900px) {
        display: flex;
        flex-direction: column ;
        height:auto;
    }
`;
export const InnerContainer = styled.div`
    margin:auto;
    max-width:1088px;
    flex-direction: row;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 900px) {
        padding-top:0.1%;
        padding-bottom:0.1%;
        display: flex;
        flex-direction: column ;
        padding-left:0px;
        padding-right:0px;
    }
`;


export const TextHeading = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-family: 'Work Sans', sans-serif;
font-style: bold;
font-weight: 700;
font-size: 22px;
line-height: 1.5;
color: #ffcd3d;
text-decoration:uppercase;

@media screen and (max-width: 900px) {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

`

export const Text = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-family: 'Work Sans', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 22px;
line-height: 1.5;
color: #ffffff;
padding-left:10px;

@media screen and (max-width: 900px) {
    font-size: 18px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align:center;
    padding-left:0px;
}
`
export const TextH2 = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-family: 'Work Sans', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 28px;
line-height: 1.2 em;
color: #333;
text-transform: uppercase;
text-align:center;
@media screen and (max-width: 900px) {
    font-size: 20px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align:center;
    padding-left:0px;
}
`
export const BottomContainer = styled.div`
    margin:auto;
    max-width:1088px;
    flex-direction: row;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:50px;

    @media screen and (max-width: 900px) {
        padding-top:0.1%;
        padding-bottom:0.1%;
        display: flex;
        flex-direction: column ;
        padding-left:0px;
        padding-right:0px;
    }
`;