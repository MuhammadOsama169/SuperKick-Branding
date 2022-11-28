import React from 'react';
import {
  MainContainer,
  Blockquotes,
  LQuotes,
  RQuotes,
  Text,
  UnderText,
} from '../Styles/HomePage/Quotes.styled';

export const Quotes = () => {
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
          <p>Diana Rosa</p>
          <p>Rosa Consulting</p>
        </UnderText>
        <RQuotes>&ldquo;</RQuotes>
      </Blockquotes>
    </MainContainer>
  );
};
