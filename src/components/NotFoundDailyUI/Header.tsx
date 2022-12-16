import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
const Container = styled.header`
  display:flex;
  justify-content:space-between;
  max-width: 1151.19px;
`;
const LogoContainer = styled.div`
  display:flex;
`;
const LogoLetters = styled.h1`
  font-family: 'Overlock';
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 39px;
  color:#E9D8A6;
`;
const LogoUpper = styled(LogoLetters)`
color: #EE9B00;
`;
const Nav = styled.nav`
  display:flex;
  gap:98.34px;
`;
const NavItem = styled(NavLink)`
  text-decoration: none;
  font-family: 'Overlock';
  font-style: normal;
  font-weight: 700;
  font-size: 25.6533px;
  line-height: 31px;
  color: #E9D8A6;
  display:flex;
  align-items:center;
`;
const Header = () => {
  return (
    <Container>
      <LogoContainer>
      <LogoUpper>Y</LogoUpper>
      <LogoLetters>um</LogoLetters>&nbsp;
      <LogoUpper>Y</LogoUpper>
      <LogoLetters>um</LogoLetters>
      </LogoContainer>
      <Nav>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/">Menu</NavItem>
        <NavItem to="/">Reserve</NavItem>
        <NavItem to="/">About Us</NavItem>
        <NavItem to="/">Contact</NavItem>
      </Nav>
    </Container>
  )
}

export default Header