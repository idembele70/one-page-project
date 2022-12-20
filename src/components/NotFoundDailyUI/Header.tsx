import { Icon } from '@iconify/react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { lgDown, mdDown, mdUp, smDown } from '../responsive';
const Container = styled.header`
  display:flex;
  justify-content:space-between;
  flex-wrap:wrap;
  max-width: 1151.19px;
  z-index:3;
  ${lgDown({
   maxWidth:"80%",
    height:52,
  })};
  ${mdDown({
    position:"fixed",
    top:50,
    right:0,
    left:150,
    paddingRight:24
  })}
  ${
    smDown({
      left:90
    })
  }
`;
const LogoContainer = styled.div`
  display:flex;
`;
const LogoLetters = styled.h1`
  font-family: 'Overlock';
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  color:#E9D8A6;
  display:flex;
  align-items:center;
`;
const LogoUpper = styled(LogoLetters)`
  color: #EE9B00;
`;
interface NavProps {
  isOpen:string
}
const NavContainer = styled.div<NavProps>`
  display:flex;
  align-items:center;
  transition: all 350ms ease;
  overflow:hidden;
  ${({isOpen})=> mdDown({
    visibility:isOpen === "true" ? "visible" : "hidden",
    width: 'calc(100% - 24px)',
    backgroundColor:"#AE2012",
    position:"absolute",
    top:62,
    borderTop: "1px solid #E9D8A6",
    height:isOpen === "true" ? 265 : 0,
  })}
`;
const NavWrapper = styled.nav`
  display:flex;
  gap:98.34px;
  ${lgDown({
    gap:30
  })}
  ${mdDown({
    display: "flex",
    flexDirection:"column",
    gap:15,
    padding:24,
  })}
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
  ${lgDown({
    fontSize:16,
  })}
  ${mdDown({
    color:"#EE9B00",
  })}
`;
const IconContainer = styled.button`
  background:transparent;
  border-radius:10px;
  border: 1px solid #EE9B00;
  cursor:pointer;
  transition: 350ms all ;
  &:focus {
    box-shadow:0 0 0 0.25rem #EE9B00;
  }
  &:hover {
    border-color: #E9D8A6;
    & > * {
      color : #EE9B00;
    }
  }
  ${
    mdUp({
      display: "none"
    })
  }
  
  `;
const StyledIcon = styled(Icon)`
transition: 350ms all ;
  font-size:45px;
  color:#E9D8A6;
`;
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => { 
    setIsOpen(!isOpen)
   }
  return (
    <Container>
      <LogoContainer>
      <LogoUpper>Y</LogoUpper>
      <LogoLetters>um</LogoLetters>&nbsp;
      <LogoUpper>Y</LogoUpper>
      <LogoLetters>um</LogoLetters>
      </LogoContainer>
      <NavContainer isOpen={isOpen.toString()}>
      <NavWrapper>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/">Menu</NavItem>
        <NavItem to="/">Reserve</NavItem>
        <NavItem to="/">About Us</NavItem>
        <NavItem to="/">Contact</NavItem>
      </NavWrapper>
      </NavContainer>
      <IconContainer onClick={handleOpen}>
      <StyledIcon icon='radix-icons:hamburger-menu'/>
      </IconContainer>
    </Container>
  )
}

export default Header