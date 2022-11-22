import {
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';
import { StyledSocialIcons } from './Styles/SocialIcons.styled';

function SocialIcons() {
  return (
    <StyledSocialIcons>
      <li>
        <a href="https://mobile.twitter.com/SuperkickBrand">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCmWU3oIyaIBlwjD5HAwqkTw">
          <FaYoutube />
        </a>
      </li>
      <li>
        <a href="https://facebook.com">
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/company/superkickbrand/">
          <FaLinkedin />
        </a>
      </li>
    </StyledSocialIcons>
  );
}
export default SocialIcons;
