import styled from 'styled-components';
import ImgCover from '../../../assets/images/dude-1.png';

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  height: 65vh;
  margin: auto;
  background-color: #ff005c;

  @media screen and (max-width: 800px) {
    height: 85vh;
  }
`;

export const TopContainer = styled.div`
  position: absolute;
  left: 118px;
  top: 177px;
  padding: 2%;

  @media screen and (max-width: 900px) {
    position: relative;
    left: auto;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  @media screen and (max-width: 490px) {
  }
`;
export const ImageContainer = styled.div`
  background-image: url(${ImgCover});
  background-size: auto 100%;
  background-position: right -50px bottom 0px;
  width: 100%;
  height: auto;
  background-repeat: no-repeat;
  background-color: #ff005c;
  @media screen and (max-width: 900px) {
    background-size: auto 80%;
    height: auto;
    display: flex;
    align-items: flex-start;
  }
  @media screen and (max-width: 650px) {
    background-size: auto 50%;
    height: auto;
    display: flex;
    align-items: flex-start;
  }
  @media screen and (max-width: 500px) {
    background-size: auto 50%;
    height: auto;
    display: flex;
    align-items: flex-start;
  }
`;

export const CoverText = styled.div`
  font-family: 'Work Sans', sans-serif;
  font-style: regular;
  font-weight: 200;
  font-size: 28px;
  line-height: 33px;
  color: #f5f5f5;

  @media screen and (max-width: 900px) {
  }
`;
export const HeaderText = styled.div`
  font-family: 'Bebas Neue', cursive;
  font-style: normal;
  font-weight: 700;
  font-size: 70px;
  color: #ffcd3d;
  text-transform: uppercase;

  @media screen and (max-width: 900px) {
  }
`;
