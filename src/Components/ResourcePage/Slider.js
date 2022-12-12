import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';

import Img1 from '../../assets/images/draplin-solo-photo.png';
import Img2 from '../../assets/images/nonprofit_image.png';
import Img3 from '../../assets/images/what-great-brands-do.png';
import Img4 from '../../assets/images/steal-like-an-artist.png';
import Img5 from '../../assets/images/the-future-is-analog.png';
import Img6 from '../../assets/images/marketing_recession.png';
import './slider.css';

export const Slider = () => {
  return (
    <>
      <div className="margin-gap">
        <Swiper
          spaceBetween={30}
          centeredSlides
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={Img1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Img2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Img3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Img4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Img5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Img6} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
