import React from 'react';
import {
  MainContainer,
  InnerContainer,
  Header,
  CardContainer,
  Cards,
  ImageContainer1,
  ImageContainer2,
  ImageContainer3,
  TextHeading,
  Text,
  LinkText,
} from '../Styles/ResourcePage/Section2.styled';

export const Section2 = () => {
  return (
    <MainContainer>
      <Header>Marketing</Header>
      <InnerContainer>
        <CardContainer>
          <Cards>
            <ImageContainer1></ImageContainer1>
            <TextHeading>Bing Ads Are a Gold Mine</TextHeading>
            <Text>
              If you&apos;re not advertising on Bing, you&apos;re missing out on
              a vast audience. No, seriously. When...
            </Text>
            <LinkText href="https://thebrandoutlaw.com/bing-ads-are-a-gold-mine/">
              Read more
            </LinkText>
          </Cards>
          <Cards>
            <ImageContainer2></ImageContainer2>
            <TextHeading>Don’t Stop Marketing During a Recession</TextHeading>
            <Text>
              During economic downturns, whether a bear market or even a
              recession, you understandably have to...
            </Text>
            <LinkText href="https://thebrandoutlaw.com/dont-stop-marketing-during-a-recession/">
              Read more
            </LinkText>
          </Cards>
          <Cards>
            <ImageContainer3></ImageContainer3>
            <TextHeading>Video Ads: A Few Hows And Whys</TextHeading>
            <Text>
              According to Social Media Week, 78% of people watch online videos
              every week, and 55% view online...
            </Text>
            <LinkText href="https://thebrandoutlaw.com/video-ads-a-few-hows-and-whys/">
              Read more
            </LinkText>
          </Cards>
        </CardContainer>
      </InnerContainer>
    </MainContainer>
  );
};
