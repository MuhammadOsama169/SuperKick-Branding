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
} from '../Styles/ResourcePage/Section4.styled';

function Section4() {
  return (
    <MainContainer>
      <Header>Book Reviews</Header>
      <InnerContainer>
        <CardContainer>
          <Cards>
            <ImageContainer1></ImageContainer1>
            <TextHeading>The Future is Analog by David Sax</TextHeading>
            <Text>
              The Covid-19 pandemic upended many aspects of society, but
              fortunately, technology saved us....
            </Text>
            <LinkText href="https://thebrandoutlaw.com/the-future-is-analog-by-david-sax/">
              Read more
            </LinkText>
          </Cards>
          <Cards>
            <ImageContainer2></ImageContainer2>
            <TextHeading>
              Harness Your Habits: Atomic Habits by James Clear
            </TextHeading>
            <Text>
              Are you having trouble reaching your goals? The problem may be
              that you’re focusing only on goals....
            </Text>
            <LinkText href="https://thebrandoutlaw.com/harness-your-habits-atomic-habits-by-james-clear/">
              Read more
            </LinkText>
          </Cards>
          <Cards>
            <ImageContainer3></ImageContainer3>
            <TextHeading>Steal Like an Artist by Austin Kleon</TextHeading>
            <Text>
              Superkick Book Club Review If fear of being unoriginal has you
              struggling in your creative...
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
export default Section4;
