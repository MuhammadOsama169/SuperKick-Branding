import React from 'react';
import { TopBanner } from './ResourcePage/TopBanner';
import { Section1 } from './ResourcePage/Section1';
import { Section2 } from './ResourcePage/Section2';
import { Banner } from './ResourcePage/Banner';
import { Section3 } from './ResourcePage/Section3';
import { Section4 } from './ResourcePage/Section4';
import { Section5 } from './ResourcePage/Section5';
import { Slider } from './ResourcePage/Slider';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/bundle'; // Following official docs

export const ResourcePage = () => {
  return (
    <>
      <TopBanner />
      <Slider />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Banner />
      <Section3 />
    </>
  );
};
