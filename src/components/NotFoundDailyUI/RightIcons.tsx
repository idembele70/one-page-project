import React, { useState } from 'react'
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import { lgDown, lgUp, mdUp, smDown } from '../responsive';
import { Link } from 'react-router-dom';
interface OpenProps {
  //isopen:string;
  $isopen:boolean;
}
const Container = styled.div<OpenProps>`
  position:fixed;
  top:0;
  right:0;
  bottom:0;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(21.3778px);
  padding: 190px 49px;
  ${({$isopen})=> lgDown({
    //transform: `translateX(${isopen === "true" ? 0 : 149}px)`
    transform: `translateX(${$isopen ? 0 : 149}px)`
  })};
  transition: transform 350ms ease-in;
`;
const IconsContainer = styled.div`
  display:flex;
  flex-direction:column;
  height:100%;
  justify-content:center;
  gap:106px;
`;
const IconContainer = styled(Link)`
  
`;
const StyledIcon = styled(Icon)`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  color: #E9D8A6;
  font-size:45px;
  `;
//transform:translateY(-50%) rotate( ${({ isopen }) => isopen === "true" ? 0 : 180}deg);
const FixedIcon = styled(Icon)<OpenProps>`
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
color: #E9D8A6;
  position:absolute;
  left:-50px;
  top:50%;
  transform:translateY(-50%) rotate(${({ $isopen }) => $isopen? 0 : 180}deg);
  font-size:45px;
  cursor:pointer;
  transition: transform 350ms ease-in;
  z-index:2;
  ${lgUp({
    display: 'none'
  })}
`;
const RightIcons = () => {
  //const [isOpen, setIsOpen] = useState("false");
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => { 
   // setIsOpen(isOpen === "true" ? "false" :"true")
    setIsOpen(!isOpen)
   }
  return (
    <Container $isopen={isOpen}>
      <IconsContainer>
        <IconContainer to="/">
        <StyledIcon icon="ion:logo-instagram"/>
        </IconContainer>
        <IconContainer to="/">
        <StyledIcon icon="ph:map-pin-bold"/>
        </IconContainer>
        <IconContainer to="/">
        <StyledIcon icon="eva:twitter-outline"/>
        </IconContainer>
        <IconContainer to="/">
        <StyledIcon icon="ant-design:facebook-outlined"/>
        </IconContainer>
      </IconsContainer>
      <FixedIcon $isopen={
        // isOpen === "true" ? "false" : "true"
        !isOpen
        } onClick={handleOpen} icon="material-symbols:chevron-left"/>
    </Container>
  )
}

export default RightIcons