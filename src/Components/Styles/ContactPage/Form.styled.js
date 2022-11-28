import styled from 'styled-components';

export const MainContainer = styled.section`
  width: 100%;

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    height: auto;
  }
`;
export const InnerContainer = styled.div`
  margin: auto;
  padding: 20px;
  max-width: 1098px;

  padding-top: 100px;
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

export const ColumnContainer = styled.div`
  width: 100%;
  border-width: 0;
  border-radius: 0;
  color: #999;
  font-size: 14px;
  padding-top: 20px;

  height: auto;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 50px;
`;
export const RowContainer = styled.div`
  padding-top: 20px;
  width: 100%;
  height: auto;
  border-width: 0;
  border-radius: 0;
  color: #999;
  font-size: 14px;
  display: flex;
`;
