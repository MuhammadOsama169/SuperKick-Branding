import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 216px;
    background: #FF005C;
    @media (max-width: 700px) {
        display: flex;
        flex-direction: column ;
        height: auto;
    
    }
`;

export const LeftContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    @media (max-width: 700px) {
        max-width: 200px;
        height: auto;}
`;



export const Logo = styled.div`
  max-width: 300px;
  height: auto;
`;

export const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Work Sans';
    font-style: bold;
    font-weight: 700;
    font-size: 18px;
    padding-left:200px;
    color: #fff;
  ul {
    list-style-type: none;
    padding: 50px;
    
  }

  ul li {
    margin-bottom: 20px;
    text-transform: uppercase;
    
  }

  p {
    text-align: right;
  }

  @media (max-width: 700px) {
    text-align: center;
    font-style: bold;
    font-weight: 500;
    font-size: 18px;
    padding-left:0px;
    ul {
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    p {
      text-align: center;
    }
  }
`