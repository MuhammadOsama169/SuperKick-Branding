import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Img1 from '../../../assets/images/Mask-group.png';
import Img2 from '../../../assets/images/Group-4.png';
import Img3 from '../../../assets/images/Group-7.png';

export const MainContainer = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
  }
`;

export const CardRight = styled.div`
  width: 450px;
  height: 450px;
  padding-left: 28px;
  padding-right: 26px;
  padding-top: 20px;
  padding-bottom: 18px;
  background-color: black;
  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 350px;
    padding-left: 15px;
    padding-right: 5px;
  }
`;
export const ImageContainer = styled.div`
  background-image: url(${Img1});
  background-size: contain;
  width: 450px;
  height: 450px;
  @media screen and (max-width: 900px) {
    width: 350px;
    height: 350px;
  }
`;
export const ImageContainer2 = styled.div`
  background-image: url(${Img2});
  background-size: contain;
  width: 450px;
  height: 450px;
  @media screen and (max-width: 900px) {
    width: 350px;
    height: 350px;
  }
`;
export const ImageContainer3 = styled.div`
  background-image: url(${Img3});
  background-size: contain;
  width: 450px;
  height: 450px;
  @media screen and (max-width: 900px) {
    width: 350px;
    height: 350px;
  }
`;
export const TopContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 450px);
  grid-template-rows: repeat(2, 450px);
  grid-gap: 100px;

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-gap: 30px;
    grid-template-columns: repeat(2, 350px);
    grid-template-rows: repeat(2, 350px);
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
export const InnerContainerB = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
export const InnerContainerWS = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
export const InnerContainerMS = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;

export const CoverText = styled.p`
  font-family: 'Work Sans', sans-serif;
  font-size: 24px;
  font-style: regular;
  font-weight: 200;
  line-height: 28.15px;
  color: #f5f5f5;
  padding-top: 5%;
  @media screen and (max-width: 900px) {
    font-size: 20px;
    font-style: regular;
    font-weight: 200;
    line-height: 28.15px;
    padding-top: 0px;
    margin: 0px;
  }
`;
export const MainHeader = styled.p`
  font-family: 'Work Sans';
  font-style: italic;
  font-weight: 700;
  font-size: 29px;
  line-height: 33px;
  color: #ffcd3d;
  @media screen and (max-width: 900px) {
    font-size: 25px;
    font-style: regular;
    font-weight: 600;
    line-height: 28.15px;
    margin: 0px 0px 10px 0px;
  }
`;
export const BoxHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Bebas Neue', cursive;
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 44px;
  text-transform: uppercase;
  color: #ffcd3d;
  background: black;
  width: 450px;
  height: 50px;
  position: absolute;
  margin-top: 300px;
  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    width: 350px;
    height: auto;
    font-size: 34px;
    font-weight: 500;
    margin-top: 250px;
  }
`;
export const BoxHeader2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Bebas Neue', cursive;
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 44px;
  text-transform: uppercase;
  color: #ffcd3d;
  background: black;
  width: 450px;
  height: 50px;
  position: absolute;
  margin-top: 300px;
  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 350px;
    font-size: 32px;
    font-weight: 500;
  }
`;
export const Button = styled.div`
  width: 300px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #3d6fff;
  border-radius: 63px;
  font-family: 'Work Sans', sans-serif;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  color: #ffcd3d;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
export const EndContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;
