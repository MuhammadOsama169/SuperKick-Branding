
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay,Pagination, Navigation } from "swiper";

import Img1 from "../../assets/images/Draplin-1-980x513.png";
import Img2 from "../../assets/images/image1-480x270.png";
import Img3 from "../../assets/images/Kleon-1-980x513.png";
import Img4 from "../../assets/images/What_Great_Brands_Do.png";
import Img5 from "../../assets/images/Video_Ads_Hows_and_Whys-980x513.png";
import Img6 from "../../assets/images/Marketing_Recession-1-980x513.png";
import "./slider.css";

export default function Slider() {
    return (
      <>
      <div className="margin-gap">
            <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay,Pagination, Navigation]}
            className="mySwiper"
            >
            <SwiperSlide><img src={Img1} alt=""/></SwiperSlide>
            <SwiperSlide><img src={Img2} alt=""/></SwiperSlide>
            <SwiperSlide><img src={Img3} alt=""/></SwiperSlide>
            <SwiperSlide><img src={Img4} alt=""/></SwiperSlide>
            <SwiperSlide><img src={Img5} alt=""/></SwiperSlide>
            <SwiperSlide><img src={Img6} alt=""/></SwiperSlide>
            </Swiper>
        </div>
      </>
    );
  }