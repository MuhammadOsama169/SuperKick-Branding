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
} from '../Styles/ResourcePage/Section5.styled';

function Section5() {
  return (
    <MainContainer>
      <Header>Design</Header>
      <InnerContainer>
        <CardContainer>
          <Cards>
            <ImageContainer1></ImageContainer1>
            <TextHeading>Pretty Much Everything by Aaron Draplin</TextHeading>
            <Text>
              Brand Outlaw Book Club Review Aaron Drapliny&apos;s
              larger-than-life yet down-to-earth personality, blue...
            </Text>
            <LinkText href="https://thebrandoutlaw.com/the-future-is-analog-by-david-sax/">
              Read more
            </LinkText>
          </Cards>
          <Cards>
            <ImageContainer2></ImageContainer2>
            <TextHeading>How Much Does a Logo Design Cost?</TextHeading>
            <Text>
              A logo isn&apos;t just an image or an icon for a brand, It&apos;s
              often the first impression a customer has...
            </Text>
            <LinkText href="https://thebrandoutlaw.com/harness-your-habits-atomic-habits-by-james-clear/">
              Read more
            </LinkText>
          </Cards>
          <Cards>
            <ImageContainer3></ImageContainer3>
            <TextHeading>12 Steps to a Great Logo</TextHeading>
            <Text>
              The word ‘logo’ comes from the Greek ‘logos’ meaning word or
              imprint. Today, a logo takes both...
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
export default Section5;
