import styled from "styled-components";
import Img1 from "../../../assets/images/BA_Nonprofit_cover.png";

export const ImageContainer1 = styled.div`
    background-image: url(${Img1});
    background-size:contain;
    width: 300px;
    height: 200px;
    background-repeat: no-repeat;
    
    @media screen and (max-width: 900px) {
        width:450px ;
        height: 300px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }
        @media screen and (max-width: 600px) {
        width:350px ;
        height: 200px;
    }
`;