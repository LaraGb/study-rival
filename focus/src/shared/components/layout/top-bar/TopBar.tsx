import React from 'react';
import { Link } from 'react-router-dom';
import CircularIconBtn from 'shared/components/global/circular-icon-btn/CircularIconBtn';
import Logo from 'shared/components/global/logo/Logo';
import Row from 'shared/components/global/row/Row';
import pageIcons from 'shared/utils/pageIcons';
import styled from 'styled-components';
import WideWrapping from 'shared/components/global/wide-wrapping/WideWrapping';
import { Box } from '@chakra-ui/react';
import Border from 'shared/components/global/border/Border';

export default function TopBar() {
  return (
    <Border borderWidth='0px 0px 3px 0px' padding='1.8rem 0rem'>
      <WideWrapping>
      <Row justifyContent='space-between' alignItems='center'>
        <Row gap='6rem' alignItems='center'>
          <Logo/>
          <Row gap='3rem'>
           <NavLink to='/'>Dashboard</NavLink>
           <NavLink to='/'>About Us</NavLink>
           <NavLink to='/'>News</NavLink>
           <NavLink to='/'>Follow Us</NavLink>
          </Row>
        </Row>
        <Row gap='2rem'>
           <CircularIconBtn Icon={pageIcons.Bell}/>
           <CircularIconBtn Icon={pageIcons.logOut}/>
        </Row>
      </Row>
      </WideWrapping>
    </Border>
  )
}


const NavLink = styled(Link)`
  font-weight: 600;
  font-size: 1.6rem;

`;