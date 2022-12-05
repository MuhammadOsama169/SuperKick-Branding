import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainContainer = styled.div`
  width: 100%;
`;
export const InnerContainer = styled.div`
  margin: auto;
  background: #1f1f1f;
  display: grid;
  grid-template-row: repeat(2, 1fr);
  margin-bottom: 183px;
  padding: 50px;

  @media screen and (max-width: 1025px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
  }
`;
export const BoxHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Bebas Neue', cursive;
  font-style: normal;
  font-weight: 500;
  font-size: 64px;
  line-height: 64px;
  text-transform: uppercase;
  color: #f5f5f5;

  @media screen and (max-width: 450px) {
    font-size: 54px;
  }
  @media screen and (max-width: 350px) {
    font-size: 50px;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Button = styled(Link)`
  width: 380px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #3d6fff;
  border-radius: 63px;
  font-family: 'Work Sans', sans-serif;
  font-size: 29px;
  font-style: normal;
  font-weight: 700;
  color: #ffcd3d;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  margin-top: 20px;
  text-decoration: none;

  @media screen and (max-width: 450px) {
    font-size: 20px;
    width: 250px;
    height: 50px;
  }
  @media screen and (max-width: 350px) {
    font-size: 15px;
    width: 200px;
    height: 50px;
  }

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
