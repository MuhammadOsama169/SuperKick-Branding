import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { InnerContainer, MainContainer } from "../Styles/ResourcePage/Section1.styled";
import Gallery from "./Gallery";

const Slider = () => {
  return (
    <>
    <MainContainer>
        <InnerContainer>
            <Gallery/>
        </InnerContainer>
    </MainContainer>
    </>
  );
};

export default Slider;

