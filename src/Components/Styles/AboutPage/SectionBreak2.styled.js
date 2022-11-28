import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    height: auto;
  }
`;
export const InnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: auto;
  padding-top: 27px;
  padding-bottom: 27px;
`;

export const MainHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Bebas Neue', cursive;
  font-style: normal;
  font-weight: 500;
  font-size: 55px;
  line-height: 1.1em;
  text-transform: uppercase;
  color: #ff005c;

  @media screen and (max-width: 900px) {
    font-weight: 500;
    font-size: 45px;
    padding: 10px;
  }
`;
export const Text = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Work Sans', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  color: #000000;
  word-wrap: break-word;

  @media (max-width: 700px) {
    padding-left: 10px;
    padding-right: 10px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const Button = styled.a`
  margin-top: 20px;
  width: 250px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #3d6fff;
  border-radius: 63px;
  font-family: 'Work Sans', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  color: #1f1f1f;
  background-color: #ffcd3d;
  text-decoration: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  text-transform: uppercase;

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
