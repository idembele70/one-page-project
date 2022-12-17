import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
 margin-top:104.75px;
`;
const TitleContainer = styled.div`
  display:flex;
  justify-content:center;
`;
const Four = styled.h1`
  font-family: 'Overlock';
  font-style: normal;
  font-weight: 700;
  font-size: 307.84px;
  height:314px; // refering to design height
  display: flex;
  align-items: center;
  text-align: right;
  color: #E9D8A6;
`;
const ZeroImg = styled.img`
  height:334.5px;
`;
const Paragraph = styled.p`
  font-family: 'Overlock';
  font-style: normal;
  font-weight: 700;
  font-size: 29.9289px;
  line-height: 37px;
  color: #E9D8A6;
  text-align:center;
  margin-bottom:61.87px;
`;
const ButtonContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`;
const Button = styled(Link)`
  text-decoration:none;
  font-family: 'Overlock';
  font-style: normal;
  font-weight: 700;
  font-size: 25.6533px;
  line-height: 31px;
  text-align: center;
  color: #E9D8A6;
  padding: 25.51px 59.13px;
  border: 4.27556px solid #E9D8A6;
  border-radius: 53.4444px;
  transition: all 500ms ease;
  outline:0;
  &:hover {
    background-color:#E9D8A6;
    color: #BB3E03;
  }
`;
const Help = styled.p`
  font-family: 'Overlock';
  font-style: normal;
  font-weight: 700;
  font-size: 19.24px;
  line-height: 23px;
  color: rgba(233, 216, 166, 0.7);
  `;
const HelpLink = styled(Link)`
  font-family: 'Overlock';
  font-style: normal;
  font-weight: 700;
  font-size: 19.24px;
  line-height: 23px;
  text-decoration:none;
  color:#E9D8A6;
`;
const Main = () => {
  return (
    <Container>
      <TitleContainer>
        <Four>4</Four>
        <ZeroImg src={`${process.env.PUBLIC_URL}/assets/image_freepik_com.png`}/>
        <Four>4</Four>
      </TitleContainer>
      <Paragraph>Sorry! We can’t find the page you’re looking for.</Paragraph>
      <ButtonContainer>
      <Button to="/">Back To Home</Button>
      </ButtonContainer>
      <Help>
      Need Help? 
      <HelpLink to="/">&nbsp;
      Click Here
      </HelpLink>
      </Help>
    </Container>
  )
}

export default Main