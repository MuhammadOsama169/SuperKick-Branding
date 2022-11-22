import styled from 'styled-components';

export const StyledSocialIcons = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: 20px;

  li {
    list-style: none;
  }
  a {
    border: 1px solid #fff;
    border-radius: 50%;
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    height: 40px;
    width: 40px;
    text-decoration: none;
    &:hover {
      opacity: 0.9;
      color: #ffcd3d;
    }
  }
`;
