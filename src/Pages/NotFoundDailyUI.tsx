import React from 'react'

import styled from 'styled-components';
import Header from '../components/NotFoundDailyUI/Header';
import LeftText from '../components/NotFoundDailyUI/LeftText';
import Main from '../components/NotFoundDailyUI/Main';
import RightIcons from '../components/NotFoundDailyUI/RightIcons';
const Container = styled.div`
  width:100vw;
  overflow:hidden;
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
  background-image:url(${process.env.PUBLIC_URL}/assets/bg.png);
  background-size: 100% 100%;
`;

const NotFoundDailyUI = () => {
  return (
    <Container>
   <LeftText/>
      <Wrapper>
        <Header/>
        <Main/>
      </Wrapper>
      <RightIcons/>
    </Container>
  )
}

export default NotFoundDailyUI