import React from 'react';
import { Link } from 'react-router-dom';
import CircularIconBtn from 'shared/components/global/circular-icon-btn/CircularIconBtn';
import Logo from 'shared/components/global/logo/Logo';
import Row from 'shared/components/global/row/Row';
import pageIcons from 'shared/utils/pageIcons';
import styled from 'styled-components';
import WideWrapping from 'shared/components/global/wide-wrapping/WideWrapping';

export default function TopBar() {
  return (
    <Container>
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
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  padding: 2rem 8rem ;
  border-bottom: 3px solid ${({theme})=> theme.color.details.gray.light};
`;

const NavLink = styled(Link)`
  font-size: ${({theme})=> theme.fontSize.text_lg};
  font-weight: 600;

`;