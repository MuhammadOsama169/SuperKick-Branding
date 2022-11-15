import React from 'react'
import {MainContainer, InnerContainer,TextHeading,Text,TextH2,BottomContainer} from '../Styles/ResourcePage/TopBanner.styled' 

function TopBanner() {
  return (
    <>
    <MainContainer>
        <InnerContainer>
            <TextHeading>JOIN THE POSSE:   </TextHeading><Text> Get branding tips and more delivered to your inbox.</Text>
        </InnerContainer>
    </MainContainer>
    <BottomContainer>
        <TextH2>BRAND OUTLAW IS YOUR HUB FOR NO-NONSENSE MARKETING AND BRANDING ADVICE.</TextH2>
    </BottomContainer>

    </>
  )
}

export default TopBanner