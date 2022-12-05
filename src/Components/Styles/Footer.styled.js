import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Img1 from '../../assets/images/Superkick_horiz_04.png';

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  margin: auto;
  background: black;

  @media screen and (max-width: 900px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 5%;
    height: auto;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 700px) {
    max-width: 200px;
    height: auto;
  }
`;

export const ImageContainer = styled.div`
  background-image: url(${Img1});
  background-size: contain;
  width: 300px;
  height: 100px;
  background-repeat: no-repeat;

  @media screen and (max-width: 900px) {
    width: 190px;
    height: 70px;
  }
`;

export const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  &:hover {
    color: #ffcd3d;
  }
  @media screen and (min-width: 900px) {
    display: none;
    padding: 5px;
  }
`;
export const VisibleContainer = styled.div`
  display: flex;
  margin-left: 400px;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;
export const RContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  &:hover {
    color: #ffcd3d;
  }
  @media screen and (max-width: 900px) {
    display: none;
  }
`;
export const LContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  &:hover {
    color:  #FFCD3D;
  }
    color:  #FFCD3D;
  }
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  font-family: 'Bebas Neue', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 29px;
  color: white;
  color: #f5f5f5;
  text-decoration: none;
  padding: 5px;
  @media (max-width: 900px) {
    margin-top: 2px;
  }
  &:hover {
    color: #ffcd3d;
    transform: scale(0.98);
  }
`;
export const Liink = styled(Link)`
  margin-bottom: 20px;
  text-transform: uppercase;
  list-style-type: none;
  padding: 10px;
  &:hover {
    opacity: 0.9;
    color: #ffcd3d;
  }
`;
