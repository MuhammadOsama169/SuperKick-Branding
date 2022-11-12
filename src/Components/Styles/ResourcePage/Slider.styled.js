import styled from "styled-components";

export const MainContainer = styled.section`
    width:100%;

    @media screen and (max-width: 900px) {
        display: flex;
        flex-direction: column ;
        height:auto;
    }
;
`
export const InnerContainer = styled.div`
    margin:auto;
    max-width:1088px;
    flex-direction: row;
    display: flex;
    justify-content: center;
    align-items: center;

    padding-top:3%;
    padding-bottom:5%;

    @media screen and (max-width: 900px) {
        padding-top:0.1%;
        padding-bottom:0.1%;
        display: flex;
        flex-direction: column ;
        padding-left:0px;
        padding-right:0px;
    }
;
`