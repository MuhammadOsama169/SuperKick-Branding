import styled from 'styled-components';
import { Instagram } from '@styled-icons/boxicons-logos/Instagram';
import { LinkedinSquare } from '@styled-icons/boxicons-logos/LinkedinSquare';
import { Youtube } from '@styled-icons/boxicons-logos/Youtube';
import { Twitter } from '@styled-icons/boxicons-logos/Twitter';

export const InstagramIcon = styled(Instagram)`
  color: #fff;
  height: 40px;
  width: 40px;
  text-decoration: none;

  &:hover {
    opacity: 0.9;
    color: #ffcd3d;
  }
`;
export const LinkedinIcon = styled(LinkedinSquare)`
  color: #fff;
  height: 40px;
  width: 40px;
  text-decoration: none;

  &:hover {
    opacity: 0.9;
    color: #ffcd3d;
  }
`;
export const YoutubeIcon = styled(Youtube)`
  color: #fff;
  height: 40px;
  width: 40px;
  text-decoration: none;

  &:hover {
    opacity: 0.9;
    color: #ffcd3d;
  }
`;
export const TwitterIcon = styled(Twitter)`
  color: #fff;
  height: 40px;
  width: 40px;
  text-decoration: none;

  &:hover {
    opacity: 0.9;
    color: #ffcd3d;
  }
`;
export const StyledSocialIcons = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

export const IconWrapperYoutube = styled.a`
  text-decoration: none;
  padding: 10px;
`;
export const IconWrapperInsta = styled.a`
  text-decoration: none;
  padding: 10px;
`;
export const IconWrapperTwitter = styled.a`
  text-decoration: none;
  padding: 10px;
`;
export const IconWrapperLinkdin = styled.a`
  text-decoration: none;
  padding: 10px;
`;
