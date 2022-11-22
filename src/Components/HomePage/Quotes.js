import React from 'react';
import {
  MainContainer,
  Blockquotes,
  LQuotes,
  RQuotes,
  Text,
  UnderText,
} from '../Styles/HomePage/Quotes.styled';

function Quotes() {
  return (
    <MainContainer>
      <Blockquotes>
        <LQuotes>&ldquo;</LQuotes>
        <Text>
          {' '}
          Superkick&apos;s approach to helping me define my brand was unique and
          impactful, and I thoroughly enjoyed working with Nick and Matt.
        </Text>
        <UnderText>
          Diana Rosa <br></br>
          Rosa Consulting
        </UnderText>
        <RQuotes>&ldquo;</RQuotes>
      </Blockquotes>
    </MainContainer>
  );
}
export default Quotes;
