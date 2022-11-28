import React from 'react';
import {
  MainContainer,
  InnerContainer,
  Text,
  Button,
} from '../Styles/AboutPage/SectionBreak2.styled';

export const SectionBreak2 = () => {
  return (
    <MainContainer>
      <InnerContainer>
        <Text>
          Nick reminds business owners why accountability starts at the top.
        </Text>
        <Button href="https://www.youtube.com/channel/UCmWU3oIyaIBlwjD5HAwqkTw">
          subscribe
        </Button>
      </InnerContainer>
    </MainContainer>
  );
};
