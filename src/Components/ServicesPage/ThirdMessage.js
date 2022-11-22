import { React, useState } from 'react';
import {
  LeftContainer,
  MainContainer,
  InnerContainer,
  TextContainer,
  RightContainer,
  CoverText,
  MainHeader,
  ImageContainer,
  Button,
} from '../Styles/ServicesPage/ThirdMessage.styled';
import BasicModal from './BasicModal';

function ThirdMessage() {
  const [isShown, setIsShown] = useState(false);
  const handleClick = (event) => {
    setIsShown((current) => !current);
  };
  return (
    <>
      <MainContainer>
        <InnerContainer>
          <LeftContainer>
            <TextContainer>
              <MainHeader>monthly strategy sessions</MainHeader>
              <CoverText>
                Maximize the impact of your brand messaging. One-hour
                video/phone call
              </CoverText>
              <CoverText>
                Review of previous month’s results and strategies for future
                plans
              </CoverText>
              <CoverText>
                Tactical support related to advertising, brand visuals, and
                more.
              </CoverText>
            </TextContainer>
          </LeftContainer>
          <RightContainer>
            <ImageContainer></ImageContainer>
            <Button onClick={handleClick}>
              I’m interested in this service
            </Button>
            {isShown && (
              <div>
                <BasicModal openModal={setIsShown} closeModal={handleClick} />
              </div>
            )}
          </RightContainer>
        </InnerContainer>
      </MainContainer>
    </>
  );
}
export default ThirdMessage;
