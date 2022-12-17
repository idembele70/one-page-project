import React from 'react'
import styled from 'styled-components';
import { Icon } from '@iconify/react';
const Container = styled.div`
  position:absolute;
  top:0;
  right:0;
  bottom:0;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(21.3778px);
  padding: 190px 49px;
`;
const IconsContainer = styled.div`
  display:flex;
  flex-direction:column;
  gap:106px;
`;
const StyledIcon = styled(Icon)`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  color: #E9D8A6;
  font-size:45px;
`;
const RightIcons = () => {
  return (
    <Container>
      <IconsContainer>
        <StyledIcon icon="ion:logo-instagram"/>
        <StyledIcon icon="ph:map-pin-bold"/>
        <StyledIcon icon="eva:twitter-outline"/>
        <StyledIcon icon="ant-design:facebook-outlined"/>
      </IconsContainer>
    </Container>
  )
}

export default RightIcons