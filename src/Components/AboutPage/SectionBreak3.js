import React from 'react';
import {
  MainContainer,
  InnerContainer,
  Text,
  Button,
} from '../Styles/AboutPage/SectionBreak3.styled';

export const SectionBreak3 = () => {
  return (
    <MainContainer>
      <InnerContainer>
        <Text>
          Matt tells the story of a focus group that nearly killed a TV
          phenomenon.
        </Text>
        <Button href="https://www.youtube.com/channel/UCmWU3oIyaIBlwjD5HAwqkTw">
          subscribe
        </Button>
      </InnerContainer>
    </MainContainer>
  );
};
