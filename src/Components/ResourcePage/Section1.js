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
} from '../Styles/ResourcePage/Section1.styled';

function Section1() {
  return (
    <MainContainer>
      <Header>Branding</Header>
      <InnerContainer>
        <CardContainer>
          <Cards>
            <ImageContainer1></ImageContainer1>
            <TextHeading>
              How Nonprofits Can Increase Awareness, Gain Followers, and Get
              More Donations
            </TextHeading>
            <Text>
              With so many nonprofits doing impactful work to make the world a
              better place, it can be hard to...
            </Text>
            <LinkText href="https://thebrandoutlaw.com/the-future-is-analog-by-david-sax/">
              Read more
            </LinkText>
          </Cards>
          <Cards>
            <ImageContainer2></ImageContainer2>
            <TextHeading>
              How Nonprofits Can Increase Awareness, Gain Followers, and Get
              More Donations
            </TextHeading>
            <Text>
              With so many nonprofits doing impactful work to make the world a
              better place, it can be hard to...
            </Text>
            <LinkText href="https://thebrandoutlaw.com/harness-your-habits-atomic-habits-by-james-clear/">
              Read more
            </LinkText>
          </Cards>
          <Cards>
            <ImageContainer3></ImageContainer3>
            <TextHeading>
              How Nonprofits Can Increase Awareness, Gain Followers, and Get
              More Donations
            </TextHeading>
            <Text>
              With so many nonprofits doing impactful work to make the world a
              better place, it can be hard to...
            </Text>
            <LinkText href="https://thebrandoutlaw.com/steal-like-an-artist-by-austin-kleon/">
              Read more
            </LinkText>
          </Cards>
        </CardContainer>
      </InnerContainer>
    </MainContainer>
  );
}
export default Section1;
