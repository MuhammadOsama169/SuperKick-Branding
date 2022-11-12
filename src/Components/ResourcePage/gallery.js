import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";
import { ImageContainer1 } from "../Styles/ResourcePage/Gallery.styled";

const Gallery = () => {
  return (
    <Carousel class="carousel slide control-prev " data-ride="carousel">
      <div>
        <ImageContainer1></ImageContainer1>
      </div>
      <div>

      </div>
      <div>

      </div>
      <div>

      </div>
      <div>

      </div>
      <div>

      </div>
    </Carousel>
  );
};

export default Gallery;