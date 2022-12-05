import { React, useState } from 'react';
import {
  LeftContainer,
  InnerContainer,
  MainContainer,
  TextContainer,
  RightContainer,
  CoverText,
  MainHeader,
  ImageContainer,
  Button,
} from '../Styles/ServicesPage/FirstMessage.styled';
import { BasicModal } from './BasicModal';

export const FirstMessage = () => {
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
              <MainHeader>brand diagnostic</MainHeader>
              <CoverText>
                Doctors don’t prescribe treatment without diagnosing symptons.
                Neither do we. Before recommending actions, we thoroughly
                evaluate your brand messaging.
              </CoverText>
              <CoverText>
                Critical review of current written and visual messaging,
                focusing on clarity, brand personality, positioning, and
                differentiation.
              </CoverText>
              <CoverText>
                Competitive analysis measuring how well your brand stands out in
                its market.
              </CoverText>
              <CoverText>
                SWOT analysis, pinpointing your brand’s strengths, weaknesses,
                opportunities, and threats.
              </CoverText>
              <CoverText>
                Road map for success with action recommendations
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
};
