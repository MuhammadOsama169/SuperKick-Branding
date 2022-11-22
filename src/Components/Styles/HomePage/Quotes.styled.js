import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 70%;
  min-height: 315px;
  margin: auto;
  position: relative;
  margin-top: 120px;
  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    padding: 2%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 20px;
  }
  @media screen and (max-width: 500px) {
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    padding: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;
export const Text = styled.span`
  font-family: 'Work Sans', sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #666666;
  @media screen and (max-width: 900px) {
    font-size: 25px;
  }
  @media screen and (max-width: 780px) {
    font-size: 18px;
  }
`;
export const UnderText = styled.span`
  font-family: 'Work Sans', sans-serif;
  font-size: 16px;
  font-style: regular;
  font-weight: 400;
  line-height: 28.15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #666666;
  margin-top: 25px;
`;
export const LQuotes = styled.span`
  font-family: 'Open Sans', sans-serif;
  position: absolute;
  color: rgba(255, 255, 255, 0.5);
  font-size: 5em;
  top: -50px;
  left: -10px;
  color: #ff005c;
  text-shadow: 0 1px rgba(255, 255, 255, 0.5);
  @media screen and (max-width: 1024px) {
    top: 0px;
    left: -10px;
  }
  @media screen and (max-width: 780px) {
    top: 0px;
    left: -10px;
  }
`;
export const RQuotes = styled.span`
  font-family: 'Open Sans', sans-serif;
  position: absolute;
  color: rgba(255, 255, 255, 0.5);
  font-size: 5em;
  bottom: 120px;
  right: 5px;
  color: #ff005c;
  text-shadow: 0 1px rgba(255, 255, 255, 0.5);
  @media screen and (max-width: 1025px) {
    bottom: 50px;
    right: 5px;
  }
`;

export const Blockquotes = styled.blockquote`
  &::after {
    content: ' ';
    position: absolute;
    border: solid transparent;
    border-width: 10px;
    left: 10%;
  }
`;
