import React from 'react'

import styled from 'styled-components';
import Header from '../components/NotFoundDailyUI/Header';
const Container = styled.div`
  width:100vw;
  height:100vh;
  background-color:#E9D8A6;
  padding-left:71.8px;
`;
const Wrapper = styled.div`
  background-color:#BB3E03;
  border-radius: 150px 0 0 150px;
  height:100%;
  padding-top:96.2px;
  padding-left: 85.51px;
`;
const LeftText = styled.h5`
  position: absolute;
  font-family: 'Overlock';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 44px;
  color: #AE2012;
  top:50%;
  transform:translateY(-50%) rotate(-90deg) ;
  left:-132px;
`;
const Strong = styled.strong`
`;
const NotFoundDailyUI = () => {
  return (
    <Container>
      <LeftText>
      <Strong>404 Page</Strong> #DailyUI 008
      </LeftText>
      <Wrapper>
        <Header/>
      </Wrapper>
    </Container>
  )
}

export default NotFoundDailyUI