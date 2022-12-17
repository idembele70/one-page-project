import React from 'react'
import styled from 'styled-components';
const Container = styled.h5`
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
const LeftText = () => {
  return (
    <Container>
    <Strong>404 Page</Strong> #DailyUI 008
    </Container>
  )
}

export default LeftText