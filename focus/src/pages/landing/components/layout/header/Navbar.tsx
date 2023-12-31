import React from "react";
import styled from "styled-components";
import WideWrapping from "../../../../../shared/components/global/wide-wrapping/WideWrapping";
import Logo from "../../../../../shared/components/global/logo/Logo";
import Row from "../../../../../shared/components/global/row/Row";
import sectionList from "pages/landing/section-list/sectionList";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <Container>
      <WideWrapping>
        <Row justifyContent="space-between" alignItems="center">
          <Logo />
          <NavList>
            {sectionList.map((route) => (
              <NavLink
                activeClass="active"
                to={route.id}
                spy={true}
                smooth={true}
                offset={-140}
                duration={560}
              >
                {route.label}
              </NavLink>
            ))}
          </NavList>
        </Row>
      </WideWrapping>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  position: fixed;
  z-index: 1000;
  padding: 20px 0px;
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  border: none;
  border-bottom:1px solid hsla(0, 0%, 100%, 0.1);
`;

const NavList = styled.div`
  display: flex;
 

  &>.active::after{
    background-color: ${({theme})=>theme.color.details.primary.base};
    color: ${({ theme }) => theme.color.text.main};
  }
 
`;

const NavLink = styled(Link)`
  position: relative;
  color: ${({theme})=>theme.color.text.main.light};
  font-weight: 400;
  font-size: 14px;
  padding: 1.6rem 1.8rem;
  text-transform: capitalize;
  cursor: pointer;
 

  &::after{
    content: "";
    display: block;
    position: absolute;
    left: 50%;
    bottom:0px;
    transform: translate(-50%,0);
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: transparent;
  }
`;


