import React from 'react';
import {
  StyledSocialIcons,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
  LinkedinIcon,
  IconWrapperLinkdin,
  IconWrapperTwitter,
  IconWrapperInsta,
  IconWrapperYoutube,
} from './Styles/SocialIcons.styled';

export const SocialIcons = () => {
  return (
    <StyledSocialIcons>
      <IconWrapperInsta href="https://www.instagram.com/brandoutlaw/">
        <InstagramIcon></InstagramIcon>
      </IconWrapperInsta>
      <IconWrapperLinkdin href="https://www.linkedin.com/company/superkickbrand/">
        <LinkedinIcon></LinkedinIcon>
      </IconWrapperLinkdin>
      <IconWrapperTwitter href="https://mobile.twitter.com/SuperkickBrand">
        <TwitterIcon></TwitterIcon>
      </IconWrapperTwitter>
      <IconWrapperYoutube href="https://www.youtube.com/channel/UCmWU3oIyaIBlwjD5HAwqkTw">
        <YoutubeIcon></YoutubeIcon>
      </IconWrapperYoutube>
    </StyledSocialIcons>
  );
};
