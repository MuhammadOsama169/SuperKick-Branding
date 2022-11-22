import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  max-width: 700px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 3%;
  padding-bottom: 5%;
`;

export const MainHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: 'Work Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 1.3em;
  color: #ff005c;
  padding: 20px 100px 20px 100px;
`;

export const Button = styled(Link)`
  margin-top: 20px;
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
