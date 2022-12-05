import styled from 'styled-components';
import img from '../../../assets/images/superkick-team-brainstorming.png';

export const MainContainer = styled.section`
  width: 100%;
  margin-top: 15%;
  margin-bottom: 15%;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 57%,
    rgba(255, 205, 61, 1) 57%,
    rgba(255, 205, 61, 1) 76%,
    rgba(255, 255, 255, 1) 76%
  );
`;
export const InnerContainer = styled.div`
  border: 5px solid #1f1f1f;
  margin: auto;
  max-width: 1088px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  margin-top: 150px;
  margin-bottom: 150px;
  padding: 20px;

  @media screen and (max-width: 1025px) {
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 50px;
    max-width: 660px;
    margin: auto;
  }
  @media screen and (max-width: 785px) {
    max-width: 510px;
  }
  @media screen and (max-width: 610px) {
    max-width: 415px;
  }
  @media screen and (max-width: 500px) {
    max-width: 310px;
  }

  @media screen and (max-width: 400px) {
    max-width: 280px;
  }
`;
export const TextContainer = styled.div`
  margin-left: 10px;
  margin-right: 60px;
  padding: 5px;

  @media screen and (max-width: 1025px) {
    margin-left: 50px;
    margin-right: 50px;
  }
  @media screen and (max-width: 409px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CoverText = styled.div`
  font-family: 'Work Sans', sans-serif;
  font-size: 24px;
  font-style: regular;
  font-weight: 400;
  line-height: 28px;
  color: black;
  padding-top: 5px;
  padding-bottom: 5px;

  @media screen and (max-width: 569px) {
    font-size: 18px;
  }
`;
export const MainHeader = styled.div`
  font-family: 'Bebas Neue', cursive;
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 77px;
  color: #ff005c;
  padding-top: 1%;
  text-transform: uppercase;
  @media screen and (max-width: 1025px) {
    font-size: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 610px) {
    font-size: 50px;
    align-items: flex-start;
  }
  @media screen and (max-width: 506px) {
    font-size: 30px;
    line-height: 50px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 478px;
  height: 318px;
  background-image: url(${img});
  box-shadow: 10px 10px #ff005c;
  background-size: cover;
  @media screen and (max-width: 1020px) {
    width: 350px;
    height: 300px;
  }

  @media screen and (max-width: 600px) {
    width: 300px;
    height: 200px;
  }
  @media screen and (max-width: 409px) {
    width: 200px;
    height: 200px;
  }
`;

export const Button = styled.div`
  margin-top: 15%;
  width: 500px;
  height: 69px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #00ffa3;
  border-radius: 63px;
  font-family: 'Work Sans', sans-serif;
  font-size: 31px;
  font-style: normal;
  font-weight: 700;
  color: #ff005c;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  @media screen and (max-width: 1025px) {
    margin-bottom: 20px;
    font-size: 25px;
    width: 400px;
    height: 50px;
  }
  @media screen and (max-width: 600px) {
    font-size: 20px;
    width: 320px;
    height: 50px;
  }
  @media screen and (max-width: 409px) {
    font-size: 18px;
    width: 250px;
    height: 50px;
  }

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
