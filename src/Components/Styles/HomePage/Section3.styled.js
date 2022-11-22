import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 80vh;
  margin: auto;
  background: #f0f0f0;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 80vh;
  }
`;

export const MainHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Bebas Neue', cursive;
  font-style: normal;
  font-weight: 500;
  font-size: 68px;
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
export const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Work Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 33px;
  text-align: center;
  text-transform: uppercase;
  color: #000000;
  padding: 20px;
  @media (max-width: 700px) {
    padding: 0px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Button = styled(Link)`
  margin-top: 50px;
  width: 350px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #3d6fff;
  border-radius: 63px;
  font-family: 'Work Sans', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  color: #ffcd3d;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  text-decoration: none;
  @media (max-width: 700px) {
    margin-top: 10px;
    padding: 0px;
    font-size: 19px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 40px;
  }
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
