import styled from 'styled-components';
import ImgCover from '../../../assets/images/nick-and-matt-chatting.png';

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  height: 90vh;
  margin: auto;

  @media screen and (max-width: 900px) {
    height: 30vh;
  }
`;

export const TopContainer = styled.div`
  position: absolute;
  padding: 2%;
  display: flex;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 900px) {
    height: 25vh;
    display: flex;
    align-items: flex-start;
  }
`;
export const ImageContainer = styled.div`
  background-image: url(${ImgCover});
  background-size: cover;
  background-position: center bottom 0px;
  width: 100%;
  height: auto;
  background-repeat: no-repeat;
  background-color: #ff005c;

  @media screen and (max-width: 900px) {
    background-size: contain;
    display: flex;
    align-items: flex-end;
  }
  @media screen and (max-width: 650px) {
    background-size: contain;
    display: flex;
    align-items: flex-end;
  }
`;

export const HeaderText = styled.div`
  font-family: 'Bebas Neue', cursive;
  font-style: normal;
  font-weight: 500;
  font-size: 70px;
  line-height: 1.1em;
  color: #ffcd3d;
  text-transform: uppercase;

  @media screen and (max-width: 900px) {
    font-size: 64px;
  }
  @media screen and (max-width: 490px) {
    font-size: 44px;
  }
`;
