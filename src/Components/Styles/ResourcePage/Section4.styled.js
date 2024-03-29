import styled from 'styled-components';
import Img1 from '../../../assets/images/bran-outlaw-bing.png';
import Img2 from '../../../assets/images/logo-cost.png';
import Img3 from '../../../assets/images/brand-outlaw_atomic-habits.png';

export const MainContainer = styled.section`
  width: 100%;
  margin-top: 50px;
  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    height: auto;
  }
`;
export const InnerContainer = styled.div`
  margin: auto;
  max-width: 1088px;
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 3%;
  padding-bottom: 5%;

  @media screen and (max-width: 900px) {
    padding-top: 0.1%;
    padding-bottom: 0.1%;
    display: flex;
    flex-direction: column;
    padding-left: 0px;
    padding-right: 0px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Bebas Neue', cursive;
  font-style: normal;
  font-weight: 500;
  font-size: 54px;
  line-height: 77px;
  text-transform: uppercase;
  color: #ff005c;
  padding: 20px;
  @media screen and (max-width: 900px) {
    font-weight: 500;
    font-size: 60px;
    padding: 10px;
  }
`;
export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
export const Cards = styled.div`
  border: 1px solid #d8d8d8;
  padding-bottom: 20px;
  &:hover {
    transform: scale(0.98);
    transition: 0.5s;
    box-shadow: 0 10px 20px #ff005c;
  }
`;
export const ImageContainer1 = styled.div`
  background-image: url(${Img1});
  background-size: contain;
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  @media screen and (max-width: 900px) {
    width: 550px;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 600px) {
    width: 350px;
    height: 200px;
  }
`;
export const ImageContainer2 = styled.div`
  background-image: url(${Img2});
  background-size: contain;
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  @media screen and (max-width: 900px) {
    width: 550px;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 600px) {
    width: 350px;
    height: 200px;
  }
`;
export const ImageContainer3 = styled.div`
  background-image: url(${Img3});
  background-size: contain;
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  @media screen and (max-width: 900px) {
    width: 550px;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 600px) {
    width: 350px;
    height: 200px;
  }
`;

export const TextHeading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Work Sans', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.5;
  color: dark-grey;
  padding: 0px 10px 5px 10px;
`;

export const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Work Sans', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #666666;
  padding: 5px 10px 0px 10px;
`;
export const LinkText = styled.a`
  font-family: 'Work Sans', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 15px;
  color: #ff005c;
  padding: 10px 10px 0px 10px;
  cursor: pointer;
  text-decoration: none;
`;
